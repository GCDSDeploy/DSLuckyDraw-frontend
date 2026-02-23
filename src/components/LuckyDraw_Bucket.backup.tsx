// ===== 回滚备份：LuckyDraw_Bucket（当前已替换为 PNG）=====
//
// 当前状态：DrawBucket 已用 <img src="/assets/LuckyBucket.png" /> 替换原 SVG，无 path/g 参与签筒渲染。
//
// 回滚步骤（还原为 SVG）：
// 1. 在 LuckyDrawDefault.tsx, LuckyDrawShake.tsx, LuckyDrawResult.tsx, LuckyDrawResultPage.tsx 的 DrawBucket 中，
//    将 <img src="/assets/LuckyBucket.png" ... /> 及外层 div[data-name="Bucket"] 还原为：原 div(Bucket) + 主桶 <svg>（见下或使用 LuckyBucket.svg 内联）+ <BucketButtom /> + <BucketDeco /> + <BucketEdge />。
// 2. 主桶 <svg> 可选：单 path（LUCKY_DRAW_BUCKET_ORIGINAL_SVG）或完整 LuckyBucket.svg 内联。
// 3. 执行：rm -rf node_modules/.vite .cache dist && npm run build
//
// --- 主桶替换前 SVG 块 ---
// <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 245 312">
//   <path d={svgPaths.p21199600} fill="var(--fill-0, #FE6924)" id="Bucket" />
// </svg>
//
// --- BucketButtom / BucketEdge 替换前 fill（若需还原颜色）---
// BucketButtom 底条: fill="var(--fill-0, #F32C03)"
// BucketButtomVector 左/右: fill="#5E2315"
// BucketButtom 阴影 g: fill="var(--fill-0, #732544)"
// BucketButtom 高光 g: fill="white"
// BucketEdge Vector: fill="var(--fill-0, #FDC841)"
// BucketEdge Vector_2/3: fill="var(--fill-0, #E5AB29)"
// BucketEdge Vector_4/5/6: fill="var(--fill-0, #9B6F0B)" / "#77540C", opacity="0.47"
// ============================================

export const LUCKY_DRAW_BUCKET_ORIGINAL_SVG = {
  viewBox: "0 0 245 312",
  pathD: "M244.519 0L243.107 18.8406L240.513 53.3565L225.348 255.572L224.541 266.228L223.639 278.295L222.737 290.29L222.272 296.48C221.639 304.974 214.563 311.539 206.048 311.539H38.4711C29.9556 311.539 22.8743 304.974 22.2468 296.48L20.8799 278.295L19.9779 266.228L19.1711 255.572L14.0058 186.815L3.99445 53.3565L1.41178 18.8406L0 0H244.513H244.519Z",
  fill: "var(--fill-0, #FE6924)",
  id: "Bucket",
};

export const BUCKET_BUTTOM_EDGE_ORIGINAL_FILLS = {
  buttomAccent: "var(--fill-0, #F32C03)",
  buttomShadow: "#5E2315",
  buttomShadowG: "var(--fill-0, #732544)",
  buttomHighlight: "white",
  edgeLight: "var(--fill-0, #FDC841)",
  edgeMid: "var(--fill-0, #E5AB29)",
  edgeDark: "var(--fill-0, #9B6F0B)",
  edgeDarkAlt: "var(--fill-0, #77540C)",
};
