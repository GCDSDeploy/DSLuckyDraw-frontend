import svgPaths from "./svg-nux0t1kk0a";
import clsx from "clsx";
import imgLandingBackgroundLayerGreen from "@/assets/09245eba98b5559b1bc319006b1f48d78893cfe9.png";
import img9MasksTr from "@/assets/4b2c92b387b9afd0c7fd0f4679506347da0975a4.png";
import imgStuckAtHomeStanding from "@/assets/271cd78c52428df5b9cc620c085c0182c0d98d87.png";
import imgCroodsArrowDown from "@/assets/f91f9545390252a6611c7f7d585ca3efe3a8716a.png";
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return (
    <div className={clsx("[grid-area:1_/_1] h-[30.262px] ml-0 relative w-[48.233px]", additionalClassNames)}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49 31">
        {children}
      </svg>
    </div>
  );
}
type Group2Props = {
  additionalClassNames?: string;
};

function Group2({ children, additionalClassNames = "" }: React.PropsWithChildren<Group2Props>) {
  return (
    <div className={clsx("[grid-area:1_/_1] relative w-[1.905px]", additionalClassNames)}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 8">
        <g id="Group">{children}</g>
      </svg>
    </div>
  );
}
type TextProps = {
  text: string;
  additionalClassNames?: string;
};

function Text({ text, additionalClassNames = "" }: TextProps) {
  return (
    <div className={clsx("content-stretch flex items-center justify-center py-[12px] relative size-full", additionalClassNames)}>
      <div className="flex flex-col font-['zihun151hao-lianmengzongyiti:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212121] text-[18px] text-center text-nowrap">
        <p className="leading-[normal]">{text}</p>
      </div>
    </div>
  );
}
type Group519MasksTrImageProps = {
  additionalClassNames?: string;
};

function Group519MasksTrImage({ additionalClassNames = "" }: Group519MasksTrImageProps) {
  return (
    <div className={clsx("h-[78px] relative w-[81px]", additionalClassNames)}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[325.64%] left-[-231%] max-w-none top-0 w-[331.13%]" src={img9MasksTr} />
      </div>
    </div>
  );
}

function LandingBackgroundLayerGreen() {
  return (
    <div className="absolute h-[852px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[393px]" data-name="Landing_Background_LayerGreen">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLandingBackgroundLayerGreen} />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute h-[466.5px] left-[calc(50%-0.5px)] top-[calc(50%+0.25px)] translate-x-[-50%] translate-y-[-50%] w-[337px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 337 467">
        <g id="Group 8">
          <path d={svgPaths.p2e0742c0} fill="var(--fill-0, white)" id="Rectangle 3" />
        </g>
      </svg>
    </div>
  );
}

function Group13() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-[#cc2f3a] h-[15px] ml-[50px] mt-[85px] w-[208px]" />
      <div className="[grid-area:1_/_1] flex flex-col font-['zihun151hao-lianmengzongyiti:Regular',sans-serif] justify-center leading-[0] ml-[151px] mt-[60.5px] not-italic relative text-[64px] text-black text-center text-nowrap translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[normal]">灵光乍现</p>
      </div>
      <Group519MasksTrImage additionalClassNames="[grid-area:1_/_1] ml-0 mt-0" />
      <div className="[grid-area:1_/_1] flex h-[78px] items-center justify-center ml-[213px] mt-[47px] relative w-[81px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <Group519MasksTrImage />
        </div>
      </div>
    </div>
  );
}

function Group11() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0 w-full">
      <div className="[grid-area:1_/_1] flex flex-col font-['Arial:Bold','Noto_Sans_JP:Bold','Noto_Sans_SC:Bold',sans-serif] justify-center leading-[1.25] ml-[147px] mt-[45px] relative text-[#323232] text-[24px] text-center translate-x-[-50%] translate-y-[-50%] w-[294px]" style={{ fontVariationSettings: "'wght' 700" }}>
        <p className="mb-0">久思未破，灵光乍现。</p>
        <p className="mb-0">一点火花，照亮全局。</p>
        <p>&nbsp;</p>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0">
      <Group13 />
      <Group11 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center leading-[0] relative shrink-0 w-full">
      <Frame6 />
      <div className="flex flex-col font-['zihun151hao-lianmengzongyiti:Regular',sans-serif] justify-center leading-[normal] not-italic relative shrink-0 text-[#a1150c] text-[16px] text-center text-nowrap">
        <p className="mb-0">Happy New Year! 查收奖励👇</p>
        <p>“PPT设计VIP通道 - 排队提前8名”</p>
      </div>
    </div>
  );
}

