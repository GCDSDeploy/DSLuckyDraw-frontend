// ===== TODO(cursor-migration) =====
// 此文件由 Figma Make 自动生成，迁移到 Cursor 后需要处理：
//
// 1. 【图片资源迁移】
//    当前使用 figma:asset 虚拟模块，Cursor 环境无法识别
//    
//    栅格图片（2个）：
//    - imgStuckAtHomeStanding (人物插画)
//      原始: @/assets/cf7166fb13d3d295ab8f9c7c974f5fc8402be6d5.png
//      迁移: 从 Figma 导出为 /assets/images/stuck-at-home-standing.png
//      替换: import imgStuckAtHomeStanding from '@/assets/images/stuck-at-home-standing.png'
//    
//    - imgHandsCheckmark (手势图标)
//      原始: @/assets/39f18a03ce34fe99b872a9f4a54f65dd49c8e0d9.png
//      迁移: 从 Figma 导出为 /assets/images/hands-checkmark.png
//      替换: import imgHandsCheckmark from '@/assets/images/hands-checkmark.png'
//
// 2. 【SVG Mask 图片迁移】
//    共 55 个 SVG mask 图片（imgGroup - imgGroup54）
//    来源: ./svg-2xvnw.tsx
//    
//    迁移建议：
//    - 评估是否可以用 CSS clip-path 替代（减少资源体积）
//    - 如需保留，从 Figma 批量导出到 /assets/svgs/masks/
//    - 批量替换导入路径为 '@/assets/svgs/masks/group-[n].svg'
//
// 3. 【SVG 路径数据迁移】
//    当前从 ./svg-eunazgei67 导入所有 SVG 路径
//    
//    ��移建议：
//    - 提取常用图标为独立 React 组件（/components/icons/）
//    - 保留 path 数据在组��������������内部（不依赖外部文件）
//    - 示例：DecorativePattern.tsx, CloudIcon.tsx 等
//
// 4. 【事件绑定】
//    需要添加交互的元素：
//    - LandingTryCta: "试试手气" 按钮 (data-action="start")
//    - CtaRules: "活动规则" 链接 (data-action="rules")
//
// 5. 【字体应用】
//    当前使用 font-['zihun151hao-lianmengzongyiti:Regular',sans-serif]
//    迁移后确保 /assets/fonts/ 中的字体文件已正确加载
// ==================================

import { useState } from "react";
import svgPaths from "./svg-eunazgei67";
import clsx from "clsx";
import imgStuckAtHomeStanding from "@/assets/Landing_FunkyBCG.gif";
import imgHandsCheckmark from "@/assets/39f18a03ce34fe99b872a9f4a54f65dd49c8e0d9.png";
import imgLandingCloud from "@/assets/Landing_Cloud.svg";
import imgLandingCloudElementSmall from "@/assets/Landing_CloudElement_Small.svg";
import imgLandingDraw from "@/assets/Landing_Draw.svg";
import imgLandingTryCta from "@/assets/Landing_Try_CTA.svg";
import { imgGroup, imgGroup1, imgGroup2, imgGroup3, imgGroup4, imgGroup5, imgGroup6, imgGroup7, imgGroup8, imgGroup9, imgGroup10, imgGroup11, imgGroup12, imgGroup13, imgGroup14, imgGroup15, imgGroup16, imgGroup17, imgGroup18, imgGroup19, imgGroup20, imgGroup21, imgGroup22, imgGroup23, imgGroup24, imgGroup25, imgGroup26, imgGroup27, imgGroup28, imgGroup29, imgGroup30, imgGroup31, imgGroup32, imgGroup33, imgGroup34, imgGroup35, imgGroup36, imgGroup37, imgGroup38, imgGroup39, imgGroup40, imgGroup41, imgGroup42, imgGroup43, imgGroup44, imgGroup45, imgGroup46, imgGroup47, imgGroup48, imgGroup49, imgGroup50, imgGroup51, imgGroup52, imgGroup53, imgGroup54 } from "./svg-2xvnw";

// ===== TODO(cursor-migration) =====
// 导入 PNG 平铺背景图案组件（灯笼）
// 使用 PNG 代替 SVG mask，避免渲染问题
// ==================================
import LandingBackgroundPattern from "./LandingBackgroundPattern";

type Wrapper2Props = {
  additionalClassNames?: string;
};

function Wrapper2({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper2Props>) {
  return (
    <div style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties} className={clsx("flex items-center justify-center relative shrink-0", additionalClassNames)}>
      {children}
    </div>
  );
}
type Wrapper1Props = {
  additionalClassNames?: string;
};

function Wrapper1({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper1Props>) {
  return (
    <div className={clsx("[grid-area:1_/_1] content-stretch flex flex-col items-start ml-0 relative", additionalClassNames)}>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">{children}</div>
      </div>
    </div>
  );
}
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return (
    <div className={clsx("flex-none rotate-[45deg]", additionalClassNames)}>
      <div className="opacity-25 relative size-full" data-name="Vector">
        <div className="absolute inset-[-0.49%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 105 105">
            {children}
          </svg>
        </div>
      </div>
    </div>
  );
}

function Helper1() {
  return (
    <div className="absolute flex inset-0 items-center justify-center">
      <Wrapper additionalClassNames="h-[103.042px] w-[103.043px]">
        <path d={svgPaths.p3578f9f8} id="Vector" stroke="var(--stroke-0, #C9AC6D)" strokeMiterlimit="10" />
      </Wrapper>
    </div>
  );
}

function Helper() {
  return (
    <div className="absolute flex inset-0 items-center justify-center">
      <Wrapper additionalClassNames="size-[103.042px]">
        <path d={svgPaths.p2c840080} id="Vector" stroke="var(--stroke-0, #C9AC6D)" strokeMiterlimit="10" />
      </Wrapper>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-26.17px_-20.862px] mask-size-[145.724px_145.724px] opacity-25" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 94 131">
        <g id="Group">
          <path d={svgPaths.p17754500} fill="var(--fill-0, #C9AC6D)" id="Vector" />
          <path d={svgPaths.p3c5bfe00} fill="var(--fill-0, #C9AC6D)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-[14.32%_17.98%_-3.9%_17.96%]" data-name="Group">
      <Group />
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group1 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents inset-[0_72.85%_83.9%_8.01%]" data-name="Group">
      <ClipPathGroup />
      <Helper />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-26.177px_-20.855px] mask-size-[145.724px_145.724px] opacity-25" data-name="Group" style={{ maskImage: `url('${imgGroup1}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 94 131">
        <g id="Group">
          <path d={svgPaths.p2a204770} fill="var(--fill-0, #C9AC6D)" id="Vector" />
          <path d={svgPaths.p2199f980} fill="var(--fill-0, #C9AC6D)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents inset-[14.31%_17.98%_-3.9%_17.96%]" data-name="Group">
      <Group3 />
    </div>
  );
}

function ClipPathGroup1() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group4 />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents inset-[0_56.65%_83.9%_24.21%]" data-name="Group">
      <ClipPathGroup1 />
      <Helper />
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-26.138px_-20.881px] mask-size-[145.724px_145.724px] opacity-25" data-name="Group" style={{ maskImage: `url('${imgGroup2}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 94 131">
        <g id="Group">
          <path d={svgPaths.p47f8d00} fill="var(--fill-0, #C9AC6D)" id="Vector" />
          <path d={svgPaths.p34f3c900} fill="var(--fill-0, #C9AC6D)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents inset-[14.33%_18%_-3.91%_17.94%]" data-name="Group">
      <Group6 />
    </div>
  );
}

function ClipPathGroup2() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group7 />
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute contents inset-[0_40.46%_83.9%_40.41%]" data-name="Group">
      <ClipPathGroup2 />
      <Helper />
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-26.186px_-20.878px] mask-size-[145.724px_145.724px] opacity-25" data-name="Group" style={{ maskImage: `url('${imgGroup3}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 94 131">
        <g id="Group">
          <path d={svgPaths.p3f37f300} fill="var(--fill-0, #C9AC6D)" id="Vector" />
          <path d={svgPaths.p1ac760c0} fill="var(--fill-0, #C9AC6D)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute contents inset-[14.33%_17.97%_-3.9%_17.97%]" data-name="Group">
      <Group9 />
    </div>
  );
}

function ClipPathGroup3() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group10 />
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute contents inset-[0_24.26%_83.9%_56.6%]" data-name="Group">
      <ClipPathGroup3 />
      <Helper />
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-26.16px_-20.871px] mask-size-[145.724px_145.724px] opacity-25" data-name="Group" style={{ maskImage: `url('${imgGroup4}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 94 131">
        <g id="Group">
          <path d={svgPaths.p8cc3400} fill="var(--fill-0, #C9AC6D)" id="Vector" />
          <path d={svgPaths.pc9b8f00} fill="var(--fill-0, #C9AC6D)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute contents inset-[14.32%_17.99%_-3.9%_17.95%]" data-name="Group">
      <Group12 />
    </div>
  );
}

