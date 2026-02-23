import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const IS_WECHAT_WEBVIEW = typeof navigator !== 'undefined' && /MicroMessenger/i.test(navigator.userAgent);
import { useShakeDetection } from '../hooks/useShakeDetection';
import { mapSignToLuckyDrawResult } from '../utils/signMapper';
import { drawLucky, isOutOfStock, drawResponseToSign } from '../services/drawApi';
import LuckyDrawShake from '../imports/LuckyDrawShake';

const OUT_OF_STOCK_MSG = '今日签已抽完，请明日再来';

/**
 * LuckyDrawShake 页面组件（变体2 - Shake 状态）
 * 
 * @description
 * 抽签摇动中状态页面，包含：
 * - 背景装饰层（同 Default 页，但严格按本页设计稿定位）
 * - 摇动中的签桶和签条（位移动画占位）
 * - "幸运签生成中..." 提示文字
 * - "摇一摇 得好礼" CTA 按钮
 * - 金币和线条装饰元素（摇动状态）
 * - 底部云朵装饰
 * 
 * 动画功能：
 * - 设备摇动检测（陀螺仪/加速度计）
 * - 按钮点击触发摇动动画
 * - 签筒容器摇动动画
 * - 按钮抖动动画（旋转 + 缩放）
 * - 抽签请求：POST /api/draw，动画与签文返回同步
 */
export default function LuckyDrawShakePage() {
  const navigate = useNavigate();
  const [isAnimating, setIsAnimating] = useState(false);
  const [isWeChatLayout, setIsWeChatLayout] = useState(false);

  useEffect(() => {
    if (IS_WECHAT_WEBVIEW) setIsWeChatLayout(true);
  }, []);

  // 摇动触发处理函数：先播动画，再请求后端 /api/draw，根据结果跳转或提示
  const handleShakeTrigger = () => {
    setIsAnimating(true);

    setTimeout(async () => {
      try {
        const data = await drawLucky();

        if (isOutOfStock(data)) {
          alert(OUT_OF_STOCK_MSG);
          setIsAnimating(false);
          return;
        }

        const sign = drawResponseToSign(data);
        const result = mapSignToLuckyDrawResult(sign);
        console.log(`[抽签结果] Sign: ${sign.id} → Result: ${result.title} (${result.level}, id: ${result.id})`);
        navigate(`/result/${result.id}`);
      } catch (err) {
        console.warn('抽签请求失败', err);
        alert('抽签请求失败，请检查网络或稍后重试');
        setIsAnimating(false);
      }
    }, 800);
  };

  // 摇动检测 Hook
  const { isShaking, triggerShake } = useShakeDetection({
    threshold: 15, // 摇动阈值
    onShake: handleShakeTrigger,
    enabled: true, // 启用摇动检测
  });

  // 按钮点击处理（手动触发摇动）
  const handleButtonClick = () => {
    // 手动触发摇动动画
    triggerShake();
    // 同时触发摇动逻辑
    handleShakeTrigger();
  };

  return (
    <div className="w-full min-h-screen flex justify-center" style={{ background: 'linear-gradient(-180deg, #F95279 10%, #F55243 100%)' }}>
      <div
        className="relative w-full max-w-[430px] mx-auto h-screen overflow-hidden"
        data-page="lucky-draw-shake"
      >
        <LuckyDrawShake
          onShakeClick={handleButtonClick}
          isShaking={isShaking || isAnimating}
          isWeChatLayout={isWeChatLayout}
        />
        
        {/* ===== 动画实现说明 ===== */}
        {/* 
          ✅ 已实现功能：
          1. 设备摇动检测（陀螺仪/加速度计）
             - 使用 useShakeDetection Hook
             - 支持 iOS 13+ 权限请求
             - 阈值可配置（默认 15）
          
          2. 按钮点击触发
             - 点击"摇一摇 得好礼"按钮触发动画
             - 按钮抖动动画（button-shake）
             - 签筒摇动动画（bucket-sway）
          
          3. 动画类名（Tailwind）：
             - animate-button-shake: 按钮抖动（0.6秒）
             - animate-bucket-sway: 签筒摇动（0.8秒）
          
          4. 响应式适配：
             - 动画使用 transform，性能优化
             - 适配不同屏幕宽度
          
          迁移说明：
          - Hook 位置：/src/hooks/useShakeDetection.ts
          - 动画配置：tailwind.config.js
          - 组件更新：/src/imports/LuckyDrawShake.tsx
        */}
        {/* ================================== */}
      </div>
    </div>
  );
}