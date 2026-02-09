// ===== FortuneSlip 签条组件 =====
// 功能：数据驱动的签条显示组件（支持正常签和特殊签）
// 设计基准：116px × 454px（1:1 像素还原）
// 迁移目标：Cursor 项目 @/components/FortuneSlip.tsx
// =======================================

import svgPaths from '../imports/svg-38h7dm4h63';
import type { LuckyDrawResult } from '../types';

// ===== 迁移提示 =====
// SVG 路径导入：
// - 当前使用相对路径 '../imports/svg-38h7dm4h63'
// - Cursor 迁移时需要：
//   1. 将 SVG 路径数据提取到独立文件（如 @/assets/svgPaths.ts）
//   2. 或转换为独立的 .svg 文件并使用 @/assets/fortuneSlip.svg
//   3. 更新导入路径为绝对路径（使用 @ 别名）
// ====================

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
  // 判断是否为特殊签（再抽一次）
  const isRetry = result.isRetry === true;
  
  // 动态计算等级文字的水平内边距（根据文字长度调整）
  const levelPaddingX = result.level === '上上签' ? '24.14%' : '32.76%';
  
  return (
    <div 
      className={`absolute contents inset-0 ${className}`} 
      data-name="FortuneSlip"
      data-fortune-id={result.id}
      data-fortune-type={isRetry ? 'retry' : 'normal'}
    >
      {/* ===== 签条背景（米黄色底 + 棕色边框）===== */}
      <div className="absolute inset-[-0.09%_-0.36%]">
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
      </div>

      {/* ===== 等级文字（上签/上上签/特签）===== */}
      <p 
        className={`absolute font-['ZiHun151',sans-serif] leading-[normal] not-italic text-[#c1995f] text-[20px] text-center text-nowrap`}
        style={{
          top: '31.5%',
          bottom: '63.22%',
          left: levelPaddingX,
          right: levelPaddingX,
        }}
      >
        {result.level}
      </p>

      {/* ===== 签号区域装饰边框 ===== */}
      <div className="absolute inset-[1.55%_7.14%_1.64%_6.87%]" data-name="Vector">
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

      {/* ===== 签号区域背景（深米色圆形）===== */}
      <div className="absolute inset-[12.78%_15.52%_69.38%_15.52%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 81">
          <path d={svgPaths.p2fca3180} fill="var(--fill-0, #C1995F)" id="Vector" />
        </svg>
      </div>

      {/* ===== 签号数字 ===== */}
      <p className={`absolute font-['ZiHun151',sans-serif] inset-[16.08%_27.59%_72.25%_27.59%] leading-[normal] not-italic text-[#f7e3be] ${result.number === "2026" ? 'text-[28px]' : 'text-[44px]'} text-center text-nowrap`}>
        {result.number}
      </p>

      {/* ===== "No." 前缀（仅正常签显示）===== */}
      {!isRetry && (
        <p className="absolute font-['ZiHun151',sans-serif] inset-[13.88%_37.07%_81.94%_41.38%] leading-[normal] not-italic text-[#f7e3be] text-[16px] text-nowrap">
          No.
        </p>
      )}

      {/* ===== 签文内容区域 ===== */}
      {isRetry ? (
        // 特殊签文：副标题 + 主文案（垂直排列）
        <>
          {/* 副标题（如"新年快乐"）*/}
          {result.subtitle && (
            <div className="absolute flex flex-col font-['ZiHun151',sans-serif] inset-[38%_31.03%_52%_31.03%] justify-center leading-[0] not-italic text-[#8e6e44] text-[28px] text-center">
              <p className="leading-[normal]">{result.subtitle}</p>
            </div>
          )}
          
          {/* 主文案（垂直排列，如"再试试手气"）*/}
          {result.retryText && (
            <div 
              className="absolute flex flex-col font-['ZiHun151',sans-serif] inset-[54%_40%_18%_40%] justify-center items-center leading-[1.8] not-italic text-[#8e6e44] text-[24px] text-center"
              style={{ writingMode: 'vertical-rl' }}
            >
              <p className="leading-[1.8]">{result.retryText}</p>
            </div>
          )}
        </>
      ) : (
        // 正常签文：签文名称（水平居中）
        <div className="absolute flex flex-col font-['ZiHun151',sans-serif] inset-[44.27%_31.03%_9.03%_31.03%] justify-center leading-[0] not-italic text-[#8e6e44] text-[44px] text-center">
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