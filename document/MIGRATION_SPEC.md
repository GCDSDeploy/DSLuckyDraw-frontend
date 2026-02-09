# Figma Make → Cursor 迁移规范

## 📋 目录

1. [项目架构](#项目架构)
2. [文件结构映射](#文件结构映射)
3. [资源路径迁移](#资源路径迁移)
4. [事件绑定规范](#事件绑定规范)
5. [路由系统](#路由系统)
6. [微信 WebView 兼容性](#微信-webview-兼容性)
7. [迁移检查清单](#迁移检查清单)

---

## 项目架构

### 技术栈

- **框架**: React 18.3.1
- **构建工具**: Vite 6.3.5
- **样式**: Tailwind CSS 4.1.12
- **路由**: React Router v6
- **语言**: TypeScript
- **目标环境**: 微信 WebView（移动端 H5）

### 项目结构

```
DSLuckyDraw/
├── index.html                 # 入口 HTML（已配置微信兼容性）
├── vite.config.ts            # Vite 配置
├── package.json              # 依赖管理
├── postcss.config.mjs        # PostCSS 配置
│
├── src/
│   ├── main.tsx             # React 入口
│   ├── app/
│   │   └── App.tsx          # 应用主组件（路由入口）
│   │
│   ├── router/
│   │   └── index.tsx        # 路由配置
│   │
│   ├── pages/               # 页面组件
│   │   ├── LandingPage.tsx
│   │   ├── LuckyDrawDefault.tsx
│   │   ├── LuckyDrawShake.tsx
│   │   ├── LuckyDrawResult.tsx
│   │   └── LuckyDrawDescription.tsx
│   │
│   ├── imports/             # Figma Make 生成的组件（待迁移）
│   │   ├── Landing.tsx
│   │   ├── LuckyDraw.tsx
│   │   └── ...
│   │
│   ├── components/          # 可复用组件
│   │   ├── FortuneSlip.tsx
│   │   ├── LuckyDrawResultPage.tsx
│   │   └── DescriptionContent.tsx
│   │
│   ├── assets/              # 静态资源
│   │   ├── fonts/           # 字体文件
│   │   ├── images/          # 图片资源
│   │   └── svgs/            # SVG 文件（可选）
│   │
│   ├── styles/              # 样式文件
│   │   ├── index.css       # 主样式入口
│   │   ├── tailwind.css    # Tailwind 配置
│   │   ├── fonts.css       # 字体定义
│   │   └── theme.css       # 主题变量
│   │
│   ├── data/                # 静态数据（待替换为 API）
│   │   └── luckyDrawResults.ts
│   │
│   └── types/               # TypeScript 类型定义
│       └── index.ts
```

---

## 文件结构映射

### Figma Make → Cursor 映射表

| Figma Make 路径 | Cursor 路径 | 说明 |
|----------------|------------|------|
| `src/imports/Landing.tsx` | `src/imports/Landing.tsx` | **保留**，Figma 生成的组件 |
| `src/imports/LuckyDraw*.tsx` | `src/imports/LuckyDraw*.tsx` | **保留**，Figma 生成的组件 |
| `src/imports/Description*.tsx` | `src/imports/Description*.tsx` | **保留**，Figma 生成的组件 |
| `src/pages/LandingPage.tsx` | `src/pages/LandingPage.tsx` | **保留**，页面容器组件 |
| `figma:asset/*.png` | `src/assets/images/*.png` | **迁移**，替换为实际路径 |
| `figma:asset/*.svg` | 内联 SVG（React 组件） | **保留**，Figma 已生成内联 SVG |
| `./svg-*.tsx` | `src/imports/svg-*.tsx` | **保留**，SVG 路径数据文件 |

### 迁移原则

1. **保留 Figma 生成的组件结构**：`src/imports/` 目录下的组件保持原样
2. **页面组件作为容器**：`src/pages/` 中的组件负责路由集成和事件处理
3. **资源路径统一**：使用 `@/assets/` 别名引用资源
4. **事件处理分离**：Figma 组件接收 props，页面组件处理路由跳转

---

## 资源路径迁移

### 1. 图片资源迁移

#### Figma Make 格式
```tsx
import imgExample from "figma:asset/cf7166fb13d3d295ab8f9c7c974f5fc8402be6d5.png";
```

#### Cursor 格式
```tsx
import imgExample from "@/assets/images/stuck-at-home-standing.png";
```

#### 迁移步骤

1. **从 Figma 导出图片**
   - 导出格式：PNG（保持原始尺寸）
   - 命名规范：使用语义化名称（如 `stuck-at-home-standing.png`）

2. **放置到项目**
   ```
   src/assets/images/
   ├── stuck-at-home-standing.png
   ├── hands-checkmark.png
   └── ...
   ```

3. **批量替换导入路径**
   ```bash
   # 使用 VS Code 或 Cursor 的查找替换功能
   # 查找：figma:asset/cf7166fb13d3d295ab8f9c7c974f5fc8402be6d5.png
   # 替换：@/assets/images/stuck-at-home-standing.png
   ```

### 2. SVG 资源处理

#### 当前状态
- Figma Make 已生成内联 SVG（React 组件形式）
- SVG 路径数据存储在 `src/imports/svg-*.tsx` 文件中

#### 迁移建议
- **保留内联 SVG**：无需迁移，直接使用
- **如需优化**：可将常用 SVG 提取为独立组件（`src/components/icons/`）

### 3. 字体资源迁移

#### 字体文件位置
```
src/assets/fonts/
├── 字魂151号-联盟综艺体.ttf
└── No.77-ShangShouCangShuFaTi-2.ttf
```

#### 字体 CSS 配置
文件：`src/styles/fonts.css`

```css
@font-face {
  font-family: 'ZiHun151';
  src: url('@/assets/fonts/字魂151号-联盟综艺体.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}
```

#### Figma 字体名称映射

| Figma 字体名称 | CSS 字体名称 | 使用场景 |
|---------------|------------|---------|
| `zihun151hao-lianmengzongyiti:Regular` | `ZiHun151` | 标题、按钮 |
| `No.77-ShangShouCangShuFaTi-2` | `ShangShouCangShu` | 装饰性文字 |

#### Tailwind 配置（可选）

在 `tailwind.config.js` 中配置字体别名：

```js
export default {
  theme: {
    extend: {
      fontFamily: {
        zihun: ['ZiHun151', 'sans-serif'],
        shangshou: ['ShangShouCangShu', 'serif'],
      },
    },
  },
}
```

使用：
```tsx
<div className="font-zihun">标题文字</div>
```

---

## 事件绑定规范

### 1. 事件处理模式

#### ✅ 推荐：React 事件 + 路由导航

```tsx
// src/pages/LandingPage.tsx
import { useNavigate } from 'react-router-dom';

export default function LandingPage() {
  const navigate = useNavigate();
  
  const handleStartClick = () => {
    navigate('/draw');
  };
  
  return (
    <Landing 
      onStartClick={handleStartClick}
    />
  );
}
```

#### ✅ 保留：data-action 作为语义标注

```tsx
// src/imports/Landing.tsx
function LandingTryCta({ onClick }: { onClick?: () => void }) {
  return (
    <div 
      className="..."
      data-action="start"        // 语义标注（用于测试、埋点）
      onClick={onClick}          // React 事件处理
    >
      试试手气
    </div>
  );
}
```

### 2. 路由跳转规范

#### 页面路由映射

| 路由路径 | 页面组件 | 说明 |
|---------|---------|------|
| `/` | `LandingPage` | 首页 |
| `/draw` | `LuckyDrawDefault` | 抽签默认状态 |
| `/draw/shake` | `LuckyDrawShake` | 抽签摇动动画 |
| `/result/:id` | `LuckyDrawResult` | 抽签结果（动态参数） |
| `/description/:id` | `LuckyDrawDescription` | 签文详情（动态参数） |

#### 路由跳转示例

```tsx
import { useNavigate, useParams } from 'react-router-dom';

// 基础跳转
const navigate = useNavigate();
navigate('/draw');

// 带参数跳转
navigate(`/result/${resultId}`);

// 获取路由参数
const { id } = useParams<{ id: string }>();
const resultId = Number(id);
```

### 3. 事件处理函数命名规范

| 事件类型 | 函数命名 | 示例 |
|---------|---------|------|
| 按钮点击 | `handle[Action]Click` | `handleStartClick` |
| 链接点击 | `handle[Navigate]Click` | `handleRulesClick` |
| 表单提交 | `handle[Form]Submit` | `handleLoginSubmit` |
| 输入变化 | `handle[Field]Change` | `handleNameChange` |

---

## 路由系统

### 路由配置

文件：`src/router/index.tsx`

```tsx
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
// ... 其他页面导入

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  // ... 其他路由
]);

export function Router() {
  return <RouterProvider router={router} />;
}
```

### 微信 WebView 兼容性

#### BrowserRouter vs HashRouter

| 路由类型 | URL 格式 | 兼容性 | 推荐场景 |
|---------|---------|--------|---------|
| `BrowserRouter` | `/draw` | 需要服务器配置 | 生产环境（推荐） |
| `HashRouter` | `/#/draw` | 无需服务器配置 | 开发环境、旧版微信 |

#### 切换为 HashRouter（如需要）

```tsx
// src/router/index.tsx
import { createHashRouter } from 'react-router-dom';

export const router = createHashRouter([...]);
```

### 页面组件更新

#### 更新前（使用 props）

```tsx
// ❌ 旧方式
export default function LandingPage({ onStartClick }: Props) {
  return <Landing onStartClick={onStartClick} />;
}
```

#### 更新后（使用路由）

```tsx
// ✅ 新方式
import { useNavigate } from 'react-router-dom';

export default function LandingPage() {
  const navigate = useNavigate();
  
  const handleStartClick = () => {
    navigate('/draw');
  };
  
  return <Landing onStartClick={handleStartClick} />;
}
```

---

## 微信 WebView 兼容性

### 1. HTML Meta 配置

已配置在 `index.html`：

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover" />
<meta name="format-detection" content="telephone=no" />
<meta name="apple-mobile-web-app-capable" content="yes" />
```

### 2. 响应式设计

#### 基准尺寸
- **设计基准**: 375px（iPhone 标准尺寸）
- **最大宽度**: 430px（iPhone 16 Pro Max）
- **容器样式**: `max-w-[430px] mx-auto`

#### 容器结构

```tsx
<div className="w-full min-h-screen flex justify-center bg-[#9f1518]">
  <div className="relative w-full max-w-[430px] mx-auto overflow-hidden">
    {/* 页面内容 */}
  </div>
</div>
```

### 3. 性能优化

#### 图片优化
- 使用 WebP 格式（如支持）
- 添加 `loading="lazy"` 属性
- 使用 `srcset` 提供多尺寸图片

#### 字体优化
- 使用 `font-display: swap` 避免 FOIT
- 预加载关键字体

#### 代码分割
- 使用 React.lazy 懒加载页面组件
- 路由级别的代码分割

---

## 迁移检查清单

### ✅ 阶段 1：项目初始化

- [x] 更新 `package.json`（添加 React、React Router）
- [x] 配置 `index.html`（微信兼容性）
- [x] 创建路由系统（`src/router/index.tsx`）
- [x] 更新 `App.tsx`（使用路由）

### ⏳ 阶段 2：资源迁移

- [ ] 导出所有图片资源（从 Figma）
- [ ] 放置图片到 `src/assets/images/`
- [ ] 批量替换 `figma:asset/*` 为 `@/assets/images/*`
- [ ] 放置字体文件到 `src/assets/fonts/`
- [ ] 更新 `src/styles/fonts.css` 中的字体路径

### ⏳ 阶段 3：页面组件更新

- [ ] 更新 `LandingPage.tsx`（使用 `useNavigate`）
- [ ] 更新 `LuckyDrawDefault.tsx`（使用 `useNavigate`）
- [ ] 更新 `LuckyDrawShake.tsx`（使用 `useNavigate`）
- [ ] 更新 `LuckyDrawResult.tsx`（使用 `useParams` + `useNavigate`）
- [ ] 更新 `LuckyDrawDescription.tsx`（使用 `useParams` + `useNavigate`）

### ⏳ 阶段 4：事件绑定

- [ ] 检查所有 `data-action` 属性（保留作为语义标注）
- [ ] 确保所有交互元素有 `onClick` 处理
- [ ] 实现页面跳转逻辑
- [ ] 实现分享功能（Web Share API）
- [ ] 实现保存图片功能（html2canvas）

### ⏳ 阶段 5：测试与优化

- [ ] 本地开发环境测试（`npm run dev`）
- [ ] 微信 WebView 测试
- [ ] 不同 iPhone 尺寸测试
- [ ] 性能优化（代码分割、图片优化）
- [ ] 错误处理（404、加载失败）

---

## 常见问题

### Q1: 如何切换为 HashRouter？

A: 修改 `src/router/index.tsx`：

```tsx
import { createHashRouter } from 'react-router-dom';
export const router = createHashRouter([...]);
```

### Q2: 图片资源找不到？

A: 检查：
1. 图片文件是否存在于 `src/assets/images/`
2. Vite 配置中 `@` 别名是否正确
3. 导入路径是否使用 `@/assets/images/`

### Q3: 字体不显示？

A: 检查：
1. 字体文件是否存在于 `src/assets/fonts/`
2. `fonts.css` 中的路径是否正确
3. 字体是否在 `index.css` 中导入

### Q4: 路由跳转不工作？

A: 检查：
1. 是否在页面组件中使用 `useNavigate()`
2. 路由路径是否在 `router/index.tsx` 中定义
3. 服务器是否配置了 SPA 路由回退（生产环境）

---

## 下一步

1. **安装依赖**：`npm install` 或 `pnpm install`
2. **启动开发服务器**：`npm run dev`
3. **按照检查清单逐步迁移**
4. **测试微信 WebView 兼容性**

---

**最后更新**: 2024-12-19
**维护者**: Cursor AI Assistant
