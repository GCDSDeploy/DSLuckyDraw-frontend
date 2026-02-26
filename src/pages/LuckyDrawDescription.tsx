// ===== LuckyDraw_Description 页面组件 =====
// 功能：解签详情展示页面（显示签文详细信息和奖励）
// 设计基准：375px 移动端
// 迁移目标：Cursor 项目 @/pages/LuckyDrawDescription.tsx
// 数据驱动：使用 LuckyDrawResult 类型
// =============================================

import { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'sonner';
import type { LuckyDrawResult } from '../types';
import { getLuckyDrawResultById, luckyDrawResults } from '../data/luckyDrawResults';
import DescriptionContent from '../components/DescriptionContent';
import { captureDescriptionToJpg, getDescriptionJpgFileName } from '../utils/descriptionCapture';

// ===== 迁移提示 =====
// 本文件使用数据驱动的 DescriptionContent 组件
// Cursor 迁移时需要：
// 1. 从 URL 参数获取 resultId（使用 useParams 或 useRouter）
// 2. 替换静态数据为 API 调用（包含签文解释和奖励信息）
// 3. 添加加载状态和错误处理
// 4. 实现页面跳转逻辑
// 5. 实现保存图片功能（使用 html2canvas 或类似库）
// 6. 实现分享功能（使用 Web Share API 或第三方分享库）
// ====================

export interface ILuckyDrawDescriptionProps {
  /** 签文 ID（从数据源获取）*/
  resultId?: number;
  
  /** 直接传入签文数据（优先级高于 resultId）*/
  result?: LuckyDrawResult;
  
  /** 返回主页按钮回调 */
  onReturnClick?: () => void;
  
  /** 保存到相册按钮回调 */
  onDownloadClick?: () => void;
  
  /** 邀同事来摇签按钮回调 */
  onShareClick?: () => void;
  
  /** 奖池一览按钮回调 */
  onGiftPoolClick?: () => void;
}

/**
 * LuckyDrawDescription 页面
 * 
 * 功能：
 * - 375px 移动端基准容器
 * - 数据驱动的签文详情显示
 * - 显示签文名称、解释、奖励信息
 * - 支持保存图片和分享功能
 * - 支持通过 resultId 或 result prop 指定显示内容
 * - 默认显示第一个签文（No.88 皆大欢喜）
 * 
 * 页面元素：
 * - 绿色背景（复用 Landing 页背景）
 * - 顶部插图（根据签文动态显示）
 * - 白色卡片内容区域（签文名称 + 解释 + 奖励）
 * - 底部操作按钮（保存、分享）
 * - 返回主页按钮（左上角）
 * - 奖池一览按钮（右侧）
 * 
 * @example 默认显示第一个签文
 * <LuckyDrawDescription onReturnClick={handleReturn} />
 * 
 * @example 指定签文 ID
 * <LuckyDrawDescription resultId={2} onReturnClick={handleReturn} />
 * 
 * @example 直接传入签文数据
 * <LuckyDrawDescription 
 *   result={{ id: 1, number: "88", title: "皆大欢喜", level: "上签" }} 
 *   onReturnClick={handleReturn}
 *   onDownloadClick={handleDownload}
 *   onShareClick={handleShare}
 * />
 */
export default function LuckyDrawDescription() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  
  // ===== 状态管理 =====
  const [currentResult, setCurrentResult] = useState<LuckyDrawResult | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const descriptionContainerRef = useRef<HTMLDivElement>(null);
  
  // ===== 数据加载逻辑 =====
  useEffect(() => {
    // 从 URL 参数获取签文 ID，默认为 1
    const resultId = id ? Number(id) : 1;
    const result = getLuckyDrawResultById(resultId);
    
    if (result) {
      setCurrentResult(result);
    } else {
      // 如果找不到，使用第一个签文
      setCurrentResult(luckyDrawResults[0]);
    }
  }, [id]);
  
  // ===== 交互函数 =====
  
  // 点击"返回主页"按钮，跳转到首页
  const handleReturnClick = () => {
    navigate('/');
  };
  
  // 点击「保存到相册」：离屏容器渲染 390×660 JPG，仅触发下载，不导航，不声称“已保存至相册”
  const handleDownloadClick = async () => {
    if (!currentResult || !descriptionContainerRef.current) return;
    const id = currentResult.id;
    if (id === 11) return;
    if (isSaving) return;

    setIsSaving(true);
    try {
      const blob = await captureDescriptionToJpg(descriptionContainerRef.current, id);
      const fileName = getDescriptionJpgFileName(id);

      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = fileName;
      a.rel = 'noopener noreferrer';
      a.style.display = 'none';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      alert('图片已下载，请保存至相册');
    } catch (e) {
      console.error('[Save to album]', e);
      toast.error('保存失败，请重试');
    } finally {
      setIsSaving(false);
    }
  };
  
  // 点击"邀同事来摇签"按钮（占位，后续实现）
  const handleShareClick = () => {
    if (!currentResult) return;
    console.log('[Placeholder] Share with result:', currentResult);
    // TODO: 实现分享功能（使用 Web Share API）
  };

  /** 再试试手气：跳转到 Draw 默认页，第二次抽签由用户在默认页摇一摇/点击 CTA 时发起 */
  const handleTryAgainClick = () => {
    navigate('/draw');
  };
  
  // 点击"奖池一览"按钮，跳转到奖池一览页
  const handleGiftPoolClick = () => {
    navigate('/gift-pool');
  };

  // Description 1,2,3,5：Pattern #FFFFFF；4,6,7,8,9,10：专用渐变 + Pattern 颜色（Figma 设计）
  const DEFAULT_BG = 'linear-gradient(-180deg, #F95279 10%, #F55243 100%)';
  const DESCRIPTION_PAGE_BG: Record<number, { gradient: string; patternColor: string }> = {
    1: { gradient: DEFAULT_BG, patternColor: '#FFFFFF' },
    2: { gradient: DEFAULT_BG, patternColor: '#FFFFFF' },
    3: { gradient: DEFAULT_BG, patternColor: '#FFFFFF' },
    5: { gradient: DEFAULT_BG, patternColor: '#FFFFFF' },
    4: {
      gradient: 'linear-gradient(135deg, rgba(239,163,225,1) 0%, rgba(186,159,231,1) 17.5%, rgba(134,155,237,1) 35%, rgba(81,150,243,1) 52.5%, rgba(54,148,246,1) 61.25%, rgba(28,146,249,1) 70%, rgba(41,192,196,1) 79%, rgba(54,237,142,1) 88%)',
      patternColor: '#DCF9E3',
    },
    6: {
      gradient: 'linear-gradient(135deg, rgba(239,163,225,1) 0%, rgba(186,159,231,1) 17.5%, rgba(134,155,237,1) 35%, rgba(81,150,243,1) 52.5%, rgba(54,148,246,1) 61.25%, rgba(28,146,249,1) 70%, rgba(41,192,196,1) 79%, rgba(54,237,142,1) 88%)',
      patternColor: '#DCF9E3',
    },
    7: {
      gradient: 'linear-gradient(180deg, rgba(249,71,185,1) 0%, rgba(249,112,191,1) 44%, rgba(250,114,156,1) 58%, rgba(250,115,121,1) 72%, rgba(251,117,86,1) 86%, rgba(251,118,51,1) 100%)',
      patternColor: '#FFFFFF',
    },
    8: {
      gradient: 'linear-gradient(180deg, rgba(249,71,185,1) 0%, rgba(249,112,191,1) 44%, rgba(250,114,156,1) 58%, rgba(250,115,121,1) 72%, rgba(251,117,86,1) 86%, rgba(251,118,51,1) 100%)',
      patternColor: '#FFFFFF',
    },
    9: {
      gradient: 'linear-gradient(180.423deg, rgb(54, 237, 142) 0.88437%, rgb(38, 180, 208) 46.997%, rgb(38, 145, 254) 103.94%)',
      patternColor: '#DCF9E3',
    },
    10: {
      gradient: 'linear-gradient(180deg, #6399f3 0%, #9050e4 49.857%, #ed67d8 100%)',
      patternColor: '#FFFFFF',
    },
  };
  const pageBg = currentResult ? DESCRIPTION_PAGE_BG[currentResult.id] : null;
  const backgroundStyle = pageBg ? pageBg.gradient : DEFAULT_BG;
  const patternTintColor = pageBg ? pageBg.patternColor : null;

  // 如果数据未加载，显示加载状态
  if (!currentResult) {
    return (
      <div className="flex items-center justify-center min-h-screen" style={{ background: backgroundStyle }}>
        <p className="text-white text-[18px]">加载中...</p>
      </div>
    );
  }
  
  return (
    // 全屏居中容器 - 确保在各种设备上正确显示
    <div className="w-full min-h-screen flex justify-center" style={{ background: backgroundStyle }}>
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
        className="relative w-full max-w-[430px] mx-auto h-screen overflow-x-hidden overflow-y-auto"
        data-page="lucky-draw-description"
        data-result-id={currentResult.id}
      >
        {/* ===== 页面内容：使用 Figma 生成组件 + 数据驱动内容 ===== */}
        <div
          ref={descriptionContainerRef}
          className="relative size-full"
          style={{ background: backgroundStyle }}
          data-name="LuckyDraw_Description"
        >
          {/* 背景装饰层（4,6,7,8,9,10 使用指定 Pattern 颜色） */}
          <LandingBackgroundLayerGreen patternTintColor={patternTintColor} />
          
          {/* 数据驱动的签文详情内容 */}
          <DescriptionContent result={currentResult} />
          
          {/* 底部操作按钮 */}
          <DescriptionButtons 
            resultId={currentResult.id}
            isSaving={isSaving}
            onDownloadClick={handleDownloadClick}
            onShareClick={handleShareClick}
            onTryAgainClick={handleTryAgainClick}
          />
          
          {/* 返回主页按钮 */}
          <DescriptionBack onClick={handleReturnClick} />
          
          {/* 奖池一览按钮 */}
          <DescriptionGiftPool onClick={handleGiftPoolClick} />
        </div>
        
        {/* ===== TODO(cursor-migration) ===== */}
        {/* 
          Description 页面功能已完成：
          
          1. 数据驱动架构 ✅
             - 接收 resultId 或 result prop
             - 动态显示签文名称、解释、奖励
             - 与 Result 页面数据结构一致
          
          2. 页面元素 ✅
             - 绿色背景（复用 Landing 页）
             - 顶部插图（根据签文动态）
             - 白色卡片内容区域
             - 底部操作按钮
             - 返回和奖池按钮
          
          3. 交互占位函数 ✅
             - handleReturnClick: 返回主页
             - handleDownloadClick: 保存图片
             - handleShareClick: 分享签文
             - handleGiftPoolClick: 跳转奖池
          
          迁移到 Cursor 时需要：
          
          1. API 集成（扩展签文数据）：
             a. 扩展 LuckyDrawResult 类型
                ```typescript
                export interface LuckyDrawResult {
                  id: number;
                  number: string;
                  title: string;
                  level: LuckyDrawLevel;
                  // 新增字段
                  description: string;      // 签文详细解释
                  interpretation: string;   // 签文解读
                  reward?: {                // 奖励信息
                    title: string;
                    description: string;
                  };
                  illustration?: string;    // 插图 URL
                }
                ```
             
             b. 创建 API 服务
                ```typescript
                export async function fetchDescriptionById(id: number) {
                  const res = await fetch(`/api/lucky-draw/description/${id}`);
                  return res.json();
                }
                ```
          
          2. 保存图片功能：
             a. 安装依赖
                ```bash
                npm install html2canvas
                ```
             
             b. 实现保存功能
                ```typescript
                import html2canvas from 'html2canvas';
                
                async function handleDownloadClick() {
                  const element = document.querySelector('[data-page="lucky-draw-description"]');
                  if (!element) return;
                  
                  const canvas = await html2canvas(element as HTMLElement, {
                    scale: 2,
                    useCORS: true,
                    backgroundColor: '#128f57'
                  });
                  
                  canvas.toBlob((blob) => {
                    if (!blob) return;
                    
                    const url = URL.createObjectURL(blob);
                    const link = document.createElement('a');
                    link.href = url;
                    link.download = `lucky-draw-${currentResult.number}-${currentResult.title}.png`;
                    link.click();
                    URL.revokeObjectURL(url);
                  });
                }
                ```
             
             c. 动端保存到相册
                ```typescript
                // iOS/Android 使用原生分享 API
                async function handleDownloadClick() {
                  const element = document.querySelector('[data-page="lucky-draw-description"]');
                  if (!element) return;
                  
                  const canvas = await html2canvas(element as HTMLElement);
                  
                  canvas.toBlob(async (blob) => {
                    if (!blob) return;
                    
                    const file = new File([blob], 'lucky-draw.png', { type: 'image/png' });
                    
                    if (navigator.share) {
                      await navigator.share({
                        files: [file],
                        title: `我抽到了${currentResult.level}：${currentResult.title}`,
                      });
                    }
                  });
                }
                ```
          
          3. 分享功能：
             a. Web Share API（推荐）
                ```typescript
                async function handleShareClick() {
                  if (navigator.share) {
                    await navigator.share({
                      title: `我抽到了${currentResult.level}：${currentResult.title}`,
                      text: `快来一起摇签吧！`,
                      url: `${window.location.origin}/result/${currentResult.id}`,
                    });
                  } else {
                    // Fallback: 复制链接到剪贴板
                    navigator.clipboard.writeText(
                      `${window.location.origin}/result/${currentResult.id}`
                    );
                    alert('链接已复制到剪贴板');
                  }
                }
                ```
             
             b. 第三方分享（微信、QQ）
                ```typescript
                // 需要集成对应 SDK
                import wx from 'weixin-js-sdk';
                
                function handleShareClick() {
                  wx.ready(() => {
                    wx.updateAppMessageShareData({
                      title: `我抽到了${currentResult.level}：${currentResult.title}`,
                      desc: '快来一起摇签吧！',
                      link: `${window.location.origin}/result/${currentResult.id}`,
                      imgUrl: currentResult.illustration,
                    });
                  });
                }
                ```
          
          4. 路由集成：
             a. Next.js App Router
                ```typescript
                // app/description/[id]/page.tsx
                export default function DescriptionPage({ params }) {
                  const router = useRouter();
                  
                  return (
                    <LuckyDrawDescription
                      resultId={Number(params.id)}
                      onReturnClick={() => router.push('/')}
                      onDownloadClick={handleDownload}
                      onShareClick={handleShare}
                      onGiftPoolClick={() => router.push('/gift-pool')}
                    />
                  );
                }
                ```
             
             b. React Router
                ```typescript
                function DescriptionRoute() {
                  const { id } = useParams();
                  const navigate = useNavigate();
                  
                  return (
                    <LuckyDrawDescription
                      resultId={Number(id)}
                      onReturnClick={() => navigate('/')}
                      onDownloadClick={handleDownload}
                      onShareClick={handleShare}
                      onGiftPoolClick={() => navigate('/gift-pool')}
                    />
                  );
                }
                ```
          
          5. 性能优化：
             - 使用 React.memo 缓存 DescriptionContent 组件
             - 使用 next/image 优化插图加载
             - 使用 Intersection Observer 懒加载图片
          
          6. 埋点和分析：
             - 记录用户查看的签文
             - 记录保存和分享行为
             - 分析最受欢迎的签文
        */}
        {/* ================================== */}
      </div>
    </div>
  );
}