function LogoDsComponents() {
  return (
    <div className="h-[27px] relative shrink-0 w-[28px]" data-name="LOGO_DS COMPONENTS*">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 27">
        <g id="LOGO_DS COMPONENTS*">
          <path d={svgPaths.p237a4d00} fill="url(#paint0_linear_16_2057)" id="Vector" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_16_2057" x1="4.53568e-10" x2="27.9407" y1="4.43833e-10" y2="4.4383e-10">
            <stop stopColor="#FF7F52" />
            <stop offset="0.5" stopColor="#ED20D0" />
            <stop offset="1" stopColor="#218AFE" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0">
      <LogoDsComponents />
      <p className="font-['Arial:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#323232] text-[14px] text-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        Design Studios 视觉概念
      </p>
    </div>
  );
}

function Group18() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] flex flex-col font-['Arial:Regular',sans-serif] justify-center ml-[64.5px] mt-[5px] not-italic relative text-[#d4d4d4] text-[9px] text-center translate-x-[-50%] translate-y-[-50%] w-[129px]">
        <p className="leading-[normal]">NO. S88ADFHRGB</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0">
      <Frame5 />
      <Group18 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center relative shrink-0 w-[294px]">
      <Frame />
      <Frame1 />
    </div>
  );
}

function DescriptionContentLingguangzhaxian() {
  return (
    <div className="absolute content-stretch flex gap-[10px] h-[468px] items-end justify-center left-[calc(50%+0.5px)] overflow-clip p-[18px] top-[271px] translate-x-[-50%] w-[338px]" data-name="Description_Content_lingguangzhaxian">
      <Group3 />
      <Frame2 />
      <div className="absolute h-0 left-[calc(50%+0.5px)] top-[379px] translate-x-[-50%] w-[251px]">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 251 1">
            <path d="M0 0.5H251" id="Vector 29" stroke="var(--stroke-0, #F0F0F0)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="[grid-area:1_/_1] h-[171px] ml-0 mt-0 relative w-[272px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 272 171">
        <g id="Group">
          <path d={svgPaths.p35a06780} fill="var(--fill-0, #42A87A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative" data-name="Group">
      <Group />
    </div>
  );
}

function Group15() {
  return (
    <Wrapper additionalClassNames="mt-[18.41%]">
      <g id="Group 99">
        <path d={svgPaths.p20acb000} fill="var(--fill-0, #8EDABC)" id="Vector" />
        <g id="Group">
          <path d="M5.63574 5.03112H42.597" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" />
          <path d="M24.7598 11.7648H42.597" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" />
          <path d="M5.63574 11.7648H20.3357" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" />
          <path d="M32.6582 18.5067H42.5959" id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" />
          <path d="M5.63574 18.5067H27.5119" id="Vector_6" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" />
          <path d="M5.63574 25.2402H24.0741" id="Vector_7" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" />
        </g>
      </g>
    </Wrapper>
  );
}

function Group16() {
  return (
    <Wrapper additionalClassNames="mt-[62.06%]">
      <g id="Group 100">
        <path d={svgPaths.p20acb000} fill="var(--fill-0, #8EDABC)" id="Vector" />
        <g id="Group">
          <path d="M5.63562 5.03108H42.5968" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" />
          <path d="M24.7598 11.7647H42.597" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" />
          <path d="M5.63574 11.7647H20.3357" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" />
          <path d="M32.6582 18.5066H42.5959" id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" />
          <path d="M5.63574 18.5066H27.5119" id="Vector_6" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" />
          <path d="M5.63574 25.2401H24.0741" id="Vector_7" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" />
        </g>
      </g>
    </Wrapper>
  );
}

function Group4() {
  return (
    <Group2 additionalClassNames="h-[7.326px] ml-[94.44%] mt-0">
      <path d={svgPaths.p226ba00} fill="var(--fill-0, #C9F0EC)" id="Vector" />
      <path d={svgPaths.p16819100} fill="var(--fill-0, #C9F0EC)" id="Vector_2" />
    </Group2>
  );
}

function Group5() {
  return (
    <Group2 additionalClassNames="h-[7.334px] ml-0 mt-[58.92%]">
      <path d={svgPaths.p97ce600} fill="var(--fill-0, #C9F0EC)" id="Vector" />
      <path d={svgPaths.p26eb33c0} fill="var(--fill-0, #C9F0EC)" id="Vector_2" />
    </Group2>
  );
}

function Group6() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[72.78%] mt-[22.9%] place-items-start relative" data-name="Group">
      <Group4 />
      <Group5 />
    </div>
  );
}

