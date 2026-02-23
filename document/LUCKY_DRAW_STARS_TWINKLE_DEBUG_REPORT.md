# LuckyDraw_Stars_svg 闪烁动画无效排查与修复报告

## 1. 全局扫描结果

### 1.1 已扫描页面/组件

| 页面/组件 | 文件路径 | data-name="LuckyDraw_Stars_svg" | 根节点 div 结构 |
|-----------|----------|----------------------------------|------------------|
| LuckyDrawDefault | `frontend/src/imports/LuckyDrawDefault.tsx` | 是（1 处） | 有，内含 SVG + g#LuckyDraw_Stars_svg + 4×path |
| LuckyDrawShake | `frontend/src/imports/LuckyDrawShake.tsx` | 是（1 处） | 同上 |
| LuckyDrawResult | `frontend/src/imports/LuckyDrawResult.tsx` | 否 | — |
| LuckyDrawResultPage | `frontend/src/components/LuckyDrawResultPage.tsx` | 否 | — |

### 1.2 扫描时记录（修复前）

| 页面/组件 | animate-star-twinkle class | inline style animationDelay |
|-----------|-----------------------------|-----------------------------|
| LuckyDrawDefault | 已绑定 | 已绑定 `STAR_TWINKLE_DELAY` |
| LuckyDrawShake | 已绑定 | 已绑定 `STAR_TWINKLE_DELAY` |

**结论**：class 与 style 在 TSX 中均已正确绑定；动画不生效原因在 CSS 侧。

---

## 2. Tailwind 检查（根因）

- **tailwind.config.js**：已存在 `keyframes['star-twinkle']` 与 `animation['star-twinkle']`。
- **项目实际使用**：Tailwind **v4.1.12**（`@tailwindcss/vite`），入口为 `src/styles/tailwind.css`，使用 `@import 'tailwindcss' source(none)` 与 `@source '../**/*.{js,ts,jsx,tsx}'`，**未**通过 `tailwind.config.js` 注入 theme.extend。
- **根因**：在 Tailwind v4 的 CSS-first 配置下，仅写在 `tailwind.config.js` 里的 `keyframes`/`animation` **可能不会**被输出到最终 CSS，导致 `.animate-star-twinkle` 在构建产物中不存在或未生效。
- **项目既有做法**：`src/styles/theme.css` 中已用**纯 CSS** 定义 `@keyframes icon-shake` 与 `.animate-icon-shake` 等，保证 build 后生效。

---

## 3. 修复措施（已实施）

### 3.1 在 theme.css 中增加 star-twinkle（保证生效）

在 **`frontend/src/styles/theme.css`** 中新增（与 tailwind.config 一致）：

```css
/* LuckyDraw_Stars_svg 星星闪烁 Bling Bling */
@keyframes star-twinkle {
  0%, 100% { transform: scale(1); opacity: 0.8; }
  25% { transform: scale(1.05); opacity: 1; }
  50% { transform: scale(0.9); opacity: 0.7; }
  75% { transform: scale(1.02); opacity: 0.95; }
}
.animate-star-twinkle {
  animation: star-twinkle 1s ease-in-out infinite;
}
```

- `theme.css` 经 `index.css` → `main.tsx` 打入打包，**不依赖** Tailwind 扫描，动画一定输出到 dist。

### 3.2 动画绑定与渲染优化

- **class**：两处星星根 div 已保留 `animate-star-twinkle` 与 `// STAR_TWINKLE_ADDED` 注释。
- **animationDelay**：已保留 `style={{ animationDelay: STAR_TWINKLE_DELAY }}`（0–0.4s 随机，每页一个常量）。
- **will-change**：在两处星星根 div 的 `style` 中增加 `willChange: 'transform'`，提升合成层，减少动画被裁剪或卡顿的可能。
- **父容器**：`LuckyDrawStars` 仅在使用 `isWeChatLayout` 时有 `transform: translateY(-75px)`，无 `overflow:hidden`，不会裁剪子元素动画。

### 3.3 未改动项（零风险）

- 未删除或修改 SVG 与 path。
- 未改父容器 DOM 结构。
- 未改 CTA、Indicator、bucket、其他动画逻辑。

---

## 4. 验证表格（修复后）

| Page/Component | 星星数量 | animate-star-twinkle class | animationDelay | 修复情况 |
|----------------|----------|-----------------------------|----------------|----------|
| LuckyDrawDefault | 1 容器（4 颗星） | 已绑定，CSS 来自 theme.css | 已绑定，0–0.4s 随机 | 已修复：theme.css 增加 keyframes + .animate-star-twinkle；根 div 增加 will-change |
| LuckyDrawShake | 1 容器（4 颗星） | 已绑定，CSS 来自 theme.css | 已绑定，0–0.4s 随机 | 同上 |

---

## 5. 构建与产物验证

- **命令**：`npm run build`
- **结果**：exit code 0，无报错。
- **产物**：`dist/assets/index-*.css` 中已包含 `star-twinkle`、`animate-star-twinkle`（已用 grep 确认）。
- **Vite 构建状态**：正常。

---

## 6. 真机/模拟器验证建议

- 打开 Default 页与 Shake 页，确认 **4 颗星星**（同一 SVG 内）有**缩放 + 透明度**闪烁。
- 确认：**无限循环**、**不旋转**、不影响摇一摇 CTA、ArrowIndicator、签筒等其他动画。
- 若低端机仍不流畅，可尝试移除根 div 的 `willChange: 'transform'`（减少内存占用）。

---

## 7. 回滚方案

| 修改项 | 回滚方式 |
|--------|----------|
| theme.css 新增 star-twinkle | 删除 `@keyframes star-twinkle` 与 `.animate-star-twinkle` 块 |
| Default/Shake 根 div style 中 will-change | 将 `style={{ animationDelay: STAR_TWINKLE_DELAY, willChange: 'transform' }}` 改回 `style={{ animationDelay: STAR_TWINKLE_DELAY }}` |
| 完全去掉星星动画 | 使用 `LuckyDrawDefault.star-twinkle.backup.tsx`、`LuckyDrawShake.star-twinkle.backup.tsx` 中说明，还原 LuckyDrawStarsSvg 根 div 与删除 STAR_TWINKLE_DELAY |

---

## 8. 日志摘要

- **LuckyDraw_Stars_svg 元素**：共 2 处（Default、Shake），class 与 animationDelay 均正确绑定。
- **animationDelay**：每页通过模块级常量生效，两页节奏错开。
- **覆盖/阻止动画的 CSS**：无；根因为 Tailwind v4 未从 tailwind.config.js 输出 star-twinkle，已改为 theme.css 定义。
- **回滚路径**：见上表；备份文件路径见 `frontend/src/imports/LuckyDrawDefault.star-twinkle.backup.tsx`、`LuckyDrawShake.star-twinkle.backup.tsx`。
