# LuckyDraw_Stars_svg 精确缩放（4 个 Vector 独立闪烁）验证报告

## 1. 目标与约束

- **范围**：LuckyDraw 系列所有含 `<g id="LuckyDraw_Stars_svg">` 的页面/组件。
- **目标元素**：该 `<g>` 内的 **4 个子元素**（id="Vector"、id="Vector_2"、id="Vector_3"、id="Vector_4"），均为 `<path>`。
- **效果**：仅对上述 4 个 path **缩放（scale）**，禁止位移（translate）或旋转（rotate）；无限循环，每颗星随机 animation-delay。
- **约束**：不修改 DOM 层级、不新增节点、不影响 CTA/motionDetected/Indicator 等，零风险、可回滚。

---

## 2. 定位与扫描结果

| 页面/组件 | 文件路径 | 含 g#LuckyDraw_Stars_svg | 4 个 Vector 子元素 |
|-----------|----------|---------------------------|--------------------|
| LuckyDrawDefault | `frontend/src/imports/LuckyDrawDefault.tsx` | 是 | path#Vector, path#Vector_2, path#Vector_3, path#Vector_4 |
| LuckyDrawShake | `frontend/src/imports/LuckyDrawShake.tsx` | 是 | 同上 |
| LuckyDrawResult | `frontend/src/imports/LuckyDrawResult.tsx` | 否 | — |
| LuckyDrawResultPage | `frontend/src/components/LuckyDrawResultPage.tsx` | 否 | — |

**结论**：仅 Default、Shake 两处存在星星 SVG；每处 1 个 `<g id="LuckyDraw_Stars_svg">`，内为 4 个 path。

---

## 3. 现有动画与问题检查

- **原实现**：动画挂在**根 div**（data-name="LuckyDraw_Stars_svg"）上，整块 SVG 一起缩放。
- **keyframes**：`star-twinkle` 与新增 `star-twinkle-scale-only` 均仅含 `scale(...)`，**无 translate/rotate**。
- **父容器**：LuckyDrawStars 仅在有 `isWeChatLayout` 时设 `transform: translateY(-75px)`，无 overflow 裁剪、无 mix-blend-mode 影响子级 scale；不影响 4 个 path 的独立缩放。

---

## 4. 新增 keyframes 与 class（已实施）

### 4.1 theme.css（保证 build 生效）

- **@keyframes star-twinkle-scale-only**（仅 scale）：
  - `0%, 100%`: `transform: scale(1)`
  - `25%, 75%`: `transform: scale(1.25)`
  - `50%`: `transform: scale(1.3)`
- **.animate-star-twinkle-scale-only**：
  - `animation: star-twinkle-scale-only 1.2s ease-in-out infinite`
  - `transform-box: fill-box`、`transform-origin: center`（使 SVG path 绕自身中心缩放，避免位移感）

### 4.2 tailwind.config.js

- **keyframes['star-twinkle-scale-only']**：与上一致。
- **animation['star-twinkle-scale-only']**：`star-twinkle-scale-only 1.2s ease-in-out infinite`。

---

## 5. 动画应用方式（已实施）

- **根 div**：已**移除** `animate-star-twinkle` 与 `style`（animationDelay、willChange），仅保留布局用 class 与 `data-name="LuckyDraw_Stars_svg"`。
- **4 个 path**：每个均增加
  - `className="animate-star-twinkle-scale-only"`
  - `style={{ animationDelay: STAR_TWINKLE_DELAYS[i] }}`（i=0,1,2,3）
- **STAR_TWINKLE_DELAYS**：模块级常量，`[0,1,2,3].map(() => (Math.random() * 0.5).toFixed(2) + 's')`，即 4 个 0–0.5s 随机 delay，每颗星独立、两页之间也不同步。
- **注释**：`// STAR_TWINKLE_SCALE_ONLY_APPLIED` 已保留于两处 TSX。

---

## 6. 验证表格

| Page/Component | SVG id | animate class | animation-delay | 缩放幅度 | 状态 |
|----------------|--------|----------------|-----------------|----------|------|
| LuckyDrawDefault | g#LuckyDraw_Stars_svg | 4× path 使用 animate-star-twinkle-scale-only | 4× 独立 0–0.5s 随机 | 1 → 1.25 → 1.3 → 1.25 → 1，仅 scale | 已应用 |
| LuckyDrawShake | g#LuckyDraw_Stars_svg | 同上 | 同上 | 同上 | 已应用 |

- **无位移、无旋转**：keyframes 仅含 `scale(...)`，且 path 使用 `transform-origin: center` + `transform-box: fill-box`，缩放围绕路径中心。
- **四颗星各自闪烁**：4 个 path 各自 class + 独立 delay，形成自然错落 twinkle。
- **无限循环**：animation 为 `infinite`。
- **其他动画**：未改动 CTA、motionDetected、Indicator、bucket、arrow 等逻辑与 class。

---

## 7. 回滚方案

| 修改项 | 回滚方式 |
|--------|----------|
| LuckyDrawDefault.tsx / LuckyDrawShake.tsx | 删除 STAR_TWINKLE_DELAYS 及注释；4 个 path 去掉 className 与 style，恢复为仅 d/fill/id 等原有属性 |
| theme.css | 删除 @keyframes star-twinkle-scale-only 与 .animate-star-twinkle-scale-only 块 |
| tailwind.config.js | 删除 keyframes['star-twinkle-scale-only'] 与 animation['star-twinkle-scale-only'] |

备份说明见：
- `frontend/src/imports/LuckyDrawDefault.star-twinkle.backup.tsx`
- `frontend/src/imports/LuckyDrawShake.star-twinkle.backup.tsx`

---

## 8. 真机验证建议

- 手机浏览器或微信 WebView 打开 Default / Shake 页。
- 观察 **4 颗星星**：各自**缩放大小闪烁**（Bling Bling），**位置固定、不发生移动**。
- 各星随机 twinkle 时间，形成自然不同步效果。
- 控制台无报错；若有 debug 需求，可临时在父容器或 path 上打印 `[DEBUG]` 确认无意外 translate/rotate 被应用。

---

## 9. 构建状态

- 已执行 `npm run build`，**exit code 0**，无报错。
- 动画由 theme.css 打入 dist，不依赖 Tailwind 扫描，保证生效。
