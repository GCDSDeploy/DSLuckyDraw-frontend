import svgPaths from "./svg-38h7dm4h63";
import clsx from "clsx";

function LuckyDrawCloudSvg2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[117px] relative shrink-0 w-[225.407px] -translate-y-[30px]" style={{ animation: 'floatX_cloudBig 10s ease-in-out infinite', transformOrigin: 'center center' }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 226 117">
        <g id="LuckyDraw_cloud_svg">{children}</g>
      </svg>
    </div>
  );
}
type BucketButtomVectorProps = {
  additionalClassNames?: string;
};

function BucketButtomVector({ children, additionalClassNames = "" }: React.PropsWithChildren<BucketButtomVectorProps>) {
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
type LuckyDrawCoinSvg6Props = {
  additionalClassNames?: string;
};

function LuckyDrawCoinSvg6({ children, additionalClassNames = "" }: React.PropsWithChildren<LuckyDrawCoinSvg6Props>) {
  return (
    <div className={clsx("h-[34.115px] relative shrink-0", additionalClassNames)}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 35">
        <g id="LuckyDraw_Coin_svg">{children}</g>
      </svg>
    </div>
  );
}
type LuckyDrawCoinSvg5Props = {
  additionalClassNames?: string;
};

function LuckyDrawCoinSvg5({ children, additionalClassNames = "" }: React.PropsWithChildren<LuckyDrawCoinSvg5Props>) {
  return (
    <div className={clsx("relative shrink-0", additionalClassNames)}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="LuckyDraw_Coin_svg">{children}</g>
      </svg>
    </div>
  );
}

function LuckyDrawLinesSvg5({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[33.03px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
        <g id="LuckyDraw_Lines_svg">{children}</g>
      </svg>
    </div>
  );
}

function LuckyDrawLinesSvg4({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[58.756px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 59 59">
        <g id="LuckyDraw_Lines_svg">{children}</g>
      </svg>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="[grid-area:1_/_1] h-[18.009px] mix-blend-soft-light mt-0 relative w-[21.642px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 18">
        <g id="Vector" style={{ mixBlendMode: "soft-light" }}>
          {children}
        </g>
      </svg>
    </div>
  );
}
type WrapperProps = {
  additionalClassNames?: string;
};
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

const BG_PATTERN_CLIP0_RESULT = 'clip0_bg_pattern_result';
const BG_PATTERN_CLIP1_RESULT = 'clip1_bg_pattern_result';

function LuckyDrawBackgroundPatterns() {
  return (
    <div className="absolute inset-0 w-full h-full" data-name="LuckyDraw_BackgroundPatterns">
      <div className="absolute inset-0 w-full h-full">
        <svg className="block size-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 393 852" xmlns="http://www.w3.org/2000/svg">
          <g id="LuckyDraw_BackgroundPatterns" clipPath={`url(#${BG_PATTERN_CLIP0_RESULT})`}>
            <path d="M334.679 117.642V116.35C344.153 113.145 352.681 105.791 352.813 95.1783C352.681 84.6651 344.064 77.1085 334.679 73.9706V70.637H310.991V73.935C306.822 75.3154 302.947 77.4749 299.721 80.467C292.114 87.522 290.602 98.6115 297.056 106.965C300.592 111.54 305.541 114.636 310.991 116.407V117.603C306.822 118.983 302.947 121.143 299.721 124.135C292.114 131.19 290.602 142.279 297.056 150.633C300.592 155.208 305.541 158.303 310.991 160.075V163.387H321.59V179.796H310.991V183.99H334.679V179.796H324.08V163.387H334.679V160.015C344.153 156.809 352.681 149.455 352.813 138.842C352.681 128.329 344.064 120.773 334.679 117.635V117.642ZM321.515 107.655C320.772 100.223 320.75 92.6523 321.302 85.2059C321.512 82.3668 321.771 79.4886 322.447 76.7171C322.486 76.5499 322.675 76.1266 322.842 75.6961C323.351 77.941 323.888 80.1077 324.13 82.4451C324.568 86.6753 324.707 90.9303 324.717 95.1818C324.703 101.454 324.81 108.345 323.024 114.426C323.002 114.493 322.928 114.692 322.839 114.92H322.803C321.981 112.636 321.757 110.053 321.515 107.659V107.655ZM321.298 128.874C321.508 126.035 321.768 123.156 322.444 120.385C322.483 120.218 322.671 119.794 322.839 119.364C323.347 121.609 323.885 123.775 324.127 126.113C324.564 130.343 324.703 134.598 324.714 138.85C324.699 145.122 324.806 152.013 323.02 158.093C322.999 158.168 322.913 158.389 322.817 158.634C321.981 156.336 321.757 153.735 321.515 151.327C320.772 143.894 320.75 136.324 321.302 128.877L321.298 128.874ZM327.763 114.575C327.514 114.703 327.265 114.813 327.015 114.917H325.603C326.012 113.397 326.144 111.7 326.308 110.487C327.005 105.421 327.193 100.287 327.204 95.1783C327.193 90.5034 327.033 85.8107 326.475 81.1643C326.236 79.1827 326.066 76.8808 325.365 74.8991C325.496 74.9312 325.628 74.9632 325.76 74.9988C334.088 77.3718 337.443 87.4331 337.514 95.1747C337.447 102.45 334.7 111.046 327.759 114.568L327.763 114.575ZM320.266 74.9276C319.687 76.6246 319.526 78.6099 319.313 80.2073C318.118 89.2297 318.118 98.6079 319.021 107.659C319.092 108.388 319.413 112.074 320.259 114.92H318.89C315.851 113.682 313.219 111.181 311.479 108.21C307.405 101.258 307.064 92.0119 310.219 84.6473C312.098 80.2642 315.723 76.1123 320.266 74.9312V74.9276ZM318.747 119.115H320.103C319.655 120.687 319.502 122.438 319.313 123.875C318.118 132.897 318.118 142.276 319.021 151.327C319.1 152.099 319.452 156.197 320.419 159.09C316.744 158.161 313.503 155.34 311.479 151.878C307.405 144.926 307.064 135.68 310.219 128.315C311.884 124.434 314.919 120.734 318.747 119.115ZM327.763 158.243C326.991 158.634 326.215 158.919 325.443 159.111C325.98 157.471 326.119 155.51 326.308 154.155C327.005 149.089 327.193 143.955 327.204 138.846C327.193 134.171 327.033 129.478 326.475 124.832C326.258 123.028 326.094 120.961 325.539 119.108H327.026C334.43 122.093 337.447 131.506 337.514 138.842C337.447 146.118 334.7 154.713 327.759 158.236L327.763 158.243ZM350.322 95.1818C350.198 105.186 341.289 111.999 332.377 114.49C337.593 109.861 339.948 101.877 340.008 95.1818C339.944 88.3652 337.657 80.5168 332.341 75.8846C341.41 78.4747 350.194 85.0885 350.322 95.1818ZM295.43 96.8682C294.953 92.3748 296.511 87.9454 299.354 84.4766C302.99 80.0436 308.131 77.1868 313.688 75.7316C312.155 76.9982 310.799 78.5458 309.704 80.2856C304.773 88.0912 304.417 98.7004 308.106 107.061C309.373 109.936 311.305 112.622 313.695 114.646C309.23 113.472 305.05 111.38 301.649 108.285C298.376 105.307 295.907 101.333 295.433 96.8682H295.43ZM295.43 140.536C294.953 136.042 296.511 131.613 299.354 128.144C302.99 123.711 308.131 120.854 313.688 119.399C312.155 120.666 310.799 122.214 309.704 123.95C304.773 131.755 304.417 142.365 308.106 150.725C309.373 153.6 311.305 156.286 313.695 158.31C309.23 157.136 305.05 155.044 301.649 151.949C298.376 148.971 295.907 144.997 295.433 140.532L295.43 140.536ZM332.377 158.157C337.593 153.529 339.948 145.542 340.008 138.85C339.944 132.033 337.657 124.185 332.341 119.552C341.41 122.142 350.194 128.756 350.322 138.85C350.198 148.854 341.289 155.667 332.377 158.157Z" fill="#F9819E" />
            <path d="M334.739 64.6885H324.08V19H321.59V64.6885H310.931V69.2638H334.739V64.6885ZM332.96 67.4849H312.71V66.4674H332.96V67.4849Z" fill="#F9819E" />
            <path d="M313.016 185.708H310.525V226H313.016V185.708Z" fill="#F9819E" />
            <path d="M316.702 185.708H314.211V226H316.702V185.708Z" fill="#F9819E" />
            <path d="M320.391 185.708H317.901V226H320.391V185.708Z" fill="#F9819E" />
            <path d="M324.081 185.708H321.59V226H324.081V185.708Z" fill="#F9819E" />
            <path d="M327.766 185.708H325.276V226H327.766V185.708Z" fill="#F9819E" />
            <path d="M331.456 185.708H328.965V226H331.456V185.708Z" fill="#F9819E" />
            <path d="M335.145 185.708H332.655V226H335.145V185.708Z" fill="#F9819E" />
          </g>
          <g clipPath={`url(#${BG_PATTERN_CLIP1_RESULT})`}>
            <path d="M81.6789 117.642V116.35C91.1531 113.145 99.681 105.791 99.8127 95.1783C99.681 84.6651 91.0642 77.1085 81.6789 73.9706V70.637H57.9914V73.935C53.8218 75.3154 49.9474 77.4749 46.7205 80.467C39.1141 87.522 37.602 98.6115 44.0558 106.965C47.5922 111.54 52.541 114.636 57.9914 116.407V117.603C53.8218 118.983 49.9474 121.143 46.7205 124.135C39.1141 131.19 37.602 142.279 44.0558 150.633C47.5922 155.208 52.541 158.303 57.9914 160.075V163.387H68.5899V179.796H57.9914V183.99H81.6789V179.796H71.0804V163.387H81.6789V160.015C91.1531 156.809 99.681 149.455 99.8127 138.842C99.681 128.329 91.0642 120.773 81.6789 117.635V117.642ZM68.5152 107.655C67.7717 100.223 67.7503 92.6523 68.3018 85.2059C68.5117 82.3668 68.7714 79.4886 69.4474 76.7171C69.4865 76.5499 69.675 76.1266 69.8423 75.6961C70.351 77.941 70.8882 80.1077 71.1302 82.4451C71.5678 86.6753 71.7065 90.9303 71.7172 95.1818C71.703 101.454 71.8097 108.345 70.0237 114.426C70.0024 114.493 69.9277 114.692 69.8387 114.92H69.8031C68.9813 112.636 68.7572 110.053 68.5152 107.659V107.655ZM68.2982 128.874C68.5081 126.035 68.7678 123.156 69.4438 120.385C69.4829 120.218 69.6715 119.794 69.8387 119.364C70.3475 121.609 70.8847 123.775 71.1266 126.113C71.5642 130.343 71.703 134.598 71.7136 138.85C71.6994 145.122 71.8061 152.013 70.0202 158.093C69.9988 158.168 69.9134 158.389 69.8174 158.634C68.9813 156.336 68.7572 153.735 68.5152 151.327C67.7717 143.894 67.7503 136.324 68.3018 128.877L68.2982 128.874ZM74.7626 114.575C74.5136 114.703 74.2645 114.813 74.0155 114.917H72.6031C73.0122 113.397 73.1438 111.7 73.3075 110.487C74.0048 105.421 74.1934 100.287 74.2041 95.1783C74.1934 90.5034 74.0333 85.8107 73.4747 81.1643C73.2363 79.1827 73.0656 76.8808 72.3647 74.8991C72.4963 74.9312 72.628 74.9632 72.7596 74.9988C81.0883 77.3718 84.4432 87.4331 84.5144 95.1747C84.4468 102.45 81.7002 111.046 74.7591 114.568L74.7626 114.575ZM67.2665 74.9276C66.6865 76.6246 66.5265 78.6099 66.313 80.2073C65.1176 89.2297 65.1176 98.6079 66.0213 107.659C66.0924 108.388 66.4126 112.074 67.2593 114.92H65.8896C62.8513 113.682 60.2186 111.181 58.4788 108.21C54.4052 101.258 54.0637 92.0119 57.2194 84.6473C59.0979 80.2642 62.7232 76.1123 67.2665 74.9312V74.9276ZM65.7473 119.115H67.1028C66.6545 120.687 66.5015 122.438 66.313 123.875C65.1176 132.897 65.1176 142.276 66.0213 151.327C66.0995 152.099 66.4517 156.197 67.4194 159.09C63.7443 158.161 60.5032 155.34 58.4788 151.878C54.4052 144.926 54.0637 135.68 57.2194 128.315C58.8844 124.434 61.9192 120.734 65.7473 119.115ZM74.7626 158.243C73.9906 158.634 73.215 158.919 72.443 159.111C72.9802 157.471 73.1189 155.51 73.3075 154.155C74.0048 149.089 74.1934 143.955 74.2041 138.846C74.1934 134.171 74.0333 129.478 73.4747 124.832C73.2577 123.028 73.094 120.961 72.539 119.108H74.0262C81.4298 122.093 84.4468 131.506 84.5144 138.842C84.4468 146.118 81.7002 154.713 74.7591 158.236L74.7626 158.243ZM97.3222 95.1818C97.1977 105.186 88.2891 111.999 79.377 114.49C84.5927 109.861 86.9479 101.877 87.0084 95.1818C86.9443 88.3652 84.6567 80.5168 79.3414 75.8846C88.4101 78.4747 97.1942 85.0885 97.3222 95.1818ZM42.4299 96.8682C41.9531 92.3748 43.5114 87.9454 46.3541 84.4766C49.9901 80.0436 55.131 77.1868 60.6882 75.7316C59.1548 76.9982 57.7993 78.5458 56.7035 80.2856C51.7725 88.0912 51.4167 98.7004 55.1061 107.061C56.3727 109.936 58.3045 112.622 60.6953 114.646C56.2304 113.472 52.05 111.38 48.6488 108.285C45.3757 105.307 42.9066 101.333 42.4334 96.8682H42.4299ZM42.4299 140.536C41.9531 136.042 43.5114 131.613 46.3541 128.144C49.9901 123.711 55.131 120.854 60.6882 119.399C59.1548 120.666 57.7993 122.214 56.7035 123.95C51.7725 131.755 51.4167 142.365 55.1061 150.725C56.3727 153.6 58.3045 156.286 60.6953 158.31C56.2304 157.136 52.05 155.044 48.6488 151.949C45.3757 148.971 42.9066 144.997 42.4334 140.532L42.4299 140.536ZM79.377 158.157C84.5927 153.529 86.9479 145.542 87.0084 138.85C86.9443 132.033 84.6567 124.185 79.3414 119.552C88.4101 122.142 97.1942 128.756 97.3222 138.85C97.1977 148.854 88.2891 155.667 79.377 158.157Z" fill="#F9819E" />
            <path d="M81.7393 64.6885H71.0803V19H68.5899V64.6885H57.9309V69.2638H81.7393V64.6885ZM79.9604 67.4849H59.7098V66.4674H79.9604V67.4849Z" fill="#F9819E" />
            <path d="M60.0158 185.708H57.5254V226H60.0158V185.708Z" fill="#F9819E" />
            <path d="M63.7016 185.708H61.2112V226H63.7016V185.708Z" fill="#F9819E" />
            <path d="M67.3911 185.708H64.9006V226H67.3911V185.708Z" fill="#F9819E" />
            <path d="M71.0805 185.708H68.5901V226H71.0805V185.708Z" fill="#F9819E" />
            <path d="M74.7663 185.708H72.2759V226H74.7663V185.708Z" fill="#F9819E" />
            <path d="M78.4555 185.708H75.9651V226H78.4555V185.708Z" fill="#F9819E" />
            <path d="M82.145 185.708H79.6545V226H82.145V185.708Z" fill="#F9819E" />
          </g>
          <path d="M360 739L49 739" stroke="#F9819E" strokeWidth="2" />
          <path d="M306.5 739.5L306.5 738.564L358.542 738.564L358.57 738.094C358.795 734.308 360.375 730.783 363.079 728.079C365.783 725.375 369.308 723.795 373.094 723.57L373.564 723.542L373.564 671.5L374.5 671.5L374.5 724.479L374.032 724.479C370.268 724.479 366.718 725.899 364.001 728.487L363.741 728.741C360.995 731.49 359.479 735.146 359.479 739.032L359.479 739.5L306.5 739.5Z" fill="#F9819E" stroke="#F9819E" />
          <path d="M87.5 739.5L87.5 738.564L35.458 738.564L35.4297 738.094C35.2046 734.308 33.6252 730.783 30.9209 728.079C28.2166 725.375 24.6919 723.795 20.9063 723.57L20.4355 723.542L20.4356 671.5L19.5 671.5L19.5 724.479L19.9678 724.479C23.7322 724.479 27.2816 725.899 29.999 728.487L30.2588 728.741C33.0047 731.49 34.5205 735.146 34.5205 739.032L34.5205 739.5L87.5 739.5Z" fill="#F9819E" stroke="#F9819E" />
          <path d="M34 19L345 19" stroke="#F9819E" strokeWidth="2" />
          <path d="M86.5 18.5V19.4355H34.458L34.4297 19.9062C34.2046 23.6919 32.6252 27.2166 29.9209 29.9209C27.2166 32.6252 23.6919 34.2046 19.9062 34.4297L19.4355 34.458V86.5H18.5V33.5205H18.9678C22.7322 33.5205 26.2816 32.1009 28.999 29.5127L29.2588 29.2588C32.0047 26.5101 33.5205 22.8536 33.5205 18.9678V18.5H86.5Z" fill="#F9819E" stroke="#F9819E" />
          <path d="M306.5 18.5V19.4355H358.542L358.57 19.9062C358.795 23.6919 360.375 27.2166 363.079 29.9209C365.783 32.6252 369.308 34.2046 373.094 34.4297L373.564 34.458V86.5H374.5V33.5205H374.032C370.268 33.5205 366.718 32.1009 364.001 29.5127L363.741 29.2588C360.995 26.5101 359.479 22.8536 359.479 18.9678V18.5H306.5Z" fill="#F9819E" stroke="#F9819E" />
          <path d="M374 87V671" stroke="#F9819E" strokeWidth="2" />
          <path d="M19 87V671" stroke="#F9819E" strokeWidth="2" />
          <defs>
            <clipPath id={BG_PATTERN_CLIP0_RESULT}>
              <rect width="59.8127" height="207" fill="white" transform="translate(293 19)" />
            </clipPath>
            <clipPath id={BG_PATTERN_CLIP1_RESULT}>
              <rect width="59.8127" height="207" fill="white" transform="translate(40 19)" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function LuckyDrawLinesSvg() {
  return (
    <LuckyDrawLinesSvg4>
      <path d={svgPaths.pd1f6a00} fill="var(--fill-0, white)" id="Vector" />
    </LuckyDrawLinesSvg4>
  );
}

function LuckyDrawLine() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex items-center ml-[9.63px] mt-0 relative" data-name="LuckyDraw_Line">
      <LuckyDrawLinesSvg />
    </div>
  );
}

function LuckyDrawLinesSvg1() {
  return (
    <LuckyDrawLinesSvg4>
      <path d={svgPaths.p15cba970} fill="var(--fill-0, white)" id="Vector" />
    </LuckyDrawLinesSvg4>
  );
}

function LuckyDrawLine1() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex items-center ml-[268.96px] mt-[246.7px] relative" data-name="LuckyDraw_Line">
      <LuckyDrawLinesSvg1 />
    </div>
  );
}

function LuckyDrawLinesSvg2() {
  return (
    <LuckyDrawLinesSvg5>
      <path d={svgPaths.pee4f331} fill="var(--fill-0, white)" id="Vector" />
    </LuckyDrawLinesSvg5>
  );
}

function LuckyDrawLine2() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col items-start ml-[288.3px] mt-[642.17px] relative w-[33.03px]" data-name="LuckyDraw_Line">
      <LuckyDrawLinesSvg2 />
    </div>
  );
}

