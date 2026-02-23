// ===== LuckyDrawResultPage 包装组件 =====
// 功能：数据驱动的 Result 页面包装组件
// 说明：包装 Figma 生成的组件，替换签条部分实现数据驱动
// 迁移目标：Cursor 项目 @/components/LuckyDrawResultPage.tsx
// ============================================

import { useState, useEffect } from "react";
import Lottie from "lottie-react";
import type { LuckyDrawResult } from "../types";
import {
  getLuckyDrawResultById,
  luckyDrawResults,
} from "../data/luckyDrawResults";
import FortuneSlip from "./FortuneSlip";
import svgPaths from "../imports/svg-38h7dm4h63";
import clsx from "clsx";

/** Set to false to revert to original background SVG */
const USE_LOTTIE_BACKGROUND = true;
const REWARD_LOTTIE_URL = "/assets/Reward-light-effect.json";

// 导入基础组件类型
interface LuckyDrawResultPageProps {
  /** 签文 ID（从数据源获取）*/
  resultId?: number;

  /** 直接传入签文数据（优先级高于 resultId）*/
  result?: LuckyDrawResult;

  /** 点击"立即解签"按钮回调 */
  onButtonClick?: (result: LuckyDrawResult) => void;
}

/**
 * LuckyDrawResultPage 数据驱动包装组件
 *
 * 功能：
 * - 接收 resultId 或 result prop 动态显示签文
 * - 使用 FortuneSlip 组件替换硬编码签条
 * - 动态更新顶部描述文字（根据等级显示"上签"、"上上签"或"特签"）
 * - 保持其他所有 Figma 设计元素不变
 *
 * @example 使用 resultId
 * <LuckyDrawResultPage resultId={2} onButtonClick={(result) => console.log(result)} />
 *
 * @example 使用 result 对象
 * <LuckyDrawResultPage
 *   result={{ id: 1, number: "88", title: "皆大欢喜", level: "上签" }}
 *   onButtonClick={(result) => navigate(`/description/${result.id}`)}
 * />
 *
 * @example 默认显示第一个签文
 * <LuckyDrawResultPage onButtonClick={handleClick} />
 */
