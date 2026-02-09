// ===== LuckyDraw_Default 页面组件 =====
// 功能：抽签默认状态页面（首页展示）
// 设计基准：375px 移动端
// 迁移目标：Cursor 项目 @/pages/LuckyDrawDefault.tsx
// =========================================

import { useNavigate } from 'react-router-dom';
import LuckyDrawDefaultComponent from '../imports/LuckyDrawDefault';

// ===== 迁移提示 =====
// 本文件直接使用 Figma 导出组件
// Cursor 迁移时需要：
// 1. 将所有 SVG 内联代码提取到独立 .svg 文件
// 2. 更新所有资源路径为 @ 别名
// 3. 检查字体文件引用路径
// ====================

export default function LuckyDrawDefault() {
  const navigate = useNavigate();

  // 点击"摇一摇"按钮，跳转到摇动动画页面
  const handleShake = () => {
    navigate('/draw/shake');
  };


  return (
    // 全屏居中容器 - 确保在各种设备上正确显示
    <div className="w-full min-h-screen flex justify-center bg-[#9f1518]">
      {/* ===== 响应式移动端容器 ===== */}
      {/* 
        - w-full: 宽度自适应
        - max-w-[430px]: 最大宽度限制（iPhone 16 Pro Max）
        - mx-auto: 水平居中
        - overflow-hidden: 防止内容溢出
        - relative: 为内部绝对定位元素提供定位上下文
      */}
      <div 
        className="relative w-full max-w-[430px] mx-auto overflow-hidden"
        data-page="lucky-draw-default"
      >
        {/* Figma 生成的 LuckyDrawDefault 组件 - 传递事件处理函数 */}
        <LuckyDrawDefaultComponent onShakeClick={handleShake} />
        
        {/* ===== TODO(cursor-migration) ===== */}
        {/* 
          事件绑定已完成：
          1. "摇一摇" 按钮（ShakeCta2 组件）
             - data-action="shake-to-draw"
             - onClick={handleShake} ✅
          
          迁移时需要：
          1. 确认事件处理逻辑正确
          2. 实现跳转到 LuckyDrawShake 页面
        */}
        {/* ================================== */}
      </div>
    </div>
  );
}