function LuckyDrawLinesSvg3() {
  return (
    <LuckyDrawLinesSvg5>
      <path d={svgPaths.p11ec3180} fill="var(--fill-0, white)" id="Vector" />
    </LuckyDrawLinesSvg5>
  );
}

function LuckyDrawLine3() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex items-center ml-0 mt-[299.26px] relative" data-name="LuckyDraw_Line">
      <LuckyDrawLinesSvg3 />
    </div>
  );
}

function LuckyDrawLines() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="LuckyDraw_Lines">
      <LuckyDrawLine />
      <LuckyDrawLine1 />
      <LuckyDrawLine2 />
      <LuckyDrawLine3 />
    </div>
  );
}

function LuckyDrawLines1() {
  return (
    <div className="absolute content-stretch flex items-center left-[46.35px] top-[160px]" data-name="LuckyDraw_Lines">
      <LuckyDrawLines />
    </div>
  );
}

function LuckyDrawCoinSvg() {
  return (
    <LuckyDrawCoinSvg5 additionalClassNames="size-[47.231px]">
      <path d={svgPaths.p36959ef2} fill="var(--fill-0, #FFBE00)" id="Vector" />
      <path d={svgPaths.p373321f0} fill="var(--fill-0, #F68B00)" id="Vector_2" />
      <path d={svgPaths.p37ba0180} fill="var(--fill-0, #F68B00)" id="Vector_3" />
      <g id="Group">
        <g id="Group_2">
          <path d={svgPaths.p1ef74380} fill="var(--fill-0, #F68B00)" id="Vector_4" />
          <path d={svgPaths.p293dcff0} fill="var(--fill-0, #F68B00)" id="Vector_5" />
        </g>
        <path d={svgPaths.p23c9e200} fill="var(--fill-0, #F68B00)" id="Vector_6" />
        <path d={svgPaths.p2fee3e40} fill="var(--fill-0, #F68B00)" id="Vector_7" />
      </g>
    </LuckyDrawCoinSvg5>
  );
}

