# LuckyDraw_Bucket / DrawBucket → LuckyBucket.svg 替换验证报告

## 1. 源文件替换前内容

所有 4 处 DrawBucket 内原 `<svg>` 为（单 path，旧 viewBox）：

```tsx
<svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 245 312">
  <path d={svgPaths.p21199600} fill="var(--fill-0, #FE6924)" id="Bucket" />
</svg>
```

- **path 数据**：`p21199600` 来自 `svg-gu831kk5pc.ts` / `svg-caodne2lgz.ts` / `svg-38h7dm4h63.ts`
- **外层结构**：未改，均为  
  `div[data-name="DrawBucket"]` → `div[data-name="Bucket"](h-[311.539px] w-[244.519px])` → `svg` → 原单 path

---

## 2. 源文件替换后内容

4 处均改为同一内容：LuckyBucket.svg 完整图形（viewBox="0 0 254 322"），保留：

- 最外层 `div`：`className`、`data-name="DrawBucket"`
- 内层 `div`：`data-name="Bucket"`、`h-[311.539px]`、`w-[244.519px]`、`className`
- `<svg>`：`className="block size-full"`、`fill="none"`、`preserveAspectRatio="none"`、`viewBox="0 0 254 322"`、`xmlns`
- 子节点：仅 LuckyBucket.svg 的 path / g（无 defs / clipPath / mask）
- 同层兄弟：`BucketButtom`、`BucketDeco`、`BucketEdge` 未改

替换后 `<svg>` 内为：2 个主 path(#FFC871) + 3 个 `<g opacity="0.2" style={{ mixBlendMode: 'multiply' }}>`（内为 path #EA502B / #EA8B2A）+ 1 个 path(#F79D4E) + 6 个圆形 path(#FFDBDB) + 顶部条 path(#FD5251 / #E12B1E) + 3 个 opacity="0.47" path(#F79D4E / #D67513)。

---

## 3. 全项目引用列表

| 文件路径 | 行号 | 引用方式 |
|----------|------|----------|
| `src/imports/LuckyDrawDefault.tsx` | 693-727, 732-736, 744 | 内联定义 DrawBucket、LuckyDrawBucket；JSX 使用 `<LuckyDrawBucket />` |
| `src/imports/LuckyDrawShake.tsx` | 700-734, 739-743, 751 | 同上 |
| `src/imports/LuckyDrawResult.tsx` | 468-502, 507-512, 976 | 同上 |
| `src/components/LuckyDrawResultPage.tsx` | 620-658, 660-667, 115 | 内联定义 DrawBucket、LuckyDrawBucket；JSX 使用 `<LuckyDrawBucket />` |
| `src/components/LuckyDraw_Bucket.backup.tsx` | 全文件 | 回滚备份，不参与渲染 |

无其他 import / export / JSX 引用 LuckyDraw_Bucket 或 DrawBucket。

---

## 4. 残留路径检查结果（必须全部无残留）

| 位置 | 内容 | 是否参与渲染 |
|------|------|--------------|
| `LuckyDrawDefault.tsx` | 无旧 path/g/defs/clipPath/mask，无 p21199600 引用 | 无残留 |
| `LuckyDrawShake.tsx` | 同上 | 无残留 |
| `LuckyDrawResult.tsx` | 同上 | 无残留 |
| `LuckyDrawResultPage.tsx` | 同上 | 无残留 |
| `LuckyDraw_Bucket.backup.tsx` | 仅注释 + 回滚用 path 说明 | 不参与渲染 |
| `svg-gu831kk5pc.ts` / `svg-caodne2lgz.ts` / `svg-38h7dm4h63.ts` | 仍导出 `p21199600` 数据 | 无组件用其绘制 bucket，渲染无残留 |

结论：**所有参与渲染的 DrawBucket / LuckyDraw_Bucket 均为 LuckyBucket.svg 内容，无旧 path/g/defs/clipPath/mask 残留。**

---

## 5. 颜色统一验证结果（设计稿 LuckyBucket.svg）

| 文件/元素 | fill / stroke / opacity / mix-blend | 与设计稿一致 |
|------------|--------------------------------------|-------------|
| path（主桶体 x2） | fill="#FFC871" | 是 |
| g + path（左阴影） | opacity="0.2", mix-blend-mode:multiply, fill="#EA502B" | 是 |
| g + path（右阴影） | 同上 | 是 |
| g + path（顶条阴影） | opacity="0.2", mix-blend-mode:multiply, fill="#EA8B2A" | 是 |
| path（中部条） | fill="#F79D4E" | 是 |
| path（6 个圆形装饰） | fill="#FFDBDB" | 是 |
| path（顶部红条） | fill="#FD5251" | 是 |
| path（左右角） | fill="#E12B1E" | 是 |
| path（3 条半透明条） | opacity="0.47", fill="#F79D4E" / "#D67513" | 是 |

未使用旧色 #F32C03 / #5E2315 / #FE6924（var）等；fill / stroke / opacity / mix-blend 与附件 LuckyBucket.svg 一致。**颜色统一验证：是。**

---

## 6. 页面渲染 + 动画 + DOM 验证

| 页面/组件 | LuckyBucket.svg 显示 | 动画 | CTA / motionDetected / Indicator | DOM 层级 | 控制台 |
|-----------|----------------------|------|-----------------------------------|----------|--------|
| LuckyDrawDefault | 正确 | 未改 animate class | 未改 | 未增删节点 | 无新增报错 |
| LuckyDrawShake | 正确 | 未改 | 未改 | 未改 | 无新增报错 |
| LuckyDrawResult | 正确 | 未改 | 未改 | 未改 | 无新增报错 |
| LuckyDrawResultPage | 正确 | 未改 | 未改 | 未改 | 无新增报错 |

说明：未改任何 useEffect/state/hook、motion 检测、navigate/delay、animate-*、Tailwind 动画；支持在手机浏览器、微信 WebView 真机复测。

---

## 7. 构建状态

- 命令：`rm -rf node_modules/.vite .cache dist && npm run build`
- 结果：**成功**，exit code 0，无 build error。

---

## 8. 回滚方案说明

1. **回滚文件**：`src/components/LuckyDraw_Bucket.backup.tsx`（内含替换前 SVG 块说明与 path 引用方式）。
2. **回滚步骤**：
   - 在 `LuckyDrawDefault.tsx`、`LuckyDrawShake.tsx`、`LuckyDrawResult.tsx`、`LuckyDrawResultPage.tsx` 中定位 DrawBucket 内的整块 `<svg>…</svg>`（含当前所有子节点）。
   - 用备份文件中注明的「替换前 SVG 块」替换该整块（即恢复为单 path + viewBox="0 0 245 312" + `d={svgPaths.p21199600}` 等）。
   - 确认各文件已正确 import 对应 svgPaths（Default→svg-gu831kk5pc，Shake→svg-caodne2lgz，Result/ResultPage→svg-38h7dm4h63）。
   - 执行：`rm -rf node_modules/.vite .cache dist && npm run build`。
3. 回滚后：签筒恢复为旧单 path 橙色桶；逻辑、DOM、动画与当前一致，仅视觉还原。

---

**报告生成时间**：替换与清理完成后；缓存已清理并成功构建。
