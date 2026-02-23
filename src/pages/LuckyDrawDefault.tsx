// ===== LuckyDraw_Default 页面组件 =====
// 功能：抽签默认状态页面（首页展示）
// 设计基准：375px 移动端
// 迁移目标：Cursor 项目 @/pages/LuckyDrawDefault.tsx
// =========================================

import { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LuckyDrawDefaultComponent from '../imports/LuckyDrawDefault';
import { useShakeDetection } from '../hooks/useShakeDetection';

const IS_WECHAT_WEBVIEW = typeof navigator !== 'undefined' && /MicroMessenger/i.test(navigator.userAgent);
/** 点击/摇动后延迟跳转 Shake 页，保持多感官反馈 */
const NAVIGATE_TO_SHAKE_DELAY_MS = 3000;
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
  const [isWeChatLayout, setIsWeChatLayout] = useState(false);
  const [motionDetected, setMotionDetected] = useState(false);
  const shakeSoundRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (IS_WECHAT_WEBVIEW) setIsWeChatLayout(true);
  }, []);

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
    console.log('CTA TRIGGERED');
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
  }, []);

  useEffect(() => {
    if (!motionDetected) return;
    const t = setTimeout(() => {
      console.log('navigating to shake page');
      navigate('/draw/shake');
    }, NAVIGATE_TO_SHAKE_DELAY_MS);
    return () => clearTimeout(t);
  }, [motionDetected, navigate]);

  useShakeDetection({
    threshold: 15,
    onShake: goToShake,
    enabled: true,
  });

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