function LuckyDrawCoin() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col items-start ml-[0.78px] mt-[103.82px] relative w-[47.231px]" data-name="LuckyDraw_Coin">
      <LuckyDrawCoinSvg />
    </div>
  );
}

function LuckyDrawCoinSvg1() {
  return (
    <LuckyDrawCoinSvg5 additionalClassNames="size-[47.231px]">
      <path d={svgPaths.p35fa1d80} fill="var(--fill-0, #FFBE00)" id="Vector" />
      <path d={svgPaths.p13e2c600} fill="var(--fill-0, #F68B00)" id="Vector_2" />
      <path d={svgPaths.pcea1280} fill="var(--fill-0, #F68B00)" id="Vector_3" />
      <g id="Group">
        <g id="Group_2">
          <path d={svgPaths.p7d52100} fill="var(--fill-0, #F68B00)" id="Vector_4" />
          <path d={svgPaths.p27656a80} fill="var(--fill-0, #F68B00)" id="Vector_5" />
        </g>
        <path d={svgPaths.p2f21d480} fill="var(--fill-0, #F68B00)" id="Vector_6" />
        <path d={svgPaths.p2310c580} fill="var(--fill-0, #F68B00)" id="Vector_7" />
      </g>
    </LuckyDrawCoinSvg5>
  );
}

