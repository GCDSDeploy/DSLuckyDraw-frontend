# Description 页面数据驱动架构文档

## 📋 概述

Description 页面已完成数据驱动架构改造，所有动态内容均通过 `LuckyDrawResult` 数据结构驱动，为剩余 10 个页面的快速生成做好了准备。

---

## 🎯 接下来的执行步骤

### 第一步：检查 Result 页面代码 ✅
让我先查看 `LuckyDrawResult` 页面，确认"立即解签"按钮的回调函数名称。

### 第二步：更新类型定义 ✅
在 `/src/types/index.ts` 中：
- 添加 `'空签'` 到 `LuckyDrawLevel` 枚举
- 为 Description 页面添加 `isSpecialLayout?: boolean` 字段

### 第三步：更新数据 ✅
在 `/src/data/luckyDrawResults.ts` 中：
- 修改 ID: 11 的 `level: "空签"`
- 添加 `isSpecialLayout: true` 标记

### 第四步：创建特殊布局组件 ✅
创建 `/src/components/DescriptionContentSpecial.tsx`：
- 更大的插图（340x286）
- 无标题、无横线装饰
- 红色字 22px
- 无底部序列号

### 第五步：等待设计稿 ⏳
准备接收剩余 10 个页面的设计稿并提取数据

---

## 📁 文件结构

```
/src
├── types/
│   └── index.ts                    ✅ 扩展了 LuckyDrawResult + RewardInfo 类型
├── data/
│   └── luckyDrawResults.ts         ✅ 11 个签文的完整数据（含占位数据）
├── components/
│   ├── DescriptionContent.tsx      ✅ 完全数据驱动的内容组件
│   └── DescriptionContentSpecial.tsx ✅ 特殊布局组件
└── pages/
    └── LuckyDrawDescription.tsx    ✅ 数据驱动的页面容器（含背景色）
```

---

## 🏗️ 架构设计

### 类型定义（`/src/types/index.ts`）

```typescript
/**
 * 奖励信息数据结构
 */
export interface RewardInfo {
  title: string;
  description: string;
}

/**
 * 签文数据结构（已扩展 Description 页面字段）
 */
export interface LuckyDrawResult {
  // 基础字段
  id: number;
  number: string;
  title: string;
  level: LuckyDrawLevel;
  isRetry?: boolean;
  subtitle?: string;
  retryText?: string;
  
  // Description 页面所需字段
  backgroundColor?: string;      // 页面背景颜色
  underlineColor?: string;       // 横线装饰颜色
  description?: string;          // 签文详细解释
  reward?: RewardInfo;           // 奖励信息
  illustration?: string;         // 插图 URL
  serialNumber?: string;         // 序列号
  isSpecialLayout?: boolean;     // 是否使用特殊布局
}
```

### 静态数据（`/src/data/luckyDrawResults.ts`）

```typescript
export const luckyDrawResults: LuckyDrawResult[] = [
  {
    id: 1,
    number: "88",
    title: "皆大欢喜",
    level: "上签",
    isRetry: false,
    // Description 页面数据
    backgroundColor: "#128f57",
    underlineColor: "#128f57",
    description: "各抒其见，终归同向。\n共识落定，皆大欢喜。\n ",
    reward: {
      title: "Happy New Year! 查收奖励👇",
      description: "\"PPT设计VIP通道 - 排队提前5名\""
    },
    illustration: imgDescriptionIllustrationJiedahuanxi,
  },
  // ... 其余 10 个签文（2-11）都已包含占位数据
  {
    id: 11,
    number: "2026",
    title: "再试试手气",
    level: "空签",
    isRetry: false,
    // Description 页面数据
    backgroundColor: "#128f57",
    underlineColor: "#128f57",
    description: "再试一次，也许会有惊喜。\n ",
    reward: {
      title: "Happy New Year! 查收奖励👇",
      description: "\"PPT设计VIP通道 - 排队提前5名\""
    },
    illustration: imgDescriptionIllustrationJiedahuanxi,
    isSpecialLayout: true,
  },
];
```

