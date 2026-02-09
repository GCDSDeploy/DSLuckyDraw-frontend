# Lucky Draw Landing 页面 - Cursor 迁移指南

## 📋 项目概述

本文档记录了 Landing 页面从 Figma Make 到 Cursor 项目的迁移步骤和注意事项。

---

## 🗂️ 当前文件结构

```
/src
  /app
    App.tsx                          # 应用入口（已添加临时路由逻辑）
  
  /pages
    LandingPage.tsx                  # Landing 页面组件（375px 容器包裹）
  
  /imports
    Landing.tsx                      # Figma 生成的主组件（已添加迁移注释）
    LandingBackgroundLayer.tsx       # 背景装饰层组件（灯笼图案）
    svg-eunazgei67.ts                # SVG 路径数据（主要组件）
    svg-n66izm1aw1.ts                # SVG 路径数据（背景层）
    svg-2xvnw.tsx                    # SVG Mask 图片（主要组件 - 55个）
    svg-pr6lh.tsx                    # SVG Mask 图片（背景层 - 55个）
  
  /styles
    fonts.css                        # 字体声明（已添加迁移注释）
    index.css                        # 样式入口（已导入 fonts.css）
    theme.css                        # 全局主题样式
    tailwind.css                     # Tailwind 配置
```

---

## ⚠️ 迁移前检查清单

### 1. 环境准备

- [ ] 已安装 Node.js 18+
- [ ] 已安装 Cursor IDE
- [ ] 已克隆或导入此项目到 Cursor
- [ ] 已运行 `npm install` 安装依赖

### 2. 资源文件准备

- [ ] 从 Figma 导出以下图片资源：
  - `stuck-at-home-standing.png` (人物插画)
  - `hands-checkmark.png` (手势图标)
  - 可选：55 个 SVG Mask 图片（主要组件，如需保留）
  - 可选：55 个 SVG Mask 图片（背景层灯笼图案，如需保留）

- [ ] 从设计团队获取字体文件：
  - `字魂151���-联盟综艺体.ttf`
  - `No.77-ShangShouCangShuFaTi-2.ttf`

---

## 🚀 迁移步骤

### 阶段 1：创建资源目录

在 Cursor 项目根目录执行：