function LuckyDrawCoin1() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex items-center ml-[94.52px] mt-0 relative" data-name="LuckyDraw_Coin">
      <LuckyDrawCoinSvg1 />
    </div>
  );
}

function LuckyDrawCoinSvg2() {
  return (
    <LuckyDrawCoinSvg6 additionalClassNames="w-[45.235px]">
      <path d={svgPaths.p196e8a00} fill="var(--fill-0, #9F5900)" id="Vector" />
      <path d={svgPaths.p73274f0} fill="var(--fill-0, #FFBE00)" id="Vector_2" />
      <path d={svgPaths.p27deb5f1} id="Vector_3" stroke="var(--stroke-0, #F68B00)" strokeMiterlimit="10" strokeWidth="1.19046" />
      <path d={svgPaths.p2e8b1b00} fill="var(--fill-0, #F68B00)" id="Vector_4" />
      <g id="Group">
        <g id="Group_2">
          <path d={svgPaths.pd28f900} fill="var(--fill-0, #F68B00)" id="Vector_5" />
          <path d={svgPaths.pbbac500} fill="var(--fill-0, #F68B00)" id="Vector_6" />
        </g>
        <path d={svgPaths.p712e900} fill="var(--fill-0, #F68B00)" id="Vector_7" />
        <path d={svgPaths.p2e2f0400} fill="var(--fill-0, #F68B00)" id="Vector_8" />
      </g>
    </LuckyDrawCoinSvg6>
  );
}