function ClipPathGroup4() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group13 />
    </div>
  );
}

function Group14() {
  return (
    <div className="absolute contents inset-[0_8.06%_83.9%_72.8%]" data-name="Group">
      <ClipPathGroup4 />
      <Helper />
    </div>
  );
}

function Group15() {
  return (
    <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-26.167px_-20.851px] mask-size-[145.724px_145.724px] opacity-25" data-name="Group" style={{ maskImage: `url('${imgGroup5}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 94 131">
        <g id="Group">
          <path d={svgPaths.p1f4a0580} fill="var(--fill-0, #C9AC6D)" id="Vector" />
          <path d={svgPaths.p23b3b700} fill="var(--fill-0, #C9AC6D)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group16() {
  return (
    <div className="absolute contents inset-[14.31%_17.98%_-3.91%_17.96%]" data-name="Group">
      <Group15 />
    </div>
  );
}

function ClipPathGroup5() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group16 />
    </div>
  );
}

function Group17() {
  return (
    <div className="absolute contents inset-[9.34%_64.8%_74.56%_16.07%]" data-name="Group">
      <ClipPathGroup5 />
      <Helper />
    </div>
  );
}

function Group18() {
  return (
    <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-26.158px_-20.844px] mask-size-[145.724px_145.724px] opacity-25" data-name="Group" style={{ maskImage: `url('${imgGroup6}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 94 131">
        <g id="Group">
          <path d={svgPaths.p11df200} fill="var(--fill-0, #C9AC6D)" id="Vector" />
          <path d={svgPaths.p158bdc00} fill="var(--fill-0, #C9AC6D)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group19() {
  return (
    <div className="absolute contents inset-[14.3%_17.99%_-3.9%_17.95%]" data-name="Group">
      <Group18 />
    </div>
  );
}

function ClipPathGroup6() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group19 />
    </div>
  );
}

function Group20() {
  return (
    <div className="absolute contents inset-[9.34%_48.6%_74.56%_32.26%]" data-name="Group">
      <ClipPathGroup6 />
      <Helper />
    </div>
  );
}

function Group21() {
  return (
    <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-26.188px_-20.825px] mask-size-[145.724px_145.724px] opacity-25" data-name="Group" style={{ maskImage: `url('${imgGroup7}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 94 131">
        <g id="Group">
          <path d={svgPaths.pd636d00} fill="var(--fill-0, #C9AC6D)" id="Vector" />
          <path d={svgPaths.p2033d300} fill="var(--fill-0, #C9AC6D)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group22() {
  return (
    <div className="absolute contents inset-[14.29%_17.97%_-3.89%_17.97%]" data-name="Group">
      <Group21 />
    </div>
  );
}

function ClipPathGroup7() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group22 />
    </div>
  );
}

function Group23() {
  return (
    <div className="absolute contents inset-[9.34%_32.4%_74.56%_48.46%]" data-name="Group">
      <ClipPathGroup7 />
      <Helper1 />
    </div>
  );
}

function Group24() {
  return (
    <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-26.182px_-20.834px] mask-size-[145.724px_145.724px] opacity-25" data-name="Group" style={{ maskImage: `url('${imgGroup8}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 94 131">
        <g id="Group">
          <path d={svgPaths.pf87e600} fill="var(--fill-0, #C9AC6D)" id="Vector" />
          <path d={svgPaths.pf443f80} fill="var(--fill-0, #C9AC6D)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group25() {
  return (
    <div className="absolute contents inset-[14.3%_17.97%_-3.87%_17.97%]" data-name="Group">
      <Group24 />
    </div>
  );
}

function ClipPathGroup8() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group25 />
    </div>
  );
}

function Group26() {
  return (
    <div className="absolute contents inset-[9.34%_16.2%_74.56%_64.66%]" data-name="Group">
      <ClipPathGroup8 />
      <Helper />
    </div>
  );
}

function Group27() {
  return (
    <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-26.192px_-20.81px] mask-size-[145.724px_145.724px] opacity-25" data-name="Group" style={{ maskImage: `url('${imgGroup9}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 94 131">
        <g id="Group">
          <path d={svgPaths.p252d6000} fill="var(--fill-0, #C9AC6D)" id="Vector" />
          <path d={svgPaths.p2b8d7280} fill="var(--fill-0, #C9AC6D)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group28() {
  return (
    <div className="absolute contents inset-[14.28%_17.97%_-3.89%_17.97%]" data-name="Group">
      <Group27 />
    </div>
  );
}

function ClipPathGroup9() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group28 />
    </div>
  );
}

function Group29() {
  return (
    <div className="absolute contents inset-[9.34%_0_74.56%_80.86%]" data-name="Group">
      <ClipPathGroup9 />
      <Helper />
    </div>
  );
}

function Group30() {
  return (
    <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-26.202px_-20.806px] mask-size-[145.724px_145.724px] opacity-25" data-name="Group" style={{ maskImage: `url('${imgGroup10}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 94 131">
        <g id="Group">
          <path d={svgPaths.p12dd8700} fill="var(--fill-0, #C9AC6D)" id="Vector" />
          <path d={svgPaths.p2439e680} fill="var(--fill-0, #C9AC6D)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group31() {
  return (
    <div className="absolute contents inset-[14.28%_17.96%_-3.87%_17.98%]" data-name="Group">
      <Group30 />
    </div>
  );
}

function ClipPathGroup10() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group31 />
    </div>
  );
}

function Group32() {
  return (
    <div className="absolute contents inset-[9.34%_80.86%_74.56%_0]" data-name="Group">
      <ClipPathGroup10 />
      <Helper />
    </div>
  );
}

function Group33() {
  return (
    <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-26.172px_-20.891px] mask-size-[145.724px_145.724px] opacity-25" data-name="Group" style={{ maskImage: `url('${imgGroup11}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 94 131">
        <g id="Group">
          <path d={svgPaths.pa90bb80} fill="var(--fill-0, #C9AC6D)" id="Vector" />
          <path d={svgPaths.p5311e00} fill="var(--fill-0, #C9AC6D)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group34() {
  return (
    <div className="absolute contents inset-[14.34%_17.98%_-3.9%_17.96%]" data-name="Group">
      <Group33 />
    </div>
  );
}

function ClipPathGroup11() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group34 />
    </div>
  );
}

function Group35() {
  return (
    <div className="absolute contents inset-[18.64%_72.85%_65.26%_8.01%]" data-name="Group">
      <ClipPathGroup11 />
      <Helper />
    </div>
  );
}

function Group36() {
  return (
    <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-26.167px_-20.917px] mask-size-[145.724px_145.724px] opacity-25" data-name="Group" style={{ maskImage: `url('${imgGroup12}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 94 131">
        <g id="Group">
          <path d={svgPaths.p2c266c00} fill="var(--fill-0, #C9AC6D)" id="Vector" />
          <path d={svgPaths.pe71bf00} fill="var(--fill-0, #C9AC6D)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group37() {
  return (
    <div className="absolute contents inset-[14.35%_17.98%_-3.91%_17.96%]" data-name="Group">
      <Group36 />
    </div>
  );
}

function ClipPathGroup12() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group37 />
    </div>
  );
}

function Group38() {
  return (
    <div className="absolute contents inset-[18.64%_56.65%_65.26%_24.21%]" data-name="Group">
      <ClipPathGroup12 />
      <Helper />
    </div>
  );
}

function Group39() {
  return (
    <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-26.158px_-20.926px] mask-size-[145.724px_145.724px] opacity-25" data-name="Group" style={{ maskImage: `url('${imgGroup13}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 94 131">
        <g id="Group">
          <path d={svgPaths.p255ebe00} fill="var(--fill-0, #C9AC6D)" id="Vector" />
          <path d={svgPaths.p23cf6780} fill="var(--fill-0, #C9AC6D)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group41() {
  return (
    <div className="absolute contents inset-[14.36%_17.99%_-3.9%_17.95%]" data-name="Group">
      <Group39 />
    </div>
  );
}

function ClipPathGroup13() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group41 />
    </div>
  );
}

function Group42() {
  return (
    <div className="absolute contents inset-[18.64%_40.46%_65.26%_40.41%]" data-name="Group">
      <ClipPathGroup13 />
      <Helper />
    </div>
  );
}