function Group7() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] ml-[8.81%] mt-[10.11%] place-items-start relative" data-name="Group">
      <div className="[grid-area:1_/_1] h-[6.927px] ml-[0.26px] mt-0 relative w-[139.784px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 140 7">
          <path d={svgPaths.p34e17600} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <Group15 />
      <Group16 />
      <Group6 />
    </div>
  );
}

function Group8() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative" data-name="Group">
      <div className="[grid-area:1_/_1] h-[111.184px] ml-0 mt-0 relative w-[170.31px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 171 112">
          <path d={svgPaths.pce04800} fill="var(--fill-0, #0D4653)" id="Vector" />
        </svg>
      </div>
      <div className="[grid-area:1_/_1] flex h-[93.232px] items-center justify-center ml-[9.21px] mt-[8.97px] relative w-[151.9px]">
        <div className="flex-none h-[151.9px] rotate-[90deg] w-[93.232px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 94 152">
              <path d={svgPaths.p908d080} fill="var(--fill-0, #C9F0EC)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <Group7 />
      <div className="[grid-area:1_/_1] h-[29.483px] ml-[59.19px] mt-[111.13px] relative w-[51.928px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 52 30">
          <path d={svgPaths.p120ef600} fill="var(--fill-0, #003644)" id="Vector" />
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[10.268px] ml-[42.4px] mt-[135.83px] relative w-[85.511px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 86 11">
          <path d={svgPaths.p249ed000} fill="var(--fill-0, #0D4653)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group9() {
  return (
    <div className="[grid-area:1_/_1] h-[77px] ml-0 mt-0 relative w-[102.852px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 103 77">
        <g id="Group">
          <path d={svgPaths.p26d8a600} fill="var(--fill-0, #8DE1BF)" id="Vector" />
          <g id="Group_2">
            <path d={svgPaths.p37b08c00} fill="var(--fill-0, white)" id="Vector_2" opacity="0.26" />
            <path d={svgPaths.p15462080} fill="var(--fill-0, white)" id="Vector_3" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group10() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[40.56%] mt-[19.48%] place-items-start relative" data-name="Group">
      <Group9 />
    </div>
  );
}

function Group12() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[18.75%] mt-[12.62%] place-items-start relative" data-name="Group">
      <Group8 />
      <Group10 />
    </div>
  );
}

function Group14() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[0.54%] place-items-start relative">
      <Group1 />
      <Group12 />
    </div>
  );
}

function Group17() {
  return (
    <div className="relative size-full">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 41 59">
        <g id="Group 109">
          <path d={svgPaths.p1b081c00} fill="var(--fill-0, #FFD686)" id="Vector" />
          <path d={svgPaths.pb860700} fill="var(--fill-0, #FEC463)" id="Vector_2" />
          <path d={svgPaths.p1056b500} fill="var(--fill-0, #5470B4)" id="Vector_3" />
          <path d={svgPaths.p2a759180} fill="var(--fill-0, #4E6AA9)" id="Vector_4" />
          <path d={svgPaths.p2f871b40} fill="var(--fill-0, #4E6AA9)" id="Vector_5" />
          <path d={svgPaths.pfef4900} fill="var(--fill-0, #4E6AA9)" id="Vector_6" />
          <g id="Group">
            <path d={svgPaths.p2db6bb00} id="Vector_7" stroke="var(--stroke-0, #4E5071)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.889688" />
            <path d={svgPaths.p22aa9780} id="Vector_8" stroke="var(--stroke-0, #4E5071)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.889688" />
            <path d={svgPaths.p1fefee80} id="Vector_9" stroke="var(--stroke-0, #4E5071)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.889688" />
          </g>
          <path d={svgPaths.p35c16b00} fill="var(--fill-0, #5470B4)" id="Vector_10" />
          <path d={svgPaths.p35c16b00} fill="var(--fill-0, #5470B4)" id="Vector_11" />
          <path d={svgPaths.p2cccb00} fill="var(--fill-0, #5470B4)" id="Vector_12" />
          <path d={svgPaths.p1fdec400} fill="var(--fill-0, #5470B4)" id="Vector_13" />
          <path d={svgPaths.p21898700} fill="var(--fill-0, #5E84C3)" id="Vector_14" />
          <path d={svgPaths.p15bbef80} fill="var(--fill-0, #5E84C3)" id="Vector_15" />
          <path d={svgPaths.p128d0e00} fill="var(--fill-0, #5E84C3)" id="Vector_16" />
          <path d={svgPaths.p2d955880} fill="var(--fill-0, white)" id="Vector_17" />
        </g>
      </svg>
    </div>
  );
}