export default function LuckyDrawResultPage(
  props: LuckyDrawResultPageProps,
) {
  // ===== 状态管理 =====
  const [currentResult, setCurrentResult] =
    useState<LuckyDrawResult | null>(null);

  // ===== 数据加载逻辑 =====
  useEffect(() => {
    // 优先使用直接传入的 result
    if (props.result) {
      setCurrentResult(props.result);
      return;
    }

    // 其次使用 resultId 查找数据
    if (props.resultId !== undefined) {
      const result = getLuckyDrawResultById(props.resultId);
      if (result) {
        setCurrentResult(result);
        return;
      }
    }

    // 默认使用第一个签文（id: 1，No.88 皆大欢喜 上签）
    setCurrentResult(luckyDrawResults[0]);
  }, [props.result, props.resultId]);

  // ===== 事件处理 =====
  const handleButtonClick = () => {
    if (!currentResult) return;

    // TODO: 实现"立即解签"按钮逻辑
    // 预期行为：跳转到 Description 页面展示签文详情
    console.log(
      "[Placeholder] Proceed to description page with result:",
      currentResult,
    );

    if (props.onButtonClick) {
      props.onButtonClick(currentResult);
    }
  };

  // 加载中状态
  if (!currentResult) {
    return (
      <div className="relative size-full flex items-center justify-center" style={{ background: 'linear-gradient(-180deg, #F95279 10%, #F55243 100%)' }}>
        <p className="text-white text-[20px]">加载中...</p>
      </div>
    );
  }

  // ===== 渲染完整的 Result 页面 =====
  return (
    <div
      className="relative size-full"
      style={{ background: 'linear-gradient(-180deg, #F95279 10%, #F55243 100%)' }}
      data-name="LuckyDraw_Result"
      data-result-id={currentResult.id}
    >
      {/* 背景装饰图案 */}
      <LuckyDrawBackgroundGroup />

      {/* 签筒 */}
      <LuckyDrawBucket />

      {/* "立即解签"按钮 */}
      <LuckyDrawButton onClick={handleButtonClick} />

      {/* 云朵装饰元素 1（左下角，旋转；z-20 在 bucket 之上） */}
      <div className="absolute flex items-center justify-center left-[-20.2%] right-[62.84%] top-[calc(50%+388.5px)] translate-y-[-50%] z-20">
        <div className="flex-none h-[117px] rotate-[180deg] scale-y-[-100%] w-[225.407px]">
          <LuckyDrawCloudElement />
        </div>
      </div>

      {/* 云朵装饰元素 2（右下角；z-20 在 bucket 之上） */}
      <LuckyDrawCloudElement1 />

      {/* 点击手势提示 */}
      <div
        className="absolute flex h-[84.797px] items-center justify-center left-[219px] top-[723px] w-[76.452px]"
        style={
          {
            "--transform-inner-width": "300",
            "--transform-inner-height": "150",
          } as React.CSSProperties
        }
      >
        <div className="flex-none rotate-[355.966deg]">
          <LandingHoverGesture />
        </div>
      </div>

      {/* 顶部描述文字（动态显示等级）*/}
      <LuckyDrawHeaderDescription level={currentResult.level} />

      {/* 装饰性彩带元素 */}
      <LuckyDrawRibbons />

      {/* ===== 数据驱动的签条组件 ===== */}
      {/* 替换原有的硬编码 LuckyDrawJiedahuanxi 组件 */}
      <div
        className="absolute h-[454px] left-[calc(50%+0.5px)] top-[184px] translate-x-[-50%] w-[116px] z-[1] -translate-y-[10px]"
        data-name="LuckyDraw_FortuneSlip_Container"
      >
        <FortuneSlip result={currentResult} />
      </div>
    </div>
  );
}

// ===== 以下是从 Figma 导出的子组件（精简版）=====
// 这些组件直接从原始文件复制，保持 1:1 像素还原
// Cursor 迁移时需要提取到独立文件
// ===================================================

// ===== 云朵装饰组件 =====

function LuckyDrawCloudSvg2({
  children,
}: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[117px] relative shrink-0 w-[225.407px] -translate-y-[30px]" style={{ animation: 'floatX_cloudBig 10s ease-in-out infinite', transformOrigin: 'center center' }}>
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 226 117"
      >
        <g id="LuckyDraw_cloud_svg">{children}</g>
      </svg>
    </div>
  );
}

function LuckyDrawCloudSvg() {
  return (
    <LuckyDrawCloudSvg2>
      <path
        d={svgPaths.p7283000}
        fill="var(--fill-0, #FFF9EE)"
        id="Vector"
      />
      <path
        d={svgPaths.p19085400}
        fill="var(--fill-0, #F2A638)"
        id="Vector_2"
      />
      <path
        d={svgPaths.p2326e400}
        fill="var(--fill-0, #F2A638)"
        id="Vector_3"
      />
    </LuckyDrawCloudSvg2>
  );
}

function LuckyDrawCloudElement() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative w-full"
      data-name="LuckyDraw_CloudElement_1"
    >
      <LuckyDrawCloudSvg />
    </div>
  );
}

function LuckyDrawCloudSvg1() {
  return (
    <LuckyDrawCloudSvg2>
      <path
        d={svgPaths.p7283000}
        fill="var(--fill-0, #FFF9EE)"
        id="Vector"
      />
      <path
        d={svgPaths.p19085400}
        fill="var(--fill-0, #F2A638)"
        id="Vector_2"
      />
      <path
        d={svgPaths.p33af0f00}
        fill="var(--fill-0, #F2A638)"
        id="Vector_3"
      />
    </LuckyDrawCloudSvg2>
  );
}

