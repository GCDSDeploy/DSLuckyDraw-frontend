/** Production backend URL when VITE_API_BASE_URL is not set (e.g. Vercel env missing). */
const PRODUCTION_API_BASE = 'https://dsluckydraw-backend-production-2255.up.railway.app';

/**
 * Backend API base URL (Step 3 draw API).
 * - 开发环境：使用空字符串，请求走同源 /api/*，由 Vite 代理到 localhost:3000，手机/桌面均无 CORS。
 * - 生产：使用 VITE_API_BASE 或 VITE_API_BASE_URL；未设置时使用 PRODUCTION_API_BASE，确保生产环境不请求 localhost。
 */
export function getApiBase(): string {
  if (import.meta.env.DEV && typeof window !== 'undefined') {
    return ''; // same-origin → Vite proxy /api to backend
  }
  const envBase = (import.meta.env.VITE_API_BASE || import.meta.env.VITE_API_BASE_URL) as string | undefined;
  if (envBase) return envBase;
  return import.meta.env.DEV ? 'http://localhost:3000' : PRODUCTION_API_BASE;
}

/** @deprecated 请使用 getApiBase()，以便开发时移动端同网段访问正确解析 */
export const API_BASE = getApiBase();
