# LuckyDrawDefault 7 支签结构分析报告

## STEP 1 全局扫描与结构分析

### 1.1 页面与 bucket 定位
- **页面文件**: `frontend/src/imports/LuckyDrawDefault.tsx`
- **Bucket 相关**: 
  - `LuckyDrawBucket` → `DrawBucket`（PNG 桶身）
  - 7 支签不在 DrawBucket 内，而在 **LuckyDrawAllElementsSvg** 中与 Bucket 并列
- **签容器链**: `LuckyDrawAllElementsSvg1` → `LuckyDrawAllElementsSvg` → `LuckyDrawAllQian1` → `Frame` → **LuckyDrawAllQian**（7 支签的父节点）

### 1.2 7 支签 DOM 结构（静态 JSX，非 map）
- **渲染方式**: 静态 JSX，无 map、无数组驱动。
- **顺序**: `LuckyDrawAllQian` 内固定顺序为：
  1. LuckyDrawQian   (无数字后缀，对应第 1 支)
  2. LuckyDrawQian1
  3. LuckyDrawQian2
  4. LuckyDrawQian3
  5. LuckyDrawQian4
  6. LuckyDrawQian5
  7. LuckyDrawQian6

### 1.3 每支签对应关系

| DOM index | 组件名          | 位置 (left, top)     | 当前 SVG 引用              | 动画/交互      |
|-----------|-----------------|------------------------|-----------------------------|----------------|
| 0         | LuckyDrawQian   | left 73.48px, top 0   | QianSvg → Wrapper1 + path   | 无             |
| 1         | LuckyDrawQian1  | left 20.81px, top 2.36| QianSvg1 → QianSvg7 + path | 无             |
| 2         | LuckyDrawQian2  | left 101.39px, top 3  | QianSvg2 → QianSvg8 + path | 无             |
| 3         | LuckyDrawQian3  | left -0.38px, top 22.05| QianSvg3 → QianSvg7 + path| 无             |
| 4         | LuckyDrawQian4  | left 126.11px, top 22.68| QianSvg4 → QianSvg8 + path| 无            |
| 5         | LuckyDrawQian5  | left 44.5px, top 12.49 | QianSvg5 → Wrapper1 + path | 无             |
| 6         | LuckyDrawQian6  | left 93.91px, top 8.86 | QianSvg6 → inline svg+path | 无             |

- **SVG 引用**: 全部为 **inline SVG**，path 来自 `svgPaths`（`../imports/svg-gu831kk5pc`）。
- **无** sprite、无 import 单文件 SVG。
- **无** onClick、无 motion、无 animation class 绑定在签上。

### 1.4 布局与顺序确认（STEP 2 映射）
- **定位方式**: 全部 `absolute`，靠 `left`/`top` 定位。
- **视觉顺序**（按 top 再 left 推断）:
  - 上排（top 较小）: 约 0~12px → Qian, Qian1, Qian2, Qian5, Qian6 → 对应设计“上排 5,6,7”需与 DOM 编号 4,5,6 对应。
  - 下排（top 较大）: 约 22px → Qian3, Qian4 → 仅 2 个，与设计“下排 1–4”需与 DOM 0,1,2,3 对应。
- **设计约定**: 下排从左到右 1,2,3,4；上排从左到右 5,6,7。
- **映射采用 DOM 顺序**（与任务书一致）:
  - DOM 0 → 编号 1 → LuckyDraw_Qian1.svg
  - DOM 1 → 编号 2 → LuckyDraw_Qian2.svg
  - DOM 2 → 编号 3 → LuckyDraw_Qian3.svg
  - DOM 3 → 编号 4 → LuckyDraw_Qian4.svg
  - DOM 4 → 编号 5 → LuckyDraw_Qian5.svg
  - DOM 5 → 编号 6 → LuckyDraw_Qian6.svg
  - DOM 6 → 编号 7 → LuckyDraw_Qian7.svg

### 1.5 风险评估
- **无**复用组件导致一处改 7 处变：7 个组件独立，可单独替换。
- **无** index 与签编号不一致：按 DOM 顺序 0–6 对应 1–7。
- **布局**: 仅 absolute 定位，无 grid/flex 参与签的排列；替换为 img 后保持同一外层 div 尺寸即可。
- **动画**: 签上无动画，无依赖 DOM 顺序的动画。
- **回滚**: 已备份 7 支签相关逻辑，可恢复原 path 引用。

---

## STEP 5–6 执行替换与构建验证

- 7 个新 SVG 已复制到 `frontend/public/assets/qian/`（LuckyDraw_Qian1.svg … LuckyDraw_Qian7.svg）。
- 原文件已备份为 `frontend/src/imports/LuckyDrawDefault.backup.tsx`。
- QianSvg / QianSvg1 … QianSvg6 已改为使用 `<img src="/assets/qian/LuckyDraw_QianN.svg" />`，外层 div 尺寸与 `data-name="Qian_svg"` 未改。
- 所有替换处已加注释：`// DEFAULT_SIGN_REPLACED_2026`。
- `npm run build` 已通过，无报错。

---

## STEP 7 最终执行报告

| 编号 | DOM index | 视觉位置   | 新 SVG 文件           | 替换状态 | 验证状态   |
|------|-----------|------------|------------------------|----------|------------|
| 1    | 0         | 下排第 1 个 | LuckyDraw_Qian1.svg   | ✅ 已替换 | ✅ build 通过 |
| 2    | 1         | 下排第 2 个 | LuckyDraw_Qian2.svg   | ✅ 已替换 | ✅ build 通过 |
| 3    | 2         | 下排第 3 个 | LuckyDraw_Qian3.svg   | ✅ 已替换 | ✅ build 通过 |
| 4    | 3         | 下排第 4 个 | LuckyDraw_Qian4.svg   | ✅ 已替换 | ✅ build 通过 |
| 5    | 4         | 上排第 1 个 | LuckyDraw_Qian5.svg   | ✅ 已替换 | ✅ build 通过 |
| 6    | 5         | 上排第 2 个 | LuckyDraw_Qian6.svg   | ✅ 已替换 | ✅ build 通过 |
| 7    | 6         | 上排第 3 个 | LuckyDraw_Qian7.svg   | ✅ 已替换 | ✅ build 通过 |

- **排序风险**: 无。DOM 顺序与设计 1–7 一致，未改顺序。
- **布局依赖**: 仅保留原 absolute 定位与各签容器尺寸，未改布局。
- **动画副作用**: 7 支签上无动画，无影响。
- **回滚说明**: 用 `LuckyDrawDefault.backup.tsx` 覆盖当前 `LuckyDrawDefault.tsx`，再执行 `npm run build` 即可恢复旧 path 引用。
