# LuckyDraw_Coin 动画调试报告

## 1. 当前状态分析

### 1.1 DOM 与选择器

- **元素存在性**：`data-name="LuckyDraw_Coin"` 存在于 DOM。在 LuckyDrawDefault、LuckyDrawShake、LuckyDrawResult 中各有 **5 个** 带该属性的 div（LuckyDrawCoin ~ LuckyDrawCoin4）。
- **父级结构**：  
  `[data-name="LuckyDraw_Coins"]`（absolute left-[22.57px] top-[185px]）  
  → `[data-name="LuckyDraw_Coins"]`（inline-grid）  
  → 5× `[data-name="LuckyDraw_Coin"]`（grid 子项，各有固定 ml/mt）。
- **CSS 选择器**：未发现任何规则通过 `[data-name="LuckyDraw_Coin"]` 或 `.coin-fall-loop-*` 作用于这 5 个静态硬币。  
  `.coin-fall-loop-cw` / `.coin-fall-loop-ccw` 仅被 LuckyDrawCoinRain 使用，且 **LuckyDrawCoinRain 未在任何页面挂载**。
- **JS 引用**：无 JS 对这 5 个硬币做 animation 或 class 的增删；它们仅为静态布局。

### 1.2 动画属性与时机

- **当前**：5 个硬币无 `animation`、`transform` 动画；仅有布局用 `ml`/`mt`，无 `animation-*`、无 `will-change`。
- **keyframes**：`theme.css` 中已存在 `coinFallLoopCW` / `coinFallLoopCCW`（y -80px→100vh、x 摆动、旋转、落地弹跳、infinite），未被这 5 个节点使用。
- **覆盖/阻挡**：无其他 CSS 或 JS 覆盖或禁用动画；根本原因是 **未对现有 5 个硬币应用动画 class 和定位**。

---

## 2. 硬币不动的具体原因

1. **未应用动画**：5 个 `[data-name="LuckyDraw_Coin"]` 未挂载 `.coin-fall-loop-cw` / `.coin-fall-loop-ccw`，也未设置 `animation-duration` / `animation-delay` / `--coin-scale`。
2. **布局限制**：硬币在 **inline-grid** 内，由 `grid-area` 和 `ml`/`mt` 固定位置，未改为可做“自顶部落到底部”的定位（未 `position: absolute`、未放在全视口容器内）。
3. **LuckyDrawCoinRain 未挂载**：唯一使用 `coinFallLoop*` 的组件未被任何页面 import/渲染，因此没有任何硬币在做下落动画。
4. **容器非全视口**：即使给 5 个硬币加上动画，当前父级为 `left-[22.57px] top-[185px]` 的小区域，不具备“自顶到底”的落地区域。

---

## 3. 建议的最小修复（不删 DOM、不破坏布局安全）

- **保留**：5 个硬币的 DOM 节点、`data-name="LuckyDraw_Coin"`、原有 SVG 子节点全部保留。
- **可选启用**：通过 prop（如 `useCoinsFalling`）在 Default 页启用“下落模式”：
  - 将包裹 5 枚硬币的容器在“下落模式”下改为 **全视口**（`inset-0 overflow-hidden`），以便 y 从 -80px 落到 100vh。
  - 为每个硬币传入 **fallConfig**（left%, delay, duration, scale, cw），并应用：
    - `position: absolute`、`left`、`top: -80px`
    - class `coin-fall-loop-cw` 或 `coin-fall-loop-ccw`
    - style：`animationDuration`、`animationDelay`、`--coin-scale`
  - 不启用时保持原 grid 布局与静态表现，其他页面（Shake/Result）可不传或传 `false`，布局与安全不变。

---

## 4. 安全确认

- **不删除**：任何 `[data-name="LuckyDraw_Coin"]` 或父级节点均不删除。
- **不破坏布局**：未启用下落时，仍为原 grid + ml/mt；启用时仅在该容器内改为 absolute 定位，不影响 CTA、签筒、Indicator 等其它模块。
- **可回滚**：去掉 `useCoinsFalling`（或设为 false）并移除 fallConfig 相关逻辑即可恢复为纯静态 5 枚硬币。