function Group43() {
  return (
    <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-26.173px_-20.907px] mask-size-[145.724px_145.724px] opacity-25" data-name="Group" style={{ maskImage: `url('${imgGroup14}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 94 131">
        <g id="Group">
          <path d={svgPaths.p21142f00} fill="var(--fill-0, #C9AC6D)" id="Vector" />
          <path d={svgPaths.p375a9500} fill="var(--fill-0, #C9AC6D)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group44() {
  return (
    <div className="absolute contents inset-[14.35%_17.98%_-3.9%_17.96%]" data-name="Group">
      <Group43 />
    </div>
  );
}

function ClipPathGroup14() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group44 />
    </div>
  );
}

function Group45() {
  return (
    <div className="absolute contents inset-[18.64%_24.26%_65.26%_56.61%]" data-name="Group">
      <ClipPathGroup14 />
      <Helper />
    </div>
  );
}

function Group46() {
  return (
    <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-26.166px_-20.883px] mask-size-[145.724px_145.724px] opacity-25" data-name="Group" style={{ maskImage: `url('${imgGroup15}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 94 131">
        <g id="Group">
          <path d={svgPaths.p2e5bbf00} fill="var(--fill-0, #C9AC6D)" id="Vector" />
          <path d={svgPaths.p17ee1c80} fill="var(--fill-0, #C9AC6D)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group47() {
  return (
    <div className="absolute contents inset-[14.33%_17.99%_-3.89%_17.96%]" data-name="Group">
      <Group46 />
    </div>
  );
}

function ClipPathGroup15() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group47 />
    </div>
  );
}

function Group48() {
  return (
    <div className="absolute contents inset-[18.64%_8.06%_65.26%_72.81%]" data-name="Group">
      <ClipPathGroup15 />
      <Helper />
    </div>
  );
}

function Group49() {
  return (
    <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-26.153px_-20.863px] mask-size-[145.724px_145.724px] opacity-25" data-name="Group" style={{ maskImage: `url('${imgGroup16}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 94 131">
        <g id="Group">
          <path d={svgPaths.p4c22e00} fill="var(--fill-0, #C9AC6D)" id="Vector" />
          <path d={svgPaths.p28924000} fill="var(--fill-0, #C9AC6D)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group50() {
  return (
    <div className="absolute contents inset-[14.32%_17.99%_-3.9%_17.95%]" data-name="Group">
      <Group49 />
    </div>
  );
}

function ClipPathGroup16() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group50 />
    </div>
  );
}

function Group51() {
  return (
    <div className="absolute contents inset-[27.98%_64.79%_55.92%_16.07%]" data-name="Group">
      <ClipPathGroup16 />
      <Helper />
    </div>
  );
}

function Group52() {
  return (
    <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-26.146px_-20.856px] mask-size-[145.724px_145.724px] opacity-25" data-name="Group" style={{ maskImage: `url('${imgGroup17}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 94 131">
        <g id="Group">
          <path d={svgPaths.p2a16a00} fill="var(--fill-0, #C9AC6D)" id="Vector" />
          <path d={svgPaths.p3dea7e70} fill="var(--fill-0, #C9AC6D)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group53() {
  return (
    <div className="absolute contents inset-[14.31%_18%_-3.9%_17.94%]" data-name="Group">
      <Group52 />
    </div>
  );
}

function ClipPathGroup17() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group53 />
    </div>
  );
}

function Group54() {
  return (
    <div className="absolute contents inset-[27.98%_48.6%_55.92%_32.27%]" data-name="Group">
      <ClipPathGroup17 />
      <Helper />
    </div>
  );
}

function Group55() {
  return (
    <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-26.159px_-20.837px] mask-size-[145.724px_145.724px] opacity-25" data-name="Group" style={{ maskImage: `url('${imgGroup18}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 94 131">
        <g id="Group">
          <path d={svgPaths.p2d40c00} fill="var(--fill-0, #C9AC6D)" id="Vector" />
          <path d={svgPaths.pe396000} fill="var(--fill-0, #C9AC6D)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group56() {
  return (
    <div className="absolute contents inset-[14.3%_17.99%_-3.88%_17.95%]" data-name="Group">
      <Group55 />
    </div>
  );
}

function ClipPathGroup18() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group56 />
    </div>
  );
}

function Group57() {
  return (
    <div className="absolute contents inset-[27.98%_32.4%_55.92%_48.46%]" data-name="Group">
      <ClipPathGroup18 />
      <Helper1 />
    </div>
  );
}

function Group58() {
  return (
    <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-26.17px_-20.863px] mask-size-[145.724px_145.724px] opacity-25" data-name="Group" style={{ maskImage: `url('${imgGroup19}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 94 131">
        <g id="Group">
          <path d={svgPaths.p8790300} fill="var(--fill-0, #C9AC6D)" id="Vector" />
          <path d={svgPaths.p29e1af00} fill="var(--fill-0, #C9AC6D)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group59() {
  return (
    <div className="absolute contents inset-[14.32%_17.98%_-3.9%_17.96%]" data-name="Group">
      <Group58 />
    </div>
  );
}

function ClipPathGroup19() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group59 />
    </div>
  );
}

function Group60() {
  return (
    <div className="absolute contents inset-[27.98%_16.2%_55.92%_64.66%]" data-name="Group">
      <ClipPathGroup19 />
      <Helper />
    </div>
  );
}

function Group61() {
  return (
    <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-26.163px_-20.822px] mask-size-[145.724px_145.724px] opacity-25" data-name="Group" style={{ maskImage: `url('${imgGroup20}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 94 131">
        <g id="Group">
          <path d={svgPaths.p3ec19800} fill="var(--fill-0, #C9AC6D)" id="Vector" />
          <path d={svgPaths.pc2f4400} fill="var(--fill-0, #C9AC6D)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group62() {
  return (
    <div className="absolute contents inset-[14.29%_17.99%_-3.89%_17.95%]" data-name="Group">
      <Group61 />
    </div>
  );
}

function ClipPathGroup20() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group62 />
    </div>
  );
}

function Group63() {
  return (
    <div className="absolute contents inset-[27.98%_0_55.92%_80.86%]" data-name="Group">
      <ClipPathGroup20 />
      <Helper />
    </div>
  );
}

function Group64() {
  return (
    <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-26.175px_-20.819px] mask-size-[145.724px_145.724px] opacity-25" data-name="Group" style={{ maskImage: `url('${imgGroup21}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 94 131">
        <g id="Group">
          <path d={svgPaths.p35032100} fill="var(--fill-0, #C9AC6D)" id="Vector" />
          <path d={svgPaths.p18ccbb00} fill="var(--fill-0, #C9AC6D)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group65() {
  return (
    <div className="absolute contents inset-[14.29%_17.98%_-3.88%_17.96%]" data-name="Group">
      <Group64 />
    </div>
  );
}

function ClipPathGroup21() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group65 />
    </div>
  );
}

function Group66() {
  return (
    <div className="absolute contents inset-[27.98%_80.86%_55.92%_0]" data-name="Group">
      <ClipPathGroup21 />
      <Helper />
    </div>
  );
}

function Group67() {
  return (
    <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-26.172px_-20.875px] mask-size-[145.724px_145.724px] opacity-25" data-name="Group" style={{ maskImage: `url('${imgGroup22}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 94 131">
        <g id="Group">
          <path d={svgPaths.p1915ae00} fill="var(--fill-0, #C9AC6D)" id="Vector" />
          <path d={svgPaths.p172f3ac0} fill="var(--fill-0, #C9AC6D)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group68() {
  return (
    <div className="absolute contents inset-[14.33%_17.98%_-3.9%_17.96%]" data-name="Group">
      <Group67 />
    </div>
  );
}

function ClipPathGroup22() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group68 />
    </div>
  );
}

function Group69() {
  return (
    <div className="absolute contents inset-[37.28%_72.85%_46.62%_8.01%]" data-name="Group">
      <ClipPathGroup22 />
      <Helper />
    </div>
  );
}

function Group70() {
  return (
    <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-26.182px_-20.901px] mask-size-[145.724px_145.724px] opacity-25" data-name="Group" style={{ maskImage: `url('${imgGroup23}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 94 131">
        <g id="Group">
          <path d={svgPaths.p21a8f600} fill="var(--fill-0, #C9AC6D)" id="Vector" />
          <path d={svgPaths.pebfab40} fill="var(--fill-0, #C9AC6D)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group71() {
  return (
    <div className="absolute contents inset-[14.34%_17.97%_-3.91%_17.97%]" data-name="Group">
      <Group70 />
    </div>
  );
}

function ClipPathGroup23() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group71 />
    </div>
  );
}

function Group72() {
  return (
    <div className="absolute contents inset-[37.28%_56.65%_46.62%_24.21%]" data-name="Group">
      <ClipPathGroup23 />
      <Helper />
    </div>
  );
}