\`\`\`bash
mkdir -p src/assets/images
mkdir -p src/assets/fonts
mkdir -p src/assets/svgs/masks  # 可选
\`\`\`

### 阶段 2：迁移图片资源

1. **放置栅格图片**
   \`\`\`bash
   # 将从 Figma 导出的图片放置到：
   src/assets/images/stuck-at-home-standing.png
   src/assets/images/hands-checkmark.png
   \`\`\`

2. **更新导入路径**
   
   打开 `/src/imports/Landing.tsx`，替换：
   
   \`\`\`tsx
   // 替换前：
   import imgStuckAtHomeStanding from "figma:asset/cf7166fb...png";
   import imgHandsCheckmark from "figma:asset/39f18a03...png";
   
   // 替换后：
   import imgStuckAtHomeStanding from '../assets/images/stuck-at-home-standing.png';
   import imgHandsCheckmark from '../assets/images/hands-checkmark.png';
   \`\`\`

3. **（可选）迁移 SVG Mask 图片**
   
   如果需要保留 SVG Mask 效果：
   - 从 Figma 导出 55 个 mask 图片到 `/src/assets/svgs/masks/`
   - 更新 `/src/imports/svg-2xvnw.tsx` 中的导入路径

---

### 阶段 3：迁移字体文件

1. **放置字体文件**
   \`\`\`bash
   src/assets/fonts/字魂151号-联盟综艺体.ttf
   src/assets/fonts/No.77-ShangShouCangShuFaTi-2.ttf
   \`\`\`

2. **更新字体路径**
   
   打开 `/src/styles/fonts.css`，替换：
   
   \`\`\`css
   /* 替换前： */
   src: url('../assets/fonts/字魂151号-联盟综艺体.ttf') format('truetype');
   
   /* 替换后（如果使用路径别名）： */
   src: url('@/assets/fonts/字魂151号-联盟综艺体.ttf') format('truetype');
   \`\`\`

3. **配置路径别名（如果使用 `@/`）**
   
   在 `vite.config.ts` 或 `tsconfig.json` 中确保：
   
   \`\`\`typescript
   // vite.config.ts
   export default defineConfig({
     resolve: {
       alias: {
         '@': path.resolve(__dirname, './src')
       }
     }
   });
   \`\`\`

---

### 阶段 4：配置路由系统

1. **安装 React Router**
   \`\`\`bash
   npm install react-router-dom
   \`\`\`

2. **创建路由配置**
   
   创建 `/src/router/index.tsx`：
   
   \`\`\`tsx
   import { createBrowserRouter, RouterProvider } from 'react-router-dom';
   import LandingPage from '../pages/LandingPage';
   
   const router = createBrowserRouter([
     {
       path: '/',
       element: <LandingPage />
     },
     // TODO: 添加其他页面路由
     // {
     //   path: '/draw',
     //   element: <LuckyDrawPage />
     // },
   ]);
   
   export function Router() {
     return <RouterProvider router={router} />;
   }
   \`\`\`

3. **更新 App.tsx**
   
   替换 `/src/app/App.tsx` 内容：
   
   \`\`\`tsx
   import { Router } from '../router';
   
   export default function App() {
     return <Router />;
   }
   \`\`\`

---

### 阶段 5：添加事件处理

1. **修改 Landing.tsx 添加事件 Props**
   
   在 `/src/imports/Landing.tsx` 中，找到以下组件并添加 Props：
   
   **LandingTryCta 组件：**
   \`\`\`tsx
   interface LandingTryCtaProps {
     onClick?: () => void;
   }
   
   function LandingTryCta({ onClick }: LandingTryCtaProps) {
     return (
       <div 
         className="absolute bg-[#ffc994] ... cursor-pointer"
         data-action="start"
         onClick={onClick}
       >
         {/* ... */}
       </div>
     );
   }
   \`\`\`
   
   **CtaRules 组件：**
   \`\`\`tsx
   interface CtaRulesProps {
     onClick?: () => void;
   }
   
   function CtaRules({ onClick }: CtaRulesProps) {
     return (
       <div 
         className="... cursor-pointer"
         data-action="rules"
         onClick={onClick}
       >
         {/* ... */}
       </div>
     );
   }
   \`\`\`

2. **更新主 Landing 组件**
   
   在 `/src/imports/Landing.tsx` 底部的默认导出：
   
   \`\`\`tsx
   interface LandingProps {
     onStartClick?: () => void;
     onRulesClick?: () => void;
   }
   
   export default function Landing({ onStartClick, onRulesClick }: LandingProps) {
     return (
       <div className="bg-[#9f1518] relative size-full">
         {/* ... */}
         <LandingTryCta onClick={onStartClick} />
         <LandingBottomArea onRulesClick={onRulesClick} />
         {/* ... */}
       </div>
     );
   }
   \`\`\`

3. **更新 LandingPage.tsx**
   
   在 `/src/pages/LandingPage.tsx` 中传递事件处理：
   
   \`\`\`tsx
   import { useNavigate } from 'react-router-dom';
   import Landing from '../imports/Landing';
   
   export default function LandingPage() {
     const navigate = useNavigate();
     
     const handleStartClick = () => {
       navigate('/draw');
     };
     
     const handleRulesClick = () => {
       // 打开规则说明弹窗或跳转页面
       navigate('/rules');
     };
     
     return (
       <div className="w-full min-h-screen flex justify-center bg-[#9f1518]">
         <div className="relative w-[375px] max-w-full overflow-hidden">
           <Landing 
             onStartClick={handleStartClick}
             onRulesClick={handleRulesClick}
           />
         </div>
       </div>
     );
   }
   \`\`\`

---

### 阶段 6：验证和测试

1. **启动开发服务器**
   \`\`\`bash
   npm run dev
   \`\`\`

2. **检查项清单**
   
   - [ ] 页面正常显示，无控制台错误
   - [ ] 图片资源加载成功（检查 Network 面板）
   - [ ] 字体加载成功（检查 Font 面板）
   - [ ] 页面宽度固定在 375px
   - [ ] "试试手气" 按钮点击可跳转
   - [ ] "活动规则" 链接点击有响应
   - [ ] 响应式布局在移动端和桌面端正常

3. **性能优化检查**
   
   - [ ] 图片是否需要压缩优化
   - [ ] 是否需要添加图片懒加载
   - [ ] 字体加载是否需要 font-display 优化
   - [ ] SVG Mask 是否可以用 CSS 替代

---

## 🔧 常见问题排查

### 问题 1：图片无法显示

**症状：** 页面显示但图片区域空白

**排查步骤：**
1. 检查浏览器控制台是否有 404 错误
2. 验证图片文件路径是否正确
3. 检查图片文件名是否与导入语句一致
4. 确认图片文件权限（可读）

**解决方案：**
\`\`\`bash
# 检查文件是否存在
ls -la src/assets/images/

# 确保文件名完全匹配（区分大小写）
\`\`\`

---

### 问题 2：字体无法加载

**症状：** 文字显示为系统默认字体

**排查步骤：**
1. 打开浏览器开发工具 → Network → Font
2. 检查字体文件是否有 404 错误
3. 验证 fonts.css 中的路径是否正确

**解决方案：**
\`\`\`css
/* 方案 1：使用相对路径 */
src: url('../assets/fonts/字魂151号-联盟综艺体.ttf') format('truetype');

/* 方案 2：使用绝对路径（需要配置） */
src: url('@/assets/fonts/字魂151号-联盟综艺体.ttf') format('truetype');
\`\`\`

---

### 问题 3：375px 容器在移动端显示异常

**症状：** 页面在手机上显示过小或有横向滚动

**排查步骤：**
1. 检查 `index.html` 是否有 viewport meta 标签
2. 验证 CSS 是否有冲突的样式

**解决方案：**
\`\`\`html
<!-- 确保 index.html 中有此标签 -->
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
\`\`\`

---

### 问题 4：SVG 图标显示异常

**症状：** SVG 图标变形或颜色错误

**排查步骤：**
1. 检查是否正确导入 `svgPaths`
2. 验证 CSS 变量是否正确应用
3. 检查 viewBox 是否保持不变

**解决方案：**
\`\`\`tsx
// 确保保留原始 viewBox
<svg viewBox="0 0 105 105" fill="none">
  <path d={svgPaths.p3578f9f8} stroke="var(--stroke-0, #C9AC6D)" />
</svg>
\`\`\`

---

## 📊 性能优化建议

### 1. 图片优化

\`\`\`bash
# 使用 ImageOptim 或 TinyPNG 压缩图片
# 目标：将 PNG 图片大小减少 50-70%

# 考虑转换为 WebP 格式（更小体积）
npm install @squoosh/cli
squoosh-cli --webp auto src/assets/images/*.png
\`\`\`

### 2. 字体优化

\`\`\`css
/* 使用 font-display: swap 优化首次加载 */
@font-face {
  font-family: 'ZiHun151';
  src: url('@/assets/fonts/字魂151号-联盟综艺体.ttf') format('truetype');
  font-display: swap; /* 先显示系统字体，字体加载后替换 */
}

/* 考虑提取子集减少文件大小 */
/* 使用 fonttools 或在线工具提取常用汉字 */
\`\`\`

### 3. SVG 优化

\`\`\`bash
# 使用 SVGO 优化 SVG 文件
npm install -g svgo
svgo -f src/assets/svgs/
\`\`\`

---

## 🎯 下一步工作

完成 Landing 页面迁移后，继续以下工作：

1. **第一批次其他页面**
   - [ ] LuckyDraw 变体 1
   - [ ] LuckyDraw 变体 2

2. **第二批次页面**
   - [ ] Result 页面（11 个变体）
   - [ ] Description 页面（11 个变体）
   - [ ] Share 页面

3. **全局功能**
   - [ ] 状态管理（Zustand / Redux）
   - [ ] API 集成
   - [ ] 错误边界
   - [ ] 加载动画
   - [ ] Toast 通知

4. **测试**
   - [ ] 单元测试（Jest + Testing Library）
   - [ ] E2E 测试（Playwright）
   - [ ] 跨浏览器测试
   - [ ] 移动设备真机测试

---

## 📞 技术支持

如有问题，请查阅：
- Figma Make 文档：[链接]
- 项目 README：`/README.md`
- 技术栈文档：React + Tailwind CSS + Vite

---

**最后更新：** 2024-12-18  
**版本：** v1.0.0  
**维护者：** [Your Team]
