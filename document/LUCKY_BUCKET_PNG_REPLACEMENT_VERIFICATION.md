# LuckyDraw_Bucket / DrawBucket → LuckyBucket.png 替换验证报告

## 1. 替换概览

| 项目 | 结果 |
|------|------|
| **替换数量** | 4 处（LuckyDrawDefault / LuckyDrawShake / LuckyDrawResult / LuckyDrawResultPage） |
| **签筒渲染 path/g 残留** | 0（DrawBucket 内仅 `<img>`，无 `<svg>` path/g） |
| **构建** | `npm run build` 成功（exit 0） |
| **PNG 打包** | `/assets/LuckyBucket.png` 已输出至 `dist/assets/LuckyBucket.png` |

---

## 2. 替换前后文件与内容

### 2.1 涉及文件

| 文件 | 替换前 | 替换后 |
|------|--------|--------|
| `frontend/src/imports/LuckyDrawDefault.tsx` | DrawBucket 内：主桶 `<svg>` + `<BucketButtom />` + `<BucketDeco />` + `<BucketEdge />` | DrawBucket 内：`<img src="/assets/LuckyBucket.png" ... />`，保留原 `div` 容器、class、data-name、布局 |
| `frontend/src/imports/LuckyDrawShake.tsx` | 同上 | 同上 |
| `frontend/src/imports/LuckyDrawResult.tsx` | 同上 | 同上 |
| `frontend/src/components/LuckyDrawResultPage.tsx` | 同上 | 同上 |

### 2.2 原 SVG 使用的 class / data-name（已保留）

- 外层：`data-name="DrawBucket"`，`className="grid-cols-[max-content] grid-rows-[max-content] inline-grid ..."`
- 内层：`data-name="Bucket"`，`className="[grid-area:1_/_1] h-[311.539px] ml-[4.36px] mt-[10.35px] relative w-[244.519px]"`

### 2.3 替换后的 `<img>` 写法

```tsx
<img
  src="/assets/LuckyBucket.png"
  className="block size-full w-full h-auto object-contain"
  data-name="Bucket"
  alt="LuckyBucket"
/>
```

- **路径**：`/assets/LuckyBucket.png`（源文件：`frontend/public/assets/LuckyBucket.png`）
- **尺寸**：容器保持原 244.519×311.539px，img 使用 `w-full h-auto object-contain`，适配 375px 宽 + retina

---

## 3. 组件 / 页面引用列表

| 组件/页面 | 文件 | 说明 |
|-----------|------|------|
| LuckyDrawDefault | `frontend/src/imports/LuckyDrawDefault.tsx` | 默认抽签页，DrawBucket 由 LuckyDrawBucket 引用 |
| LuckyDrawShake | `frontend/src/imports/LuckyDrawShake.tsx` | 摇签页，同上 |
| LuckyDrawResult | `frontend/src/imports/LuckyDrawResult.tsx` | 结果展示，同上 |
| LuckyDrawResultPage | `frontend/src/components/LuckyDrawResultPage.tsx` | 结果页，同上 |

---

## 4. 残留检查

- **DrawBucket 渲染树**：4 处 DrawBucket 的 return 中仅包含 `div` + `div` + `img`，**无 `<svg>`、`<path>`、`<g>`**，签筒视觉零 path/g 残留。
- **同文件内**：LuckyDrawDefault / LuckyDrawShake / LuckyDrawResult / LuckyDrawResultPage 中仍存在 **BucketButtom、BucketDeco、BucketEdge** 组件定义（内含 path/g），但 **已不再被 DrawBucket 使用**，当前为未引用代码；若需“全文件零 path 残留”可后续删除或移至 backup。

---

## 5. 可回滚文件列表

| 用途 | 路径 |
|------|------|
| 回滚说明与常量 | `frontend/src/components/LuckyDraw_Bucket.backup.tsx` |
| 需还原 DrawBucket 的 4 个文件 | `frontend/src/imports/LuckyDrawDefault.tsx` |
| | `frontend/src/imports/LuckyDrawShake.tsx` |
| | `frontend/src/imports/LuckyDrawResult.tsx` |
| | `frontend/src/components/LuckyDrawResultPage.tsx` |

**回滚方式**：在以上 4 个文件中，将 DrawBucket 内当前的 `<img>` 及内层 `div[data-name="Bucket"]` 还原为原来的结构：内层 div + 主桶 `<svg>`（可用 backup 中的 `LUCKY_DRAW_BUCKET_ORIGINAL_SVG` 或完整 LuckyBucket.svg 内联）+ `<BucketButtom />` + `<BucketDeco />` + `<BucketEdge />`，然后执行 `rm -rf node_modules/.vite .cache dist && npm run build`（或 `npm run dev`）。

---

## 6. 构建与缓存

- 已执行：删除 `node_modules/.vite`、`.cache`、`dist` 后执行 `npm run build`，**exit code 0**。
- PNG 已正确复制到 `dist/assets/LuckyBucket.png`（Vite 将 `public/` 内容复制到 `dist/`）。

---

## 7. Summary

- **总共替换数量**：4。
- **签筒渲染 path/g 残留数**：0。
- **可回滚文件**：`LuckyDraw_Bucket.backup.tsx` + 上述 4 个 TSX 文件；回滚时恢复 DrawBucket 内 SVG + BucketButtom/BucketDeco/BucketEdge 即可。