function Group73() {
  return (
    <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-26.158px_-20.911px] mask-size-[145.724px_145.724px] opacity-25" data-name="Group" style={{ maskImage: `url('${imgGroup24}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 94 131">
        <g id="Group">
          <path d={svgPaths.p33b53780} fill="var(--fill-0, #C9AC6D)" id="Vector" />
          <path d={svgPaths.p25e2a400} fill="var(--fill-0, #C9AC6D)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group74() {
  return (
    <div className="absolute contents inset-[14.35%_17.99%_-3.9%_17.95%]" data-name="Group">
      <Group73 />
    </div>
  );
}

function ClipPathGroup24() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group74 />
    </div>
  );
}

function Group75() {
  return (
    <div className="absolute contents inset-[37.28%_40.46%_46.62%_40.41%]" data-name="Group">
      <ClipPathGroup24 />
      <Helper />
    </div>
  );
}

function Group76() {
  return (
    <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-26.172px_-20.875px] mask-size-[145.724px_145.724px] opacity-25" data-name="Group" style={{ maskImage: `url('${imgGroup25}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 94 131">
        <g id="Group">
          <path d={svgPaths.p38849f0} fill="var(--fill-0, #C9AC6D)" id="Vector" />
          <path d={svgPaths.p2955f700} fill="var(--fill-0, #C9AC6D)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group77() {
  return (
    <div className="absolute contents inset-[14.33%_17.98%_-3.89%_17.96%]" data-name="Group">
      <Group76 />
    </div>
  );
}

function ClipPathGroup25() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group77 />
    </div>
  );
}

function Group78() {
  return (
    <div className="absolute contents inset-[37.28%_24.26%_46.62%_56.61%]" data-name="Group">
      <ClipPathGroup25 />
      <Helper />
    </div>
  );
}

function Group79() {
  return (
    <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-26.181px_-20.868px] mask-size-[145.724px_145.724px] opacity-25" data-name="Group" style={{ maskImage: `url('${imgGroup26}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 94 131">
        <g id="Group">
          <path d={svgPaths.p38e39300} fill="var(--fill-0, #C9AC6D)" id="Vector" />
          <path d={svgPaths.p16e89cb0} fill="var(--fill-0, #C9AC6D)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group80() {
  return (
    <div className="absolute contents inset-[14.32%_17.97%_-3.89%_17.97%]" data-name="Group">
      <Group79 />
    </div>
  );
}

function ClipPathGroup26() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group80 />
    </div>
  );
}

function Group81() {
  return (
    <div className="absolute contents inset-[37.28%_8.06%_46.62%_72.8%]" data-name="Group">
      <ClipPathGroup26 />
      <Helper />
    </div>
  );
}

function Group82() {
  return (
    <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-26.136px_-20.848px] mask-size-[145.724px_145.724px] opacity-25" data-name="Group" style={{ maskImage: `url('${imgGroup27}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 94 131">
        <g id="Group">
          <path d={svgPaths.p30b33c80} fill="var(--fill-0, #C9AC6D)" id="Vector" />
          <path d={svgPaths.p20c89f00} fill="var(--fill-0, #C9AC6D)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group83() {
  return (
    <div className="absolute contents inset-[14.31%_18.01%_-3.9%_17.94%]" data-name="Group">
      <Group82 />
    </div>
  );
}

function ClipPathGroup27() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group83 />
    </div>
  );
}

function Group84() {
  return (
    <div className="absolute contents inset-[46.62%_64.79%_37.28%_16.07%]" data-name="Group">
      <ClipPathGroup27 />
      <Helper />
    </div>
  );
}

function Group85() {
  return (
    <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-26.18px_-20.84px] mask-size-[145.724px_145.724px] opacity-25" data-name="Group" style={{ maskImage: `url('${imgGroup28}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 94 131">
        <g id="Group">
          <path d={svgPaths.p3f143ab0} fill="var(--fill-0, #C9AC6D)" id="Vector" />
          <path d={svgPaths.p227d000} fill="var(--fill-0, #C9AC6D)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group86() {
  return (
    <div className="absolute contents inset-[14.3%_17.97%_-3.91%_17.97%]" data-name="Group">
      <Group85 />
    </div>
  );
}

function ClipPathGroup28() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group86 />
    </div>
  );
}

function Group87() {
  return (
    <div className="absolute contents inset-[46.62%_48.6%_37.28%_32.26%]" data-name="Group">
      <ClipPathGroup28 />
      <Helper />
    </div>
  );
}

function Group88() {
  return (
    <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-26.176px_-20.837px] mask-size-[145.724px_145.724px] opacity-25" data-name="Group" style={{ maskImage: `url('${imgGroup29}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 94 131">
        <g id="Group">
          <path d={svgPaths.p1922e300} fill="var(--fill-0, #C9AC6D)" id="Vector" />
          <path d={svgPaths.p75d9900} fill="var(--fill-0, #C9AC6D)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group89() {
  return (
    <div className="absolute contents inset-[14.3%_17.98%_-3.9%_17.96%]" data-name="Group">
      <Group88 />
    </div>
  );
}

function ClipPathGroup29() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group89 />
    </div>
  );
}

function Group90() {
  return (
    <div className="absolute contents inset-[46.62%_32.4%_37.28%_48.46%]" data-name="Group">
      <ClipPathGroup29 />
      <Helper1 />
    </div>
  );
}

function Group91() {
  return (
    <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-26.169px_-20.864px] mask-size-[145.724px_145.724px] opacity-25" data-name="Group" style={{ maskImage: `url('${imgGroup30}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 94 131">
        <g id="Group">
          <path d={svgPaths.p15fe32f0} fill="var(--fill-0, #C9AC6D)" id="Vector" />
          <path d={svgPaths.p2bd15c80} fill="var(--fill-0, #C9AC6D)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group92() {
  return (
    <div className="absolute contents inset-[14.32%_17.98%_-3.89%_17.96%]" data-name="Group">
      <Group91 />
    </div>
  );
}

function ClipPathGroup30() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group92 />
    </div>
  );
}

function Group93() {
  return (
    <div className="absolute contents inset-[46.62%_16.2%_37.28%_64.66%]" data-name="Group">
      <ClipPathGroup30 />
      <Helper />
    </div>
  );
}

function Group94() {
  return (
    <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-26.195px_-20.84px] mask-size-[145.724px_145.724px] opacity-25" data-name="Group" style={{ maskImage: `url('${imgGroup31}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 94 131">
        <g id="Group">
          <path d={svgPaths.p10ce63c0} fill="var(--fill-0, #C9AC6D)" id="Vector" />
          <path d={svgPaths.p159aa100} fill="var(--fill-0, #C9AC6D)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group95() {
  return (
    <div className="absolute contents inset-[14.3%_17.96%_-3.9%_17.98%]" data-name="Group">
      <Group94 />
    </div>
  );
}

function ClipPathGroup31() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group95 />
    </div>
  );
}

function Group96() {
  return (
    <div className="absolute contents inset-[46.62%_0_37.28%_80.86%]" data-name="Group">
      <ClipPathGroup31 />
      <Helper />
    </div>
  );
}

function Group97() {
  return (
    <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-26.174px_-20.819px] mask-size-[145.724px_145.724px] opacity-25" data-name="Group" style={{ maskImage: `url('${imgGroup32}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 94 131">
        <g id="Group">
          <path d={svgPaths.p6588a00} fill="var(--fill-0, #C9AC6D)" id="Vector" />
          <path d={svgPaths.p2441ca00} fill="var(--fill-0, #C9AC6D)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group98() {
  return (
    <div className="absolute contents inset-[14.29%_17.98%_-3.88%_17.96%]" data-name="Group">
      <Group97 />
    </div>
  );
}

function ClipPathGroup32() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group98 />
    </div>
  );
}

function Group99() {
  return (
    <div className="absolute contents inset-[46.62%_80.86%_37.28%_0]" data-name="Group">
      <ClipPathGroup32 />
      <Helper />
    </div>
  );
}

function Group100() {
  return (
    <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-26.17px_-20.843px] mask-size-[145.724px_145.724px] opacity-25" data-name="Group" style={{ maskImage: `url('${imgGroup33}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 94 131">
        <g id="Group">
          <path d={svgPaths.p1c6b2500} fill="var(--fill-0, #C9AC6D)" id="Vector" />
          <path d={svgPaths.p3fced4f0} fill="var(--fill-0, #C9AC6D)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group101() {
  return (
    <div className="absolute contents inset-[14.3%_17.98%_-3.88%_17.96%]" data-name="Group">
      <Group100 />
    </div>
  );
}

function ClipPathGroup33() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group101 />
    </div>
  );
}

