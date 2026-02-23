// ===== 回滚备份：LuckyDraw_Stars_svg 星星闪烁动画（LuckyDrawShake）=====
// 当前：4 个 path 各自随机 scaleMax(1.3~1.5)、duration(1~1.5s)、delay(0~0.5s)，注释 STAR_TWINKLE_RANDOM_APPLIED。
// 回滚：见 LuckyDraw_Stars_svg.backup.tsx；删除 STAR_TWINKLE_* 常量，将 4 个 path 去掉 className/style 即可。
//
// --- 原始 JSX（无 animate-star-twinkle，无 style.animationDelay）---
// function LuckyDrawStarsSvg() {
//   return (
//     <div className="h-[223px] relative shrink-0 w-[180.925px]" data-name="LuckyDraw_Stars_svg">
//       <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 181 223">
//         <g id="LuckyDraw_Stars_svg">
//           <path d={svgPaths.p2a1ea500} fill="var(--fill-0, #F9F9F9)" id="Vector" />
//           <path d={svgPaths.p12c5e640} fill="var(--fill-0, #F9F9F9)" id="Vector_2" />
//           <path d={svgPaths.p29e308f2} fill="var(--fill-0, #F9F9F9)" id="Vector_3" />
//           <path d={svgPaths.p19446a80} fill="var(--fill-0, #F9F9F9)" id="Vector_4" />
//         </g>
//       </svg>
//     </div>
//   );
// }

export {};