### 组件实现（`/src/components/DescriptionContent.tsx`）

```typescript
export default function DescriptionContent({ result }: DescriptionContentProps) {
  // 从 result 数据中提取所有必需字段
  const descriptionText = result.description || '签文解释加载中...\n \n ';
  const rewardTitle = result.reward?.title || 'Happy New Year! 查收奖励👇';
  const rewardDescription = result.reward?.description || '';
  const illustrationUrl = result.illustration || '';
  const underlineColor = result.underlineColor || '#128f57';
  const serialNumber = result.serialNumber || generateSerialNumber(result.id);
  
  return (
    <>
      {/* 插图 - 数据驱动 */}
      <img src={illustrationUrl} alt={`${result.title} 插图`} />
      
      {/* 签文名称 - 数据驱动 */}
      <p>{result.title}</p>
      
      {/* 横线装饰 - 颜色数据驱动 */}
      <div style={{ backgroundColor: underlineColor }} />
      
      {/* 签文解释 - 数据驱动 */}
      {descriptionText.split('\n').map((line, index) => (
        <p key={index}>{line}</p>
      ))}
      
      {/* 奖励信息 - 数据驱动 */}
      <p>{rewardTitle}</p>
      <p>{rewardDescription}</p>
      
      {/* 序列号 - 数据驱动 */}
      <p>{serialNumber}</p>
    </>
  );
}
```

### 特殊布局组件实现（`/src/components/DescriptionContentSpecial.tsx`）

```typescript
export default function DescriptionContentSpecial({ result }: DescriptionContentProps) {
  // 从 result 数据中提取所有必需字段
  const descriptionText = result.description || '签文解释加载中...\n \n ';
  const rewardTitle = result.reward?.title || 'Happy New Year! 查收奖励👇';
  const rewardDescription = result.reward?.description || '';
  const illustrationUrl = result.illustration || '';
  const underlineColor = result.underlineColor || '#128f57';
  const serialNumber = result.serialNumber || generateSerialNumber(result.id);
  
  return (
    <>
      {/* 插图 - 数据驱动 */}
      <img src={illustrationUrl} alt={`${result.title} 插图`} />
      
      {/* 签文名称 - 数据驱动 */}
      <p>{result.title}</p>
      
      {/* 横线装饰 - 颜色数据驱动 */}
      <div style={{ backgroundColor: underlineColor }} />
      
      {/* 签文解释 - 数据驱动 */}
      {descriptionText.split('\n').map((line, index) => (
        <p key={index}>{line}</p>
      ))}
      
      {/* 奖励信息 - 数据驱动 */}
      <p>{rewardTitle}</p>
      <p>{rewardDescription}</p>
      
      {/* 序列号 - 数据驱动 */}
      <p>{serialNumber}</p>
    </>
  );
}
```

### 页面容器（`/src/pages/LuckyDrawDescription.tsx`）

```typescript
export default function LuckyDrawDescription(props: ILuckyDrawDescriptionProps) {
  const [currentResult, setCurrentResult] = useState<LuckyDrawResult | null>(null);
  
  // 从签文数据中提取背景颜色
  const backgroundColor = currentResult.backgroundColor || '#128f57';
  
  return (
    <div style={{ backgroundColor }}>
      {currentResult.isSpecialLayout ? (
        <DescriptionContentSpecial result={currentResult} />
      ) : (
        <DescriptionContent result={currentResult} />
      )}
    </div>
  );
}
```

---

## 🎨 当前状态

### ✅ 已完成（1 个页面）

#### 1. 皆大欢喜（ID: 1）
- **签号**：No.88
- **等级**：上签
- **背景色**：`#128f57`（绿色）
- **横线色**：`#128f57`（绿色）
- **插图**：✅ 已导入（`figma:asset/503949...`）
- **解释**：✅ "各抒其见，终归同向。\n共识落定，皆大欢喜。\n "
- **奖励**：✅ "PPT设计VIP通道 - 排队提前5名"
- **状态**：**完全数据驱动 + 像素完美 1:1 还原**

### 🔄 占位数据（9 个同模版页面）

