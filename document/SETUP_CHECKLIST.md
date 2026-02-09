# 项目初始化检查清单

## 🚀 快速开始

### 1. 安装依赖

```bash
# 使用 npm
npm install

# 或使用 pnpm（推荐）
pnpm install
```

### 2. 启动开发服务器

```bash
npm run dev
```

访问：http://localhost:5173

---

## ✅ 初始化检查项

### 依赖安装

- [ ] 运行 `npm install` 或 `pnpm install`
- [ ] 确认所有依赖安装成功（无错误）
- [ ] 检查 `node_modules/` 目录存在

### 项目配置

- [x] `package.json` - 已配置 React、React Router
- [x] `vite.config.ts` - 已配置 Vite + React + Tailwind
- [x] `index.html` - 已配置微信 WebView 兼容性
- [x] `src/router/index.tsx` - 路由系统已创建
- [x] `src/app/App.tsx` - 已更新为使用路由

### 样式配置

- [x] `src/styles/index.css` - 主样式入口
- [x] `src/styles/tailwind.css` - Tailwind 配置
- [x] `src/styles/fonts.css` - 字体定义（待添加字体文件）
- [x] `postcss.config.mjs` - PostCSS 配置

### 资源文件

- [ ] 字体文件已放置到 `src/assets/fonts/`
  - [ ] `字魂151号-联盟综艺体.ttf`
  - [ ] `No.77-ShangShouCangShuFaTi-2.ttf`
- [ ] 图片资源已迁移（从 Figma 导出）
  - [ ] 所有 `figma:asset/*` 路径已替换为 `@/assets/images/*`

### 页面组件

- [x] `src/pages/LandingPage.tsx` - 首页（待更新路由）
- [x] `src/pages/LuckyDrawDefault.tsx` - 抽签页面（待更新路由）
- [x] `src/pages/LuckyDrawShake.tsx` - 摇动页面（待更新路由）
- [x] `src/pages/LuckyDrawResult.tsx` - 结果页面（待更新路由）
- [x] `src/pages/LuckyDrawDescription.tsx` - 详情页面（待更新路由）

### Figma 组件

- [x] `src/imports/Landing.tsx` - Figma 生成的首页组件
- [x] `src/imports/LuckyDraw*.tsx` - Figma 生成的抽签组件
- [x] `src/imports/Description*.tsx` - Figma 生成的详情组件

---

## 🧪 功能测试

### 开发环境测试

- [ ] 启动开发服务器：`npm run dev`
- [ ] 访问首页：http://localhost:5173
- [ ] 测试路由跳转：
  - [ ] 首页 → 抽签页面 (`/draw`)
  - [ ] 抽签页面 → 摇动页面 (`/draw/shake`)
  - [ ] 摇动页面 → 结果页面 (`/result/:id`)
  - [ ] 结果页面 → 详情页面 (`/description/:id`)

### 响应式测试

- [ ] iPhone SE (375px) - 基准尺寸
- [ ] iPhone 12/13/14 (390px)
- [ ] iPhone 14 Pro Max (430px) - 最大宽度
- [ ] 横屏模式（可选）

### 微信 WebView 测试

- [ ] 在微信中打开页面
- [ ] 测试页面滚动
- [ ] 测试按钮点击
- [ ] 测试路由跳转
- [ ] 测试分享功能（如已实现）
- [ ] 测试保存图片功能（如已实现）

---

## 🔧 常见问题排查

### 问题 1: 依赖安装失败

**症状**: `npm install` 报错

**解决方案**:
1. 清除缓存：`npm cache clean --force`
2. 删除 `node_modules` 和 `package-lock.json`
3. 重新安装：`npm install`

### 问题 2: 开发服务器启动失败

**症状**: `npm run dev` 报错

**检查项**:
- [ ] Node.js 版本 >= 18
- [ ] 端口 5173 未被占用
- [ ] `vite.config.ts` 配置正确

### 问题 3: 页面空白

**症状**: 浏览器显示空白页面

**检查项**:
- [ ] 打开浏览器控制台查看错误
- [ ] 检查 `src/main.tsx` 是否正确导入
- [ ] 检查 `src/app/App.tsx` 是否正确导出
- [ ] 检查路由配置是否正确

### 问题 4: 样式不生效

**症状**: Tailwind 样式未应用

**检查项**:
- [ ] `src/styles/index.css` 是否导入 `tailwind.css`
- [ ] `src/main.tsx` 是否导入 `styles/index.css`
- [ ] `vite.config.ts` 中是否配置 `tailwindcss()` 插件

### 问题 5: 路由跳转不工作

**症状**: 点击按钮无反应

**检查项**:
- [ ] 页面组件是否使用 `useNavigate()`
- [ ] 路由路径是否在 `router/index.tsx` 中定义
- [ ] 事件处理函数是否正确绑定

### 问题 6: 图片资源找不到

**症状**: 控制台报 404 错误

**检查项**:
- [ ] 图片文件是否存在于 `src/assets/images/`
- [ ] 导入路径是否使用 `@/assets/images/`
- [ ] Vite 配置中 `@` 别名是否正确

### 问题 7: 字体不显示

**症状**: 文字显示为系统字体

**检查项**:
- [ ] 字体文件是否存在于 `src/assets/fonts/`
- [ ] `fonts.css` 中的路径是否正确
- [ ] `index.css` 是否导入 `fonts.css`

---

## 📝 下一步操作

### 立即执行

1. **安装依赖**
   ```bash
   npm install
   ```

2. **启动开发服务器**
   ```bash
   npm run dev
   ```

3. **验证项目运行**
   - 访问 http://localhost:5173
   - 确认页面正常显示

### 后续迁移

参考 `MIGRATION_SPEC.md` 文档，按照检查清单逐步迁移：

1. **资源迁移**（阶段 2）
   - 导出图片资源
   - 迁移字体文件
   - 替换资源路径

2. **页面组件更新**（阶段 3）
   - 更新所有页面组件使用路由
   - 实现事件处理函数

3. **功能完善**（阶段 4）
   - 实现分享功能
   - 实现保存图片功能
   - 添加错误处理

---

## 📚 相关文档

- [迁移规范](./MIGRATION_SPEC.md) - 详细的迁移指南
- [README](./README.md) - 项目说明
- [路由配置](./src/router/index.tsx) - 路由系统文档

---

**最后更新**: 2024-12-19
