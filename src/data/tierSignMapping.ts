/**
 * 后端 tier 与前端签文（id + 名称 + 描述）映射
 *
 * 抽签逻辑不变：后端按 65/20/10/5 返回 tier，前端据此从对应 id 列表中选一条展示。
 * 同一 tier 多条签文时，随机选一条。
 *
 * | tier     | 对应签文（id + 名称 + 描述）                   | 备注     |
 * | -------- | ---------------------------------------- | -------- |
 * | 阳光普照 | 9号签 — 天时地利 — "Zoom 背景"               | 已存在   |
 * | 上签     | 1 皆大欢喜, 4 灵光乍现, 5 尽在掌握, 6 稳步推进 | 现有签文 |
 * | 上上签   | 2 扶摇直上, 7 一稿过, 8 拍案叫绝              | 现有签文 |
 * | 特签     | 10 大展鸿图, 3 神来之笔                      | 现有签文 |
 * | 未中签   | 11号签 — 开工大吉 — "新年快乐"                 | 现有签文 |
 */

import type { LuckyDrawResult } from '../types';
import { luckyDrawResults, getLuckyDrawResultById } from './luckyDrawResults';

/** 后端 tier 与签文 id 列表的映射（同 tier 多条时前端随机选一） */
export const TIER_TO_SIGN_IDS: Record<string, number[]> = {
  阳光普照: [9],
  上签: [1, 4, 5, 6],
  上上签: [2, 7, 8],
  特签: [10, 3],
  未中签: [11],
};

/** 支持的 tier 列表（与 API 一致） */
export const TIER_NAMES = ['阳光普照', '上签', '上上签', '特签', '未中签'] as const;
export type TierName = (typeof TIER_NAMES)[number];

/**
 * 根据后端返回的 tier 取一条签文（同 tier 多条时随机）
 */
export function getLuckyDrawResultByTier(tier: string): LuckyDrawResult | undefined {
  const ids = TIER_TO_SIGN_IDS[tier];
  if (!ids || ids.length === 0) return undefined;
  const id = ids[Math.floor(Math.random() * ids.length)];
  const result = getLuckyDrawResultById(id);
  return result ? { ...result } : undefined;
}

/**
 * 根据 tier 获取该档位下所有签文 id（只读，用于展示/统计）
 */
export function getSignIdsByTier(tier: string): number[] {
  return TIER_TO_SIGN_IDS[tier] ?? [];
}
