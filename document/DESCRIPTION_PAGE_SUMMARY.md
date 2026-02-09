# LuckyDrawDescription 页面实现总结

## ✅ 已完成的工作

### 1. **页面容器组件** (`/src/pages/LuckyDrawDescription.tsx`)

像素完美的 Description 页面容器，基于 Figma 设计稿 1:1 还原。

**核心特性：**
- ✅ 375px 移动端基准容器
- ✅ 数据驱动架构（接收 resultId 或 result prop）
- ✅ 支持动态显示签文详情
- ✅ 完整的交互占位函数
- ✅ 200+ 行详细的 Cursor 迁移注释

**Props 接口：**
```typescript
interface ILuckyDrawDescriptionProps {
  resultId?: number;              // 签文 ID
  result?: LuckyDrawResult;       // 直接传入签文数据
  onReturnClick?: () => void;     // 返回主页
  onDownloadClick?: () => void;   // 保存到相册
  onShareClick?: () => void;      // 邀同事来摇签
  onGiftPoolClick?: () => void;   // 奖池一览
}
```

**页面元素：**
- LandingBackgroundLayerGreen：绿色背景（复用 Landing 页）
- DescriptionContent：签文详情内容（数据驱动）
- DescriptionButtons：底部操作按钮（保存、分享）
- DescriptionBack：返回主页按钮
- DescriptionGiftPool：奖池一览按钮

---

### 2. **签文详情组件** (`/src/components/DescriptionContent.tsx`)

数据驱动的签文详情显示组件，包含名称、解释、奖励信息等。

**核心特性：**
- ✅ 完全数据驱动
- ✅ 1:1 像素还原（338px × 468px 白色卡片）
- ✅ 支持动态插图
- ✅ 支持动态奖励信息
- ✅ 包含临时数据映射表（用于开发和演示）

**Props 接口：**
```typescript
interface DescriptionContentProps {
  result: LuckyDrawResult;  // 签文数据
  className?: string;       // 额外的 CSS 类名
}
```

**显示内容：**
- 顶部插图（根据签文动态显示）
- 签文名称（大号字体 + 装饰元素）
- 签文解释（多行文本）
- 奖励信息（标题 + 描述）
- 品牌信息（Logo + 名称）
- 序列号（自动生成）

---

### 3. **临时数据函数**

为了支持开发和演示，创建了以下临时数据函数：

```typescript
getDescriptionText(resultId)    // 获取签文解释文本
getRewardInfo(resultId)         // 获取奖励信息
getIllustrationUrl(resultId)    // 获取插图 URL
getSerialNumber(resultId)       // 获取序列号
```

**签文解释示例：**
| resultId | 签文 | 解释文本 |
|----------|------|----------|
| 1 | 皆大欢喜 | 各抒其见，终归同向。<br>共识落定，皆大欢喜。 |
| 2 | 扶摇直上 | 灵感涌现，思路清晰。<br>乘势而上，扶摇直上。 |
| 3 | 神来之笔 | 创意如泉涌，笔下生花。<br>神来之笔，妙不可言。 |
| ... | ... | ... |

**奖励信息示例：**
| resultId | 奖励标题 | 奖励描述 |
|----------|----------|----------|
| 1 | Happy New Year! 查收奖励👇 | PPT设计VIP通道 - 排队提前5名 |
| 2 | Happy New Year! 查收奖励👇 | 设计审核加急券 - 2小时内响应 |
| 3 | Happy New Year! 查收奖励👇 | 创意工作坊门票 - 免费参加一次 |
| ... | ... | ... |

---

### 4. **App.tsx 路由集成**

已更新 App.tsx 支持 Description 页面的导航：