// ===== 以下是从 Figma 导出的子组件 =====
// 这些组件保持 1:1 像素还原
// Cursor 迁移时需要提取到独立文件
// =========================================

import svgPaths from '../imports/svg-ohexhocdnt';
import imgLandingBackgroundLayerGreen from "@/assets/09245eba98b5559b1bc319006b1f48d78893cfe9.png";
import imgCroodsArrowDown from "@/assets/f91f9545390252a6611c7f7d585ca3efe3a8716a.png";

// ===== 绿色背景组件（复用 Landing 页）=====
// patternTintColor：4,6,7,8,9,10 页使用指定 HEX，用 PNG 做 mask 显示纯色图案

function LandingBackgroundLayerGreen({ patternTintColor = null }: { patternTintColor?: string | null }) {
  if (patternTintColor) {
    return (
      <div
        className="absolute inset-0 w-full h-full pointer-events-none"
        data-name="Landing_Background_LayerGreen"
        style={{
          backgroundColor: patternTintColor,
          maskImage: `url(${imgLandingBackgroundLayerGreen})`,
          maskSize: 'cover',
          maskRepeat: 'no-repeat',
          maskPosition: 'center',
          WebkitMaskImage: `url(${imgLandingBackgroundLayerGreen})`,
          WebkitMaskSize: 'cover',
          WebkitMaskRepeat: 'no-repeat',
          WebkitMaskPosition: 'center',
        }}
      />
    );
  }
  return (
    <div className="absolute inset-0 w-full h-full" data-name="Landing_Background_LayerGreen">
      <img alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none" src={imgLandingBackgroundLayerGreen} />
    </div>
  );
}