function LuckyDrawCoin2() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col items-start ml-0 mt-[388.7px] relative w-[45.235px]" data-name="LuckyDraw_Coin">
      <LuckyDrawCoinSvg2 />
    </div>
  );
}

function LuckyDrawCoinSvg3() {
  return (
    <LuckyDrawCoinSvg6 additionalClassNames="w-[45.25px]">
      <path d={svgPaths.p19f11300} fill="var(--fill-0, #9F5900)" id="Vector" />
      <path d={svgPaths.p98575f0} fill="var(--fill-0, #FFBE00)" id="Vector_2" />
      <path d={svgPaths.p216e1100} id="Vector_3" stroke="var(--stroke-0, #F68B00)" strokeMiterlimit="10" strokeWidth="1.19046" />
      <path d={svgPaths.p2182500} fill="var(--fill-0, #F68B00)" id="Vector_4" />
      <g id="Group">
        <g id="Group_2">
          <path d={svgPaths.pa2e9c00} fill="var(--fill-0, #F68B00)" id="Vector_5" />
          <path d={svgPaths.pf8ceb80} fill="var(--fill-0, #F68B00)" id="Vector_6" />
        </g>
        <path d={svgPaths.p11787200} fill="var(--fill-0, #F68B00)" id="Vector_7" />
        <path d={svgPaths.p251f7800} fill="var(--fill-0, #F68B00)" id="Vector_8" />
      </g>
    </LuckyDrawCoinSvg6>
  );
}

function LuckyDrawCoin3() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col items-start ml-[278.62px] mt-[71.93px] relative w-[45.251px]" data-name="LuckyDraw_Coin">
      <LuckyDrawCoinSvg3 />
    </div>
  );
}

function LuckyDrawCoinSvg4() {
  return (
    <LuckyDrawCoinSvg5 additionalClassNames="size-[47.239px]">
      <path d={svgPaths.p4695280} fill="var(--fill-0, #FFBE00)" id="Vector" />
      <path d={svgPaths.p3ab4f800} fill="var(--fill-0, #F68B00)" id="Vector_2" />
      <path d={svgPaths.p12e6f800} fill="var(--fill-0, #F68B00)" id="Vector_3" />
      <g id="Group">
        <g id="Group_2">
          <path d={svgPaths.p1c58200} fill="var(--fill-0, #F68B00)" id="Vector_4" />
          <path d={svgPaths.p2855f700} fill="var(--fill-0, #F68B00)" id="Vector_5" />
        </g>
        <path d={svgPaths.pa6a2b00} fill="var(--fill-0, #F68B00)" id="Vector_6" />
        <path d={svgPaths.p4a64400} fill="var(--fill-0, #F68B00)" id="Vector_7" />
      </g>
    </LuckyDrawCoinSvg5>
  );
}

