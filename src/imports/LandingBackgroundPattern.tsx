// ===== 灯笼背景图案组件（PNG 版本） =====
// 使用 PNG 平铺背景代替 SVG mask
// 适配移动端 375px 基准尺寸
// ===========================================

import bgPatternImage from "@/assets/09245eba98b5559b1bc319006b1f48d78893cfe9.png";

export default function LandingBackgroundPattern() {
  return (
    <div 
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage: `url(${bgPatternImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover", // 覆盖整个容器，保持比例
        backgroundPosition: "center center",
      }}
    />
  );
}