---

## 5. 已实施的修复（LuckyDrawDefault）

- **启用方式**：在 Default 页对 `LuckyDrawBackgroundGroup` 传入 `useCoinsFalling`，使 5 枚硬币进入下落模式。
- **容器**：`LuckyDrawCoins1` 在 `useFalling` 时使用 `absolute inset-0 overflow-hidden pointer-events-none z-10`，全视口；内层 `LuckyDrawCoins` 使用 `relative w-full min-h-dvh overflow-hidden`。
- **每枚硬币**：通过可选 `fallConfig`（leftPct 0–100、delayS 0–1、durationS 2.5–3.5、scale 0.85–1.1、cw、startRotate -15°~15°）应用 `coin-fall-loop-cw` / `coin-fall-loop-ccw`，并设置 `animationDuration`、`animationDelay`、`--coin-scale`、`--coin-start-rotate`。
- **keyframes**（theme.css）：已支持 `--coin-start-rotate` 作为初始/循环旋转；下落过程带轻微 scale 摆动（0.98~1.02）、落地弹跳 ±8px、opacity 0→1 前段淡入。
---

## 6. Shake 页硬币不动的原因与修复

### 6.1 原因

- **Default 与 Shake 不共享组件**：两页各自在文件中定义了 `LuckyDrawCoins1`、`LuckyDrawCoins`、`LuckyDrawCoin`…`LuckyDrawCoin4`，互不引用。
- **仅 Default 接入了下落逻辑**：只有 LuckyDrawDefault 中为 `LuckyDrawBackgroundGroup` 传入了 `useCoinsFalling`，并在线路中传递 `useFalling` 与 `fallConfig`，使 5 枚硬币应用 `coin-fall-loop-*` 与全视口容器。
- **Shake 未接入**：LuckyDrawShake 的硬币组件从未接收 `useFalling` 或 `fallConfig`，也没有父级传入“启用下落”的 prop，因此 Shake 上 5 枚硬币始终为静态 grid 布局。
- **无冲突**：没有仅针对 Shake 的 CSS/JS 覆盖或冲突；纯粹是 Shake 侧未实现相同逻辑。

### 6.2 已实施的 Shake 修复（与 Default 一致）

- 在 **LuckyDrawShake.tsx** 中增加：`CoinFallConfig` 类型、`rand`、`useCoinFallConfigs()`（duration 3~4s、delay 0~1s、scale 0.85~1.1、startRotate ±15°）。
- `LuckyDrawBackgroundGroup` 增加 `useCoinsFalling` prop，并传给 `LuckyDrawCoins1` → `LuckyDrawCoins` 的 `useFalling`。
- `LuckyDrawCoins1` / `LuckyDrawCoins` 在 `useFalling` 为 true 时使用全视口容器，并为 5 枚硬币传入 `fallConfig`。
- 每枚硬币组件（LuckyDrawCoin…LuckyDrawCoin4）接受可选 `fallConfig`；有则渲染为 absolute + `coin-fall-loop-cw`/`coin-fall-loop-ccw` + 与 Default 相同的 style（duration、delay、--coin-scale、--coin-start-rotate）。
- 页面根组件传入 `<LuckyDrawBackgroundGroup useCoinsFalling />`，使 Shake 页也显示与 Default 相同的连续下落动画。
- **DOM 与布局**：未删减节点，未启用时仍为原布局；行为与 Default 一致，零风险。

### 6.3 动画参数微调（两页共用 theme.css）

- **时长**：`durationS` 由 2.5–3.5s 改为 **3–4s**（`rand(3, 1)`），更舒缓。
- **水平摆动**：keyframes 中 x 由 ±10–16px 调整为 **±15–25px**（如 20px、-22px、18px、-16px），花瓣感更强。
- **scale 摆动**：下落过程 0.97~1.03，落地 0.99~1.02，与设计一致。
