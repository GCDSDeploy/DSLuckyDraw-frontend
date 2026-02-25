// ===== DescriptionContent 签文详情内容组件 =====
// 功能：数据驱动的签文详情显示（名称、解释、奖励等）
// 设计基准：338px × 468px 白色卡片
// 迁移目标：Cursor 项目 @/components/DescriptionContent.tsx
// =================================================

import { useState, useEffect } from 'react';
import svgPaths from '../imports/svg-ohexhocdnt';
import type { LuckyDrawResult } from '../types';
import img9MasksTr from "@/assets/4b2c92b387b9afd0c7fd0f4679506347da0975a4.png";

// ===== 迁移提示 =====
// 本组件完全数据驱动，无需修改代码
// Cursor 迁移时需要：
// 1. 将插图资源移动到 @/assets/images/illustrations/
// 2. 将装饰元素资源移动到 @/assets/images/decorations/
// 3. 确保 LuckyDrawResult 数据包含所有必需字段
// ====================

interface DescriptionContentProps {
  /** 签文数据 */
  result: LuckyDrawResult;
  
  /** 额外的 CSS 类名 */
  className?: string;
}

/**
 * DescriptionContent 签文详情内容组件
 * 
 * 功能：
 * - 根据 LuckyDrawResult 数据动态渲染签文详情
 * - 显示签文名称、解释、奖励信息
 * - 显示顶部插图
 * - 显示底部品牌信息和序列号
 * 
 * 设计规范：
 * - 尺寸：338px × 468px
 * - 背景：白色卡片（带圆角和阴影）
 * - 布局：顶部插图 + 中部内容 + 底部信息
 * 
 * 数据驱动字段：
 * - title: 签文名称（如"皆大欢喜"）
 * - description: ���释（如"各抒其见，终归同向..."）
 * - reward: 奖励信息（标题 + 描述）
 * - illustration: 插图 URL
 * - underlineColor: 横线装饰颜色
 * - serialNumber: 序列号（可选，如不提供则自动生成）
 * 
 * @example 正常签文
 * <DescriptionContent result={{
 *   id: 1,
 *   number: "88",
 *   title: "皆大欢喜",
 *   level: "上签",
 *   description: "各抒其见，终归同向。\n共识落定，皆大欢喜。\n ",
 *   reward: {
 *     title: "Happy New Year! 查收奖励👇",
 *     description: "\"PPT设计VIP通道 - 排队提前5名\""
 *   },
 *   illustration: "/assets/illustrations/jiedahuanxi.png",
 *   underlineColor: "#128f57"
 * }} />
 */
