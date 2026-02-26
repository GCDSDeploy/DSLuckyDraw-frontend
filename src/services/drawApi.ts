/**
 * Backend draw API — POST /api/draw（v2：必带 guest_id，无限奖池 + 轮次）
 */

import { getApiBase } from '../config/api';

/** 开发环境可读错误，便于排查 CORS/网络 */
function toDrawErrorMessage(err: unknown, url: string): string {
  const msg = err instanceof Error ? err.message : String(err);
  if (import.meta.env.DEV) {
    return `抽签请求失败: ${msg}\n请求: ${url}`;
  }
  return '抽签请求失败，请检查网络或稍后重试';
}

/** v2 API 响应（success, won, tier, drawRound, message, guestId, prizeImageUrl?） */
export type DrawResponseV2 = {
  success: boolean;
  won: boolean;
  tier: string | null;
  drawRound: 1 | 2;
  message: string;
  guestId: string;
  prizeImageUrl?: string | null;
};

/**
 * 调用后端 POST /api/draw，携带 guest_id，返回 v2 响应。
 */
export async function drawLucky(guestId: string): Promise<DrawResponseV2> {
  const base = getApiBase();
  const url = `${base}/api/draw`;
  let res: Response;
  try {
    res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ guest_id: guestId }),
    });
  } catch (err) {
    const friendly = toDrawErrorMessage(err, url);
    console.warn('[drawApi] fetch failed (CORS/network):', err);
    throw new Error(friendly);
  }
  const data = (await res.json()) as DrawResponseV2 & { error?: string };
  console.log('[drawApi] response status:', res.status, 'body:', data);
  if (!res.ok) {
    const msg = res.status === 400
      ? (data.error ?? '请刷新页面后重试')
      : (data.error ?? `HTTP ${res.status}`);
    const friendly = res.status === 400
      ? (import.meta.env.DEV ? `[400] ${msg}` : '请刷新页面后重试')
      : toDrawErrorMessage(new Error(msg), url);
    throw new Error(friendly);
  }
  if (!data.success || data.guestId === undefined) {
    throw new Error(toDrawErrorMessage(new Error('接口返回格式异常'), url));
  }
  return data as DrawResponseV2;
}
