# 字体配置映射总结

## 📋 字体文件

| 字体名称 | 字体文件 | CSS 字体族 | 用途 |
|---------|---------|-----------|------|
| 字魂151号-联盟综艺体 | `字魂151号-联盟综艺体.ttf` | `ZiHun151` | 正文、按钮、描述文字 |
| No.77-上手仓书法体 | `No.77-ShangShouCangShuFaTi-2.ttf` | `ShangShouCangShu` | Header 标题（书法风格） |

## 🎯 页面字体配置

### 1. Landing 页面

| 组件 | 文字内容 | 字体配置 | 状态 |
|------|---------|---------|------|
| `TitleYear` | "2026" | `ShangShouCangShu` | ✅ 已配置 |
| `TitleTheme` | "好兆头" | `ShangShouCangShu` | ✅ 已配置 |
| `LandingDescription` | "摇好签，拿好礼"、"DS祝你好运+++" | `ZiHun151` | ✅ 已配置 |
| `LandingTryCta` | "试试手气" | `ZiHun151` | ✅ 已配置 |
| `CtaRules` | "活动规则" | `ZiHun151` | ✅ 已配置 |

### 2. LuckyDrawDefault 页面

| 组件 | 文字内容 | 字体配置 | 状态 |
|------|---------|---------|------|
| `CallToActionText` | "摇一摇"、"得好礼" | `ZiHun151` | ✅ 已配置 |
| `ShakeCta2` | "摇一摇 得好礼" 按钮 | `ZiHun151` | ✅ 已配置 |

### 3. LuckyDrawShake 页面

| 组件 | 文字内容 | 字体配置 | 状态 |
|------|---------|---------|------|
| `CallToActionText` | "摇一摇"、"得好礼" | `ZiHun151` | ✅ 已配置 |
| `ShakeCta2` | "摇一摇 得好礼" 按钮 | `ZiHun151` | ✅ 已配置 |
| 提示文字 | "幸运签生成中..." | `ZiHun151` | ✅ 已配置 |

### 4. LuckyDrawResult 页面

| 组件 | 文字内容 | 字体配置 | 状态 |
|------|---------|---------|------|
| `LuckyDrawButton` | "立即解签" | `ZiHun151` | ✅ 已配置 |
| `LuckyDrawHeaderDescription` | 签文等级描述 | `ZiHun151` | ✅ 已配置 |
| `FortuneSlip` | 签文内容（签号、签名等） | `ZiHun151` | ✅ 已配置 |

### 5. LuckyDrawDescription 页面

| 组件 | 文字内容 | 字体配置 | 状态 |
|------|---------|---------|------|
| `DescriptionContent` - 签文名称 | 签文标题（如"皆大欢喜"） | `ZiHun151` | ✅ 已配置 |
| `DescriptionContent` - 签文解释 | 签文详细解释文字 | `ZiHun151` | ✅ 已配置 |
| `DescriptionContent` - 奖励信息 | 奖励标题和描述 | `ZiHun151` | ✅ 已配置 |
| `DescriptionContent` - 品牌名称 | "DS服务介绍"（如"Design Studios 共创工作坊"） | `Arial:Regular` | ✅ 保留原字体 |
| `DescriptionContent` - 序列号 | "签文编码"（如"NO. S88ADFHRGB"） | `Arial:Regular` | ✅ 保留原字体 |
| `DescriptionButtons` | "保存到相册"、"邀同事来摇签" | `ZiHun151` | ✅ 已配置 |
| `DescriptionBack` | "返回主页" | `ZiHun151` | ✅ 已配置 |
| `DescriptionGiftPool` | "奖池一览" | `ZiHun151` | ✅ 已配置 |

## 🔄 字体映射规则

### Figma → CSS 映射

| Figma 字体名称 | CSS 字体名称 | Tailwind 别名 |
|---------------|------------|-------------|
| `zihun151hao-lianmengzongyiti:Regular` | `ZiHun151` | `font-zihun` |
| `077-SS_Cang_Qiong_Shu_Fa_Ti:Regular` | `ShangShouCangShu` | `font-shangshou` |
| `No.77-ShangShouCangShuFaTi-2` | `ShangShouCangShu` | `font-shangshou` |

### 使用方式

#### 方式 1：直接使用 CSS 字体名称（推荐）
```tsx
className="font-['ZiHun151',sans-serif]"
className="font-['ShangShouCangShu',sans-serif]"
```