function Group102() {
  return (
    <div className="absolute contents inset-[55.92%_72.85%_27.98%_8.01%]" data-name="Group">
      <ClipPathGroup33 />
      <Helper />
    </div>
  );
}

function Group103() {
  return (
    <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-26.164px_-20.868px] mask-size-[145.724px_145.724px] opacity-25" data-name="Group" style={{ maskImage: `url('${imgGroup34}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 94 131">
        <g id="Group">
          <path d={svgPaths.p19a63600} fill="var(--fill-0, #C9AC6D)" id="Vector" />
          <path d={svgPaths.pa3515c0} fill="var(--fill-0, #C9AC6D)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group104() {
  return (
    <div className="absolute contents inset-[14.32%_17.99%_-3.88%_17.95%]" data-name="Group">
      <Group103 />
    </div>
  );
}

function ClipPathGroup34() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group104 />
    </div>
  );
}

function Group105() {
  return (
    <div className="absolute contents inset-[55.92%_56.65%_27.98%_24.21%]" data-name="Group">
      <ClipPathGroup34 />
      <Helper />
    </div>
  );
}

function Group106() {
  return (
    <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-26.175px_-20.862px] mask-size-[145.724px_145.724px] opacity-25" data-name="Group" style={{ maskImage: `url('${imgGroup35}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 94 131">
        <g id="Group">
          <path d={svgPaths.p2564c4c0} fill="var(--fill-0, #C9AC6D)" id="Vector" />
          <path d={svgPaths.p46209f0} fill="var(--fill-0, #C9AC6D)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group107() {
  return (
    <div className="absolute contents inset-[14.32%_17.98%_-3.88%_17.96%]" data-name="Group">
      <Group106 />
    </div>
  );
}

function ClipPathGroup35() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group107 />
    </div>
  );
}

function Group108() {
  return (
    <div className="absolute contents inset-[55.92%_40.46%_27.98%_40.41%]" data-name="Group">
      <ClipPathGroup35 />
      <Helper />
    </div>
  );
}

function Group109() {
  return (
    <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-26.17px_-20.842px] mask-size-[145.724px_145.724px] opacity-25" data-name="Group" style={{ maskImage: `url('${imgGroup36}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 94 131">
        <g id="Group">
          <path d={svgPaths.p2beb9e00} fill="var(--fill-0, #C9AC6D)" id="Vector" />
          <path d={svgPaths.p275a7700} fill="var(--fill-0, #C9AC6D)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group110() {
  return (
    <div className="absolute contents inset-[14.3%_17.98%_-3.88%_17.96%]" data-name="Group">
      <Group109 />
    </div>
  );
}

function ClipPathGroup36() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group110 />
    </div>
  );
}

function Group111() {
  return (
    <div className="absolute contents inset-[55.92%_24.26%_27.98%_56.6%]" data-name="Group">
      <ClipPathGroup36 />
      <Helper />
    </div>
  );
}

function Group112() {
  return (
    <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-26.164px_-20.851px] mask-size-[145.724px_145.724px] opacity-25" data-name="Group" style={{ maskImage: `url('${imgGroup37}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 94 131">
        <g id="Group">
          <path d={svgPaths.p1f05de00} fill="var(--fill-0, #C9AC6D)" id="Vector" />
          <path d={svgPaths.p4336ff0} fill="var(--fill-0, #C9AC6D)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group113() {
  return (
    <div className="absolute contents inset-[14.31%_17.99%_-3.87%_17.95%]" data-name="Group">
      <Group112 />
    </div>
  );
}

function ClipPathGroup37() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group113 />
    </div>
  );
}

function Group114() {
  return (
    <div className="absolute contents inset-[55.92%_8.06%_27.98%_72.8%]" data-name="Group">
      <ClipPathGroup37 />
      <Helper />
    </div>
  );
}

function Group115() {
  return (
    <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-26.156px_-20.86px] mask-size-[145.724px_145.724px] opacity-25" data-name="Group" style={{ maskImage: `url('${imgGroup38}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 94 131">
        <g id="Group">
          <path d={svgPaths.p3d092000} fill="var(--fill-0, #C9AC6D)" id="Vector" />
          <path d={svgPaths.p145f1600} fill="var(--fill-0, #C9AC6D)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group116() {
  return (
    <div className="absolute contents inset-[14.31%_17.99%_-3.9%_17.95%]" data-name="Group">
      <Group115 />
    </div>
  );
}

function ClipPathGroup38() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group116 />
    </div>
  );
}

function Group117() {
  return (
    <div className="absolute contents inset-[65.26%_64.79%_18.64%_16.07%]" data-name="Group">
      <ClipPathGroup38 />
      <Helper />
    </div>
  );
}

function Group118() {
  return (
    <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-26.165px_-20.869px] mask-size-[145.724px_145.724px] opacity-25" data-name="Group" style={{ maskImage: `url('${imgGroup39}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 94 131">
        <g id="Group">
          <path d={svgPaths.p3d135480} fill="var(--fill-0, #C9AC6D)" id="Vector" />
          <path d={svgPaths.p3d599e00} fill="var(--fill-0, #C9AC6D)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group119() {
  return (
    <div className="absolute contents inset-[14.32%_17.99%_-3.91%_17.96%]" data-name="Group">
      <Group118 />
    </div>
  );
}

function ClipPathGroup39() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group119 />
    </div>
  );
}

function Group120() {
  return (
    <div className="absolute contents inset-[65.26%_48.6%_18.64%_32.27%]" data-name="Group">
      <ClipPathGroup39 />
      <Helper />
    </div>
  );
}

function Group121() {
  return (
    <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-26.181px_-20.85px] mask-size-[145.724px_145.724px] opacity-25" data-name="Group" style={{ maskImage: `url('${imgGroup40}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 94 131">
        <g id="Group">
          <path d={svgPaths.p22526d00} fill="var(--fill-0, #C9AC6D)" id="Vector" />
          <path d={svgPaths.p39d4c4f0} fill="var(--fill-0, #C9AC6D)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group122() {
  return (
    <div className="absolute contents inset-[14.31%_17.97%_-3.88%_17.97%]" data-name="Group">
      <Group121 />
    </div>
  );
}

function ClipPathGroup40() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group122 />
    </div>
  );
}

function Group123() {
  return (
    <div className="absolute contents inset-[65.26%_32.4%_18.64%_48.46%]" data-name="Group">
      <ClipPathGroup40 />
      <Helper1 />
    </div>
  );
}

function Group124() {
  return (
    <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-26.174px_-20.876px] mask-size-[145.724px_145.724px] opacity-25" data-name="Group" style={{ maskImage: `url('${imgGroup41}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 94 131">
        <g id="Group">
          <path d={svgPaths.p2b6f3700} fill="var(--fill-0, #C9AC6D)" id="Vector" />
          <path d={svgPaths.pf8de400} fill="var(--fill-0, #C9AC6D)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group125() {
  return (
    <div className="absolute contents inset-[14.33%_17.98%_-3.89%_17.96%]" data-name="Group">
      <Group124 />
    </div>
  );
}

function ClipPathGroup41() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group125 />
    </div>
  );
}

function Group126() {
  return (
    <div className="absolute contents inset-[65.26%_16.2%_18.64%_64.66%]" data-name="Group">
      <ClipPathGroup41 />
      <Helper />
    </div>
  );
}

function Group127() {
  return (
    <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-26.167px_-20.852px] mask-size-[145.724px_145.724px] opacity-25" data-name="Group" style={{ maskImage: `url('${imgGroup42}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 94 131">
        <g id="Group">
          <path d={svgPaths.p2416a540} fill="var(--fill-0, #C9AC6D)" id="Vector" />
          <path d={svgPaths.p125e0d00} fill="var(--fill-0, #C9AC6D)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group128() {
  return (
    <div className="absolute contents inset-[14.31%_17.98%_-3.88%_17.96%]" data-name="Group">
      <Group127 />
    </div>
  );
}

function ClipPathGroup42() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group128 />
    </div>
  );
}

function Group129() {
  return (
    <div className="absolute contents inset-[65.26%_0_18.64%_80.86%]" data-name="Group">
      <ClipPathGroup42 />
      <Helper />
    </div>
  );
}

function Group130() {
  return (
    <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-26.163px_-20.848px] mask-size-[145.724px_145.724px] opacity-25" data-name="Group" style={{ maskImage: `url('${imgGroup43}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 94 131">
        <g id="Group">
          <path d={svgPaths.p3eea3e80} fill="var(--fill-0, #C9AC6D)" id="Vector" />
          <path d={svgPaths.p3176b700} fill="var(--fill-0, #C9AC6D)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group131() {
  return (
    <div className="absolute contents inset-[14.31%_17.99%_-3.89%_17.95%]" data-name="Group">
      <Group130 />
    </div>
  );
}

