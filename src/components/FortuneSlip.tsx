// ===== FortuneSlip 签条组件 =====
// 功能：数据驱动的签条显示组件（支持正常签和特殊签）
// 设计基准：116px × 454px（1:1 像素还原）
// 迁移目标：Cursor 项目 @/components/FortuneSlip.tsx
// =======================================

import svgPaths from '../imports/svg-38h7dm4h63';
import type { LuckyDrawResult } from '../types';

/** 设为 false 可回滚为旧签条 SVG（path 引用），见 LuckyDrawResult_11signs.backup.tsx */
const USE_NEW_FORTUNE_SLIP_SVG = true;
const FORTUNE_SLIP_ASSET_BASE = '/assets/fortune-slips';

/** result.id → 新素材文件名（不含扩展名），与 luckyDrawResults 一一对应 */
const FORTUNE_SLIP_ID_TO_FILENAME: Record<number, string> = {
  1: 'FortuneSlip_jiedahuanxi',
  2: 'FortuneSlip_fuyaozhishang',
  3: 'FortuneSlip_shenlaizhibi',
  4: 'FortuneSlip_lingguangzhaxian',
  5: 'FortuneSlip_jinzaihangwo',
  6: 'FortuneSlip_wenbutuijin',
  7: 'FortuneSlip_yigaoguo',
  8: 'FortuneSlip_paianjiaojue',
  9: 'FortuneSlip_tianshidili',
  10: 'FortuneSlip_dazhanhongtu',
  11: 'FortuneSlip_xinniankuaile',
};

interface FortuneSlipProps {
  /** 签文数据 */
  result: LuckyDrawResult;
  
  /** 额外的 CSS 类名 */
  className?: string;
}

/**
 * FortuneSlip 签条组件
 * 
 * 功能：
 * - 根据 LuckyDrawResult 数据动态渲染签条
 * - 支持正常签文（签号 + 签文名称 + 等级）
 * - 支持特殊签文（副标题 + 主文案，用于"再抽一次"）
 * 
 * 设计规范：
 * - 尺寸：116px × 454px
 * - 背景：#F7E3BE（米黄色）
 * - 边框：#AF8446（棕色）
 * - 签号区域：#C1995F（深米色）背景
 * - 字体：zihun151hao-lianmengzongyiti:Regular
 * 
 * 布局结构：
 * - 顶部（12.78% - 27.16%）：签号区域（带装饰边框）
 * - 中部（31.5% - 36.78%）：等级文字
 * - 底部（44.27% - 90.97%）：签文名称（垂直居中）
 * 
 * @example 正常签文
 * <FortuneSlip result={{
 *   id: 1,
 *   number: "88",
 *   title: "皆大欢喜",
 *   level: "上签",
 *   isRetry: false
 * }} />
 * 
 * @example 特殊签文（再抽一次）
 * <FortuneSlip result={{
 *   id: 11,
 *   number: "2026",
 *   title: "再试试手气",
 *   level: "特签",
 *   isRetry: true,
 *   subtitle: "新年快乐",
 *   retryText: "再试试手气"
 * }} />
 */
