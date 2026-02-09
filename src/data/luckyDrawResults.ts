import type { LuckyDrawResult } from '../types';
// 使用新的命名规范插图（优先 SVG 格式，尺寸 300×255，新年快乐为 340×286）
import imgDescriptionIllustrationJiedahuanxi from "@/assets/Illustration/SVG/Description_Illustration_皆大欢喜.svg";
import imgDescriptionIllustrationFuyaozhishang from "@/assets/Illustration/SVG/Description_Illustration_扶摇直上.svg";
import imgDescriptionIllustrationDazhanhongtu from "@/assets/Illustration/SVG/Description_Illustration_大展鸿图.svg";
import imgDescriptionIllustrationJinzaihangwo from "@/assets/Illustration/SVG/Description_Illustration_尽在掌握.svg";
import imgDescriptionIllustrationShenlaizhibi from "@/assets/Illustration/SVG/Description_Illustration_神来之笔.svg";
import imgDescriptionIllustrationLingguangzhaxian from "@/assets/Illustration/SVG/Description_Illustration_灵光乍现.svg";
import imgDescriptionIllustrationWenbutuijin from "@/assets/Illustration/SVG/Description_Illustration_稳步推进.svg";
import imgDescriptionIllustrationYigaoguo from "@/assets/Illustration/SVG/Description_Illustration_一稿过.svg";
import imgDescriptionIllustrationPaianjiaojue from "@/assets/Illustration/SVG/Description_Illustration_拍案叫绝.svg";
import imgDescriptionIllustrationTianshidili from "@/assets/Illustration/SVG/Description_Illustration_天时地利.svg";
import imgDescriptionIllustrationXinniankuaile from "@/assets/Illustration/SVG/Description Illustration_新年快乐.svg";

/**
 * 签文静态数据集合（共 11 个签文）
 * 
 * 数据来源：Figma 设计稿 1:1 还原
 * 
 * 签文类型：
 * - 正常签文（1-10）：包含签号、签文名称、���级、描述、奖励、插图等完整信息
 * - 特殊签文（11）：再抽一次安慰奖，包含副标和主文案
 * 
 * 数据驱动字段：
 * - backgroundColor: 页面背景颜色（支持纯色或 CSS 渐变）
 * - underlineColor: 标题下方横线装饰颜色（十六进制）
 * - description: 签文详细解释（支持 \n 换行）
 * - reward: 奖励信息（标题 + 描述）
 * - illustration: 插图 URL（使用 figma:asset 导入）
 * - serialNumber: 序列号（可选，如不提供则自动生成）
 */
