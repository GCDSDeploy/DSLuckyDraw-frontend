// ===== LuckyDraw_Default 页面组件 =====
// 功能：抽签默认状态页面（首页展示）
// 设计基准：375px 移动端
// 迁移目标：Cursor 项目 @/pages/LuckyDrawDefault.tsx
// =========================================

import { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import LuckyDrawDefaultComponent from '../imports/LuckyDrawDefault';
import { useShakeDetection } from '../hooks/useShakeDetection';
import { drawLucky } from '../services/drawApi';
import { getLuckyDrawResultByTier } from '../data/tierSignMapping';
import { getLuckyDrawResultById } from '../data/luckyDrawResults';
import { getOrCreateGuestId } from '../utils/guestId';

const IS_WECHAT_WEBVIEW = typeof navigator !== 'undefined' && /MicroMessenger/i.test(navigator.userAgent);
/** 点击/摇动触发后，延迟多久跳转 Shake 页（加快到 0.5 秒） */
const NAVIGATE_TO_SHAKE_DELAY_MS = 500;
/** 本地模拟摇一摇：URL 带 ?simulateMotion=1 时在 dev 下仅设 motionDetected，用于验证动画与 CTA 状态（不触发音效/震动） */
const SIMULATE_MOTION_DELAY_MS = 500;

/** 摇一摇音效路径（可放置 public/shake.mp3 或同源 URL） */
const SHAKE_SOUND_URL = '/shake.mp3';

// ===== 迁移提示 =====
// 本文件直接使用 Figma 导出组件
// Cursor 迁移时需要：
// 1. 将所有 SVG 内联代码提取到独立 .svg 文件
// 2. 更新所有资源路径为 @ 别名
// 3. 检查字体文件引用路径
// ====================

export default function LuckyDrawDefault() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [isWeChatLayout, setIsWeChatLayout] = useState(false);
  const [motionDetected, setMotionDetected] = useState(false);
  const shakeSoundRef = useRef<HTMLAudioElement | null>(null);
  const resultIdRef = useRef<number | null>(null);
  const pendingNavigateToShakeRef = useRef(false);

  useEffect(() => {
    if (IS_WECHAT_WEBVIEW) setIsWeChatLayout(true);
  }, []);

  // 本地模拟摇一摇：仅 dev + ?simulateMotion=1 时设 motionDetected，用于验证签筒 wobble、CTA 状态、祥云（不触发音效/震动）
  useEffect(() => {
    if (typeof import.meta.env?.DEV !== 'boolean' || !import.meta.env.DEV) return;
    if (searchParams.get('simulateMotion') !== '1') return;
    const t = setTimeout(() => {
      setMotionDetected(true);
      if (typeof console !== 'undefined' && console.log) {
        console.log('[LuckyDrawDefault] simulateMotion=1: motionDetected set true（验证签筒 wobble、CTA、祥云）');
      }
    }, SIMULATE_MOTION_DELAY_MS);
    return () => clearTimeout(t);
  }, [searchParams]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    console.log('userAgent:', navigator.userAgent);
    const audio = new Audio(SHAKE_SOUND_URL);
    shakeSoundRef.current = audio;
    console.log('shakeSoundRef:', shakeSoundRef.current?.src);
    return () => {
      shakeSoundRef.current = null;
    };
  }, []);

  const goToShake = useCallback(() => {
    // 在用户手势内同步调用 requestPermission（iOS 要求），再在 then 里注册监听
    if (typeof window !== 'undefined' && window.DeviceMotionEvent) {
      const isSecure = typeof window.isSecureContext === 'boolean' && window.isSecureContext;
      if (!isSecure && typeof console !== 'undefined' && console.warn) {
        console.warn(
          '[LuckyDrawDefault] Motion Detection: 当前为非安全上下文（如 http://192.168.x.x）。iOS 要求 HTTPS 或 localhost 才会触发陀螺仪，摇一摇可能无法生效，请用 HTTPS 或本地 localhost 测试。'
        );
      }
      const DM = window.DeviceMotionEvent as unknown as { requestPermission?: () => Promise<string> };
      if (typeof DM.requestPermission === 'function') {
        DM.requestPermission()
          .then((permission: string) => {
            if (permission === 'granted') {
              addMotionListenerOnlyRef.current?.();
              if (typeof console !== 'undefined' && console.log) console.log('[LuckyDrawDefault] iOS motion permission granted');
            } else if (typeof console !== 'undefined' && console.warn) {
              console.warn('[LuckyDrawDefault] iOS motion permission:', permission, '— 若为 denied，请确认页面为 HTTPS 或 localhost');
            }
          })
          .catch(() => {});
      } else {
        addMotionListenerOnlyRef.current?.();
      }
    }
    if (typeof console !== 'undefined' && console.log) console.log('[LuckyDrawDefault] CTA TRIGGERED, motionDetected -> true');
    setMotionDetected(true);

    console.log('vibrate supported:', typeof navigator !== 'undefined' && 'vibrate' in navigator);
    try {
      if (typeof navigator !== 'undefined' && navigator.vibrate) {
        navigator.vibrate([100, 50, 100]);
      }
    } catch (e) {
      console.log('vibrate error', e);
    }

    try {
      const audio = shakeSoundRef.current;
      if (audio) {
        audio.currentTime = 0;
        audio.play().then(() => console.log('sound played')).catch((e) => console.log('sound error', e));
      } else {
        console.log('sound error: no audio ref');
      }
    } catch (e) {
      console.log('sound error', e);
    }

    // 触发后 0.5s 跳 Shake；若 API 已返回则带 resultId，否则等 API 返回后再跳
    resultIdRef.current = null;
    pendingNavigateToShakeRef.current = false;
    const delayTimer = setTimeout(() => {
      if (resultIdRef.current != null) {
        navigate('/draw/shake', { state: { resultId: resultIdRef.current } });
      } else {
        pendingNavigateToShakeRef.current = true;
      }
    }, NAVIGATE_TO_SHAKE_DELAY_MS);

    const guestId = getOrCreateGuestId();
    // 每次手势只请求一次：首抽 20% 中签 / 80% 未中签；未中签时由结果页「再试试手气」触发第二轮（100% 中签）
    drawLucky(guestId)
      .then((data) => {
        const result =
          data.won && data.tier
            ? getLuckyDrawResultByTier(data.tier)
            : getLuckyDrawResultById(11);
        const final = result ?? getLuckyDrawResultById(11)!;
        resultIdRef.current = final.id;
        console.log(`[抽签结果] won=${data.won} tier=${data.tier} drawRound=${data.drawRound} → Result id=${final.id} ${final.title}`);
        if (pendingNavigateToShakeRef.current) {
          navigate('/draw/shake', { state: { resultId: final.id } });
        }
      })
      .catch((err) => {
        clearTimeout(delayTimer);
        const message = err instanceof Error ? err.message : '抽签请求失败，请检查网络或稍后重试';
        console.warn('抽签请求失败', err);
        alert(message);
      });
  }, [navigate]);

  useEffect(() => {
    if (!motionDetected) return;
    // 仅模拟模式：不调接口，0.5s 后带 simulateMotion 跳 Shake
    if (searchParams.get('simulateMotion') === '1') {
      const t = setTimeout(() => {
        console.log('navigating to shake page (simulate)');
        navigate('/draw/shake?simulateMotion=1');
      }, NAVIGATE_TO_SHAKE_DELAY_MS);
      return () => clearTimeout(t);
    }
    // 正常流程：由 goToShake 内 0.5s 定时器 + API 结果跳 Shake，此处不重复跳转
  }, [motionDetected, navigate, searchParams]);

  useEffect(() => {
    if (typeof console !== 'undefined' && console.log && motionDetected) {
      console.log('[LuckyDrawDefault] motionDetected =', motionDetected);
    }
  }, [motionDetected]);

  const shakeDetection = useShakeDetection({
    threshold: 18,
    onShake: goToShake,
    enabled: true,
    requestPermissionOnFirstGesture: true,
  });
  const addMotionListenerOnlyRef = useRef<(() => void) | undefined>(undefined);
  addMotionListenerOnlyRef.current = shakeDetection.addMotionListenerOnly;

  return (
    <div className="w-full min-h-screen flex justify-center" style={{ background: 'linear-gradient(-180deg, #F95279 10%, #F55243 100%)' }}>
      <div
        className="relative w-full max-w-[430px] mx-auto overflow-hidden min-h-dvh min-h-screen"
        data-page="lucky-draw-default"
      >
        <LuckyDrawDefaultComponent onShakeClick={goToShake} isWeChatLayout={isWeChatLayout} motionDetected={motionDetected} />
        
        {/* ===== TODO(cursor-migration) ===== */}
        {/* 
          事件绑定已完成：
          1. "摇一摇" 按钮（ShakeCta2 组件）
             - data-action="shake-to-draw"
             - onClick={handleShake} ✅
          
          迁移时需要：
          1. 确认事件处理逻辑正确
          2. 实现跳转到 LuckyDrawShake 页面
        */}
        {/* ================================== */}
      </div>
    </div>
  );
}