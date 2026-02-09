import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useShakeDetection } from '../hooks/useShakeDetection';
import { useSignPool } from '../hooks/useSignPool';
import { mapSignToLuckyDrawResult } from '../utils/signMapper';
import LuckyDrawShake from '../imports/LuckyDrawShake';

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
 */
export default function LuckyDrawShakePage() {
  const navigate = useNavigate();
  const [isAnimating, setIsAnimating] = useState(false);
  
  // 抽签池管理
  const { drawSign, isInitialized } = useSignPool();

  // 摇动触发处理函数
  const handleShakeTrigger = () => {
    // 检查池是否已初始化
    if (!isInitialized) {
      console.warn('Sign pool not initialized yet');
      return;
    }
    
    // 设置动画状态
    setIsAnimating(true);
    
    // 动画完成后跳转（等待动画播放完成）
    setTimeout(() => {
      // 从抽签池中抽取一个签
      const sign = drawSign();
      
      if (!sign) {
        console.warn('No sign available in pool');
        // 如果池为空，可以显示提示或重置池
        return;
      }
      
      // 将 Sign 映射到 LuckyDrawResult
      const result = mapSignToLuckyDrawResult(sign);
      
      console.log(`[抽签结果] Sign: ${sign.id} → Result: ${result.title} (${result.level}, id: ${result.id})`);
      
      // 跳转到结果页面，传递签文 ID
      navigate(`/result/${result.id}`);
    }, 800); // 等待签筒摇动动画完成（0.8秒）
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
    // 全屏居中容器 - 确保在各种设备上正确显示
    <div className="w-full min-h-screen flex justify-center bg-[#9f1518]">
      {/* ===== 响应式移动端容器 ===== */}
      {/* 
        - w-full: 宽度自适应
        - max-w-[430px]: 最大宽度限制（iPhone 16 Pro Max）
        - mx-auto: 水平居中
        - h-screen: 全屏高度
        - overflow-hidden: 防止内容溢出
        - relative: 为内部绝对定位元素提供定位上下文
      */}
      <div 
        className="relative w-full max-w-[430px] mx-auto h-screen overflow-hidden"
        data-page="lucky-draw-shake"
      >
        {/* Figma 生成的 LuckyDrawShake 组件 - 传递事件处理函数和动画状态 */}
        <LuckyDrawShake 
          onShakeClick={handleButtonClick}
          isShaking={isShaking || isAnimating}
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