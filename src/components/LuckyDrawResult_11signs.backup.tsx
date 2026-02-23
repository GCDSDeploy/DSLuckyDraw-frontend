// ========== LuckyDraw Result 11 支幸运签回滚备份 ==========
// 本文件备份 FortuneSlip 组件中使用的原始 SVG 路径及结构，用于一键回滚新签条素材。
//
// 回滚步骤：
// 1. 将 FortuneSlip.tsx 恢复为使用本备份中的旧逻辑（或从 git 恢复 FortuneSlip.tsx）。
// 2. 将 USE_NEW_FORTUNE_SLIP_SVG 设为 false，或移除新 SVG 素材分支，恢复原 path 引用。
// 3. 执行 npm run build 或 npm run dev。
//
// 原始签条组件结构（FortuneSlip）：
// - 签条背景：svgPaths.p1c23ab70 (fill #F7E3BE, stroke #AF8446)
// - 签号区域装饰边框：svgPaths.p3fd10800
// - 签号区域背景圆形：svgPaths.p2fca3180 (fill #C1995F)
// - 等级/签号/签文名称：HTML 文本叠加
//
// 签文 ID 与名称对照（11 支）：
// id=1  皆大欢喜 上签    → FortuneSlip_jiedahuanxi.svg
// id=2  扶摇直上 上上签  → FortuneSlip_fuyaozhishang.svg
// id=3  神来之笔 上上签  → FortuneSlip_shenlaizhibi.svg
// id=4  灵光乍现 上签    → FortuneSlip_lingguangzhaxian.svg
// id=5  尽在掌握 上签    → FortuneSlip_jinzaihangwo.svg
// id=6  稳步推进 上签    → FortuneSlip_wenbutuijin.svg
// id=7  一稿过   上签    → FortuneSlip_yigaoguo.svg
// id=8  拍案叫绝 上签    → FortuneSlip_paianjiaojue.svg
// id=9  天时地利 特签    → FortuneSlip_tianshidili.svg
// id=10 大展鸿图 特签    → FortuneSlip_dazhanhongtu.svg
// id=11 新年快乐 空签    → FortuneSlip_xinniankuaile.svg
//
// 原始 SVG 路径引用（来自 ../imports/svg-38h7dm4h63）：
// - p1c23ab70: 签条外轮廓
// - p3fd10800: 签号区域装饰边框
// - p2fca3180: 签号区域背景圆
// ============================================================

export const BACKUP_SVG_PATH_IDS = {
  slipBackground: 'p1c23ab70',
  numberBorder: 'p3fd10800',
  numberCircle: 'p2fca3180',
} as const;