```typescript
// 页面切换状态
const [currentPage, setCurrentPage] = useState<
  'landing' | 
  'lucky-draw-default' | 
  'lucky-draw-shake' | 
  'lucky-draw-result' | 
  'lucky-draw-description'  // 新增
>('landing');

// 事件处理函数
const handleProceedToDescription = () => {
  setCurrentPage('lucky-draw-description');
};

const handleReturnToLanding = () => {
  setCurrentPage('landing');
};

const handleDownload = () => {
  console.log('[TODO] Save current page as image');
};

const handleShare = () => {
  console.log('[TODO] Share current result');
};

const handleGiftPool = () => {
  console.log('[TODO] Navigate to gift pool page');
};

// 渲染逻辑
if (currentPage === 'lucky-draw-description') {
  return (
    <LuckyDrawDescription 
      onReturnClick={handleReturnToLanding}
      onDownloadClick={handleDownload}
      onShareClick={handleShare}
      onGiftPoolClick={handleGiftPool}
    />
  );
}
```

---

## 📊 页面流程

```
Landing Page
    ↓ (点击"立即摇签")
LuckyDrawDefault
    ↓ (点击"开始摇签")
LuckyDrawShake
    ↓ (摇签完成)
LuckyDrawResult
    ↓ (点击"立即解签")
LuckyDrawDescription  ← 新增页面
    ↓ (点击"返回主页")
Landing Page
```

---

## 🎯 使用示例

### 示例 1：默认显示第一个签文

```tsx
<LuckyDrawDescription 
  onReturnClick={() => navigate('/')}
  onDownloadClick={handleDownload}
  onShareClick={handleShare}
/>
```

### 示例 2：指定签文 ID

```tsx
<LuckyDrawDescription 
  resultId={2}  // 显示 No.26 扶摇直上
  onReturnClick={() => navigate('/')}
/>
```

### 示例 3：直接传入签文数据

```tsx
const result = {
  id: 1,
  number: "88",
  title: "皆大欢喜",
  level: "上签"
};

<LuckyDrawDescription 
  result={result}
  onReturnClick={() => navigate('/')}
/>
```

---

## 🔄 Cursor 迁移指南

### 步骤 1：扩展 LuckyDrawResult 类型

在 `/src/types/index.ts` 中扩展类型定义：

```typescript
export interface LuckyDrawResult {
  // 现有字段
  id: number;
  number: string;
  title: string;
  level: LuckyDrawLevel;
  isRetry?: boolean;
  subtitle?: string;
  retryText?: string;
  
  // 新增字段（Description 页面需要）
  description: string;        // 签文详细解释
  interpretation?: string;    // 签文解读
  reward: {                   // 奖励信息
    title: string;            // 奖励标题
    description: string;      // 奖励描述
  };
  illustration: string;       // 插图 URL
  serialNumber?: string;      // 序列号
}
```

---

### 步骤 2：更新静态数据

在 `/src/data/luckyDrawResults.ts` 中添加新字段：

```typescript
export const luckyDrawResults: LuckyDrawResult[] = [
  {
    id: 1,
    number: "88",
    title: "皆大欢喜",
    level: "上签",
    isRetry: false,
    // 新增字段
    description: "各抒其见，终归同向。\n共识落定，皆大欢喜。",
    reward: {
      title: "Happy New Year! 查收奖励👇",
      description: "PPT设计VIP通道 - 排队提前5名"
    },
    illustration: "/assets/images/illustrations/result-1.png",
    serialNumber: "NO. S88ADFHRGB"
  },
  // ... 其他签文
];
```

---

### 步骤 3：创建 API 服务

在 `/src/services/luckyDrawService.ts` 中添加新接口：

```typescript
// 获取签文详情（包含解释和奖励）
export async function fetchDescriptionById(id: number) {
  const response = await fetch(`/api/lucky-draw/description/${id}`);
  const data = await response.json();
  return data.result;
}
```

---

### 步骤 4：实现保存图片功能

安装依赖：
```bash
npm install html2canvas
```

实现保存功能：
```typescript
import html2canvas from 'html2canvas';

async function handleDownloadClick() {
  const element = document.querySelector('[data-page="lucky-draw-description"]');
  if (!element) return;
  
  const canvas = await html2canvas(element as HTMLElement, {
    scale: 2,
    useCORS: true,
    backgroundColor: '#128f57'
  });
  
  canvas.toBlob((blob) => {
    if (!blob) return;
    
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `lucky-draw-${currentResult.number}-${currentResult.title}.png`;
    link.click();
    URL.revokeObjectURL(url);
  });
}
```

