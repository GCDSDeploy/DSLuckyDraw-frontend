# LuckyDrawDefault 7 支签布局与 SVG 映射调试报告

## STEP 1 — Layout Mechanism

### 1.1 Bucket / 签容器位置
- **签容器链**: `LuckyDrawAllElementsSvg` (absolute left-[69.45px] top-[315px]) → `LuckyDrawAllElementsSvg` (grid) → **LuckyDrawAllQian1** → **Frame** → **LuckyDrawAllQian**
- **Frame**: `absolute h-[165px] left-0 overflow-clip top-0 w-[216px]` — 固定 216×165px，overflow-clip
- **LuckyDrawAllQian**: `absolute contents left-[-0.38px] top-0` — **无 flex / 无 grid**，子元素全部 **absolute** 定位

### 1.2 Layout type
- **7 支签**: 全部为 **absolute positioning**（各自 `left-[Xpx] top-[Ypx]`）
- 无 `flex`、无 `grid`、无 `order`、无 `row-reverse`/`column-reverse`、无 `transform` 参与排布
- 视觉顺序完全由 **left + top** 数值决定，与 **DOM 顺序无关**

### 1.3 DOM order 与 position（index 0–6）

| DOM Index | 组件名          | className (position)                    | left (px) | top (px) |
|-----------|-----------------|------------------------------------------|-----------|----------|
| 0         | LuckyDrawQian   | absolute ... left-[73.48px] top-0        | 73.48     | 0        |
| 1         | LuckyDrawQian1  | absolute ... left-[20.81px] top-[2.36px] | 20.81     | 2.36     |
| 2         | LuckyDrawQian2  | absolute ... left-[101.39px] top-[3px]   | 101.39    | 3        |
| 3         | LuckyDrawQian3  | absolute ... left-[-0.38px] top-[22.05px] | -0.38   | 22.05    |
| 4         | LuckyDrawQian4  | absolute ... left-[126.11px] top-[22.68px] | 126.11  | 22.68    |
| 5         | LuckyDrawQian5  | absolute ... left-[44.5px] top-[12.49px] | 44.5      | 12.49    |
| 6         | LuckyDrawQian6  | absolute ... left-[93.91px] top-[8.86px] | 93.91     | 8.86     |

---

## STEP 2 — TRUE Visual Order（由 left/top 计算）

- **Y 轴**: 在同一坐标系下，top 越小越靠上（上排），top 越大越靠下（下排）。
- **设计约定**: 下排 4 支（1,2,3,4），上排 3 支（5,6,7），每排内按从左到右。

### 2.1 按 top 分组
- **上排**（top 较小）: top ∈ {0, 2.36, 3} → 3 个元素 → 对应设计「上排 5, 6, 7」
- **下排**（top 较大）: top ∈ {8.86, 12.49, 22.05, 22.68} → 4 个元素 → 对应设计「下排 1, 2, 3, 4」

### 2.2 每排内按 left 从左到右排序

**下排（4 支，left 升序）:**

| left   | DOM Index |
|--------|-----------|
| -0.38  | 3         |
| 44.5   | 5         |
| 93.91  | 6         |
| 126.11 | 4         |

→ 下排从左到右: **DOM 3, DOM 5, DOM 6, DOM 4** → 应显示 **SVG 1, 2, 3, 4**

**上排（3 支，left 升序）:**

| left   | DOM Index |
|--------|-----------|
| 20.81  | 1         |
| 73.48  | 0         |
| 101.39 | 2         |

→ 上排从左到右: **DOM 1, DOM 0, DOM 2** → 应显示 **SVG 5, 6, 7**

### 2.3 Visual Position Mapping（最终）

**Bottom row (下排) left → right:**  
DOM 3 → DOM 5 → DOM 6 → DOM 4  

**Top row (上排) left → right:**  
DOM 1 → DOM 0 → DOM 2  

---

## STEP 3 — 与当前替换映射对比

**Expected:**
- Bottom row left→right: 1, 2, 3, 4
- Top row left→right: 5, 6, 7

