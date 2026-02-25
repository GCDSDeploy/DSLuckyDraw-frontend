// ===== GiftPool 奖池一览页面 =====
// 设计基准：Figma 像素还原，移动端优先，响应式多端适配
// 路由：/gift-pool
// =============================================

import { useNavigate } from 'react-router-dom';
import imgCroodsArrowDown from '@/assets/f91f9545390252a6611c7f7d585ca3efe3a8716a.png';
import imgLandingBackgroundLayerGreen from '@/assets/09245eba98b5559b1bc319006b1f48d78893cfe9.png';

/** 奖池单项：签文 + 奖励（静态数据，便于后续接 API） */
export interface GiftPoolItem {
  id: number;
  signText: string;
  reward: string;
}

/** 奖池静态数据（与 Figma 设计稿一致，共 10 条） */
const GIFT_POOL_LIST: GiftPoolItem[] = [
  { id: 1, signText: '扶摇直上', reward: 'PPT设计VIP通道-无排队直通车' },
  { id: 2, signText: '神来之笔', reward: '奶茶一杯-30元以下' },
  { id: 3, signText: '灵光乍现', reward: 'PPT设计VIP通道-排队提前8名' },
  { id: 4, signText: '皆大欢喜', reward: 'PPT设计VIP通道-排队提前5名' },
  { id: 5, signText: '尽在掌握', reward: 'PPT设计VIP通道-排队提前3名' },
  { id: 6, signText: '稳步推进', reward: 'PPT设计VIP通道-排队提前1名' },
  { id: 7, signText: '一稿过', reward: '战略达人 - Digital 免费咨询' },
  { id: 8, signText: '拍案叫绝', reward: '战略达人 - Branding 免费咨询' },
  { id: 9, signText: '天时地利', reward: 'Zoom 背景' },
  { id: 10, signText: '大展鸿图', reward: '新年减免-价值 $80 设计服务' },
];

/** 与 Description 页一致的返回按钮布局（安全区 + 位置 + 图标） */
function GiftPoolBack({ onClick }: { onClick?: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      data-action="return"
      data-name="GiftPool_Back"
      className="absolute z-20 left-4 min-h-[44px] min-w-[96px] cursor-pointer flex items-center gap-1 text-white font-zihun text-lg"
      style={{ top: 'calc(15px + env(safe-area-inset-top, 0px))' }}
      aria-label="返回"
    >
      <span className="flex-none h-[18px] w-[27px] flex items-center justify-center">
        <img
          alt=""
          className="max-w-none object-contain w-full h-full rotate-90"
          src={imgCroodsArrowDown}
          style={{ filter: 'brightness(0) invert(1)' }}
        />
      </span>
      <span className="leading-normal">返回</span>
    </button>
  );
}

export default function GiftPool() {
  const navigate = useNavigate();
  const backgroundStyle = 'linear-gradient(-180deg, #F95279 10%, #F55243 100%)';

  return (
    <div
      className="w-full min-h-screen flex justify-center"
      style={{ background: backgroundStyle }}
      data-page="gift-pool"
    >
      <div className="relative w-full max-w-[430px] mx-auto min-h-screen overflow-x-hidden overflow-y-auto px-4 pt-safe pb-safe">
        {/* 背景图案层：与 Description 页一致 */}
        <div className="absolute inset-0 w-full h-full pointer-events-none" data-name="GiftPool_Background_Layer" aria-hidden>
          <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgLandingBackgroundLayerGreen} />
        </div>
        {/* 返回按钮：与 Description 页一致，点击返回上一页 */}
        <GiftPoolBack onClick={() => navigate(-1)} />

        {/* 主内容区：响应式 container（z-10 保证在背景图案之上） */}
        <div className="relative z-10 flex flex-col pt-14 sm:pt-16 md:pt-20 lg:pt-24">
          {/* 页面标题 */}
          <h1 className="text-white font-bold text-center text-xl sm:text-2xl md:text-3xl mb-6 sm:mb-8 font-zihun">
            奖池一览
          </h1>

          {/* 表头：签文 | 奖励（签文列固定宽度，与最长 4 字签文一致） */}
          <div className="grid grid-cols-[4.5rem_1fr] gap-x-4 gap-y-1 sm:grid-cols-[5rem_1fr] sm:gap-x-6 md:gap-x-8 items-baseline mb-3 sm:mb-4">
            <span className="text-white font-normal text-base sm:text-lg md:text-xl font-pingfang">签文</span>
            <span className="text-white font-normal text-base sm:text-lg md:text-xl font-pingfang">奖励</span>
          </div>

          {/* 奖励列表：每行 签文 + 奖励 */}
          <ul className="flex flex-col gap-3 sm:gap-4" role="list">
            {GIFT_POOL_LIST.map((item) => (
              <li
                key={item.id}
                className="grid grid-cols-[4.5rem_1fr] gap-x-4 gap-y-0 sm:grid-cols-[5rem_1fr] sm:gap-x-6 md:gap-x-8 items-start"
              >
                <span className="text-white text-sm sm:text-base md:text-lg font-pingfang font-semibold w-[4.5rem] sm:w-20 shrink-0">
                  {item.signText}
                </span>
                <span className="text-white text-sm sm:text-base md:text-lg font-pingfang font-semibold break-words">
                  {item.reward}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