---

### 步骤 5：实现分享功能

使用 Web Share API：
```typescript
async function handleShareClick() {
  if (navigator.share) {
    await navigator.share({
      title: `我抽到了${currentResult.level}：${currentResult.title}`,
      text: `快来一起摇签吧！`,
      url: `${window.location.origin}/result/${currentResult.id}`,
    });
  } else {
    // Fallback: 复制链接到剪贴板
    navigator.clipboard.writeText(
      `${window.location.origin}/result/${currentResult.id}`
    );
    alert('链接已复制到剪贴板');
  }
}
```

---

### 步骤 6：路由集成

#### Next.js App Router

```typescript
// app/description/[id]/page.tsx
export default function DescriptionPage({ params }) {
  const router = useRouter();
  
  return (
    <LuckyDrawDescription
      resultId={Number(params.id)}
      onReturnClick={() => router.push('/')}
      onDownloadClick={handleDownload}
      onShareClick={handleShare}
      onGiftPoolClick={() => router.push('/gift-pool')}
    />
  );
}
```

#### React Router

```typescript
function DescriptionRoute() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  return (
    <LuckyDrawDescription
      resultId={Number(id)}
      onReturnClick={() => navigate('/')}
      onDownloadClick={handleDownload}
      onShareClick={handleShare}
      onGiftPoolClick={() => navigate('/gift-pool')}
    />
  );
}
```

---

## 📂 文件结构

```
/src
├── /pages
│   └── LuckyDrawDescription.tsx         ← 页面容器（新增）
├── /components
│   └── DescriptionContent.tsx           ← 签文详情组件（新增）
├── /types
│   └── index.ts                         ← 类型定义（需扩展）
├── /data
│   └── luckyDrawResults.ts              ← 静态数据（需扩展）
└── /app
    └── App.tsx                          ← 路由集成（已更新）
```

---

## ✅ 完成状态

### 已实现
- ✅ 页面容器组件（LuckyDrawDescription.tsx）
- ✅ 签文详情组件（DescriptionContent.tsx）
- ✅ 临时数据映射表（11 个签文的解释和奖励）
- ✅ 交互占位函数（返回、下载、分享、奖池）
- ✅ App.tsx 路由集成
- ✅ 完整的 Cursor 迁移注释

### 待扩展（Cursor 迁移时）
- ⏳ 扩展 LuckyDrawResult 类型
- ⏳ 更新静态数据（添加新字段）
- ⏳ 创建 API 服务（获取签文详情）
- ⏳ 实现保存图片功能（html2canvas）
- ⏳ 实现分享功能（Web Share API）
- ⏳ 准备每个签文的独立插图

---

## 🎨 设计规范

### 页面尺寸
- 基准宽度：375px
- 基准高度：852px（全屏）

### 内容卡片尺寸
- 宽度：338px
- 高度：468px
- 背景：白色
- 圆角：根据 SVG 路径定义

### 插图尺寸
- 宽度：300px
- 高度：210px
- 位置：top: 130px, centered

### 按钮尺寸
- 宽度：152px
- 高度：48px
- 间距：16px
- 圆角：20px
- 背景：白色

---

## 🐛 已知限制

1. **临时数据**：
   - 当前使用临时数据映射表
   - 所有签文使用同一张插图
   - 序列号为随机生成

2. **插图资源**：
   - 需要为每个签文准备独立的插图
   - 当前所有签文都使用"皆大欢喜"的插图

3. **保存功能**：
   - 占位函数，未实现实际功能
   - 需要安装 html2canvas 库

4. **分享功能**：
   - 占位函数，未实现实际功能
   - 需要实现 Web Share API 或第三方分享

---

## 📖 相关文档

- [数据驱动架构文档](./DATA_DRIVEN_ARCHITECTURE.md)
- [Result 页面实现](./src/pages/LuckyDrawResult.tsx)
- [签条组件实现](./src/components/FortuneSlip.tsx)

---

**© 2025 Lucky Draw Project - Description Page**