function ClipPathGroup43() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group131 />
    </div>
  );
}

function Group132() {
  return (
    <div className="absolute contents inset-[65.26%_80.86%_18.64%_0]" data-name="Group">
      <ClipPathGroup43 />
      <Helper />
    </div>
  );
}

function Group133() {
  return (
    <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-26.192px_-20.838px] mask-size-[145.724px_145.724px] opacity-25" data-name="Group" style={{ maskImage: `url('${imgGroup44}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 94 131">
        <g id="Group">
          <path d={svgPaths.p1f36f900} fill="var(--fill-0, #C9AC6D)" id="Vector" />
          <path d={svgPaths.p3c1caf70} fill="var(--fill-0, #C9AC6D)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group134() {
  return (
    <div className="absolute contents inset-[14.3%_17.97%_-3.89%_17.97%]" data-name="Group">
      <Group133 />
    </div>
  );
}

function ClipPathGroup44() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group134 />
    </div>
  );
}

function Group135() {
  return (
    <div className="absolute contents inset-[74.56%_72.85%_9.34%_8.01%]" data-name="Group">
      <ClipPathGroup44 />
      <Helper />
    </div>
  );
}

function Group136() {
  return (
    <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-26.17px_-20.864px] mask-size-[145.724px_145.724px] opacity-25" data-name="Group" style={{ maskImage: `url('${imgGroup45}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 94 131">
        <g id="Group">
          <path d={svgPaths.p1b85400} fill="var(--fill-0, #C9AC6D)" id="Vector" />
          <path d={svgPaths.p2cea5000} fill="var(--fill-0, #C9AC6D)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group137() {
  return (
    <div className="absolute contents inset-[14.32%_17.98%_-3.89%_17.96%]" data-name="Group">
      <Group136 />
    </div>
  );
}

function ClipPathGroup45() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group137 />
    </div>
  );
}

function Group138() {
  return (
    <div className="absolute contents inset-[74.56%_56.65%_9.34%_24.21%]" data-name="Group">
      <ClipPathGroup45 />
      <Helper />
    </div>
  );
}

function Group139() {
  return (
    <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-26.16px_-20.857px] mask-size-[145.724px_145.724px] opacity-25" data-name="Group" style={{ maskImage: `url('${imgGroup46}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 94 131">
        <g id="Group">
          <path d={svgPaths.p18f0fa80} fill="var(--fill-0, #C9AC6D)" id="Vector" />
          <path d={svgPaths.p9a12b80} fill="var(--fill-0, #C9AC6D)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group140() {
  return (
    <div className="absolute contents inset-[14.31%_17.99%_-3.9%_17.95%]" data-name="Group">
      <Group139 />
    </div>
  );
}

function ClipPathGroup46() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group140 />
    </div>
  );
}

function Group141() {
  return (
    <div className="absolute contents inset-[74.56%_40.46%_9.34%_40.41%]" data-name="Group">
      <ClipPathGroup46 />
      <Helper />
    </div>
  );
}

function Group142() {
  return (
    <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-26.176px_-20.855px] mask-size-[145.724px_145.724px] opacity-25" data-name="Group" style={{ maskImage: `url('${imgGroup47}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 94 131">
        <g id="Group">
          <path d={svgPaths.p29c18200} fill="var(--fill-0, #C9AC6D)" id="Vector" />
          <path d={svgPaths.p3ef998f2} fill="var(--fill-0, #C9AC6D)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group143() {
  return (
    <div className="absolute contents inset-[14.31%_17.98%_-3.89%_17.96%]" data-name="Group">
      <Group142 />
    </div>
  );
}

function ClipPathGroup47() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group143 />
    </div>
  );
}

function Group144() {
  return (
    <div className="absolute contents inset-[74.56%_24.26%_9.34%_56.61%]" data-name="Group">
      <ClipPathGroup47 />
      <Helper />
    </div>
  );
}

function Group145() {
  return (
    <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-26.168px_-20.864px] mask-size-[145.724px_145.724px] opacity-25" data-name="Group" style={{ maskImage: `url('${imgGroup48}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 94 131">
        <g id="Group">
          <path d={svgPaths.p3d739c00} fill="var(--fill-0, #C9AC6D)" id="Vector" />
          <path d={svgPaths.p24f615f0} fill="var(--fill-0, #C9AC6D)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group146() {
  return (
    <div className="absolute contents inset-[14.32%_17.98%_-3.89%_17.96%]" data-name="Group">
      <Group145 />
    </div>
  );
}

function ClipPathGroup48() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group146 />
    </div>
  );
}

function Group147() {
  return (
    <div className="absolute contents inset-[74.56%_8.06%_9.34%_72.8%]" data-name="Group">
      <ClipPathGroup48 />
      <Helper />
    </div>
  );
}

function Group148() {
  return (
    <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-26.14px_-20.894px] mask-size-[145.724px_145.724px] opacity-25" data-name="Group" style={{ maskImage: `url('${imgGroup49}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 94 131">
        <g id="Group">
          <path d={svgPaths.p3fc75100} fill="var(--fill-0, #C9AC6D)" id="Vector" />
          <path d={svgPaths.p162aba80} fill="var(--fill-0, #C9AC6D)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group149() {
  return (
    <div className="absolute contents inset-[14.34%_18%_-3.9%_17.94%]" data-name="Group">
      <Group148 />
    </div>
  );
}

function ClipPathGroup49() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group149 />
    </div>
  );
}

function Group150() {
  return (
    <div className="absolute contents inset-[83.9%_64.79%_0_16.07%]" data-name="Group">
      <ClipPathGroup49 />
      <Helper />
    </div>
  );
}

function Group151() {
  return (
    <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-26.149px_-20.903px] mask-size-[145.724px_145.724px] opacity-25" data-name="Group" style={{ maskImage: `url('${imgGroup50}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 94 131">
        <g id="Group">
          <path d={svgPaths.p3e0917f0} fill="var(--fill-0, #C9AC6D)" id="Vector" />
          <path d={svgPaths.p2a43dcf0} fill="var(--fill-0, #C9AC6D)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group152() {
  return (
    <div className="absolute contents inset-[14.34%_18%_-3.92%_17.94%]" data-name="Group">
      <Group151 />
    </div>
  );
}

function ClipPathGroup50() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group152 />
    </div>
  );
}

function Group153() {
  return (
    <div className="absolute contents inset-[83.9%_48.6%_0_32.27%]" data-name="Group">
      <ClipPathGroup50 />
      <Helper />
    </div>
  );
}

function Group154() {
  return (
    <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-26.163px_-20.884px] mask-size-[145.724px_145.724px] opacity-25" data-name="Group" style={{ maskImage: `url('${imgGroup51}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 94 131">
        <g id="Group">
          <path d={svgPaths.p3525f570} fill="var(--fill-0, #C9AC6D)" id="Vector" />
          <path d={svgPaths.p34f1d0a0} fill="var(--fill-0, #C9AC6D)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group155() {
  return (
    <div className="absolute contents inset-[14.33%_17.99%_-3.88%_17.95%]" data-name="Group">
      <Group154 />
    </div>
  );
}

function ClipPathGroup51() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group155 />
    </div>
  );
}

function Group156() {
  return (
    <div className="absolute contents inset-[83.9%_32.4%_0_48.46%]" data-name="Group">
      <ClipPathGroup51 />
      <Helper1 />
    </div>
  );
}

function Group157() {
  return (
    <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-26.155px_-20.893px] mask-size-[145.724px_145.724px] opacity-25" data-name="Group" style={{ maskImage: `url('${imgGroup52}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 94 131">
        <g id="Group">
          <path d={svgPaths.p35279170} fill="var(--fill-0, #C9AC6D)" id="Vector" />
          <path d={svgPaths.p1ecb0600} fill="var(--fill-0, #C9AC6D)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group158() {
  return (
    <div className="absolute contents inset-[14.34%_17.99%_-3.89%_17.95%]" data-name="Group">
      <Group157 />
    </div>
  );
}

function ClipPathGroup52() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group158 />
    </div>
  );
}

function Group159() {
  return (
    <div className="absolute contents inset-[83.9%_16.2%_0_64.66%]" data-name="Group">
      <ClipPathGroup52 />
      <Helper />
    </div>
  );
}

function Group160() {
  return (
    <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-26.148px_-20.869px] mask-size-[145.724px_145.724px] opacity-25" data-name="Group" style={{ maskImage: `url('${imgGroup53}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 94 131">
        <g id="Group">
          <path d={svgPaths.p27c82800} fill="var(--fill-0, #C9AC6D)" id="Vector" />
          <path d={svgPaths.p30aed180} fill="var(--fill-0, #C9AC6D)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group161() {
  return (
    <div className="absolute contents inset-[14.32%_18%_-3.88%_17.94%]" data-name="Group">
      <Group160 />
    </div>
  );
}

