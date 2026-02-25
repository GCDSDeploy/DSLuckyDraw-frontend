// ===== 摇动检测 Hook =====
// 功能：检测设备摇动事件（陀螺仪/加速度计）
// 用途：LuckyDrawDefault/Shake 页面触发摇动与跳转
// 注意：iOS 要求「安全上下文」才会触发 DeviceMotionEvent：
//       - 支持：HTTPS、http://localhost、http://127.0.0.1
//       - 不支持：http://192.168.x.x（Wi‑Fi 局域网 IP）等非安全上下文，权限会静默拒绝
// =================================================

import { useEffect, useRef, useState } from 'react';

interface UseShakeDetectionOptions {
  /** 摇动阈值（默认 18，值越大需摇动越剧烈，可减少误触） */
  threshold?: number;
  /** 摇动触发回调函数 */
  onShake?: () => void;
  /** 是否启用摇动检测（默认 true） */
  enabled?: boolean;
  /** 为 true 时不在 mount 时自动请求权限/开监听，需在用户手势内调用返回的 startMotionListener（iOS 13+ 必须） */
  requestPermissionOnFirstGesture?: boolean;
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
  threshold = 18,
  onShake,
  enabled = true,
  requestPermissionOnFirstGesture = false,
}: UseShakeDetectionOptions = {}) {
  const [isShaking, setIsShaking] = useState(false);
  const lastShakeTime = useRef<number>(0);
  const lastAcceleration = useRef<{ x: number; y: number; z: number } | null>(null);
  const cleanupMotionRef = useRef<(() => void) | null>(null);
  const listenerStartedRef = useRef(false);

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

  function setupMotionListener() {
    if (typeof window === 'undefined' || !onShake) return () => {};
    const handleMotion = (event: DeviceMotionEvent) => {
      const acceleration = event.accelerationIncludingGravity;
      if (!acceleration) return;
      const { x, y, z } = acceleration;
      const now = Date.now();
      if (now - lastShakeTime.current < 500) return;
      if (lastAcceleration.current) {
        const deltaX = Math.abs((x ?? 0) - lastAcceleration.current.x);
        const deltaY = Math.abs((y ?? 0) - lastAcceleration.current.y);
        const deltaZ = Math.abs((z ?? 0) - lastAcceleration.current.z);
        const totalDelta = deltaX + deltaY + deltaZ;
        if (totalDelta > threshold) {
          lastShakeTime.current = now;
          setIsShaking(true);
          onShake();
          if (typeof console !== 'undefined' && console.log) {
            console.log('[useShakeDetection] motion detected, totalDelta:', totalDelta, 'threshold:', threshold);
          }
          setTimeout(() => setIsShaking(false), 600);
        }
      }
      lastAcceleration.current = { x: x ?? 0, y: y ?? 0, z: z ?? 0 };
    };
    try {
      window.addEventListener('devicemotion', handleMotion);
      return () => {
        window.removeEventListener('devicemotion', handleMotion);
      };
    } catch {
      return () => {};
    }
  }

  /** 仅注册 devicemotion 监听，不请求权限（用于在页面内已同步调用 requestPermission 后） */
  const addMotionListenerOnly = () => {
    if (listenerStartedRef.current || !enabled || !onShake) return;
    if (typeof window === 'undefined' || !window.DeviceMotionEvent) return;
    try {
      listenerStartedRef.current = true;
      cleanupMotionRef.current = setupMotionListener();
    } catch {
      listenerStartedRef.current = false;
    }
  };

  /** 在用户手势内调用（如点击 CTA 时），用于请求 iOS 权限并启动陀螺仪监听 */
  const startMotionListener = () => {
    if (listenerStartedRef.current || !enabled || !onShake) return;
    if (typeof window === 'undefined' || !window.DeviceMotionEvent) return;
    try {
      if (typeof (DeviceMotionEvent as unknown as { requestPermission?: () => Promise<string> }).requestPermission === 'function') {
        (DeviceMotionEvent as unknown as { requestPermission: () => Promise<string> })
          .requestPermission()
          .then((permission: string) => {
            if (permission === 'granted') {
              listenerStartedRef.current = true;
              cleanupMotionRef.current = setupMotionListener();
            }
          })
          .catch(() => {});
      } else {
        listenerStartedRef.current = true;
        cleanupMotionRef.current = setupMotionListener();
      }
    } catch {
      // 非支持环境不报错
    }
  };

  useEffect(() => {
    if (requestPermissionOnFirstGesture || !enabled || !onShake) return;
    if (typeof window === 'undefined' || !window.DeviceMotionEvent) {
      return;
    }
    try {
      if (typeof (DeviceMotionEvent as unknown as { requestPermission?: () => Promise<string> }).requestPermission === 'function') {
        (DeviceMotionEvent as unknown as { requestPermission: () => Promise<string> })
          .requestPermission()
          .then((permission: string) => {
            if (permission === 'granted') {
              cleanupMotionRef.current = setupMotionListener();
            }
          })
          .catch(() => {});
      } else {
        cleanupMotionRef.current = setupMotionListener();
      }
    } catch {
      // 非支持环境不报错
    }
    return () => {
      cleanupMotionRef.current?.();
      cleanupMotionRef.current = null;
    };
  }, [enabled, onShake, threshold, requestPermissionOnFirstGesture]);

  useEffect(() => {
    return () => {
      cleanupMotionRef.current?.();
      cleanupMotionRef.current = null;
    };
  }, []);

  return {
    isShaking,
    triggerShake,
    startMotionListener: requestPermissionOnFirstGesture ? startMotionListener : undefined,
    addMotionListenerOnly: requestPermissionOnFirstGesture ? addMotionListenerOnly : undefined,
  };
}