export const luckyDrawResults: LuckyDrawResult[] = [
  // ===== 正常签文（1-10）=====
  {
    id: 1,
    number: "88",
    title: "皆大欢喜",
    level: "上签",
    isRetry: false,
    // Description 页面数据
    backgroundColor: "radial-gradient(103.42% 104.98% at 31.55% -3.35%, #F947B9 0%, #F970BF 44%, #FB7633 100%)",
    underlineColor: "#128f57",
    description: "各抒其见，终归同向。\n共识落定，皆大欢喜。\n ",
    reward: {
      title: "Happy New Year! 查收奖励👇",
      description: "\"PPT设计VIP通道 - 排队提前5名\""
    },
    illustration: imgDescriptionIllustrationJiedahuanxi,
  },
  {
    id: 2,
    number: "26",
    title: "扶摇直上",
    level: "上上签",
    isRetry: false,
    // Description 页面数据（✅ 从 Figma 设计稿提取）
    backgroundColor: "radial-gradient(126.59% 130.38% at 25.83% -9.21%, #F947B9 0%, #F970BF 44.23%, #FB7633 100%)",
    underlineColor: "#ff9a47",
    description: "新年问事，\n多半求一个\"明白\"。 \n事一旦看懂，路自然顺了。 ",
    reward: {
      title: "Happy New Year! 查收奖励👇",
      description: "\"PPT设计VIP通道 - 无排队直通车\""
    },
    illustration: imgDescriptionIllustrationFuyaozhishang,
    brandText: "Design Studios 创意视频，加速战略阐述",
  },
  {
    id: 3,
    number: "01",
    title: "神来之笔",
    level: "上上签",
    isRetry: false,
    // Description 页面数据（✅ 从 Figma 设计稿提取）
    backgroundColor: "linear-gradient(180deg, #6399F3 0%, #9050E4 50%, #ED67D8 100%)",
    underlineColor: "#ff9a47",
    description: "关键之处，\n往往只差一笔。\n一笔到位，万事顺行。",
    reward: {
      title: "Happy New Year! 查收奖励👇",
      description: "\"奶茶一杯 - 30元以下\""
    },
    illustration: imgDescriptionIllustrationShenlaizhibi,
    brandText: "Design Studios 绘制未来",
  },
  {
    id: 4,
    number: "88",
    title: "灵光乍现",
    level: "上签",
    isRetry: false,
    // Description 页面数据（✅ 从 Figma 设计稿提取）
    backgroundColor: "linear-gradient(-179.577deg, #36ED8E 0%, #26B4D0 45%, #2691FE 100%)",
    underlineColor: "#cc2f3a",
    description: "久思未破，灵光乍现。\n一点火花，照亮全局。\n ",
    reward: {
      title: "Happy New Year! 查收奖励👇",
      description: "\"PPT设计VIP通道 - 排队提前8名\""
    },
    illustration: imgDescriptionIllustrationLingguangzhaxian,
    brandText: "Design Studios 视觉概念",
  },
  {
    id: 5,
    number: "77",
    title: "尽在掌握",
    level: "上签",
    isRetry: false,
    // Description 页面数据（✅ 从 Figma 设计稿提取）
    backgroundColor: "linear-gradient(180deg, #F79B73 0%, #F341A5 41%, #FAE3DA 100%)",
    underlineColor: "#cc2f3a",
    description: "当数据被看懂， \n判断自然尽在掌握。 \n ",
    reward: {
      title: "Happy New Year! 查收奖励👇",
      description: "\"PPT设计VIP通道 - 排队提前3名\""
    },
    illustration: imgDescriptionIllustrationJinzaihangwo,
    brandText: "Design Studios 数据可视化能力",
  },
  {
    id: 6,
    number: "77",
    title: "稳步推进",
    level: "上签",
    isRetry: false,
    // Description 页面数据（✅ 从 Figma 设计稿提取）
    backgroundColor: "radial-gradient(152.36% 199.42% at -31.68% -16.84%, #EFA3E1 0%, #1C92F9 70%, #36ED8E 88%)",
    underlineColor: "#5282ea",
    description: "层次分明，路径清晰。 \n表达所至，稳步推进。 \n ",
    reward: {
      title: "Happy New Year! 查收奖励👇",
      description: "\"PPT设计VIP通道 - 排队提前1名\""
    },
    illustration: imgDescriptionIllustrationWenbutuijin,
    brandText: "Design Studios 视觉表达能力",
  },
  {
    id: 7,
    number: "66",
    title: "一稿过",
    level: "上签",
    isRetry: false,
    // Description 页面数据（✅ 从 Figma 设计稿提取）
    backgroundColor: "radial-gradient(102.54% 115.58% at 30.53% -1.88%, #F947B9 0%, #F970BF 44%, #FB7633 100%)",
    underlineColor: "#f7b635",
    description: "方向清晰，创意对位。 \n第一版，便是一稿过。 \n ",
    reward: {
      title: "Happy New Year! 查收奖励👇",
      description: "\"战略达人 - Digital 免费咨询1次\""
    },
    illustration: imgDescriptionIllustrationYigaoguo,
    brandText: "Design Studios 市场营销创意",
  },
  {
    id: 8,
    number: "66",
    title: "拍案叫绝",
    level: "上签",
    isRetry: false,
    // Description 页面数据（✅ 从 Figma 设计稿提取）
    backgroundColor: "linear-gradient(180deg, #F79B73 0%, #F341A5 41%, #FAE3DA 100%)",
    underlineColor: "#128f57",
    description: "当一句话说中人心， \n回应往往是拍案叫绝。\n ",
    reward: {
      title: "Happy New Year! 查收奖励👇",
      description: "\"战略达人 - Branding 免费咨询1次\""
    },
    illustration: imgDescriptionIllustrationPaianjiaojue,
    brandText: "Design Studios 品牌文案",
  },
  {
    id: 9,
    number: "2026",
    title: "天时地利",
    level: "特签",
    isRetry: false,
    // Description 页面数据（✅ 从 Figma 设计稿提取）
    backgroundColor: "radial-gradient(324.31% 225.47% at -44.91% -11.68%, #EFA3E1 0%, #1C92F9 70%, #36ED8E 88%)",
    underlineColor: "#f7b635",
    description: "在对的时点， \n用对的方式验证想法。\n ",
    reward: {
      title: "Happy New Year! 查收奖励👇",
      description: "\"Zoom 会议背景\""
    },
    illustration: imgDescriptionIllustrationTianshidili,
    brandText: "Design Studios 原型设计",
  },
  {
    id: 10,
    number: "2026",
    title: "大展鸿图",
    level: "特签",
    isRetry: false,
    // Description 页面数据（✅ 从 Figma 设计稿提取）
    backgroundColor: "linear-gradient(180deg, #6399F3 0%, #9050E4 50%, #ED67D8 100%)",
    underlineColor: "#5282ea",
    description: "不是一时之声，\n而是一盘之局 。\n内容成势，大展鸿图。",
    reward: {
      title: "Happy New Year! 查收奖励👇",
      description: "\"个人专属表情包1个\""
    },
    illustration: imgDescriptionIllustrationDazhanhongtu,
    brandText: "Design Studios 内容策略",
  },
  
  // ===== 特殊签文（11）：空签祝福页 =====
  {
    id: 11,
    number: "2026",
    title: "新年快乐", // 主标题
    level: "空签",
    isRetry: true,
    subtitle: "新年快乐", // 副标题（与标题相同）
    retryText: "再试试手气", // 按钮文案
    // Description 页面数据（✅ 从 Figma 设计稿提取）
    backgroundColor: "linear-gradient(180deg, #F79B73 0%, #F341A5 41%, #FAE3DA 100%)",
    underlineColor: "#f0f0f0",
    description: "所行皆明，所向皆顺。 \n新年快乐！ \n ",
    reward: {
      title: "Happy New Year!",
      description: "" // 空签没有具体奖励描述
    },
    illustration: imgDescriptionIllustrationXinniankuaile,
    brandText: "Design Studios 祝福",
    isSpecialLayout: true, // 特殊布局标记
  },
];

