// ===== 天空撒币微交互 =====
// 抽签成功/结果页进入时，硬币自顶部散落，节制、有仪式感
// 与 LuckyDraw_Coins 氛围一致，不遮挡 CTA/签文
// =========================================

import { useMemo } from "react";

const COIN_COUNT = 6;
const COIN_SIZE_PX = 28;
/** 随机范围 [min, min + range] */
function rand(min: number, range: number) {
  return min + Math.random() * range;
}

/** 单枚硬币的动画参数（首帧随机，之后稳定） */
function useCoinConfigs() {
  return useMemo(() => {
    return Array.from({ length: COIN_COUNT }, () => ({
      leftPct: rand(6, 88),
      delayS: rand(0.15, 0.7),
      durationS: rand(0.85, 0.55),
    }));
  }, []);
}

/** 金币小圆（与 LuckyDraw 金币色一致） */
function GoldCoinSvg({ size = COIN_SIZE_PX }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className="drop-shadow-md">
      <circle cx="16" cy="16" r="14" fill="#FFBE00" stroke="#F68B00" strokeWidth="1.5" />
      <circle cx="16" cy="16" r="10" fill="#F68B00" opacity="0.6" />
    </svg>
  );
}

/**
 * 天空撒币：5~10 枚硬币自顶部下落，随机 x、延迟与时长，轻微旋转与落地淡出。
 * 在结果页挂载时播放一次即可。
 */
export default function SkyCoinsRain() {
  const configs = useCoinConfigs();

  return (
    <div
      className="pointer-events-none absolute inset-0 z-20"
      aria-hidden
      data-name="SkyCoinsRain"
    >
      {configs.map((cfg, i) => (
        <div
          key={i}
          className="absolute will-change-transform"
          style={{
            left: `${cfg.leftPct}%`,
            top: "-70px",
            width: COIN_SIZE_PX,
            height: COIN_SIZE_PX,
            animation: `skyCoinFall ${cfg.durationS}s ease-in-out ${cfg.delayS}s forwards`,
          }}
        >
          <GoldCoinSvg />
        </div>
      ))}
    </div>
  );
}
