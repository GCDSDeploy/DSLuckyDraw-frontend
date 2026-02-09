/**
 * Backend draw API — POST /api/draw.
 * Used by shake/click draw trigger. Console logs response for verification.
 */

import { API_BASE } from '../config/api';

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
  const url = `${API_BASE}/api/draw`;
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({}),
  });
  const data = (await res.json()) as DrawResponse;
  console.log('draw result:', data);
  if (!res.ok) {
    throw new Error(data && typeof data === 'object' && 'error' in data
      ? (data as { error?: string }).error ?? `HTTP ${res.status}`
      : `HTTP ${res.status}`);
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