// ===== 底部操作按钮组件 =====

interface DescriptionButtonsProps {
  resultId?: number;
  isSaving?: boolean;
  onDownloadClick?: () => void;
  onShareClick?: () => void;
  onTryAgainClick?: () => void;
}

function DescriptionButtons({ resultId, isSaving = false, onDownloadClick, onShareClick, onTryAgainClick }: DescriptionButtonsProps) {
  const isResult11 = resultId === 11;
  const firstButtonLabel = isResult11 ? '再试试手气' : '保存到相册';
  const firstButtonClick = isResult11 ? onTryAgainClick : onDownloadClick;
  const firstButtonDisabled = !isResult11 && isSaving;

  return (
    <div
      className="absolute z-20 content-stretch flex gap-[16px] items-center left-1/2 translate-x-[-50%]"
      style={{ bottom: 'calc(15px + env(safe-area-inset-bottom, 0px))' }}
      data-name="Description_Buttons"
    >
      {/* 保存到相册 / 再试试手气（结果 11 为「再试试手气」，点击返回 draw 默认页） */}
      <div 
        onClick={firstButtonDisabled ? undefined : firstButtonClick}
        data-action={isResult11 ? 'try-again' : 'download'}
        className={`bg-white h-[48px] rounded-[20px] w-[152px] transition-colors ${firstButtonDisabled ? 'cursor-not-allowed opacity-70' : 'cursor-pointer hover:bg-gray-50'}`}
      >
        <div className="flex flex-row items-center justify-center size-full px-[31px] py-[12px]">
          <div className="flex flex-col font-['ZiHun151',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212121] text-[18px] text-center text-nowrap">
            <p className="leading-[normal]">{firstButtonLabel}</p>
          </div>
        </div>
      </div>
      
      {/* 邀同事来摇签按钮 */}
      <div 
        onClick={onShareClick}
        data-action="share"
        className="bg-white h-[48px] rounded-[20px] w-[152px] cursor-pointer hover:bg-gray-50 transition-colors"
      >
        <div className="flex flex-row items-center justify-center size-full px-[22px] py-[12px]">
          <div className="flex flex-col font-['ZiHun151',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212121] text-[18px] text-center text-nowrap">
            <p className="leading-[normal]">邀同事来摇签</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ===== 返回主页按钮组件 =====

interface DescriptionBackProps {
  onClick?: () => void;
}

function DescriptionBack({ onClick }: DescriptionBackProps) {
  return (
    <div 
      onClick={onClick}
      data-action="return"
      className="absolute z-20 h-[27px] left-[16px] w-[96px] cursor-pointer"
      style={{ top: 'calc(15px + env(safe-area-inset-top, 0px))' }}
      data-name="Description_Back"
    >
      <div className="absolute bottom-[14.81%] flex flex-col font-['ZiHun151',sans-serif] justify-center leading-[0] left-1/4 not-italic right-0 text-[18px] text-nowrap text-white top-[3.7%]">
        <p className="leading-[normal]">返回主页</p>
      </div>
      <div className="absolute flex inset-[0_81.25%_0_0] items-center justify-center">
        <div className="flex-none h-[18px] rotate-[90deg] w-[27px]">
          <div className="relative size-full bg-[rgba(255,255,255,0)]" data-name="Croods Arrow Down">
            {/* @cursor-migrate: 
              - 将图片资源移动到 @/assets/images/arrow-left.png
              - 或转换为 SVG icon
            */}
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgCroodsArrowDown} style={{ filter: 'brightness(0) invert(1)' }} />
          </div>
        </div>
      </div>
    </div>
  );
}

// ===== 奖池一览按钮组件 =====

interface DescriptionGiftPoolProps {
  onClick?: () => void;
}

function DescriptionGiftPool({ onClick }: DescriptionGiftPoolProps) {
  return (
    <div 
      onClick={onClick}
      data-action="gift-pool"
      className="absolute h-[80px] right-0 w-[26px] cursor-pointer" 
      style={{ top: 'calc(15px + env(safe-area-inset-top, 0px))' }}
      data-name="Description_GiftPool"
    >
      <div className="absolute bg-white inset-0 rounded-bl-[8px] rounded-tl-[8px]" />
      <div className="absolute flex flex-col font-['ZiHun151',sans-serif] inset-[8.75%_3.85%_11.25%_3.85%] justify-center leading-[0] not-italic text-[16px] text-black text-center">
        <p className="leading-none">奖池一览</p>
      </div>
    </div>
  );
}

// ===== Cursor 迁移注释 =====
// 
// 【组件架构说明】
// 
// 1. LuckyDrawDescription：页面容器组件
//    - 375px 移动端基准容器
//    - 管理数据加载和状态
//    - 协调所有子组件
// 
// 2. DescriptionContent：内容组件（需创建）
//    - 独立文件：@/components/DescriptionContent.tsx
//    - 显示签文详情（名称、解释、奖励）
//    - 完全数据驱动
// 
// 3. 子组件：
//    - LandingBackgroundLayerGreen：绿色背景
//    - DescriptionButtons：底部操作按钮
//    - DescriptionBack：返回主页按钮
//    - DescriptionGiftPool：奖池一览按钮
// 
// 【数据结构扩展建议】
// 
// 当前 LuckyDrawResult 类型需要扩展：
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
//   description: string;        // 签文详细解释（如"各抒其见，终归同向..."）
//   interpretation?: string;    // 签文解读
//   reward?: {                  // 奖励信息
//     title: string;            // 奖励标题
//     description: string;      // 奖励描述
//   };
//   illustration?: string;      // 插图 URL
//   serialNumber?: string;      // 序列号（如"NO. S88ADFHRGB"）
// }
// ```
// 
// ===============================