function LuckyDrawCoin4() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex items-center ml-[300.47px] mt-[329.78px] relative" data-name="LuckyDraw_Coin">
      <LuckyDrawCoinSvg4 />
    </div>
  );
}

function LuckyDrawCoins() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="LuckyDraw_Coins">
      <LuckyDrawCoin />
      <LuckyDrawCoin1 />
      <LuckyDrawCoin2 />
      <LuckyDrawCoin3 />
      <LuckyDrawCoin4 />
    </div>
  );
}

function LuckyDrawCoins1() {
  return (
    <div className="absolute content-stretch flex items-center left-[22.57px] top-[185px]" data-name="LuckyDraw_Coins">
      <LuckyDrawCoins />
    </div>
  );
}

function LuckyDrawBackgroundGroup() {
  return (
    <div className="absolute h-[852.468px] left-0 top-0 w-full" data-name="LuckyDraw_BackgroundGroup">
      <LuckyDrawBackgroundPatterns />
      <LuckyDrawLines1 />
      <LuckyDrawCoins1 />
    </div>
  );
}

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

/* 原始 SVG 已备份，回滚请使用 LuckyDraw_Bucket.backup.tsx 恢复 */
function DrawBucket() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="DrawBucket">
      <div className="[grid-area:1_/_1] h-[311.539px] ml-[4.36px] mt-[10.35px] relative w-[244.519px]" data-name="Bucket">
        <img src="/assets/LuckyBucket.png" className="block size-full w-full h-auto object-contain" data-name="Bucket" alt="LuckyBucket" />
      </div>
    </div>
  );
}

function LuckyDrawBucket() {
  return (
    <div className="absolute content-stretch flex items-center left-[70px] top-[675px]" data-name="LuckyDraw_Bucket">
      <DrawBucket />
    </div>
  );
}

type LuckyDrawButtonProps = {
  onClick?: () => void;
};

function LuckyDrawButton({ onClick }: LuckyDrawButtonProps = {}) {
  return (
    <div
      onClick={onClick}
      data-action="proceed-to-description"
      className="absolute bg-white content-stretch flex h-[48px] items-center justify-center left-[calc(50%+0.5px)] px-[31px] py-[12px] rounded-[20px] top-[710px] translate-x-[-50%] w-[152px] cursor-pointer"
      data-name="LuckyDraw_Button"
    >
      <div className="flex flex-col font-['ZiHun151',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#a82d2d] text-[18px] text-center text-nowrap">
        <p className="leading-[normal]">立即解签</p>
      </div>
    </div>
  );
}

function LuckyDrawCloudSvg() {
  return (
    <LuckyDrawCloudSvg2>
      <path d={svgPaths.p7283000} fill="var(--fill-0, #FFF9EE)" id="Vector" />
      <path d={svgPaths.p19085400} fill="var(--fill-0, #F2A638)" id="Vector_2" />
      <path d={svgPaths.p2326e400} fill="var(--fill-0, #F2A638)" id="Vector_3" />
    </LuckyDrawCloudSvg2>
  );
}

function LuckyDrawCloudElement() {
  return (
    <div className="content-stretch flex flex-col items-start relative w-full" data-name="LuckyDraw_CloudElement_1">
      <LuckyDrawCloudSvg />
    </div>
  );
}

function LuckyDrawCloudSvg1() {
  return (
    <LuckyDrawCloudSvg2>
      <path d={svgPaths.p7283000} fill="var(--fill-0, #FFF9EE)" id="Vector" />
      <path d={svgPaths.p19085400} fill="var(--fill-0, #F2A638)" id="Vector_2" />
      <path d={svgPaths.p33af0f00} fill="var(--fill-0, #F2A638)" id="Vector_3" />
    </LuckyDrawCloudSvg2>
  );
}

function LuckyDrawCloudElement1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[58.02%] right-[-15.37%] top-[calc(50%+388.5px)] translate-y-[-50%]" data-name="LuckyDraw_CloudElement_2">
      <LuckyDrawCloudSvg1 />
    </div>
  );
}

