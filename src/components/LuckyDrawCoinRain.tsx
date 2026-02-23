// ===== LuckyDraw_Coin 循环下落动画 =====
// Spec: 初始 y -80px、随机 x 0~100%、opacity 0→1(前 20%)、旋转 ±360°、scale 景深 0.75~1.1；
// 下落水平摆动 ±10~20px、落地微弹跳 ±8px；infinite，delay 0~1s、duration 2.5~3.5s。
// 使用：在需要处 import LuckyDrawCoinRain 并渲染，例如 LuckyDrawDefault/Shake/Result 根节点内。
// =========================================

import { useMemo } from "react";

const COIN_COUNT = 8;
const COIN_SIZE_PX = 32;

function rand(min: number, range: number) {
  return min + Math.random() * range;
}

function useCoinFallConfigs() {
  return useMemo(
    () =>
      Array.from({ length: COIN_COUNT }, () => {
        const durationS = rand(2.5, 1);
        const delayS = rand(0, 1);
        const scale = rand(0.75, 0.35);
        return {
          leftPct: rand(0, 100),
          durationS,
          delayS,
          scale,
          cw: Math.random() >= 0.5,
          opacity: rand(0.9, 0.1),
          brightness: rand(0.97, 0.06),
        };
      }),
    []
  );
}

function GoldCoinSvg({ size = COIN_SIZE_PX }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className="drop-shadow-md">
      <circle cx="16" cy="16" r="14" fill="#FFBE00" stroke="#F68B00" strokeWidth="1.5" />
      <circle cx="16" cy="16" r="10" fill="#F68B00" opacity="0.6" />
    </svg>
  );
}

/**
 * LuckyDraw_Coin 循环下落：每枚 data-name="LuckyDraw_Coin"，随机 x/delay/duration/景深，仅 scale 景深、无额外位移/旋转逻辑。
 */
export default function LuckyDrawCoinRain() {
  const configs = useCoinFallConfigs();

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden z-10"
      aria-hidden
      data-name="LuckyDraw_CoinRain"
    >
      {configs.map((cfg, i) => (
        <div
          key={i}
          data-name="LuckyDraw_Coin"
          className={`absolute will-change-transform ${cfg.cw ? "coin-fall-loop-cw" : "coin-fall-loop-ccw"}`}
          style={{
            left: `${cfg.leftPct}%`,
            top: "-80px",
            width: COIN_SIZE_PX,
            height: COIN_SIZE_PX,
            marginLeft: -COIN_SIZE_PX / 2,
            animationDuration: `${cfg.durationS}s`,
            animationDelay: `${cfg.delayS}s`,
            ['--coin-scale' as string]: cfg.scale,
            opacity: cfg.opacity,
            filter: `brightness(${cfg.brightness})`,
          }}
        >
          <GoldCoinSvg />
        </div>
      ))}
    </div>
  );
}