**Current assignment (DOM index → SVG):**
- DOM 0 → SVG 1, DOM 1 → SVG 2, DOM 2 → SVG 3, DOM 3 → SVG 4, DOM 4 → SVG 5, DOM 5 → SVG 6, DOM 6 → SVG 7

**Actual visual with current mapping:**
- Bottom row (3,5,6,4) 显示: SVG 4, SVG 6, SVG 7, SVG 5 → 错误（应为 1,2,3,4）
- Top row (1,0,2) 显示: SVG 2, SVG 1, SVG 3 → 错误（应为 5,6,7）

**Mismatch:** 当前按 DOM 顺序 0→1, 1→2, … 分配 SVG，而视觉顺序由 absolute 的 left/top 决定，DOM 顺序 ≠ 视觉顺序，导致错位/颠倒。

---

## STEP 4 — Correct SVG → DOM Mapping

| SVG 编号 | 应出现在视觉位置     | 对应 DOM index |
|----------|------------------------|----------------|
| SVG 1    | 下排第 1 个（最左）   | 3 (Qian3)      |
| SVG 2    | 下排第 2 个           | 5 (Qian5)      |
| SVG 3    | 下排第 3 个           | 6 (Qian6)      |
| SVG 4    | 下排第 4 个（最右）   | 4 (Qian4)      |
| SVG 5    | 上排第 1 个（最左）   | 1 (Qian1)      |
| SVG 6    | 上排第 2 个           | 0 (Qian)       |
| SVG 7    | 上排第 3 个（最右）   | 2 (Qian2)      |

**组件 → 应使用的 SVG 文件:**
- QianSvg  (DOM 0, 上排中) → **LuckyDraw_Qian6.svg**
- QianSvg1 (DOM 1, 上排左) → **LuckyDraw_Qian5.svg**
- QianSvg2 (DOM 2, 上排右) → **LuckyDraw_Qian7.svg**
- QianSvg3 (DOM 3, 下排左) → **LuckyDraw_Qian1.svg**
- QianSvg4 (DOM 4, 下排右) → **LuckyDraw_Qian4.svg**
- QianSvg5 (DOM 5, 下排第2) → **LuckyDraw_Qian2.svg**
- QianSvg6 (DOM 6, 下排第3) → **LuckyDraw_Qian3.svg**

---

## STEP 5–7 — Backup, Apply, Report

- 已创建 `LuckyDrawDefault.layoutfix.backup.tsx`
- 已按上表仅调整各组件内 `img src` 的 SVG 文件名，未改布局/class/逻辑
- 最终验证表见下。

---

## Final Debug Report Table

| DOM Index | Visual Position        | Assigned SVG (after fix) | Correct? |
|-----------|-------------------------|---------------------------|----------|
| 0         | 上排第 2 个（中）       | LuckyDraw_Qian6.svg       | ✓        |
| 1         | 上排第 1 个（左）       | LuckyDraw_Qian5.svg       | ✓        |
| 2         | 上排第 3 个（右）       | LuckyDraw_Qian7.svg       | ✓        |
| 3         | 下排第 1 个（左）       | LuckyDraw_Qian1.svg       | ✓        |
| 4         | 下排第 4 个（右）       | LuckyDraw_Qian4.svg       | ✓        |
| 5         | 下排第 2 个             | LuckyDraw_Qian2.svg       | ✓        |
| 6         | 下排第 3 个             | LuckyDraw_Qian3.svg       | ✓        |

**Confirm:**
- ✓ Bottom row left→right = 1, 2, 3, 4 (DOM 3,5,6,4 → SVG 1,2,3,4)
- ✓ Top row left→right = 5, 6, 7 (DOM 1,0,2 → SVG 5,6,7)
- ✓ No layout changes made
- ✓ No logic changed
- ✓ Only asset (img src) reassigned
- ✓ Rollback path: restore from `LuckyDrawDefault.layoutfix.backup.tsx`
