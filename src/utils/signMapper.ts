import type { Sign } from '../types/sign';
import type { LuckyDrawResult } from '../types';
import { SignLevel, SignType } from '../types/sign';
import { luckyDrawResults } from '../data/luckyDrawResults';

/**
 * 将 Sign 映射到 LuckyDrawResult
 * 
 * 映射规则：
 * - TOP_TOP (level 1) → 从 luckyDrawResults 中选择"上上签"（随机或按顺序）
 * - TOP (level 2) → 从 luckyDrawResults 中选择"上签"（随机或按顺序）
 * - SPECIAL (level 3) → 从 luckyDrawResults 中选择"特签"（随机或按顺序）
 * - EMPTY (level 0) → 返回空签（id: 11）
 */
export function mapSignToLuckyDrawResult(sign: Sign): LuckyDrawResult {
  // 空签：返回特殊签文（id: 11）
  if (sign.isEmpty || sign.level === SignLevel.EMPTY) {
    const emptyResult = luckyDrawResults.find(r => r.id === 11);
    if (emptyResult) {
      return { ...emptyResult, signId: sign.id };
    }
    // 如果找不到空签，返回默认空签
    return {
      id: 11,
      number: "2026",
      title: "新年快乐",
      level: "空签",
      isRetry: true,
      subtitle: "新年快乐",
      retryText: "再试试手气",
      backgroundColor: "#f7b635",
      underlineColor: "#f0f0f0",
      description: "所行皆明，所向皆顺。 \n新年快乐！ \n ",
      reward: {
        title: "Happy New Year!",
        description: "",
      },
      illustration: "",
      brandText: "Design Studios 祝福",
      isSpecialLayout: true,
      signId: sign.id,
    };
  }

  // 根据签的ID提取索引，用于选择对应的签文
  // 例如：S01-0001 → 选择第1个"上上签"
  //      S02-0123 → 选择第123个"上签"（如果超过可用数量，则取模）
  const match = sign.id.match(/S(\d+)-(\d+)/);
  if (!match) {
    // 如果ID格式不正确，返回默认签文
    return { ...luckyDrawResults[0], signId: sign.id };
  }

  const levelNumber = parseInt(match[1], 10);
  const index = parseInt(match[2], 10);

  let filteredResults: LuckyDrawResult[] = [];
  let targetLevel: string = '';

  if (levelNumber === SignLevel.TOP_TOP) {
    // Top-Top 签 → "上上签"
    targetLevel = '上上签';
    filteredResults = luckyDrawResults.filter(r => r.level === '上上签');
  } else if (levelNumber === SignLevel.TOP) {
    // Top 签 → "上签"
    targetLevel = '上签';
    filteredResults = luckyDrawResults.filter(r => r.level === '上签');
  } else if (levelNumber === SignLevel.SPECIAL) {
    // Special 签 → "特签"
    targetLevel = '特签';
    filteredResults = luckyDrawResults.filter(r => r.level === '特签');
  }

  // 如果找到对应等级的签文，使用索引选择（取模确保不越界）
  if (filteredResults.length > 0) {
    const selectedIndex = (index - 1) % filteredResults.length;
    return { ...filteredResults[selectedIndex], signId: sign.id };
  }

  // 如果找不到对应等级的签文，返回第一个签文作为默认值
  return { ...luckyDrawResults[0], signId: sign.id };
}