function ClipPathGroup53() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group161 />
    </div>
  );
}

function Group162() {
  return (
    <div className="absolute contents inset-[83.9%_0_0_80.86%]" data-name="Group">
      <ClipPathGroup53 />
      <Helper />
    </div>
  );
}

function Group163() {
  return (
    <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-26.162px_-20.882px] mask-size-[145.724px_145.724px] opacity-25" data-name="Group" style={{ maskImage: `url('${imgGroup54}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 94 131">
        <g id="Group">
          <path d={svgPaths.p33231eb2} fill="var(--fill-0, #C9AC6D)" id="Vector" />
          <path d={svgPaths.pc58ae00} fill="var(--fill-0, #C9AC6D)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group164() {
  return (
    <div className="absolute contents inset-[14.33%_17.99%_-3.89%_17.95%]" data-name="Group">
      <Group163 />
    </div>
  );
}

function ClipPathGroup54() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group164 />
    </div>
  );
}

function Group165() {
  return (
    <div className="absolute contents inset-[83.9%_80.86%_0_0]" data-name="Group">
      <ClipPathGroup54 />
      <Helper />
    </div>
  );
}

function Group166() {
  return (
    <div className="absolute contents inset-[-3.17%_-46.93%_-3.09%_-46.82%]" data-name="Group">
      <Group2 />
      <Group5 />
      <Group8 />
      <Group11 />
      <Group14 />
      <Group17 />
      <Group20 />
      <Group23 />
      <Group26 />
      <Group29 />
      <Group32 />
      <Group35 />
      <Group38 />
      <Group42 />
      <Group45 />
      <Group48 />
      <Group51 />
      <Group54 />
      <Group57 />
      <Group60 />
      <Group63 />
      <Group66 />
      <Group69 />
      <Group72 />
      <Group75 />
      <Group78 />
      <Group81 />
      <Group84 />
      <Group87 />
      <Group90 />
      <Group93 />
      <Group96 />
      <Group99 />
      <Group102 />
      <Group105 />
      <Group108 />
      <Group111 />
      <Group114 />
      <Group117 />
      <Group120 />
      <Group123 />
      <Group126 />
      <Group129 />
      <Group132 />
      <Group135 />
      <Group138 />
      <Group141 />
      <Group144 />
      <Group147 />
      <Group150 />
      <Group153 />
      <Group156 />
      <Group159 />
      <Group162 />
      <Group165 />
    </div>
  );
}

function BackgroundSvg() {
  return (
    <div className="absolute contents inset-[-3.17%_-46.93%_-3.09%_-46.82%]" data-name="Background_svg">
      <Group166 />
    </div>
  );
}

// ===== TODO(cursor-migration) =====
// 原 Figma 生成的简化版本已重命名为 LandingBackgroundLayerSimple
// 完整的背景装饰层组件从 LandingBackgroundLayer.tsx 导入
// ==================================
function LandingBackgroundLayerSimple() {
  return (
    <div className="absolute content-stretch flex flex-col h-[852px] items-start left-0 overflow-clip p-[10px] top-0 w-full" data-name="Landing_Background_Layer">
      <BackgroundSvg />
    </div>
  );
}

function DsLogo() {
  return (
    <div className="h-[36px] relative shrink-0 w-[113px]" data-name="DS_Logo">
      <div className="absolute inset-[-0.39%_0_-0.48%_-0.12%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 114 37">
          <g id="DS_Logo">
            <g id="LOGO_DS COMPONENTS*">
              <path d={svgPaths.p2840fdf0} id="Vector" stroke="var(--stroke-0, white)" strokeMiterlimit="10" strokeWidth="0.5" />
              <path d={svgPaths.p32afe300} id="Vector_2" stroke="var(--stroke-0, white)" strokeMiterlimit="10" strokeWidth="0.5" />
            </g>
            <path d={svgPaths.p22a55d40} fill="var(--fill-0, white)" id="Vector_3" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function CtaRules() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[56px]" data-name="CTA_Rules">
      <div className="flex flex-col font-['ZiHun151',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[14px] text-center text-shadow-[0px_0.742px_0.742px_rgba(169,99,99,0.25)] text-white w-[min-content]">
        <p className="leading-[1.2] whitespace-nowrap">活动规则</p>
      </div>
      <div className="h-0 relative shrink-0 w-[56px]">
        <div className="absolute inset-[-1px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 2">
            <path d="M0 1H56" id="Vector 26" stroke="var(--stroke-0, white)" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function LandingBottomArea() {
  return (
    <div className="absolute content-stretch flex items-end justify-between bottom-0 left-1/2 -translate-x-1/2 w-[352px]" style={{ paddingBottom: 'max(20px, env(safe-area-inset-bottom, 0px))' }} data-name="Landing_BottomArea">
      <DsLogo />
      <CtaRules />
    </div>
  );
}

type LandingTryCtaProps = {
  onClick?: () => void;
  isReturnLayout?: boolean;
};

function LandingTryCta({ onClick, isReturnLayout = false }: LandingTryCtaProps = {}) {
  return (
    <div
      onClick={onClick}
      data-action="start"
      className="absolute z-10 content-stretch flex items-center justify-center w-[88px] h-[88px] cursor-pointer"
      data-name="Landing_Try_CTA"
      style={{
        left: '50%',
        top: isReturnLayout ? '571px' : '646px',
        animation: 'pulseCTA 1.2s ease-in-out infinite',
        transformOrigin: 'center center',
      }}
    >
      <img alt="" className="absolute inset-0 w-full h-full pointer-events-none" src={imgLandingTryCta} aria-hidden />
      <div className="flex flex-col font-['ZiHun151',sans-serif] justify-center leading-[0] not-italic relative z-[1] text-[#3F0400] text-[24px] text-center text-shadow-[0px_0.742px_0.742px_rgba(169,99,99,0.25)] w-[71px]">
        <p className="leading-[1.11]">试试手气</p>
      </div>
    </div>
  );
}

function LandingHoverGesture() {
  return (
    <div className="h-[80px] relative w-[71px] opacity-90" data-name="Landing_HoverGesture" style={{ animation: 'floatGesture 1s ease-in-out infinite', transformOrigin: 'center center', visibility: 'hidden' }}>
      <div className="absolute inset-[0_-4.45%_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 75 80">
          <g id="Landing_HoverGesture">
            <g filter="url(#filter0_d_6_716)" id="Vector">
              <path d={svgPaths.p399c5e00} fill="var(--fill-0, #FFC9B3)" />
              <path d={svgPaths.p14c76300} stroke="var(--stroke-0, #984D1B)" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="70.2199" id="filter0_d_6_716" width="67.1814" x="6.97772" y="8.35895">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_6_716" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_6_716" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function LandingDescription({ isReturnLayout = false }: { isReturnLayout?: boolean }) {
  return (
    <div
      className="absolute content-stretch flex items-center justify-center left-1/2 p-[10px] translate-x-[-50%]"
      style={{ top: isReturnLayout ? '486px' : '561px' }}
      data-name="Landing_Description"
    >
      <div className="font-['ZiHun151',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[#fff9ee] text-[0px] text-center text-nowrap">
        <p className="mb-0 text-[24px]">摇好签，拿好礼</p>
        <p className="text-[14px]">DS祝你新年行好运+</p>
      </div>
    </div>
  );
}

function TitleYear() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[105px] top-[9px] w-[170px]" data-name="Title_Year">
      <div className="flex h-[126.907px] items-center justify-center relative shrink-0 w-[169.917px]" style={{ "--transform-inner-width": "151.90625", "--transform-inner-height": "99.890625" } as React.CSSProperties}>
        <div className="flex-none rotate-[349.277deg]">
          <div className="flex flex-col font-['ShangShouCangShu',sans-serif] justify-center leading-[0] not-italic relative text-[83.25px] text-center text-nowrap text-shadow-[0px_2.144px_2.144px_rgba(169,99,99,0.25)] tracking-[-8.325px] text-[#FFE7AB]">
            <p className="leading-[1.2]">2026</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TitleTheme() {
  return (
    <div className="absolute contents font-['ShangShouCangShu',sans-serif] leading-[0] left-0 not-italic text-[#fff9ee] text-center text-nowrap top-0" data-name="Title_Theme">
      <div className="absolute flex flex-col justify-center left-[72px] text-[162.819px] text-shadow-[0px_4.194px_4.194px_rgba(169,99,99,0.25)] top-[97.5px] translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[1.2] text-nowrap">好</p>
      </div>
      <div className="absolute flex flex-col justify-center left-[159.88px] text-[126.757px] text-shadow-[0px_3.265px_3.265px_rgba(169,99,99,0.25)] top-[153.91px] translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[1.2] text-nowrap">兆</p>
      </div>
      <div className="absolute flex flex-col justify-center left-[250.77px] text-[126.757px] text-shadow-[0px_3.265px_3.265px_rgba(169,99,99,0.25)] top-[132.58px] translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[1.2] text-nowrap">头</p>
      </div>
    </div>
  );
}

function LandingHeader({ isReturnLayout = false }: { isReturnLayout?: boolean }) {
  return (
    <div
      className="w-[307px] text-left content-stretch flex flex-col gap-[9.275px] items-start pb-[13.912px] px-[29.68px]"
      style={{
        position: 'absolute',
        top: isReturnLayout ? '-22px' : '13px',
        left: '50%',
        transform: 'translateX(-50%)',
        paddingTop: 'max(16px, env(safe-area-inset-top, 0px))',
      }}
      data-name="Landing_Header"
    >
      <TitleYear />
      <TitleTheme />
    </div>
  );
}

function LandingCloudSvg() {
  return (
    <div className="h-[54px] relative shrink-0 w-[104px] scale-x-[-1]" data-name="landing_cloud_svg">
      <img alt="" className="block size-full object-contain object-center" style={{ animation: 'floatX_cloudRight 8s ease-in-out infinite', transformOrigin: 'center center' }} src={imgLandingCloudElementSmall} />
    </div>
  );
}

function CloudElement() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col items-start ml-[345px] mt-[41px] relative w-[104.023px]" data-name="CloudElement">
      <LandingCloudSvg />
    </div>
  );
}

function LandingCloudSvg1() {
  return (
    <div className="h-[54px] relative w-[104px]" data-name="landing_cloud_svg" style={{ transform: 'rotate(180deg) scaleY(-1)' }}>
      <img alt="" className="block size-full object-contain object-center" style={{ animation: 'floatX_cloudLeft 8s ease-in-out infinite', transformOrigin: 'center center' }} src={imgLandingCloudElementSmall} />
    </div>
  );
}

function LandingCloudElement() {
  return (
    <Wrapper1 additionalClassNames="mt-[400px] w-[134px] ml-[25px]">
      <LandingCloudSvg1 />
    </Wrapper1>
  );
}

function LandingDrawSvg() {
  const [shakeDelay, setShakeDelay] = useState(() => `${4 + Math.random() * 2}s`);
  const [shakeKey, setShakeKey] = useState(0);
  return (
    <div
      key={shakeKey}
      className="h-[254.628px] relative w-[76.912px] flex items-center justify-center"
      data-name="landing_draw_svg"
      style={{
        animation: "shakeDraw 0.6s ease-in-out 1",
        animationDelay: shakeDelay,
        transformOrigin: "bottom center",
      }}
      onAnimationEnd={() => {
        setShakeDelay(`${4 + Math.random() * 2}s`);
        setShakeKey((k) => k + 1);
      }}
    >
      <img alt="" className="block max-h-full max-w-full w-auto h-auto object-contain" src={imgLandingDraw} />
    </div>
  );
}

function LandingDraw() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex items-center ml-[49px] mt-[15.48px] relative" data-name="Landing_Draw">
      <Wrapper2 additionalClassNames="h-[265.858px] w-[140.193px]">
        <div className="flex-none" style={{ transform: 'rotate(-12deg)' }} data-name="landing_draw_svg">
          <LandingDrawSvg />
        </div>
      </Wrapper2>
    </div>
  );
}

