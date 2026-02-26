// ===== TypeScript 类型定义 =====
// 功能：Lucky Draw 项目的核心数据类型
// 迁移目标：Cursor 项目 @/types/index.ts
// =====================================

// 导出 Sign 相关类型
export type { Sign } from './sign';
export { SignType, SignLevel } from './sign';

/**
 * 签文等级枚举
 */
export type LuckyDrawLevel = '阳光普照' | '上上签' | '上签' | '特签' | '空签';

/**
 * 奖励信息数据结构
 */
export interface RewardInfo {
  /** 奖励标题（如 "Happy New Year! 查收奖励👇"） */
  title: string;
  
  /** 奖励描述（如 "PPT设计VIP通道 - 排队提前5名"） */
  description: string;
}

/**
 * 签文数据结构
 * 
 * @example 正常签文
 * {
 *   id: 1,
 *   number: "88",
 *   title: "皆大欢喜",
 *   level: "上签",
 *   isRetry: false,
 *   backgroundColor: "#128f57",
 *   underlineColor: "#128f57",
 *   description: "各抒其见，终归同向。\n共识落定，皆大欢喜。\n ",
 *   reward: {
 *     title: "Happy New Year! 查收奖励👇",
 *     description: "PPT设计VIP通道 - 排队提前5名"
 *   },
 *   illustration: "/assets/illustrations/jiedahuanxi.png"
 * }
 * 
 * @example 特殊签文（再抽一次）
 * {
 *   id: 11,
 *   number: "2026",
 *   title: "再试试手气",
 *   level: "特签",
 *   isRetry: true,
 *   subtitle: "新年快乐",
 *   retryText: "再试试手气",
 *   backgroundColor: "#128f57",
 *   underlineColor: "#128f57",
 *   description: "再试试手气，好运就在下一次。\n不要气馁，续加油！\n ",
 *   reward: {
 *     title: "很遗憾，这次没有中奖",
 *     description: "再试试手气吧！"
 *   },
 *   illustration: "/assets/illustrations/retry.png"
 * }
 */
export interface LuckyDrawResult {
  /** 唯一标识符 */
  id: number;
  
  /** 签号（如 "88", "2026"，不含 "No." 前缀） */
  number: string;
  
  /** 签文名称（如 "皆大欢喜"） */
  title: string;
  
  /** 签文等级 */
  level: LuckyDrawLevel;
  
  /** 是否为"再抽一次"特殊签（默认 false） */
  isRetry?: boolean;
  
  /** 副标题（仅特殊签使用，如 "新年快乐"） */
  subtitle?: string;
  
  /** 再试试手气文案（仅特殊签使用，垂直排列显示） */
  retryText?: string;
  
  // ===== Description 页面所需字段 =====
  
  /** 页面背景颜色（支持纯色或 CSS 渐变，如 "#128f57" 或 "radial-gradient(...)"） */
  backgroundColor?: string;
  
  /** 标题下方横线装饰颜色（十六进制，如 "#128f57"） */
  underlineColor?: string;
  
  /** 签文详细解释（支持 \n 换行，如 "各抒其见，终归同向。\n共识落定，皆大欢喜。\n "） */
  description?: string;
  
  /** 奖励信息 */
  reward?: RewardInfo;
  
  /** 插图 URL（相对路径或绝对路径） */
  illustration?: string;
  
  /** 序列号（如 "NO. S88ADFHRGB"，可选，如不提供则自动生成） */
  serialNumber?: string;
  
  /** 品牌文案（如 "Design Studios 共创工作坊"） */
  brandText?: string;
  
  /** 是否使用特殊布局（仅 ID: 11 "再试试手气" 空签使用，默认 false） */
  isSpecialLayout?: boolean;
  
  /** 签ID（来自抽签池，格式：S01-0001, S02-0123 等） */
  signId?: string;
}

// ===== Cursor 迁移注释 =====
// 
// 【后端 API 集成指南】
// 
// 1. API 端点设计建议：
//    GET /api/lucky-draw/draw      - 抽签（返回随机签文）
//    GET /api/lucky-draw/results   - 获取所有签文列表
//    GET /api/lucky-draw/result/:id - 获取指定签文详情
// 
// 2. 响应数据格式：
//    {
//      "success": true,
//      "data": {
//        "id": 1,
//        "number": "88",
//        "title": "皆大欢喜",
//        "level": "上签",
//        "isRetry": false
//      }
//    }
// 
// 3. 错误处理：
//    {
//      "success": false,
//      "error": {
//        "code": "DRAW_FAILED",
//        "message": "抽签失败，请稍后重试"
//      }
//    }
// 
// 4. 类型扩展建议：
//    - description: string (签文详细解释)
//    - interpretation: string (签文解读)
//    - createdAt: Date (创建时间)
//    - updatedAt: Date (更新时间)
// 
// 5. 数据验证：
//    - 确保 number 为字符串（支持 "88", "2026" 等格式）
//    - level 必须是枚举值之一
//    - isRetry 为 true 时，必须包含 subtitle 和 retryText
// 
// ===============================