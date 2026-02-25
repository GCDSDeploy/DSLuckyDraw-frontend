/**
 * Backend draw API — POST /api/draw.
 * Used by shake/click draw trigger. Console logs response for verification.
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

export type DrawSuccess = {
  id: string;
  type: string;
  title: string;
  level: number;
  description: string;
  imageUrl: string;
};

export type DrawOutOfStock = { status: 'OUT_OF_STOCK' };

export type DrawResponse = DrawSuccess | DrawOutOfStock;

/**
 * Call backend POST /api/draw. Returns JSON or throws on network error.
 * Logs response to console for verification.
 */
export async function drawLucky(): Promise<DrawResponse> {
  const base = getApiBase();
  const url = `${base}/api/draw`;
  let res: Response;
  try {
    res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({}),
    });
  } catch (err) {
    const friendly = toDrawErrorMessage(err, url);
    console.warn('[drawApi] fetch failed (CORS/network):', err);
    throw new Error(friendly);
  }
  const data = (await res.json()) as DrawResponse;
  console.log('[drawApi] response status:', res.status, 'body:', data);
  if (!res.ok) {
    const msg = data && typeof data === 'object' && 'error' in data
      ? (data as { error?: string }).error ?? `HTTP ${res.status}`
      : `HTTP ${res.status}`;
    throw new Error(toDrawErrorMessage(new Error(msg), url));
  }
  return data;
}

export function isOutOfStock(data: DrawResponse): data is DrawOutOfStock {
  return 'status' in data && data.status === 'OUT_OF_STOCK';
}

/** Backend type string -> frontend Sign.type */
const TYPE_MAP: Record<string, string> = {
  Empty: 'EMPTY',
  'Top-Top': 'TOP_TOP',
  Top: 'TOP',
  Special: 'SPECIAL',
};
const REWARD_MAP: Record<number, string> = {
  0: 'EMPTY',
  1: 'R01',
  2: 'R02',
  3: 'R03',
};

/**
 * Convert API draw success response to Sign for mapSignToLuckyDrawResult.
 */
export function drawResponseToSign(data: DrawSuccess): import('../types/sign').Sign {
  return {
    id: data.id,
    level: data.level,
    type: TYPE_MAP[data.type] ?? data.type,
    rewardCode: REWARD_MAP[data.level] ?? 'EMPTY',
    isEmpty: data.level === 0,
  };
}