export default function FortuneSlip({ result, className = '' }: FortuneSlipProps) {
  const isRetry = result.isRetry === true;
  const levelPaddingX = result.level === '上上签' ? '24.14%' : '32.76%';

  const useNewSlip = USE_NEW_FORTUNE_SLIP_SVG && FORTUNE_SLIP_ID_TO_FILENAME[result.id];
  const newSlipSrc = useNewSlip
    ? `${FORTUNE_SLIP_ASSET_BASE}/${FORTUNE_SLIP_ID_TO_FILENAME[result.id]}.svg`
    : null;

  return (
    <div
      className={`absolute contents inset-0 ${className}`}
      data-name="FortuneSlip"
      data-fortune-id={result.id}
      data-fortune-type={isRetry ? 'retry' : 'normal'}
    >
      {/* ===== 签条背景：新素材为整张 SVG 图，旧为 path 拼装 ===== */}
      <div className="absolute inset-[-0.09%_-0.36%]">
        {newSlipSrc ? (
          <img
            src={newSlipSrc}
            alt=""
            className="block size-full w-full h-full object-contain object-center"
            role="presentation"
          />
        ) : (
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 117 455">
            <path
              d={svgPaths.p1c23ab70}
              fill="var(--fill-0, #F7E3BE)"
              id="Vector"
              stroke="var(--stroke-0, #AF8446)"
              strokeMiterlimit="10"
              strokeWidth="0.825928"
            />
          </svg>
        )}
      </div>

      {/* ===== 以下为旧叠加层：使用新素材时隐藏，保留 DOM 以便回滚 ===== */}
      <p
        className={`absolute font-['ZiHun151',sans-serif] leading-[normal] not-italic text-[#c1995f] text-[20px] text-center text-nowrap ${useNewSlip ? 'opacity-0 pointer-events-none' : ''}`}
        style={{
          top: '31.5%',
          bottom: '63.22%',
          left: levelPaddingX,
          right: levelPaddingX,
        }}
      >
        {result.level}
      </p>

      <div className={`absolute inset-[1.55%_7.14%_1.64%_6.87%] ${useNewSlip ? 'opacity-0 pointer-events-none' : ''}`} data-name="Vector">
        <div className="absolute inset-[-0.09%_-0.42%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 101 441">
            <path
              d={svgPaths.p3fd10800}
              id="Vector"
              stroke="var(--stroke-0, #AF8446)"
              strokeMiterlimit="10"
              strokeWidth="0.825928"
            />
          </svg>
        </div>
      </div>

      <div className={`absolute inset-[12.78%_15.52%_69.38%_15.52%] ${useNewSlip ? 'opacity-0 pointer-events-none' : ''}`} data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 81">
          <path d={svgPaths.p2fca3180} fill="var(--fill-0, #C1995F)" id="Vector" />
        </svg>
      </div>

      <p className={`absolute font-['ZiHun151',sans-serif] inset-[16.08%_27.59%_72.25%_27.59%] leading-[normal] not-italic text-[#f7e3be] ${result.number === "2026" ? 'text-[28px]' : 'text-[44px]'} text-center text-nowrap ${useNewSlip ? 'opacity-0 pointer-events-none' : ''}`}>
        {result.number}
      </p>

      {!isRetry && (
        <p className={`absolute font-['ZiHun151',sans-serif] inset-[13.88%_37.07%_81.94%_41.38%] leading-[normal] not-italic text-[#f7e3be] text-[16px] text-nowrap ${useNewSlip ? 'opacity-0 pointer-events-none' : ''}`}>
          No.
        </p>
      )}

      {isRetry ? (
        <>
          {result.subtitle && (
            <div className={`absolute flex flex-col font-['ZiHun151',sans-serif] inset-[38%_31.03%_52%_31.03%] justify-center leading-[0] not-italic text-[#8e6e44] text-[28px] text-center ${useNewSlip ? 'opacity-0 pointer-events-none' : ''}`}>
              <p className="leading-[normal]">{result.subtitle}</p>
            </div>
          )}
          {result.retryText && (
            <div
              className={`absolute flex flex-col font-['ZiHun151',sans-serif] inset-[54%_40%_18%_40%] justify-center items-center leading-[1.8] not-italic text-[#8e6e44] text-[24px] text-center ${useNewSlip ? 'opacity-0 pointer-events-none' : ''}`}
              style={{ writingMode: 'vertical-rl' }}
            >
              <p className="leading-[1.8]">{result.retryText}</p>
            </div>
          )}
        </>
      ) : (
        <div className={`absolute flex flex-col font-['ZiHun151',sans-serif] inset-[44.27%_31.03%_9.03%_31.03%] justify-center leading-[0] not-italic text-[#8e6e44] text-[44px] text-center ${useNewSlip ? 'opacity-0 pointer-events-none' : ''}`}>
          <p className="leading-[normal]">{result.title}</p>
        </div>
      )}
    </div>
  );
}

// ===== Cursor 迁移注释 =====
// 
// 【组件特性说明】
// 
// 1. 数据驱动渲染：
//    - 组件完全基于 LuckyDrawResult 数据结构
//    - 支持正常签和特殊签两种布局
//    - 自动根据 isRetry 字段切换布局
// 
// 2. 像素完美还原：
//    - 所有尺寸、颜色、字体均 1:1 还原 Figma 设计
//    - 使用 inset 百分比定位确保响应式缩放
//    - 保留所有装饰性 SVG 路径
// 
// 3. 可扩展性：
//    - className 属性支持自定义样式
//    - data-fortune-id 和 data-fortune-type 属性便于事件追踪
//    - 组件完全独立，可在任何页面复用
// 
// 【优化建议】
// 
// 1. 性能优化：
//    - SVG 路径考虑使用 React.memo 缓存
//    - 字符分割逻辑（垂直排列）可以提取为工具函数
// 
// 2. 动画支持：
//    - 可添加 motion.div（Framer Motion）实现签条抽出动画
//    - 可添加 hover 交互效果
// 
// 3. 无障碍支持：
//    - 添加 aria-label 描述签文内容
//    - 添加 role="article" 语义化标签
// 
// 【已知限制】
// 
// 1. 特殊签的垂直排列：
//    - 当前使用 flex 布局 + split('') 实现
//    - 如需更复杂的排版，建议使用 CSS writing-mode: vertical-rl
// 
// 2. 字体依赖：
//    - 需要确保 zihun151hao-lianmengzongyiti:Regular 字体已加载
//    - 建议在 @/styles/fonts.css 中预加载
// 
// ===============================