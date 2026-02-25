/**
 * Backend API base URL (Step 3 draw API).
 * - 开发环境：使用空字符串，请求走同源 /api/*，由 Vite 代理到 localhost:3000，手机/桌面均无 CORS。
 * - 生产/预发：使用 VITE_API_BASE 或 VITE_API_BASE_URL，否则回退到 localhost:3000。
 */
export function getApiBase(): string {
  if (import.meta.env.DEV && typeof window !== 'undefined') {
    return ''; // same-origin → Vite proxy /api to backend
  }
  const envBase = (import.meta.env.VITE_API_BASE || import.meta.env.VITE_API_BASE_URL) as string | undefined;
  if (envBase) return envBase;
  return 'http://localhost:3000';
}

/** @deprecated 请使用 getApiBase()，以便开发时移动端同网段访问正确解析 */
export const API_BASE = getApiBase();