function LandingDrawSvg1() {
  const [shakeDelay, setShakeDelay] = useState(() => `${4 + Math.random() * 2}s`);
  const [shakeKey, setShakeKey] = useState(0);
  return (
    <div
      key={shakeKey}
      className="h-[231.918px] relative w-[74.912px] flex items-center justify-center"
      data-name="landing_draw_svg"
      style={{
        animation: "shakeDraw 0.6s ease-in-out 1",
        animationDelay: shakeDelay,
        transformOrigin: "bottom center",
      }}
      onAnimationEnd={() => {
        setShakeDelay(`${4 + Math.random() * 2}s`);
        setShakeKey((k) => k + 1);
      }}
    >
      <img alt="" className="block max-h-full max-w-full w-auto h-auto object-contain" src={imgLandingDraw} />
    </div>
  );
}

function LandingDraw1() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex items-center ml-[273px] mt-[50.48px] relative" data-name="Landing_Draw">
      <Wrapper2 additionalClassNames="h-[240.241px] w-[107.275px]">
        <div className="flex-none" style={{ transform: 'rotate(24deg)' }}>
          <LandingDrawSvg1 />
        </div>
      </Wrapper2>
    </div>
  );
}

function LandingCloudSvg2() {
  return (
    <div className="h-[186.86px] relative w-[360px]" data-name="landing_cloud_svg">
      <img
        alt=""
        className="block size-full object-contain object-center"
        style={{
          animation: 'floatX_cloudBig 10s ease-in-out infinite',
          transformOrigin: 'center center',
        }}
        src={imgLandingCloud}
      />
    </div>
  );
}

function LandingCloud() {
  return (
    <Wrapper1 additionalClassNames="mt-[155.48px] w-[399px]">
      <LandingCloudSvg2 />
    </Wrapper1>
  );
}

function Group40() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative">
      <div className="[grid-area:1_/_1] absolute left-[141px] top-[6.42px] w-[185.1px] h-[380px] ml-0 mt-0" data-name="Stuck at Home Standing">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute inset-0 w-full h-full object-contain object-center" src={imgStuckAtHomeStanding} />
        </div>
      </div>
      <div className="[grid-area:1_/_1] h-[24.331px] ml-[103.96px] mt-[84.05px] relative w-[35.391px] opacity-0 pointer-events-none invisible" data-name="Hands Checkmark" aria-hidden>
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgHandsCheckmark} />
      </div>
    </div>
  );
}

function LandingCharacterSvg({ isReturnLayout = false }: { isReturnLayout?: boolean }) {
  return (
    <div className="shrink-0" data-name="Landing_character_svg">
      <img
        alt=""
        className="fixed z-30 pointer-events-none"
        style={{
          left: '0%',
          top: '10%',
          transform: isReturnLayout ? 'scale(1.05) translateY(-75px)' : 'scale(1.05)',
          transformOrigin: 'left top',
        }}
        src={imgStuckAtHomeStanding}
      />
    </div>
  );
}

function LandingCharacter({ isReturnLayout = false }: { isReturnLayout?: boolean }) {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex items-center ml-[152px] mt-0 relative" data-name="landing_Character">
      <LandingCharacterSvg isReturnLayout={isReturnLayout} />
    </div>
  );
}

function LandingIllustration({ isReturnLayout = false }: { isReturnLayout?: boolean }) {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Landing Illustration">
      <CloudElement />
      <LandingCloudElement />
      <LandingDraw />
      <LandingDraw1 />
      <LandingCloud />
      <LandingCharacter isReturnLayout={isReturnLayout} />
    </div>
  );
}

function LandingIllustration1({ isReturnLayout = false }: { isReturnLayout?: boolean }) {
  return (
    <div
      className="absolute content-stretch flex items-center left-[-37px]"
      style={{ top: isReturnLayout ? '145px' : '220px' }}
      data-name="Landing Illustration"
    >
      <LandingIllustration isReturnLayout={isReturnLayout} />
    </div>
  );
}

// ===== 迁移提示 =====
// 添加事件处理 Props 接口
// ====================
type LandingProps = {
  onStartClick?: () => void;
  onRulesClick?: () => void;
  /** 微信 WebView 从下一页返回时为 true，用于上移布局避开底部导航栏 */
  isReturnLayout?: boolean;
};

export default function Landing({ onStartClick, onRulesClick, isReturnLayout = false }: LandingProps = {}) {
  return (
    <div className="relative block min-h-dvh min-h-full w-full text-center" data-name="Landing">
      <LandingBackgroundPattern />
      <LandingBottomArea />
      <LandingTryCta onClick={onStartClick} isReturnLayout={isReturnLayout} />
      <div
        className="absolute z-20 flex h-[84.797px] items-center justify-center left-[201.27px] w-[76.452px]"
        style={
          {
            "--transform-inner-width": "0",
            "--transform-inner-height": "0",
            top: isReturnLayout ? "638.6px" : "713.6px",
          } as React.CSSProperties
        }
      >
        <div className="flex-none rotate-[355.966deg]">
          <LandingHoverGesture />
        </div>
      </div>
      <LandingDescription isReturnLayout={isReturnLayout} />
      <LandingHeader isReturnLayout={isReturnLayout} />
      <LandingIllustration1 isReturnLayout={isReturnLayout} />
    </div>
  );
}