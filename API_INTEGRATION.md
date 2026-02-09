# Frontend API 集成说明

## 配置

- **API 基础 URL**：在 `frontend/.env` 中设置 `VITE_API_BASE_URL`，需与当前 backend 端口一致。
  - 示例：`VITE_API_BASE_URL=http://localhost:3001`
  - 未设置时默认 `http://localhost:3000`
- 模板见 `frontend/.env.example`。

## 抽签流程

- **触发**：摇一摇 或 点击「摇一摇 得好礼」按钮。
- **请求**：`POST ${VITE_API_BASE_URL}/api/draw`，`Content-Type: application/json`，body `{}`。
- **成功**：返回 `{ id, type, title, level, description, imageUrl }` → 转为 Sign → 映射到 LuckyDrawResult → 跳转结果页。
- **库存耗尽**：返回 `{ status: "OUT_OF_STOCK" }` → 弹窗「今日签已抽完，请明日再来」。
- **网络/请求失败**：`console.warn` + 弹窗「抽签请求失败，请检查网络或稍后重试」。

控制台会打印 `draw result:` 及返回的 JSON，便于核对。

## 示例：直接调用 draw API

```ts
import { drawLucky, isOutOfStock, drawResponseToSign } from '@/services/drawApi';

async function doDraw() {
  try {
    const data = await drawLucky(); // 内部已 console.log('draw result:', data)
    if (isOutOfStock(data)) {
      alert('今日签已抽完，请明日再来');
      return;
    }
    const sign = drawResponseToSign(data);
    // 根据 sign 更新前端动画和签文显示，再跳转结果页
  } catch (err) {
    console.warn('抽签请求失败', err);
  }
}
```

或手写 fetch（等价）：

```ts
const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/draw`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({}),
});
const data = await res.json();
console.log('draw result:', data);
```

实际绑定见 `src/services/drawApi.ts` 与 `src/pages/LuckyDrawShake.tsx`。