/**
 * 根据 ID 获取签文数据
 */
export function getLuckyDrawResultById(id: number): LuckyDrawResult | undefined {
  return luckyDrawResults.find(result => result.id === id);
}

/**
 * 获取随机签文（模拟抽签）
 */
export function getRandomLuckyDrawResult(): LuckyDrawResult {
  const randomIndex = Math.floor(Math.random() * luckyDrawResults.length);
  return luckyDrawResults[randomIndex];
}

/**
 * 根据等级筛选签文
 */
export function getLuckyDrawResultsByLevel(level: string): LuckyDrawResult[] {
  return luckyDrawResults.filter(result => result.level === level);
}

// ===== Cursor 迁移注释 =====
// 
// 【后端 API 替换指南】
// 
// 步骤 1：创建 API 服务层
// -------------------------
// 文件路径：@/services/luckyDrawService.ts
// 
// import type { LuckyDrawResult } from '@/types';
// 
// export async function fetchLuckyDrawResults(): Promise<LuckyDrawResult[]> {
//   const response = await fetch('/api/lucky-draw/results');
//   const data = await response.json();
//   return data.results;
// }
// 
// export async function drawLuckyResult(): Promise<LuckyDrawResult> {
//   const response = await fetch('/api/lucky-draw/draw', { method: 'POST' });
//   const data = await response.json();
//   return data.result;
// }
// 
// export async function getLuckyDrawResultById(id: number): Promise<LuckyDrawResult> {
//   const response = await fetch(`/api/lucky-draw/result/${id}`);
//   const data = await response.json();
//   return data.result;
// }
// 
// 步骤 2：替换静态数据引用
// -------------------------
// 将所有从 @/data/luckyDrawResults 的导入
// 替换为从 @/services/luckyDrawService 的 API 调用
// 
// 示例：
// // 旧代码（静态数据）
// import { luckyDrawResults } from '@/data/luckyDrawResults';
// const results = luckyDrawResults;
// 
// // 新代码（API 调用）
// import { fetchLuckyDrawResults } from '@/services/luckyDrawService';
// const results = await fetchLuckyDrawResults();
// 
// 步骤 3：添加加载状态和错误处理
// ---------------------------------
// const [results, setResults] = useState<LuckyDrawResult[]>([]);
// const [loading, setLoading] = useState(true);
// const [error, setError] = useState<string | null>(null);
// 
// useEffect(() => {
//   fetchLuckyDrawResults()
//     .then(data => setResults(data))
//     .catch(err => setError(err.message))
//     .finally(() => setLoading(false));
// }, []);
// 
// 步骤 4：环境变量配置
// ---------------------
// .env.local:
// NEXT_PUBLIC_API_URL=https://api.example.com
// 
// 步骤 5：数据缓存（可选）
// ------------------------
// 考虑使用 React Query、SWR 或 Zustand 进行数据缓存和状态管理
// 
// ===============================