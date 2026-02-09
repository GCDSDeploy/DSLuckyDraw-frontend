import svgPaths from "./svg-meamlp9daj";
import clsx from "clsx";
import imgLandingBackgroundLayerGreen from "@/assets/09245eba98b5559b1bc319006b1f48d78893cfe9.png";
import img9MasksTr from "@/assets/4b2c92b387b9afd0c7fd0f4679506347da0975a4.png";
import imgDescriptionIllustrationDazhanhongtu from "@/assets/305cc9b74d236b45ef753c27fe7b4cccefc36411.png";
import imgCroodsArrowDown from "@/assets/f91f9545390252a6611c7f7d585ca3efe3a8716a.png";
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

function Group() {
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

function Group2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-[#5282ea] h-[15px] ml-[50px] mt-[85px] w-[208px]" />
      <div className="[grid-area:1_/_1] flex flex-col font-['zihun151hao-lianmengzongyiti:Regular',sans-serif] justify-center leading-[0] ml-[151px] mt-[60.5px] not-italic relative text-[64px] text-black text-center text-nowrap translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[normal]">大展鸿图</p>
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

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0 w-full">
      <div className="[grid-area:1_/_1] flex flex-col font-['Arial:Bold','Noto_Sans_JP:Bold','Noto_Sans_SC:Bold',sans-serif] justify-center leading-[1.25] ml-[147px] mt-[45px] relative text-[#323232] text-[24px] text-center translate-x-[-50%] translate-y-[-50%] w-[294px]" style={{ fontVariationSettings: "'wght' 700" }}>
        <p className="mb-0">不是一时之声，</p>
        <p className="mb-0">而是一盘之局 。</p>
        <p>内容成势，大展鸿图。</p>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0">
      <Group2 />
      <Group1 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center leading-[0] relative shrink-0 w-full">
      <Frame6 />
      <div className="flex flex-col font-['zihun151hao-lianmengzongyiti:Regular',sans-serif] justify-center leading-[normal] not-italic relative shrink-0 text-[#a1150c] text-[16px] text-center text-nowrap">
        <p className="mb-0">Happy New Year! 查收奖励👇</p>
        <p>“个人专属表情包1个”</p>
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
      <p className="font-['Arial:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#323232] text-[14px] w-[180px]" style={{ fontVariationSettings: "'wght' 400" }}>
        Design Studios 内容策略
      </p>
    </div>
  );
}

function Group3() {
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
      <Group3 />
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

function DescriptionContentDazhanhongtu() {
  return (
    <div className="absolute content-stretch flex gap-[10px] h-[468px] items-end justify-center left-[calc(50%+0.5px)] overflow-clip p-[18px] top-[270px] translate-x-[-50%] w-[338px]" data-name="Description_Content_dazhanhongtu">
      <Group />
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

function DescriptionIllustrationDazhanhongtu() {
  return (
    <div className="absolute h-[210px] left-[calc(50%+0.5px)] top-[130px] translate-x-[-50%] w-[300px]" data-name="Description Illustration_dazhanhongtu">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgDescriptionIllustrationDazhanhongtu} />
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
    <div className="bg-[#5282ea] relative size-full" data-name="Description_大展鸿图">
      <LandingBackgroundLayerGreen />
      <DescriptionContentDazhanhongtu />
      <DescriptionIllustrationDazhanhongtu />
      <DescriptionButtons />
      <DescriptionBack />
      <DescriptionGiftPool />
    </div>
  );
}