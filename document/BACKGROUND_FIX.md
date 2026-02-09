# 背景装饰层显示问题修复

## 问题
灯笼图案背景未显示

## 根本原因
LandingBackgroundLayer.tsx 组件使用了 `relative` 定位，导致无法作为背景层显示在页面上。

### 原代码（错误）
```tsx
export default function LandingBackgroundLayer() {
  return (
    <div className="relative size-full" data-name="Landing_Background_Layer">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start p-[10px] relative size-full">
          <BackgroundSvg />
        </div>
      </div>
    </div>
  );
}
```

**问题：**
- 使用 `relative` 定位
- 嵌套了多层 div
- 没有明确的尺寸和位置

## 解决方案

### 修复后代码
```tsx
export default function LandingBackgroundLayer() {
  return (
    <div className="absolute content-stretch flex flex-col h-[852px] items-start left-0 overflow-clip p-[10px] top-0 w-[393px]" data-name="Landing_Background_Layer">
      <BackgroundSvg />
    </div>
  );
}
```

**改进：**
- ✅ 使用 `absolute` 定位（背景层）
- ✅ 明确尺寸：`h-[852px] w-[393px]`
- ✅ 明确位置：`left-0 top-0`
- ✅ 简化结构：移除不必要的嵌套 div
- ✅ 保留 `overflow-clip`：防止背景溢出

## 验证清单

- [x] LandingBackgroundLayer 使用 absolute 定位
- [x] 尺寸和位置与 Landing 页面匹配（375px 宽，852px 高）
- [x] 组件正确导入到 Landing.tsx
- [x] 无 TypeScript 错误
- [x] BackgroundSvg 包含 Group165（165 个灯笼元素）

## 预期效果

背景应该显示：
- **165 个灯笼装饰元素**
- **旋转 45 度**
- **25% 透明度**
- **金色 (#C9AC6D)**
- **层级：最底层（在所有其他元素下方）**

## 相关文件

- `/src/imports/LandingBackgroundLayer.tsx` - 背景层组件（已修复）
- `/src/imports/Landing.tsx` - 主页面组件（使用背景层）
- `/src/imports/svg-pr6lh.tsx` - SVG Mask 图片（55 个）
- `/src/imports/svg-n66izm1aw1.ts` - SVG 路径数据

---

**修复时间：** 2024-12-18  
**修改文件：** 1 个（LandingBackgroundLayer.tsx）  
**状态：** ✅ 已完成