#### 方式 2：使用 Tailwind 别名
```tsx
className="font-zihun"
className="font-shangshou"
```

## ✅ 配置验证清单

### 字体文件
- [x] `字魂151号-联盟综艺体.ttf` 存在于 `src/assets/fonts/`
- [x] `No.77-ShangShouCangShuFaTi-2.ttf` 存在于 `src/assets/fonts/`

### CSS 配置
- [x] `src/styles/fonts.css` 中定义了 `@font-face` 规则
- [x] `src/styles/index.css` 中导入了 `fonts.css`
- [x] `src/styles/tailwind.css` 中配置了 `@theme` 变量

### 页面配置
- [x] Landing 页面字体已配置
- [x] LuckyDrawDefault 页面字体已配置
- [x] LuckyDrawShake 页面字体已配置
- [x] LuckyDrawResult 页面字体已配置
- [x] LuckyDrawDescription 页面字体已配置

## 🔍 字体加载验证

### 浏览器检查步骤

1. **打开开发者工具**（F12）
2. **切换到 Network 标签**
3. **筛选 "Font" 类型**
4. **刷新页面**
5. **检查字体文件是否成功加载**：
   - `字魂151号-联盟综艺体.ttf` ✅
   - `No.77-ShangShouCangShuFaTi-2.ttf` ✅

### 预期结果

- ✅ 字体文件状态码为 200
- ✅ 字体文件大小正确（字魂151号约 1.5MB，上手仓约 33MB）
- ✅ 浏览器控制台无字体加载错误

### 常见问题排查

#### 问题 1：字体未加载
**原因**：字体路径错误
**解决**：检查 `src/styles/fonts.css` 中的路径是否为 `../assets/fonts/`

#### 问题 2：字体显示为系统字体
**原因**：字体名称不匹配
**解决**：确保使用 `font-['ZiHun151',sans-serif]` 而不是 `font-['zihun151hao-lianmengzongyiti:Regular',sans-serif]`

#### 问题 3：字体加载缓慢
**原因**：字体文件较大
**解决**：
- 已配置 `font-display: swap` 优化加载
- 考虑使用字体子集化（仅包含需要的字符）

## 📊 字体使用统计

### 各页面字体使用情况

| 页面 | ZiHun151 使用次数 | ShangShouCangShu 使用次数 | Arial 保留次数 |
|------|------------------|-------------------------|--------------|
| Landing | 3 | 2 | 0 |
| LuckyDrawDefault | 1 | 0 | 0 |
| LuckyDrawShake | 2 | 0 | 0 |
| LuckyDrawResult | 6 | 0 | 0 |
| LuckyDrawDescription | 7 | 0 | 2 |

### Description 页面详细字体配置

| 文字内容 | 字体配置 | 说明 |
|---------|---------|------|
| 签文名称（如"皆大欢喜"） | `ZiHun151` | ✅ 已配置 |
| 签文解释文字 | `ZiHun151` | ✅ 已配置 |
| 奖励信息（标题+描述） | `ZiHun151` | ✅ 已配置 |
| **DS服务介绍**（品牌名称） | `Arial:Regular` | ✅ **保留原字体** |
| **签文编码**（序列号） | `Arial:Regular` | ✅ **保留原字体** |
| 按钮文字（保存、分享等） | `ZiHun151` | ✅ 已配置 |
| 返回主页、奖池一览 | `ZiHun151` | ✅ 已配置 |

## 🎨 字体应用规范

### Header 标题
- **字体**：`ShangShouCangShu`（书法体）
- **用途**：页面主标题、年份显示
- **示例**：Landing 页的 "2026" 和 "好兆头"

### 正文内容
- **字体**：`ZiHun151`（综艺体）
- **用途**：按钮文字、描述文字、签文内容
- **示例**：所有按钮、描述、签文详情

## 📝 更新记录

- **2024-12-19**: 完成所有页面的字体配置
  - Landing 页面：Header 使用 ShangShouCangShu，其他使用 ZiHun151
  - LuckyDrawDefault：全部使用 ZiHun151
  - LuckyDrawShake：全部使用 ZiHun151
  - LuckyDrawResult：全部使用 ZiHun151
  - LuckyDrawDescription：
    - 签文名称、解释、奖励使用 ZiHun151
    - **DS服务介绍**和**签文编码**保留 Arial 字体
    - 按钮文字使用 ZiHun151

---

**最后更新**: 2024-12-19
**维护者**: Cursor AI Assistant
