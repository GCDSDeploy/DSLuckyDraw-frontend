/**
 * 签数据结构（抽签池中的签）
 * 
 * 每个签包含：
 * - id: 唯一标识符（格式：S<levelNumber>-<runningIndex>）
 * - level: 等级数字（0=Empty, 1=Top-Top, 2=Top, 3=Special）
 * - type: 类型字符串
 * - rewardCode: 奖励代码
 * - isEmpty: 是否为空签
 */
export interface Sign {
  /** 唯一标识符（格式：S01-0001, S02-0123, S03-0145, S00-5321） */
  id: string;
  
  /** 等级数字（0=Empty, 1=Top-Top, 2=Top, 3=Special） */
  level: number;
  
  /** 类型字符串（"EMPTY", "TOP_TOP", "TOP", "SPECIAL"） */
  type: string;
  
  /** 奖励代码（"R01", "R02", "R03"） */
  rewardCode: string;
  
  /** 是否为空签 */
  isEmpty: boolean;
}

/**
 * 签类型枚举
 */
export enum SignType {
  EMPTY = "EMPTY",
  TOP_TOP = "TOP_TOP",
  TOP = "TOP",
  SPECIAL = "SPECIAL",
}

/**
 * 签等级枚举
 */
export enum SignLevel {
  EMPTY = 0,
  TOP_TOP = 1,
  TOP = 2,
  SPECIAL = 3,
}
