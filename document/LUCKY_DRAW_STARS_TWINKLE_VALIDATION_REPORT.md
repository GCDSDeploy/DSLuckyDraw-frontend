# LuckyDraw_Stars_svg 随机 Bling Bling 动画验证报告

## 1. 自动扫描结果

### 1.1 LuckyDraw 系列页面及复用组件

| 页面/组件 | 文件路径 | 含 `<g id="LuckyDraw_Stars_svg">` | 四个 id="Vector" 子元素 |
|-----------|----------|------------------------------------|--------------------------|
| LuckyDrawDefault | `frontend/src/imports/LuckyDrawDefault.tsx` | 是 | path#Vector, path#Vector_2, path#Vector_3, path#Vector_4 |
| LuckyDrawShake | `frontend/src/imports/LuckyDrawShake.tsx` | 是 | 同上 |
| LuckyDrawResult | `frontend/src/imports/LuckyDrawResult.tsx` | 否 | — |
| LuckyDrawResultPage | `frontend/src/components/LuckyDrawResultPage.tsx` | 否 | — |

**结论**：仅 **LuckyDrawDefault**、**LuckyDrawShake** 含有 `<g id="LuckyDraw_Stars_svg">`；LuckyDrawResult、LuckyDrawResultPage 无此节点。每处 g 内为 4 个 path（id 分别为 Vector、Vector_2、Vector_3、Vector_4）。

---

## 2. 动画应用说明

### 2.1 参数（每元素随机）

- **scaleMin**：1（固定）
- **scaleMax**：1.3 ~ 1.5（每个元素随机对应 5 档：1.3 / 1.35 / 1.4 / 1.45 / 1.5）
- **duration**：1 ~ 1.5s（每个元素随机，inline style `animationDuration`）
- **delay**：0 ~ 0.5s（每个元素随机，inline style `animationDelay`）
- **ease**：ease-in-out
- **repeat**：infinite（loop）
- **仅作用于 scale**：无位移（translate）、无旋转（rotate）；保留现有 DOM、class、data-name，动画仅作用于 `<g id="LuckyDraw_Stars_svg">` 内 4 个 path。

### 2.2 实现方式

- **theme.css**：新增 5 组 keyframes（scale 峰值 1.3 / 1.35 / 1.4 / 1.45 / 1.5）及对应 class（`.animate-star-twinkle-scale-1-3` 等），均含 `transform-box: fill-box`、`transform-origin: center`，保证绕路径中心缩放。
- **Default / Shake**：模块级生成 4 组配置 `{ scaleClass, duration, delay }`，每个 path 绑定对应 `className` 与 `style={{ animationDuration, animationDelay }}`。

---

## 3. 验证表格

| Page/Component | SVG id | animate class | animation-delay | animation-duration | 缩放幅度 (scaleMin/scaleMax) | 状态 |
|----------------|--------|----------------|-----------------|--------------------|------------------------------|------|
| LuckyDrawDefault | g#LuckyDraw_Stars_svg | 4× path 各随机 5 档 class 之一 | 4× 独立 0–0.5s 随机 | 4× 独立 1–1.5s 随机 | 1 / 1.3~1.5（每星随机） | 已应用 |
| LuckyDrawShake | g#LuckyDraw_Stars_svg | 同上 | 同上 | 同上 | 同上 | 已应用 |

- 四个 Vector 元素**全部**应用动画（scale + 随机 delay + 随机 duration）。
- 动画**仅缩放**，无位移、无旋转。
- 父容器、data-name、其他 class 未改；未影响 CTA、Indicator、MotionDetection 等逻辑。

---

## 4. 回滚指引与注释位置

### 4.1 备份文件

- **集中备份说明**：`frontend/src/imports/LuckyDraw_Stars_svg.backup.tsx`（含原始 4 个 path JSX 及回滚步骤）
- **页面级备份说明**：`LuckyDrawDefault.star-twinkle.backup.tsx`、`LuckyDrawShake.star-twinkle.backup.tsx`（指向上述集中备份）

### 4.2 注释位置

- **LuckyDrawDefault.tsx**：`// STAR_TWINKLE_RANDOM_APPLIED: ...` 标注在 `STAR_TWINKLE_CONFIG_DEFAULT` 上方；回滚时删除该注释及下方常量与 path 上的 className/style。
- **LuckyDrawShake.tsx**：`// STAR_TWINKLE_RANDOM_APPLIED: ...` 同上；回滚时删除该注释及 `STAR_TWINKLE_CONFIG_SHAKE` 与 path 上的 className/style。

### 4.3 一键回退步骤

1. 在 **LuckyDrawDefault.tsx**、**LuckyDrawShake.tsx** 中删除 `STAR_TWINKLE_SCALE_CLASSES`、`STAR_TWINKLE_CONFIG_*` 及 `// STAR_TWINKLE_RANDOM_APPLIED` 注释。
2. 将 `<g id="LuckyDraw_Stars_svg">` 内 4 个 path 恢复为仅保留 `d`、`fill`、`id` 等原有属性，**去掉** `className` 与 `style`。
3. 可选：在 **theme.css** 中注释或删除 5 个 `.animate-star-twinkle-scale-1-*` 及对应 `@keyframes star-twinkle-scale-1-*`。
4. 执行 `npm run build` 或 `npm run dev`。

---

## 5. 安全保证

- **未新增或删除 DOM 节点**：仅给既有 4 个 path 增加 className 与 style。
- **未修改** data-name、父容器 class、其他已有动画或业务逻辑（CTA、Indicator、MotionDetection 等）。
- 所有修改可通过上述回滚步骤一键回退，适合生产/预发环境。

---

## 6. 构建与真机验证

- **构建**：执行 `npm run build`，预期 exit code 0；若有报错可先按回滚步骤还原再排查。
- **真机验证建议**：在 Default / Shake 页确认 4 颗星星各自缩放闪烁、幅度与节奏随机、无位移无旋转，且不影响其他交互与动画。