export default function DescriptionContent({ result, className = '' }: DescriptionContentProps) {
  // 从 result 数据中提取所有必需字段
  const descriptionText = result.description || '签文解释加载中...\n \n ';
  const rewardTitle = result.reward?.title || 'Happy New Year! 查收奖励👇';
  const rewardDescription = result.reward?.description || '';
  const illustrationUrl = result.illustration || '';
  const underlineColor = result.underlineColor || '#128f57';
  const serialNumber = result.serialNumber || generateSerialNumber(result.id);
  const brandText = result.brandText || 'Design Studios 共创工作坊';
  
  // 检查是否为特殊布局（ID: 11 空签）
  const isSpecialLayout = result.isSpecialLayout || false;
  const isResult11 = result.id === 11;
  
  // 结果 11：卡片高度减少 30%（468 * 0.7 ≈ 328px）
  const contentHeight = isResult11 ? 328 : 468;
  const svgHeight = isResult11 ? 327 : 466.5;
  
  // 特殊布局：红色字更大字号
  const rewardFontSize = isSpecialLayout ? 'text-[22px]' : 'text-[16px]';

  // 微信 WebView：底部白条压缩内容时，将整块容器上移 30px，仅改视觉偏移
  const [isWeChatWebView, setIsWeChatWebView] = useState(false);
  useEffect(() => {
    setIsWeChatWebView(typeof navigator !== 'undefined' && /MicroMessenger/i.test(navigator.userAgent));
  }, []);
  
  // 统一的布局模型：使用 flex 布局确保插图与标题的相对位置固定
  // 插图容器自适应内容尺寸（正常签文：300px × 210px，空签：340px × 286px）
  // 白色卡片在插图下方，通过固定间距（gap）保持相对位置一致
  
  return (
    <>
      {/* ===== 插图+标题组合容器 ===== */}
      {/* 微信 WebView 下上移 30px，避免被底部白条压缩；Safari/Chrome 不变 */}
      <div
        className={`absolute left-1/2 translate-x-[-50%] flex flex-col items-center z-10 mb-[10px] overflow-auto ${isWeChatWebView ? '-translate-y-[30px]' : ''}`}
        style={{
          top: 'calc(50px + env(safe-area-inset-top, 0px))',
          maxHeight: 'calc(100vh - 50px - 10px - 48px - 15px - env(safe-area-inset-top, 0px) - env(safe-area-inset-bottom, 0px))',
        }}
        data-name="Description_Illustration_Title_Container"
      >
        {/* ===== 顶部插图 ===== */}
        {/* 插图容器保持设计稿原始尺寸，z-index 更高以覆盖白色卡片 */}
        <div 
          className="relative flex-shrink-0 z-20"
          data-name="Description_Illustration"
        >
          {/* @cursor-migrate: 
            - 将插图资源移动到 @/assets/images/illustrations/
            - 使用 next/image 组件优化加载
          */}
          <img 
            alt={`${result.title} 插图`} 
            className="block pointer-events-none" 
            src={illustrationUrl}
            style={{
              width: 'auto',
              height: 'auto',
              display: 'block'
            }}
          />
        </div>
        
        {/* ===== 白色卡片内容区域 ===== */}
        {/* 向上移动以实现插图下半部分覆盖效果，z-index 较低，向下位移16px为签ID留出空间 */}
        <div 
          className={`relative content-stretch flex items-start justify-center overflow-clip p-[18px] w-[338px] -mt-[104px] z-10 ${className}`}
          style={{ height: contentHeight }}
          data-name="Description_Content"
          data-result-id={result.id}
        >
        {/* 白色卡片背景 */}
        <div 
          className="absolute left-[calc(50%-0.5px)] top-[calc(50%+0.25px)] translate-x-[-50%] translate-y-[-50%] w-[337px]"
          style={{ height: svgHeight }}
        >
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 337 467">
            <g id="Group 8">
              <path d={svgPaths.p2e0742c0} fill="var(--fill-0, white)" id="Rectangle 3" />
            </g>
          </svg>
        </div>
        
        {/* 内容区域 - 结果 11：底部块（Happy New Year! + DS 祝福）距容器底 20px */}
        <div className={`content-stretch flex flex-col gap-1 p-0 items-center relative shrink-0 w-[294px] ${isResult11 ? 'h-full pt-[24px]' : 'pt-[90px]'}`}>
          {/* 签文名称和解释（奖项行所在块） */}
          <div className={`content-stretch flex flex-col gap-0 items-center leading-[0] relative shrink-0 w-full ${isResult11 ? 'flex-1 min-h-0' : ''}`}>
            {/* 签文名称区域（特殊布局不显示）- 整体上移 20px */}
            {!isSpecialLayout && (
              <div className="content-stretch flex flex-col gap-0 items-center relative shrink-0 p-0 -mt-5">
                {/* 签文名称 + 装饰元素 - 与 flex 容器间 padding 0 */}
                <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0 w-[294px] p-0">
                  {/* 绿色下划线（数据驱动颜色） */}
                  <div 
                    className="[grid-area:1_/_1] h-[15px] ml-[50px] mt-[85px] w-[208px]" 
                    style={{ backgroundColor: underlineColor }}
                  />
                  
                  {/* 签文名称文字 */}
                  <div className="[grid-area:1_/_1] flex flex-col font-['ZiHun151',sans-serif] justify-center leading-[0] ml-[151px] mt-[60.5px] not-italic relative text-[64px] text-black text-center text-nowrap translate-x-[-50%] translate-y-[-50%]">
                    <p className="leading-[normal]">{result.title}</p>
                  </div>
                  
                  {/* 左侧装饰元素 */}
                  <MaskDecoration additionalClassNames="[grid-area:1_/_1] ml-0 mt-0" />
                  
                  {/* 右侧装饰元素（镜像） */}
                  <div className="[grid-area:1_/_1] flex h-[78px] items-center justify-center ml-[213px] mt-[47px] relative w-[81px]">
                    <div className="flex-none rotate-[180deg] scale-y-[-100%]">
                      <MaskDecoration />
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* 签文解释（新年祝福语）- 最多 3 行，最后一句保持一行 */}
            <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0 w-[294px] p-0">
              <div
                className="[grid-area:1_/_1] font-['ZiHun151',sans-serif] leading-[1.25] ml-[147px] mt-[45px] relative text-[#323232] text-[24px] text-center translate-x-[-50%] translate-y-[-50%] w-[294px]"
                data-name="Description_Blessing_Text"
              >
                {descriptionText.split('\n').map((line, index) => {
                  const isLast = index === descriptionText.split('\n').length - 1;
                  return (
                    <p key={index} className={isLast ? 'mb-0 whitespace-nowrap' : 'mb-0'}>{line}</p>
                  );
                })}
              </div>
            </div>
            
            {/* 奖励信息（非结果 11 时在此处渲染） */}
            {!isResult11 && (
              <div className={`flex flex-col font-['ZiHun151',sans-serif] justify-center leading-[normal] not-italic relative shrink-0 text-[#a1150c] ${rewardFontSize} text-center text-nowrap`}>
                <p className="mb-0">{rewardTitle}</p>
                <p>{rewardDescription}</p>
              </div>
            )}
          </div>
          
          {/* 结果 11：Happy New Year! + DS 祝福 距容器底 20px */}
          {isResult11 ? (
            <div className="mt-auto shrink-0 pb-5 flex flex-col gap-1 items-center w-full">
              <div className={`flex flex-col font-['ZiHun151',sans-serif] justify-center leading-[normal] not-italic relative shrink-0 text-[#a1150c] ${rewardFontSize} text-center text-nowrap`}>
                <p className="mb-0">{rewardTitle}</p>
                <p>{rewardDescription}</p>
              </div>
              <div className="content-stretch flex flex-col gap-0 items-center relative shrink-0 p-0 mt-5">
                <div className="content-stretch flex gap-1 items-center justify-center relative shrink-0" style={{ letterSpacing: '0.5px' }}>
                  <LogoDsComponents />
                  <p className="font-['Arial:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#323232] text-[14px] text-nowrap" style={{ fontVariationSettings: "'wght' 400", letterSpacing: '0.5px' }}>
                    {brandText}
                  </p>
                </div>
              </div>
            </div>
          ) : (
          <>
          {/* 底部品牌信息（DS Logo + 服务行）- 与第三行奖励区间距 20px，logo 与文案字间距统一 */}
          <div className="content-stretch flex flex-col gap-0 items-center relative shrink-0 p-0 mt-5" data-name="Description_Logo_Services">
            {/* DS Logo + 服务文案，字间距 0.5px 与设计一致 */}
            <div className="content-stretch flex gap-1 items-center justify-center relative shrink-0" style={{ letterSpacing: '0.5px' }}>
              <LogoDsComponents />
              <p className="font-['Arial:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#323232] text-[14px] text-nowrap" style={{ fontVariationSettings: "'wght' 400", letterSpacing: '0.5px' }}>
                {brandText}
              </p>
            </div>
            
            {/* 序列号（特殊布局不显示） */}
            {!isSpecialLayout && (
              <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
                <div className="[grid-area:1_/_1] flex flex-col font-['Arial:Regular',sans-serif] justify-center ml-[64.5px] mt-[5px] not-italic relative text-[#d4d4d4] text-[9px] text-center translate-x-[-50%] translate-y-[-50%] w-[129px]">
                  <p className="leading-[normal]">{serialNumber}</p>
                </div>
              </div>
            )}
          </div>
          </>
          )}
        </div>
        
        {/* 分隔线 + ID 行 - 第二：与 DS 行 margin 4px；ID 元素居中 */}
        <div 
          className="absolute left-1/2 -translate-x-1/2 w-[251px] mt-1 flex flex-col items-center"
          style={isResult11 ? { bottom: '72px' } : { top: '340px' }}
        >
          <div className="absolute h-0 inset-[-0.5px_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 251 1">
              <path d="M0 0.5H251" id="Vector 29" stroke="var(--stroke-0, #F0F0F0)" />
            </svg>
          </div>
          {/* 签ID显示 */}
          {result.signId && (
            <p className="text-[9px] text-[#D4D4D4] text-center mt-[8px] relative w-full">{result.signId}</p>
          )}
        </div>
        </div>
      </div>
    </>
  );
}

// ===== 子组件：装饰元素 =====

interface MaskDecorationProps {
  additionalClassNames?: string;
}

function MaskDecoration({ additionalClassNames = '' }: MaskDecorationProps) {
  return (
    <div className={`h-[78px] relative w-[81px] ${additionalClassNames}`}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* @cursor-migrate: 
          - 将装饰元素资源移动到 @/assets/images/decorations/
          - 或转换为 SVG
        */}
        <img alt="" className="absolute h-[325.64%] left-[-231%] max-w-none top-0 w-[331.13%]" src={img9MasksTr} />
      </div>
    </div>
  );
}