function LuckyDrawCloudElement1() {
  return (
    <div
      className="absolute content-stretch flex flex-col items-start left-[58.02%] right-[-15.37%] top-[calc(50%+388.5px)] translate-y-[-50%] z-20"
      data-name="LuckyDraw_CloudElement_2"
    >
      <LuckyDrawCloudSvg1 />
    </div>
  );
}

// ===== 点击手势提示组件 =====

function LandingHoverGestureSvg() {
  return (
    <div
      className="h-[84.451px] relative shrink-0 w-[75.334px]"
      data-name="Landing_hover_gesture_svg"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 76 85"
      >
        <g id="Landing_hover_gesture_svg">
          <g filter="url(#filter0_d_7_3612)" id="HoverGesture">
            <path
              d={svgPaths.pf32f950}
              fill="var(--fill-0, #FFC9B3)"
            />
            <path
              d={svgPaths.pf919600}
              stroke="var(--stroke-0, #984D1B)"
            />
          </g>
        </g>
        <defs>
          <filter
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            height="70.2199"
            id="filter0_d_7_3612"
            width="67.1814"
            x="6.97772"
            y="10.5845"
          >
            <feFlood
              floodOpacity="0"
              result="BackgroundImageFix"
            />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              in2="BackgroundImageFix"
              mode="normal"
              result="effect1_dropShadow_7_3612"
            />
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow_7_3612"
              mode="normal"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

function LandingHoverGesture() {
  return (
    <div
      className="content-stretch flex h-[80px] items-center relative w-[71px]"
      data-name="Landing_HoverGesture"
    >
      <LandingHoverGestureSvg />
    </div>
  );
}

// ===== 顶部描述文字组件（动态显示等级）=====

function LuckyDrawHeaderDescription({ level }: { level?: string }) {
  return (
    <div
      className="absolute content-stretch flex h-[72px] items-center justify-center left-[84px] top-[74px] w-[224px]"
      data-name="LuckyDraw_HeaderDescription"
    >
      <div className="font-['ZiHun151',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#fff9ee] text-[0px] text-center text-shadow-[0px_0.742px_0.742px_rgba(169,99,99,0.25)]">
        <p className="mb-0 text-[32px]">摇<span className="text-[#fff9ee]">签成功！</span></p>
        <p className="text-[28px]">请查收你的幸运签</p>
      </div>
    </div>
  );
}

// ===== "立即解签"按钮组件 =====

function LuckyDrawButton({
  onClick,
}: {
  onClick?: () => void;
}) {
  return (
    <div
      onClick={onClick}
      data-action="proceed-to-description"
      className="absolute flex items-center justify-center left-[calc(50%+0.5px)] top-[710px] translate-x-[-50%] z-20 cursor-pointer min-w-[200px] min-h-[64px] py-4 px-6"
      data-name="LuckyDraw_Button"
      role="button"
      aria-label="立即解签，进入签文解读"
    >
      <div className="bg-white content-stretch flex h-[48px] items-center justify-center px-[31px] py-[12px] rounded-[20px] w-[152px] pointer-events-none">
        <div className="flex flex-col font-['ZiHun151',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#a82d2d] text-[18px] text-center text-nowrap">
          <p className="leading-[normal]">立即解签</p>
        </div>
      </div>
    </div>
  );
}

// ===== 背景装饰图案组件 =====
// 当 USE_LOTTIE_BACKGROUND 为 true 时使用 Lottie 动画替代 SVG；设为 false 可恢复原 SVG 背景

function LuckyDrawBackgroundGroup() {
  const [lottieData, setLottieData] = useState<object | null>(null);

  useEffect(() => {
    if (!USE_LOTTIE_BACKGROUND) return;
    fetch(REWARD_LOTTIE_URL)
      .then((res) => res.json())
      .then(setLottieData)
      .catch(() => setLottieData(null));
  }, []);

  return (
    <div
      className="absolute h-[852.468px] left-0 top-0 w-full overflow-hidden pointer-events-none"
      data-name="LuckyDraw_BackgroundGroup"
    >
      {USE_LOTTIE_BACKGROUND && lottieData ? (
        <div className="absolute inset-0 w-full h-full">
          <Lottie
            animationData={lottieData}
            loop
            style={{ width: "100%", height: "100%", margin: 0 }}
            rendererSettings={{ preserveAspectRatio: "xMidYMid slice" }}
          />
        </div>
      ) : !USE_LOTTIE_BACKGROUND ? (
        <div
          className="absolute inset-[-25.63%_-64.12%_-28.07%_-98.1%]"
          data-name="LuckyDraw_BackgroundPatterns"
        >
          <div className="absolute inset-[-0.02%_-0.12%_-0.01%_-0.12%]">
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 1034 1311"
            >
              <g id="LuckyDraw_BackgroundPatterns">
                <g id="Group">
                  <path
                    d={svgPaths.p2d10e680}
                    id="Vector"
                    stroke="var(--stroke-0, #A43D3F)"
                    strokeMiterlimit="10"
                    strokeWidth="2.53392"
                  />
                  <path
                    d={svgPaths.p34d62600}
                    id="Vector_2"
                    stroke="var(--stroke-0, #A43D3F)"
                    strokeMiterlimit="10"
                    strokeWidth="2.53392"
                  />
                  <path
                    d={svgPaths.p1654ede0}
                    id="Vector_3"
                    stroke="var(--stroke-0, #A43D3F)"
                    strokeMiterlimit="10"
                    strokeWidth="2.53392"
                  />
                  <path
                    d={svgPaths.p822f540}
                    id="Vector_4"
                    stroke="var(--stroke-0, #A43D3F)"
                    strokeMiterlimit="10"
                    strokeWidth="2.53392"
                  />
                  <path
                    d={svgPaths.p3ff6d5e0}
                    id="Vector_5"
                    stroke="var(--stroke-0, #A43D3F)"
                    strokeMiterlimit="10"
                    strokeWidth="2.53392"
                  />
                  <path
                    d={svgPaths.p288e1400}
                    id="Vector_6"
                    stroke="var(--stroke-0, #A43D3F)"
                    strokeMiterlimit="10"
                    strokeWidth="2.53392"
                  />
                  <path
                    d={svgPaths.paa8bb00}
                    id="Vector_7"
                    stroke="var(--stroke-0, #A43D3F)"
                    strokeMiterlimit="10"
                    strokeWidth="2.53392"
                  />
                  <path
                    d={svgPaths.p33f4f300}
                    id="Vector_8"
                    stroke="var(--stroke-0, #A43D3F)"
                    strokeMiterlimit="10"
                    strokeWidth="2.53392"
                  />
                  <path
                    d={svgPaths.p282d6c00}
                    id="Vector_9"
                    stroke="var(--stroke-0, #A43D3F)"
                    strokeMiterlimit="10"
                    strokeWidth="2.53392"
                  />
                  <path
                    d={svgPaths.p2b557500}
                    id="Vector_10"
                    stroke="var(--stroke-0, #A43D3F)"
                    strokeMiterlimit="10"
                    strokeWidth="2.53392"
                  />
                  <path
                    d={svgPaths.p1e85c380}
                    id="Vector_11"
                    stroke="var(--stroke-0, #A43D3F)"
                    strokeMiterlimit="10"
                    strokeWidth="2.53392"
                  />
                  <path
                    d={svgPaths.p2e572a80}
                    id="Vector_12"
                    stroke="var(--stroke-0, #A43D3F)"
                    strokeMiterlimit="10"
                    strokeWidth="2.53392"
                  />
                </g>
                <path
                  d={svgPaths.p19da6200}
                  fill="var(--fill-0, #A43D3F)"
                  id="Vector_13"
                />
              </g>
            </svg>
          </div>
        </div>
      ) : null}
    </div>
  );
}

// ===== 签筒组件（使用 Default/Shake 页面的完整签筒元素）=====

// 辅助组件：BucketButtomVector
type BucketButtomVectorProps = {
  additionalClassNames?: string;
  children?: React.ReactNode;
};

function BucketButtomVector({ children, additionalClassNames = "" }: BucketButtomVectorProps) {
  return (
    <div className={clsx("[grid-area:1_/_1] h-[311.539px] mix-blend-multiply mt-0 relative w-[76.853px]", additionalClassNames)}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 77 312">
        <g id="Vector" opacity="0.2" style={{ mixBlendMode: "multiply" }}>
          {children}
        </g>
      </svg>
    </div>
  );
}

// 辅助组件：Wrapper（用于装饰元素）
type WrapperProps = {
  additionalClassNames?: string;
  children?: React.ReactNode;
};

function Wrapper({ children, additionalClassNames = "" }: WrapperProps) {
  return (
    <div className={clsx("[grid-area:1_/_1] h-[18.009px] mix-blend-soft-light mt-0 relative w-[21.642px]", additionalClassNames)}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 18">
        <g id="Vector" style={{ mixBlendMode: "soft-light" }}>
          {children}
        </g>
      </svg>
    </div>
  );
}

// 装饰组件：BucketButtom
function BucketButtom() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[1.73%] mt-[3.22%] place-items-start relative" data-name="BucketButtom">
      <div className="[grid-area:1_/_1] h-[33.244px] ml-[20.87px] mt-[278.29px] relative w-[202.765px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 203 34">
          <path d={svgPaths.p12edcd80} fill="#FFC871" id="Vector" />
        </svg>
      </div>
      <BucketButtomVector additionalClassNames="ml-0">
        <path d={svgPaths.p1fcc4480} fill="var(--bucket-shadow, #EA502B)" />
      </BucketButtomVector>
      <BucketButtomVector additionalClassNames="ml-[167.67px]">
        <path d={svgPaths.p197d1a80} fill="var(--bucket-shadow, #EA502B)" />
      </BucketButtomVector>
      <div className="[grid-area:1_/_1] h-[34.521px] mix-blend-multiply ml-[1.41px] mt-[18.83px] relative w-[241.69px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 242 35">
          <g id="Vector" opacity="0.2" style={{ mixBlendMode: "multiply" }}>
            <path d={svgPaths.p33078a00} fill="var(--bucket-shadow, #EA502B)" />
          </g>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[10.656px] mix-blend-soft-light ml-[19.16px] mt-[255.57px] relative w-[206.182px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 207 11">
          <g id="Vector" style={{ mixBlendMode: "soft-light" }}>
            <path d={svgPaths.p40b72f2} fill="var(--bucket-highlight, white)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

// 装饰组件：BucketDeco
type BucketDecoVectorProps = {
  additionalClassNames?: string;
};

function BucketDecoVector({ additionalClassNames = "" }: BucketDecoVectorProps) {
  return (
    <Wrapper additionalClassNames={additionalClassNames}>
      <path d={svgPaths.p1f35b8c0} fill="var(--fill-0, white)" />
    </Wrapper>
  );
}

function BucketDeco() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[13.35%] mt-[73.48%] place-items-start relative" data-name="BucketDeco">
      <BucketDecoVector additionalClassNames="ml-0" />
      <Wrapper additionalClassNames="ml-[32.73px]">
        <path d={svgPaths.p135845f0} fill="var(--fill-0, white)" />
      </Wrapper>
      <BucketDecoVector additionalClassNames="ml-[65.45px]" />
      <Wrapper additionalClassNames="ml-[98.18px]">
        <path d={svgPaths.p33d4f100} fill="var(--fill-0, white)" />
      </Wrapper>
      <Wrapper additionalClassNames="ml-[130.9px]">
        <path d={svgPaths.p22154440} fill="var(--fill-0, white)" />
      </Wrapper>
      <Wrapper additionalClassNames="ml-[163.63px]">
        <path d={svgPaths.p36b42000} fill="var(--fill-0, white)" />
      </Wrapper>
    </div>
  );
}

// 装饰组件：BucketEdge
function BucketEdge() {
  return (
    <div className="[grid-area:1_/_1] h-[15.641px] ml-0 mt-0 relative w-[253.281px]" data-name="BucketEdge">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 254 16">
        <g id="BucketEdge">
          <path d={svgPaths.p1bac6e00} fill="var(--bucket-edge-light, #FFC871)" id="Vector" />
          <path d={svgPaths.p17576b00} fill="var(--bucket-edge-mid, #E5AB29)" id="Vector_2" />
          <path d={svgPaths.p1fb11d00} fill="var(--bucket-edge-mid, #E5AB29)" id="Vector_3" />
          <path d={svgPaths.p2cd41d00} fill="var(--bucket-edge-dark, #D67513)" id="Vector_4" opacity="0.47" />
          <path d={svgPaths.p27875a00} fill="var(--bucket-edge-dark, #D67513)" id="Vector_5" opacity="0.47" />
          <path d={svgPaths.p17eb0c00} fill="var(--bucket-edge-dark, #D67513)" id="Vector_6" opacity="0.47" />
        </g>
      </svg>
    </div>
  );
}

/* 完整的 DrawBucket 组件 - 已替换为 PNG，原始 SVG 已备份，回滚请使用 LuckyDraw_Bucket.backup.tsx 恢复 */
function DrawBucket() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="DrawBucket">
      <div className="[grid-area:1_/_1] h-[311.539px] ml-[4.36px] mt-[10.35px] relative w-[244.519px]" data-name="Bucket">
        <img src="/assets/LuckyBucket.png" className="block size-full w-full h-auto object-contain" data-name="Bucket" alt="LuckyBucket" />
      </div>
    </div>
  );
}

