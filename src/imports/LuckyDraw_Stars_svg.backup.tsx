// ========== LuckyDraw_Stars_svg 回滚备份 ==========
// 本文件仅保留原始 <g id="LuckyDraw_Stars_svg"> 内四个 path 的 JSX，用于一键回滚动画。
// 涉及页面：LuckyDrawDefault.tsx、LuckyDrawShake.tsx（LuckyDrawResult 无此节点）
//
// 回滚步骤：
// 1. 在 LuckyDrawDefault.tsx 中：
//    - 删除 STAR_TWINKLE_SCALE_CLASSES、STAR_TWINKLE_CONFIG_DEFAULT 及 // STAR_TWINKLE_RANDOM_APPLIED 注释
//    - 将 <g id="LuckyDraw_Stars_svg"> 内 4 个 path 替换为下方 ORIGINAL_G_CONTENT_DEFAULT（去掉 className 与 style）
// 2. 在 LuckyDrawShake.tsx 中：
//    - 删除 STAR_TWINKLE_SCALE_CLASSES、STAR_TWINKLE_CONFIG_SHAKE 及 // STAR_TWINKLE_RANDOM_APPLIED 注释
//    - 将 <g id="LuckyDraw_Stars_svg"> 内 4 个 path 替换为下方 ORIGINAL_G_CONTENT_SHAKE（去掉 className 与 style）
// 3. 可选：在 theme.css 中注释或删除 .animate-star-twinkle-scale-1-3 等 5 个变体及对应 @keyframes
// 4. 执行 npm run build 或 npm run dev
//
// ---------- 原始 4 个 path（无 class、无 style），Default 与 Shake 相同，仅 svgPaths 来源不同 ----------
// <path d={svgPaths.p2a1ea500} fill="var(--fill-0, #F9F9F9)" id="Vector" />
// <path d={svgPaths.p12c5e640} fill="var(--fill-0, #F9F9F9)" id="Vector_2" />
// <path d={svgPaths.p29e308f2} fill="var(--fill-0, #F9F9F9)" id="Vector_3" />
// <path d={svgPaths.p19446a80} fill="var(--fill-0, #F9F9F9)" id="Vector_4" />

export {};