// ===== 子组件：Logo =====

function LogoDsComponents() {
  return (
    <div className="h-[27px] relative shrink-0 w-[28px]" data-name="LOGO_DS COMPONENTS">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 27">
        <g id="LOGO_DS COMPONENTS">
          <path d={svgPaths.p237a4d00} fill="url(#paint0_linear_12_213)" id="Vector" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_12_213" x1="4.53568e-10" x2="27.9407" y1="4.43833e-10" y2="4.4383e-10">
            <stop stopColor="#FF7F52" />
            <stop offset="0.5" stopColor="#ED20D0" />
            <stop offset="1" stopColor="#218AFE" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

// ===== 临时数据函数（用于开发和演示）=====
// TODO: Cursor 迁移时需要：
// 1. 扩展 LuckyDrawResult 类型
// 2. 将这些数据移到 /src/data/luckyDrawResults.ts
// 3. 或从后端 API 获取
// ============================================

/**
 * 生成序列号
 * 临时生成函数，实际应该从 API 获取
 */
function generateSerialNumber(resultId: number): string {
  // TODO: 从后端 API 获取真实的序列号
  // 当前使用简单的生成规则
  const randomSuffix = Math.random().toString(36).substring(2, 8).toUpperCase();
  return `NO. S${resultId}${randomSuffix}`;
}

// ===== Cursor 迁移注释 =====
// 
// 【组件特性说明】
// 
// 1. 数据驱动渲染：
//    - 组件完全基于 LuckyDrawResult 数据结构
//    - 支持动态显示签文名称、解释、奖励
//    - 自动根据 resultId 加载对应的插图
// 
// 2. 像素完美还原：
//    - 所有尺寸、颜色、字体均 1:1 还原 Figma 设计
//    - 使用绝对定位确保精确布局
//    - 保留所有装饰性元素
// 
// 3. 可扩展性：
//    - className 属性支持自定义样式
//    - data-result-id 属性便于事件追踪
//    - 组件完全独立，可在任何页面复用
// 
// 【数据结构扩展建议】
// 
// 扩展 LuckyDrawResult 类型：
// ```typescript
// export interface LuckyDrawResult {
//   // 现有字段
//   id: number;
//   number: string;
//   title: string;
//   level: LuckyDrawLevel;
//   isRetry?: boolean;
//   subtitle?: string;
//   retryText?: string;
//   
//   // 新增字段（Description 页面需要）
//   description: string;        // 签文详细解释
//   interpretation?: string;    // 签文解读
//   reward: {                   // 奖励信息
//     title: string;            // 奖励标题
//     description: string;      // 奖励描述
//   };
//   illustration: string;       // 插图 URL
//   underlineColor: string;     // 横线装饰颜色
//   serialNumber?: string;      // 序列号
//   isSpecialLayout?: boolean;  // 是否为特殊布局
//   brandText?: string;         // 品牌文本
// }
// ```
// 
// 【优化建议】
// 
// 1. 性能优化：
//    - 使用 React.memo 缓存组件
//    - 使用 next/image 优化图片加载
//    - 添加图片懒加载
// 
// 2. 动画支持：
//    - 添加卡片展开动画
//    - 添加文字淡入动画
//    - 添加奖励信息闪烁效果
// 
// 3. 无障碍支持：
//    - 添加 aria-label 描述签文内容
//    - 添加 role="article" 语义化标签
// 
// ===============================