以下签文已创建占位数据，等待 Figma 设计稿后替换：

2. **扶摇直上**（No.26，上上签）
3. **神来之笔**（No.01，上上签）
4. **灵光乍现**（No.88，上签）
5. **尽在掌握**（No.77，上签）
6. **稳步推进**（No.77，上签）
7. **一稿过**（No.66，上签）
8. **拍案叫绝**（No.66，上签）
9. **天时地利**（No.2026，特签）
10. **大展鸿图**（No.2026，特签）

**占位数据包含**：
- ✅ 基础信息（id、number、title、level）
- ✅ 背景色（统一使用 `#128f57`）
- ✅ 横线色（统一使用 `#128f57`）
- ✅ 签文解释（临时文案）
- ✅ 奖励信息（临时文案）
- ⏳ 插图（统一使用"皆大欢喜"插图作为占位）

### 🎁 特殊页面（1 个）

11. **再试试手气**（No.2026，特签）
- **特点**：安慰奖，插图布局、文本结构略有不同
- **状态**：已创建占位数据，等待设计稿

---

## 📝 待办事项

### 1. 提供剩余设计稿 ⏳

请提供以下页面的 Figma 设计稿：

#### 同模版页面（9 个）
- [ ] 扶摇直上（ID: 2）
- [ ] 神来之笔（ID: 3）
- [ ] 灵光乍现（ID: 4）
- [ ] 尽在掌握（ID: 5）
- [ ] 稳步推进（ID: 6）
- [ ] 一稿过（ID: 7）
- [ ] 拍案叫绝（ID: 8）
- [ ] 天时地利（ID: 9）
- [ ] 大展鸿图（ID: 10）

#### 特殊页面（1 个）
- [ ] 再试试手气（ID: 11，布局结构不同）

### 2. 需要从设计稿提取的数据

为每个页面提取：
1. **背景颜色**（十六进制值，如 `#128f57`）
2. **PNG 插图**（导出为 figma:asset）
3. **签文解释**（文本内容，保留换行）
4. **奖励信息**（标题 + 描述）
5. **横线装饰颜色**（十六进制值）

### 3. 数据替换流程

当收到新设计稿后：

1. 导入插图到项目
   ```typescript
   import imgIllustration2 from "figma:asset/xxxxx.png";
   ```

2. 更新 `/src/data/luckyDrawResults.ts` 中对应的数据项
   ```typescript
   {
     id: 2,
     number: "26",
     title: "扶摇直上",
     level: "上上签",
     backgroundColor: "#从设计稿提取",
     underlineColor: "#从设计稿提取",
     description: "从设计稿提取\n支持换行\n ",
     reward: {
       title: "从设计稿提取",
       description: "从设计稿提取"
     },
     illustration: imgIllustration2,
   }
   ```

3. **无需修改任何组件代码** - 完全数据驱动！

---

## 🚀 优势

### 1. 快速批量生成
- 10 个页面只需替换数据，无需修改代码
- 每个页面替换时间 < 5 分钟

### 2. 一致性保证
- 所有页面使用同一套组件
- 布局、样式、交互完全一致

### 3. 易于维护
- 数据和视图分离
- 修改数据不影响组件逻辑

### 4. 类型安全
- TypeScript 类型定义完整
- 编译时捕获数据错误

### 5. 可扩展性
- 支持未来添加新字段
- 向后兼容（所有字段都是可选的）

---

## 📚 相关文件

- **类型定义**：`/src/types/index.ts`
- **静态数据**：`/src/data/luckyDrawResults.ts`
- **内容组件**：`/src/components/DescriptionContent.tsx`
- **页面容器**：`/src/pages/LuckyDrawDescription.tsx`

---

## 🎉 下一步

请提供剩余 10 个页面的 Figma 设计稿，我将：

1. 提取所有数据（背景色、插图、文本、奖励等）
2. 更新 `luckyDrawResults.ts` 数据文件
3. （可选）为特殊页面创建变体组件（如果布局差异较大）

**预计完成时间**：收到设计稿后 30 分钟内完成所有 10 个页面！🚀