function DescriptionLingguangzhaxianSvg() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="description_lingguangzhaxian_svg">
      <Group14 />
      <div className="[grid-area:1_/_1] flex h-[69.084px] items-center justify-center ml-[62.59%] mt-0 relative w-[59.231px]">
        <div className="flex-none h-[58.2px] rotate-[337.829deg] w-[40.243px]">
          <Group17 />
        </div>
      </div>
      <div className="[grid-area:1_/_1] flex h-[144.287px] items-center justify-center ml-[192px] mt-[39.77px] relative w-[102px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div className="h-[144.287px] relative w-[102px]" data-name="Stuck at Home Standing">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-full left-[5.17%] max-w-none top-0 w-[90.53%]" src={imgStuckAtHomeStanding} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DescriptionIllustrationLingguangzhaxian() {
  return (
    <div className="absolute content-stretch flex flex-col h-[210px] items-center justify-center left-[calc(50%+0.5px)] overflow-clip px-[3px] py-[9px] top-[130px] translate-x-[-50%] w-[300px]" data-name="Description Illustration_lingguangzhaxian">
      <DescriptionLingguangzhaxianSvg />
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-white h-[48px] relative rounded-[20px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <Text text="保存到相册" additionalClassNames="px-[31px]" />
      </div>
    </div>
  );
}

function SaveButton() {
  return (
    <div className="content-stretch flex flex-col items-center justify-end relative shrink-0 w-[152px]" data-name="Save Button">
      <Frame3 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-white h-[48.403px] relative rounded-[20px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <Text text="邀同事来摇签" additionalClassNames="px-[22px]" />
      </div>
    </div>
  );
}

function ShareButton() {
  return (
    <div className="content-stretch flex flex-col items-center justify-end relative shrink-0 w-[152px]" data-name="Share Button">
      <Frame4 />
    </div>
  );
}

function DescriptionButtons() {
  return (
    <div className="absolute content-stretch flex gap-[16px] items-center left-[calc(50%-0.5px)] top-[760px] translate-x-[-50%]" data-name="Description_Buttons">
      <SaveButton />
      <ShareButton />
    </div>
  );
}

function DescriptionBack() {
  return (
    <div className="absolute h-[27px] left-[16px] top-[105px] w-[96px]" data-name="Description_Back">
      <div className="absolute bottom-[14.81%] flex flex-col font-['zihun151hao-lianmengzongyiti:Regular',sans-serif] justify-center leading-[0] left-1/4 not-italic right-0 text-[18px] text-nowrap text-white top-[3.7%]">
        <p className="leading-[normal]">返回主页</p>
      </div>
      <div className="absolute flex inset-[0_81.25%_0_0] items-center justify-center">
        <div className="flex-none h-[18px] rotate-[90deg] w-[27px]">
          <div className="relative size-full" data-name="Croods Arrow Down">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgCroodsArrowDown} />
          </div>
        </div>
      </div>
    </div>
  );
}

function DescriptionGiftPool() {
  return (
    <div className="absolute h-[80px] left-[367px] top-[105px] w-[26px]" data-name="Description_GiftPool">
      <div className="absolute bg-white inset-0 rounded-bl-[8px] rounded-tl-[8px]" />
      <div className="absolute flex flex-col font-['zihun151hao-lianmengzongyiti:Regular',sans-serif] inset-[8.75%_3.85%_11.25%_3.85%] justify-center leading-[0] not-italic text-[16px] text-black text-center">
        <p className="leading-none">奖池一览</p>
      </div>
    </div>
  );
}

export default function Description() {
  return (
    <div className="bg-[#cc2f3a] relative size-full" data-name="Description_灵光乍现">
      <LandingBackgroundLayerGreen />
      <DescriptionContentLingguangzhaxian />
      <DescriptionIllustrationLingguangzhaxian />
      <DescriptionButtons />
      <DescriptionBack />
      <DescriptionGiftPool />
    </div>
  );
}