function LandingHoverGestureSvg() {
  return (
    <div className="h-[84.451px] relative shrink-0 w-[75.334px]" data-name="Landing_hover_gesture_svg">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 76 85">
        <g id="Landing_hover_gesture_svg">
          <g filter="url(#filter0_d_7_3612)" id="HoverGesture">
            <path d={svgPaths.pf32f950} fill="var(--fill-0, #FFC9B3)" />
            <path d={svgPaths.pf919600} stroke="var(--stroke-0, #984D1B)" />
          </g>
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="70.2199" id="filter0_d_7_3612" width="67.1814" x="6.97772" y="10.5845">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_7_3612" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow_7_3612" mode="normal" result="shape" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

function LandingHoverGesture() {
  return (
    <div className="content-stretch flex h-[80px] items-center relative w-[71px]" data-name="Landing_HoverGesture">
      <LandingHoverGestureSvg />
    </div>
  );
}

function LuckyDrawHeaderDescription() {
  return (
    <div className="absolute content-stretch flex h-[72px] items-center justify-center left-[84px] top-[74px] w-[224px]" data-name="LuckyDraw_HeaderDescription">
      <div className="font-['ZiHun151',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#fff9ee] text-[0px] text-center text-nowrap text-shadow-[0px_0.742px_0.742px_rgba(169,99,99,0.25)]">
        <p className="mb-0 text-[32px]">
          摇<span className="text-[#fff9ee]">签成功！</span>
        </p>
        <p className="text-[28px]">请查收你的上上签</p>
      </div>
    </div>
  );
}

function RibbonSvg() {
  return (
    <div className="h-[19.131px] relative shrink-0 w-[10.968px]" data-name="Ribbon_svg">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 20">
        <g id="Ribbon_svg">
          <path d={svgPaths.p2bc49f80} fill="var(--fill-0, #FD8716)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function LuckyDrawRibbon() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex items-center ml-[294.22px] mt-[10.06px] relative" data-name="LuckyDraw_Ribbon">
      <RibbonSvg />
    </div>
  );
}

function RibbonSvg1() {
  return (
    <div className="h-[17.278px] relative shrink-0 w-[18.559px]" data-name="Ribbon_svg">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 18">
        <g id="Ribbon_svg">
          <path d={svgPaths.p1ffd1200} fill="var(--fill-0, #FD8716)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function LuckyDrawRibbon1() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col items-start ml-[0.01px] mt-[201.38px] relative w-[18.559px]" data-name="LuckyDraw_Ribbon">
      <RibbonSvg1 />
    </div>
  );
}

function RibbonSvg2() {
  return (
    <div className="h-[28.255px] relative shrink-0 w-[13.97px]" data-name="Ribbon_svg">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 29">
        <g id="Ribbon_svg">
          <path d={svgPaths.p2ad83780} fill="var(--fill-0, #FD8716)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function LuckyDrawRibbon2() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex items-center ml-0 mt-[39.05px] relative" data-name="LuckyDraw_Ribbon">
      <RibbonSvg2 />
    </div>
  );
}

function RibbonSvg3() {
  return (
    <div className="h-[23.949px] relative shrink-0 w-[10.911px]" data-name="Ribbon_svg">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 24">
        <g id="Ribbon_svg">
          <path d={svgPaths.p2afdba00} fill="var(--fill-0, #FD8716)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function LuckyDrawRibbon3() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex items-center ml-[295.33px] mt-[85.3px] relative" data-name="LuckyDraw_Ribbon">
      <RibbonSvg3 />
    </div>
  );
}

function RibbonSvg4() {
  return (
    <div className="h-[21.864px] relative shrink-0 w-[19.884px]" data-name="Ribbon_svg">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 22">
        <g id="Ribbon_svg">
          <path d={svgPaths.p9b33b00} fill="var(--fill-0, #FD8716)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function LuckyDrawRibbon4() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex items-center ml-[306.94px] mt-[527.7px] relative" data-name="LuckyDraw_Ribbon">
      <RibbonSvg4 />
    </div>
  );
}

function Group1() {
  return (
    <div className="h-[17.195px] relative shrink-0 w-[15.078px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 18">
        <g id="Group 128">
          <path d={svgPaths.p14ea0200} fill="var(--fill-0, #FD8716)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function LuckyDrawRibbon5() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex items-center ml-[100.52px] mt-[503.35px] relative" data-name="LuckyDraw_Ribbon">
      <Group1 />
    </div>
  );
}

function RibbonSvg5() {
  return (
    <div className="h-[21.051px] relative shrink-0 w-[11.262px]" data-name="Ribbon_svg">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 22">
        <g id="Ribbon_svg">
          <path d={svgPaths.p18eb6f00} fill="var(--fill-0, #FD8716)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function LuckyDrawRibbon6() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex items-center ml-[17.8px] mt-[421.65px] relative" data-name="LuckyDraw_Ribbon">
      <RibbonSvg5 />
    </div>
  );
}

function RibbonSvg6() {
  return (
    <div className="h-[26.34px] relative shrink-0 w-[7.502px]" data-name="Ribbon_svg">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 27">
        <g id="Ribbon_svg">
          <path d={svgPaths.pa639300} fill="var(--fill-0, #FD8716)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function LuckyDrawRibbon7() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex items-center ml-[266.56px] mt-[249.97px] relative" data-name="LuckyDraw_Ribbon">
      <RibbonSvg6 />
    </div>
  );
}

function RibbonSvg7() {
  return (
    <div className="h-[17.12px] relative shrink-0 w-[16.325px]" data-name="Ribbon_svg">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 18">
        <g id="Ribbon_svg">
          <path d={svgPaths.p3e068d00} fill="var(--fill-0, #FD8716)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function LuckyDrawRibbon8() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex items-center ml-[197.98px] mt-[427.4px] relative" data-name="LuckyDraw_Ribbon">
      <RibbonSvg7 />
    </div>
  );
}

function RibbonSvg8() {
  return (
    <div className="h-[21.725px] relative shrink-0 w-[17.829px]" data-name="Ribbon_svg">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 22">
        <g id="Ribbon_svg">
          <path d={svgPaths.p1a9cff80} fill="var(--fill-0, #FD8716)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function LuckyDrawRibbon9() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex items-center ml-[326.05px] mt-[353.5px] relative" data-name="LuckyDraw_Ribbon">
      <RibbonSvg8 />
    </div>
  );
}

function RibbonSvg9() {
  return (
    <div className="h-[18.227px] relative shrink-0 w-[16.256px]" data-name="Ribbon_svg">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 19">
        <g id="Ribbon_svg">
          <path d={svgPaths.p3b6e5300} fill="var(--fill-0, #FD8716)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function LuckyDrawRibbon10() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex items-center ml-[106.39px] mt-[348.65px] relative" data-name="LuckyDraw_Ribbon">
      <RibbonSvg9 />
    </div>
  );
}

function RibbonSvg10() {
  return (
    <div className="h-[19.724px] relative shrink-0 w-[15.47px]" data-name="Ribbon_svg">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
        <g id="Ribbon_svg">
          <path d={svgPaths.p1e391500} fill="var(--fill-0, #FD8716)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function LuckyDrawRibbon11() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex items-center ml-[82.9px] mt-0 relative" data-name="LuckyDraw_Ribbon">
      <RibbonSvg10 />
    </div>
  );
}

function RibbonSvg11() {
  return (
    <div className="h-[21.495px] relative shrink-0 w-[15.312px]" data-name="Ribbon_svg">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 22">
        <g id="Ribbon_svg">
          <path d={svgPaths.p1ca256c0} fill="var(--fill-0, #FD8716)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function LuckyDrawRibbon12() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex items-center ml-[212px] mt-[160px] relative" data-name="LuckyDraw_Ribbon">
      <RibbonSvg11 />
    </div>
  );
}

function RibbonSvg12() {
  return (
    <div className="h-[23.185px] relative shrink-0 w-[20.653px]" data-name="Ribbon_svg">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 24">
        <g id="Ribbon_svg">
          <path d={svgPaths.p975ea00} fill="var(--fill-0, #FD8716)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function LuckyDrawRibbon13() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex items-center ml-[25.17px] mt-[503.31px] relative" data-name="LuckyDraw_Ribbon">
      <RibbonSvg12 />
    </div>
  );
}

function LuckyDrawRibbonsSvg() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="LuckyDraw_Ribbons_svg">
      <LuckyDrawRibbon />
      <LuckyDrawRibbon1 />
      <LuckyDrawRibbon2 />
      <LuckyDrawRibbon3 />
      <LuckyDrawRibbon4 />
      <LuckyDrawRibbon5 />
      <LuckyDrawRibbon6 />
      <LuckyDrawRibbon7 />
      <LuckyDrawRibbon8 />
      <LuckyDrawRibbon9 />
      <LuckyDrawRibbon10 />
      <LuckyDrawRibbon11 />
      <LuckyDrawRibbon12 />
      <LuckyDrawRibbon13 />
    </div>
  );
}

