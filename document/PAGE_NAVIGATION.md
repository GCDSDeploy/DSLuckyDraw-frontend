# 页面导航关系文档

## 当前已实现页面

### 1. Landing 页面 (`/src/pages/LandingPage.tsx`)
- **路径**: `/` (默认首页)
- **功能**: 活动入口页面
- **交互元素**:
  - ✅ "试试手气" 按钮 (`Landing_Try_CTA`)
    - `data-action="start"`
    - 点击后跳转到 LuckyDrawDefault 页面
  - ⏳ "活动规则" 链接 (待实现)

### 2. LuckyDrawDefault 页面 (`/src/pages/LuckyDrawDefault.tsx`)
- **路径**: `/draw` (抽签默认状态)
- **功能**: 抽签交互页面
- **交互元素**:
  - ✅ "摇一摇" 按钮 (`Shake_CTA`)
    - `data-action="shake-to-draw"`
    - 点击后跳转到 LuckyDrawShake 页面
  - ✅ Proceed 占位函数
    - 供后续跳转到 Result 页面使用
  - ✅ Try Again 占位函数
    - 供其他页面返回本页使用

### 3. LuckyDrawShake 页面 (`/src/pages/LuckyDrawShake.tsx`) ✨ NEW
- **路径**: `/draw/shake` (抽签摇动中状态)
- **功能**: 摇签动画状态页面
- **交互元素**:
  - ✅ "幸运签生成中..." 提示文字
  - ✅ "摇一摇 得好礼" CTA 按钮（Shake 状态）
  - ✅ 签桶和签条（摇动状态）
  - ✅ 金币和装饰元素（摇动状态）
  - ✅ 占位动画类名：
    - `shake-active` - 摇动激活
    - `shake-item` - 可摇动元素
    - `tube-jitter` - 签桶抖动
    - `coin-sway` - 金币摇摆
  - ✅ `onProceedResult()` - 跳转到 Result 页面（占位）

---

## 页面流转关系

```
Landing (首页)
    |
    | [点击 "试试手气" 按钮]
    ↓
LuckyDrawDefault (抽签默认状态)
    |
    | [点击 "摇一摇" 按钮]
    ↓
LuckyDrawShake (摇签动画中) ✨ NEW
    |
    | [摇动完成]
    ↓
Result 页面 (待开发 - 第二批次)
```

---

## 事件处理函数映射

### App.tsx 中的占位函数

| 函数名 | 触发时机 | 目标页面 | 状态 |
|--------|---------|---------|------|
| `handleStartClick()` | Landing 页 "试试手气" 按钮 | LuckyDrawDefault | ✅ 已实现 |
| `handleRulesClick()` | Landing 页 "活动规则" 链接 | Rules Modal/Page | ⏳ 占位 |
| `handleShakeStart()` | LuckyDrawDefault "摇一摇" 按钮 | LuckyDrawShake | ✅ 已实现 |
| `handleShakeComplete()` | LuckyDrawShake 摇动完成 | Result 页面 | ⏳ 占位 |
| `handleTryAgain()` | Result/其他页 "再试一次" | LuckyDrawDefault | ⏳ 占位 |

---

## 迁移到 Cursor 项目时的注意事项

### 1. 安装 React Router
```bash
npm install react-router-dom
```

### 2. 替换 App.tsx 中的 useState 逻辑
```tsx
// 移除临时 state
- const [currentPage, setCurrentPage] = useState<'landing' | 'lucky-draw-default'>('landing');

// 替换为 Router
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';

<BrowserRouter>
  <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/draw" element={<LuckyDrawDefault />} />
    <Route path="/draw/shake" element={<LuckyDrawShake />} />
    <Route path="/result/:id" element={<ResultPage />} />
    {/* ... 其他路由 */}
  </Routes>
</BrowserRouter>
```

### 3. 更新事件处理函数
```tsx
// 使用 navigate 替代 setCurrentPage
const navigate = useNavigate();

const handleStartClick = () => {
  navigate('/draw');
};
```

---

## 当前开发状态

### ✅ 已完成（第一批次）
- [x] Landing 页面组件
- [x] LuckyDrawDefault 页面组件（变体1 - 默认状态）
- [x] LuckyDrawShake 页面组件（变体2 - 摇动状态） ✨ NEW
- [x] Landing → LuckyDrawDefault 页面跳转
- [x] LuckyDrawDefault → LuckyDrawShake 页面跳转 ✨ NEW
- [x] 所有事件处理占位函数
- [x] data-action 语义标注
- [x] 375px 响应式布局
- [x] 完整迁移注释

### ⏳ 待开发（第二批次）
- [ ] Result 页面
- [ ] Description 页面
- [ ] Share 页面

---

## 测试验证

### 预览步骤（完整流程）
1. 打开 Figma Make 预览
2. 默认显示 **Landing 页面**
3. 点击 "试试手气" 按钮
4. 应跳转到 **LuckyDrawDefault 页面**（签桶静止状态）
5. 点击 "摇一摇" 按钮 ✨ NEW
6. 应跳转到 **LuckyDrawShake 页面**（显示"幸运签生成中..."）
7. 控制台应输出完整日志链

### 验证清单
- [x] Landing 页面正确渲染
- [x] LuckyDrawDefault 页面正确渲染
- [x] LuckyDrawShake 页面正确渲染 ✨ NEW
- [x] "试试手气" 按钮可点击
- [x] "摇一摇" 按钮可点击 ✨ NEW
- [x] 所有页面切换正常
- [x] 控制台日志输出正确
- [x] 响应式布局在 375px 基准下正常
- [x] 所有 SVG 内联渲染正确

---

最后更新时间: 2025-01-XX