# 🚀 快速启动指南

## 已完成的工作

✅ **项目初始化**
- 更新 `package.json`：添加 React 18.3.1、React DOM、React Router v6
- 配置 `index.html`：添加微信 WebView 兼容性 Meta 标签
- 创建路由系统：`src/router/index.tsx`
- 更新 `App.tsx`：使用 React Router 替代临时页面切换逻辑

✅ **文档创建**
- `MIGRATION_SPEC.md`：完整的迁移规范文档
- `SETUP_CHECKLIST.md`：项目初始化检查清单
- `QUICK_START.md`：本文件（快速启动指南）

---

## 立即开始

### 1. 安装依赖

```bash
npm install
# 或
pnpm install
```

### 2. 启动开发服务器

```bash
npm run dev
```

访问：http://localhost:5173

### 3. 验证项目运行

- ✅ 页面应该正常显示（首页 Landing Page）
- ✅ 控制台无错误
- ✅ 样式正常加载

---

## 项目结构

```
DSLuckyDraw/
├── src/
│   ├── app/
│   │   └── App.tsx              ✅ 已更新（使用路由）
│   ├── router/
│   │   └── index.tsx            ✅ 已创建（路由配置）
│   ├── pages/                   ✅ 页面组件（待更新路由）
│   ├── imports/                 ✅ Figma 生成的组件
│   ├── components/              ✅ 可复用组件
│   ├── assets/                  ⏳ 待迁移资源
│   └── styles/                  ✅ 样式文件
```

---

## 下一步操作

### 阶段 1：资源迁移（必须）

1. **导出图片资源**
   - 从 Figma 导出所有 PNG 图片
   - 放置到 `src/assets/images/`

2. **迁移字体文件**
   - 放置字体文件到 `src/assets/fonts/`
   - 更新 `src/styles/fonts.css` 中的路径

3. **替换资源路径**
   - 批量替换 `figma:asset/*` 为 `@/assets/images/*`
   - 参考 `MIGRATION_SPEC.md` 中的详细步骤

### 阶段 2：页面组件更新（必须）

更新所有页面组件使用 React Router：

1. **LandingPage.tsx**
   ```tsx
   import { useNavigate } from 'react-router-dom';
   
   export default function LandingPage() {
     const navigate = useNavigate();
     const handleStartClick = () => navigate('/draw');
     return <Landing onStartClick={handleStartClick} />;
   }
   ```

2. **其他页面组件**
   - 参考 `MIGRATION_SPEC.md` 中的示例代码
   - 使用 `useNavigate()` 替代 props 传递

### 阶段 3：功能实现（可选）

- 实现分享功能（Web Share API）
- 实现保存图片功能（html2canvas）
- 添加错误处理和加载状态

---

## 路由系统

### 当前路由配置

| 路径 | 页面 | 状态 |
|------|------|------|
| `/` | LandingPage | ✅ 已配置 |
| `/draw` | LuckyDrawDefault | ✅ 已配置 |
| `/draw/shake` | LuckyDrawShake | ✅ 已配置 |
| `/result/:id` | LuckyDrawResult | ✅ 已配置 |
| `/description/:id` | LuckyDrawDescription | ✅ 已配置 |

### 路由跳转示例

```tsx
import { useNavigate } from 'react-router-dom';

function MyComponent() {
  const navigate = useNavigate();
  
  // 跳转到抽签页面
  navigate('/draw');
  
  // 跳转到结果页面（带参数）
  navigate(`/result/${resultId}`);
}
```

---

## 微信 WebView 兼容性

### 已配置的 Meta 标签

- ✅ 视口配置（禁止缩放）
- ✅ 禁止自动识别电话号码
- ✅ iOS Safari 全屏模式
- ✅ 禁止字体自动调整

### 响应式设计

- **基准尺寸**: 375px（iPhone 标准）
- **最大宽度**: 430px（iPhone 16 Pro Max）
- **容器样式**: `max-w-[430px] mx-auto`

---

## 技术栈

- **React**: 18.3.1
- **TypeScript**: 5.7.2
- **Vite**: 6.3.5
- **Tailwind CSS**: 4.1.12
- **React Router**: v6

---

## 文档索引

1. **[MIGRATION_SPEC.md](./MIGRATION_SPEC.md)** - 完整迁移规范
   - 文件结构映射
   - 资源路径迁移
   - 事件绑定规范
   - 路由系统说明

2. **[SETUP_CHECKLIST.md](./SETUP_CHECKLIST.md)** - 初始化检查清单
   - 依赖安装检查
   - 功能测试步骤
   - 常见问题排查

3. **[QUICK_START.md](./QUICK_START.md)** - 本文件
   - 快速启动步骤
   - 项目结构说明
   - 下一步操作指南

---

## 需要帮助？

### 常见问题

1. **依赖安装失败** → 查看 `SETUP_CHECKLIST.md` 的"常见问题排查"
2. **路由跳转不工作** → 检查页面组件是否使用 `useNavigate()`
3. **图片资源找不到** → 确认资源路径已从 `figma:asset/*` 替换为 `@/assets/images/*`
4. **样式不生效** → 检查 `src/styles/index.css` 是否正确导入

### 参考文档

- [React Router 文档](https://reactrouter.com/)
- [Vite 文档](https://vitejs.dev/)
- [Tailwind CSS 文档](https://tailwindcss.com/)

---

**最后更新**: 2024-12-19