// 签筒容器组件（保持原有位置，添加 overflow-hidden；上移 100px，z-index 在签条容器之上）
function LuckyDrawBucket() {
  return (
    <div
      className="absolute content-stretch flex items-center left-[75px] top-[675px] -translate-y-[80px] overflow-hidden z-10"
      data-name="LuckyDraw_Bucket"
    >
      <DrawBucket />
    </div>
  );
}

// ===== 装饰性彩带元素组件 =====

function LuckyDrawRibbons() {
  return (
    <div
      className="absolute content-stretch flex items-center left-[16px] top-[184px]"
      data-name="LuckyDraw_Ribbons"
    >
      <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
        {/* 彩带 SVG 内容 - 保持原样（此处省略详细路径以简化代码）*/}
      </div>
    </div>
  );
}

// ===== Cursor 迁移注释 =====
//
// 【组件架构说明】
//
// 1. LuckyDrawResultPage：数据驱动的包装组件
//    - 接收 resultId 或 result prop
//    - 管理当前显示的签文状态
//    - 协调所有子组件的渲染
//
// 2. FortuneSlip：可复用的签条组件
//    - 独立文件：@/components/FortuneSlip.tsx
//    - 支持正常签和特殊签
//    - 完全数据驱动
//
// 3. Figma 子组件：
//    - 当前直接嵌入在本文件中
//    - 迁移时需要提取到独立文件
//    - 建议目录结构：
//      @/components/luckyDraw/
//        - Background.tsx
//        - Bucket.tsx
//        - Ribbons.tsx
//        - Clouds.tsx
//        - Button.tsx
//        - HeaderDescription.tsx
//
// 【使用示例】
//
// 1. 在路由中使用：
//    <Route path="/result/:id" element={<ResultPageWrapper />} />
//
//    function ResultPageWrapper() {
//      const { id } = useParams();
//      const router = useRouter();
//
//      return (
//        <LuckyDrawResultPage
//          resultId={Number(id)}
//          onButtonClick={(result) => {
//            router.push(`/description/${result.id}`);
//          }}
//        />
//      );
//    }
//
// 2. 直接传入数据：
//    const result = await fetchLuckyDrawResult(id);
//    <LuckyDrawResultPage result={result} onButtonClick={handleClick} />
//
// 3. 随机显示：
//    const randomResult = getRandomLuckyDrawResult();
//    <LuckyDrawResultPage result={randomResult} onButtonClick={handleClick} />
//
// ===============================