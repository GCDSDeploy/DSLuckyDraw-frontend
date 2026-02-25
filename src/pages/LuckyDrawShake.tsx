import { useEffect, useState } from 'react';
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom';

const IS_WECHAT_WEBVIEW = typeof navigator !== 'undefined' && /MicroMessenger/i.test(navigator.userAgent);
/** Shake 过渡页动画停留时间，然后自动跳转 Result */
const SHAKE_TRANSITION_MS = 3000;

import LuckyDrawShake from '../imports/LuckyDrawShake';

/**
 * LuckyDrawShake 页面组件（过渡页）
 *
 * - Default 页已调用抽签接口并携带 state.resultId 跳转至此。
 * - 本页仅做动画过渡：签筒/祥云动画停留 3 秒后自动跳转 /result/:resultId。
 * - CTA 禁用，不触发任何请求或跳转。
 * - 模拟模式：?simulateMotion=1 时无 resultId，3 秒后跳 /result/1。
 */
export default function LuckyDrawShakePage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const [isAnimating, setIsAnimating] = useState(true);
  const [isWeChatLayout, setIsWeChatLayout] = useState(false);

  const isSimulateMode =
    typeof import.meta.env?.DEV === 'boolean' &&
    import.meta.env.DEV &&
    searchParams.get('simulateMotion') === '1';

  const resultId = location.state && typeof (location.state as { resultId?: number }).resultId === 'number'
    ? (location.state as { resultId: number }).resultId
    : null;

  useEffect(() => {
    if (IS_WECHAT_WEBVIEW) setIsWeChatLayout(true);
  }, []);

  // 无 resultId 且非模拟模式：非法直链，回 Default
  useEffect(() => {
    if (isSimulateMode || resultId != null) return;
    navigate('/draw', { replace: true });
  }, [isSimulateMode, resultId, navigate]);

  // 过渡动画 3 秒后自动跳转 Result（不调接口）
  useEffect(() => {
    if (isSimulateMode) {
      if (typeof console !== 'undefined' && console.log) {
        console.log('[LuckyDrawShake] simulateMotion=1: 3s 后跳转 /result/1');
      }
      const t = setTimeout(() => navigate('/result/1'), SHAKE_TRANSITION_MS);
      return () => clearTimeout(t);
    }
    if (resultId == null) return;
    const t = setTimeout(() => {
      navigate(`/result/${resultId}`, { replace: true });
    }, SHAKE_TRANSITION_MS);
    return () => clearTimeout(t);
  }, [isSimulateMode, resultId, navigate]);

  return (
    <div className="w-full min-h-screen flex justify-center" style={{ background: 'linear-gradient(-180deg, #F95279 10%, #F55243 100%)' }}>
      <div
        className="relative w-full max-w-[430px] mx-auto h-screen overflow-hidden"
        data-page="lucky-draw-shake"
      >
        <LuckyDrawShake
          onShakeClick={() => {}}
          isShaking={isAnimating}
          isWeChatLayout={isWeChatLayout}
          ctaDisabled
        />
      </div>
    </div>
  );
}