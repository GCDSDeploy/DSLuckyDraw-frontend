// ===== TODO(cursor-migration) =====
// 此文件导入 Figma 自动生成的 Landing 组件
// 迁移到 Cursor 后需要：
// 1. 处理所有 figma:asset 图片资源（详见 Landing.tsx 顶部注释）
// 2. 放置字体文件到 /assets/fonts/
// 3. 评估 SVG 组件是否需要进一步提取为 /components/icons/
// 4. 考虑将可复用组件移动到 /components/
// ==================================

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Landing from '../imports/Landing';

const IS_WECHAT_WEBVIEW = typeof navigator !== 'undefined' && /MicroMessenger/i.test(navigator.userAgent);
const LANDING_RETURN_KEY = 'ds_landing_return';

/**
 * Landing 页面组件
 *
 * @description
 * 首页展示页面，包含：
 * - 背景装饰层
 * - 页面标题和描述
 * - "试试手气"CTA 按钮
 * - 底部 Logo 和规则链接
 * - 手势动画提示
 *
 * 微信 WebView：从下一页返回时底部导航栏约 85px 会遮挡 CTA，此时启用 isReturnLayout 上移布局。
 */
export default function LandingPage() {
  const navigate = useNavigate();
  const [isReturnLayout, setIsReturnLayout] = useState(false);

  useEffect(() => {
    if (!IS_WECHAT_WEBVIEW) return;
    if (sessionStorage.getItem(LANDING_RETURN_KEY) === '1') {
      setIsReturnLayout(true);
      sessionStorage.removeItem(LANDING_RETURN_KEY);
    }
  }, []);

  // 点击"试试手气"按钮，跳转到抽签页面
  const handleStartClick = () => {
    if (IS_WECHAT_WEBVIEW) sessionStorage.setItem(LANDING_RETURN_KEY, '1');
    navigate('/draw');
  };

  // 点击"活动规则"链接，跳转到奖池一览页
  const handleRulesClick = () => {
    navigate('/gift-pool');
  };
  return (
    // 全屏居中容器 - 确保在各种设备上正确显示
    <div className="w-full min-h-screen flex justify-center" style={{ background: 'linear-gradient(180deg, #E73535 0%, #FA4776 100%)' }}>
      {/* ===== 响应式移动端容器 ===== */}
      {/* 
        - w-full: 宽度自适应
        - max-w-[430px]: 最大宽度限制（iPhone 16 Pro Max）
        - mx-auto: 水平居中
        - overflow-hidden: 防止内容溢出
        - relative: 为内部绝对定位元素提供定位上下文
      */}
      <div
        className="relative w-full max-w-[430px] mx-auto overflow-hidden min-h-dvh min-h-screen box-border"
        style={{
          paddingBottom: IS_WECHAT_WEBVIEW
            ? 'max(50px, env(safe-area-inset-bottom, 0px))'
            : 'max(15px, env(safe-area-inset-bottom, 0px))',
        }}
      >
        {/* Figma 生成的 Landing 组件 - 传递事件处理函数 */}
        <Landing 
          onStartClick={handleStartClick}
          onRulesClick={handleRulesClick}
          isReturnLayout={isReturnLayout}
        />
        
        {/* ===== TODO(cursor-migration) ===== */}
        {/* 
          事件绑定已完成：
          1. "试试手气" 按钮（LandingTryCta 组件）
             - data-action="start"
             - onClick={onStartClick} ✅
          2. "活动规则" 链接（CtaRules 组件）
             - data-action="rules"
             - onClick={onRulesClick} (待实现)
          
          迁移时需要：
          1. 确认事件处理逻辑正确
          2. 添加页面跳转动画（可选）
        */}
        {/* ================================== */}
      </div>
    </div>
  );
}