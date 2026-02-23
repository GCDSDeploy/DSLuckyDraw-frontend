// ===== 摇动检测 Hook =====
// 功能：检测设备摇动事件（陀螺仪/加速度计）
// 用途：LuckyDrawShake 页面触发摇动动画
// 迁移：可直接迁移到 Cursor 项目
// =================================================

import { useEffect, useRef, useState } from 'react';

interface UseShakeDetectionOptions {
  /** 摇动阈值（默认 15，值越大需要摇动越剧烈） */
  threshold?: number;
  /** 摇动触发回调函数 */
  onShake?: () => void;
  /** 是否启用摇动检测（默认 true） */
  enabled?: boolean;
}

/**
 * 摇动检测 Hook
 * 
 * 功能：
 * - 监听设备加速度变化（DeviceMotionEvent）
 * - 当检测到摇动时触发回调
 * - 支持启用/禁用检测
 * 
 * @example
 * ```tsx
 * const { isShaking, triggerShake } = useShakeDetection({
 *   threshold: 15,
 *   onShake: () => {
 *     console.log('设备摇动了！');
 *   },
 *   enabled: true,
 * });
 * 
 * // 手动触发摇动（用于按钮点击）
 * triggerShake();
 * ```
 */
export function useShakeDetection({
  threshold = 15,
  onShake,
  enabled = true,
}: UseShakeDetectionOptions = {}) {
  const [isShaking, setIsShaking] = useState(false);
  const lastShakeTime = useRef<number>(0);
  const lastAcceleration = useRef<{ x: number; y: number; z: number } | null>(null);

  // 手动触发摇动（用于按钮点击）
  const triggerShake = () => {
    if (onShake) {
      setIsShaking(true);
      onShake();
      // 0.6 秒后重置状态（与按钮动画时长一致）
      setTimeout(() => {
        setIsShaking(false);
      }, 600);
    }
  };

  useEffect(() => {
    if (!enabled || !onShake) {
      return;
    }

    // 检查浏览器是否支持 DeviceMotionEvent
    if (typeof window === 'undefined' || !window.DeviceMotionEvent) {
      console.warn('[useShakeDetection] DeviceMotionEvent 不支持，将仅支持手动触发');
      return;
    }

    // 请求权限（iOS 13+ 需要；且必须在用户手势内调用，否则无效）
    if (typeof (DeviceMotionEvent as any).requestPermission === 'function') {
      console.log('[useShakeDetection] iOS: calling DeviceMotionEvent.requestPermission()');
      (DeviceMotionEvent as any)
        .requestPermission()
        .then((permission: string) => {
          console.log('[useShakeDetection] iOS permission result:', permission);
          if (permission === 'granted') {
            console.log('[useShakeDetection] iOS permission granted, setting up motion listener');
            setupMotionListener();
          } else {
            console.warn('[useShakeDetection] 设备运动权限被拒绝');
          }
        })
        .catch((error: Error) => {
          console.error('[useShakeDetection] 请求设备运动权限失败:', error);
        });
    } else {
      console.log('[useShakeDetection] No requestPermission (non-iOS), setting up listener directly');
      setupMotionListener();
    }

    function setupMotionListener() {
      const handleMotion = (event: DeviceMotionEvent) => {
        const acceleration = event.accelerationIncludingGravity;
        
        if (!acceleration) {
          return;
        }

        const { x, y, z } = acceleration;
        const now = Date.now();

        // 防止过于频繁触发（至少间隔 500ms）
        if (now - lastShakeTime.current < 500) {
          return;
        }

        if (lastAcceleration.current) {
          // 计算加速度变化
          const deltaX = Math.abs(x - lastAcceleration.current.x);
          const deltaY = Math.abs(y - lastAcceleration.current.y);
          const deltaZ = Math.abs(z - lastAcceleration.current.z);
          const totalDelta = deltaX + deltaY + deltaZ;

          // 如果加速度变化超过阈值，触发摇动
          if (totalDelta > threshold) {
            console.log('MOTION DETECTED');
            lastShakeTime.current = now;
            setIsShaking(true);
            onShake();
            // 0.6 秒后重置状态
            setTimeout(() => {
              setIsShaking(false);
            }, 600);
          }
        }

        lastAcceleration.current = { x: x || 0, y: y || 0, z: z || 0 };
      };

      window.addEventListener('devicemotion', handleMotion);

      return () => {
        window.removeEventListener('devicemotion', handleMotion);
      };
    }

    // 清理函数
    return () => {
      // setupMotionListener 返回的清理函数会在组件卸载时执行
    };
  }, [enabled, onShake, threshold]);

  return {
    /** 当前是否正在摇动 */
    isShaking,
    /** 手动触发摇动（用于按钮点击） */
    triggerShake,
  };
}