function LuckyDrawRibbons() {
  return (
    <div className="absolute content-stretch flex items-center left-[16px] top-[184px]" data-name="LuckyDraw_Ribbons">
      <LuckyDrawRibbonsSvg />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <div className="absolute inset-[-0.09%_-0.36%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 117 455">
          <path d={svgPaths.p1c23ab70} fill="var(--fill-0, #F7E3BE)" id="Vector" stroke="var(--stroke-0, #AF8446)" strokeMiterlimit="10" strokeWidth="0.825928" />
        </svg>
      </div>
      <p className="absolute font-['ZiHun151',sans-serif] inset-[31.5%_32.76%_63.22%_32.76%] leading-[normal] not-italic text-[#c1995f] text-[20px] text-center text-nowrap">上签</p>
      <div className="absolute inset-[1.55%_7.14%_1.64%_6.87%]" data-name="Vector">
        <div className="absolute inset-[-0.09%_-0.42%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 101 441">
            <path d={svgPaths.p3fd10800} id="Vector" stroke="var(--stroke-0, #AF8446)" strokeMiterlimit="10" strokeWidth="0.825928" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[12.78%_15.52%_69.38%_15.52%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 81">
          <path d={svgPaths.p2fca3180} fill="var(--fill-0, #C1995F)" id="Vector" />
        </svg>
      </div>
      <p className="absolute font-['ZiHun151',sans-serif] inset-[16.08%_27.59%_72.25%_27.59%] leading-[normal] not-italic text-[#f7e3be] text-[44px] text-center text-nowrap">88</p>
      <p className="absolute font-['ZiHun151',sans-serif] inset-[13.88%_37.07%_81.94%_41.38%] leading-[normal] not-italic text-[#f7e3be] text-[16px] text-nowrap">No.</p>
      <div className="absolute flex flex-col font-['ZiHun151',sans-serif] inset-[44.27%_31.03%_9.03%_31.03%] justify-center leading-[0] not-italic text-[#8e6e44] text-[44px] text-center">
        <p className="leading-[normal]">皆大欢喜</p>
      </div>
    </div>
  );
}

function LuckyDrawJiedahuanxi() {
  return (
    <div className="absolute h-[454px] left-[calc(50%+0.5px)] top-[184px] translate-x-[-50%] w-[116px]" data-name="LuckyDraw_jiedahuanxi">
      <Group />
    </div>
  );
}

// ===== 迁移提示 =====
// 添加事件处理 Props 接口
// ====================
type LuckyDrawResultProps = {
  onButtonClick?: () => void;
};

export default function LuckyDrawResult({ onButtonClick }: LuckyDrawResultProps = {}) {
  return (
    <div className="relative size-full" data-name="LuckyDraw_Result">
      <LuckyDrawBackgroundGroup />
      <LuckyDrawBucket />
      <LuckyDrawButton onClick={onButtonClick} />
      <div className="absolute flex items-center justify-center left-[-20.2%] right-[62.84%] top-[calc(50%+388.5px)] translate-y-[-50%]">
        <div className="flex-none h-[117px] rotate-[180deg] scale-y-[-100%] w-[225.407px]">
          <LuckyDrawCloudElement />
        </div>
      </div>
      <LuckyDrawCloudElement1 />
      <div className="absolute flex h-[84.797px] items-center justify-center left-[219px] top-[723px] w-[76.452px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="flex-none rotate-[355.966deg]">
          <LandingHoverGesture />
        </div>
      </div>
      <LuckyDrawHeaderDescription />
      <LuckyDrawRibbons />
      <LuckyDrawJiedahuanxi />
    </div>
  );
}