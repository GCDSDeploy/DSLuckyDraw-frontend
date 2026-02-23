/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      fontFamily: {
        // 字魂151号-联盟综艺体（用于标题、按钮）
        zihun: ['ZiHun151', 'sans-serif'],
        // No.77-上手仓书法体（用于装饰性文字）
        shangshou: ['ShangShouCangShu', 'serif'],
      },
      keyframes: {
        // 摇一摇按钮抖动动画（旋转 + 缩放）
        'button-shake': {
          '0%, 100%': { transform: 'rotate(0deg) scale(1)' },
          '10%': { transform: 'rotate(-5deg) scale(1.05)' },
          '20%': { transform: 'rotate(5deg) scale(0.95)' },
          '30%': { transform: 'rotate(-3deg) scale(1.02)' },
          '40%': { transform: 'rotate(3deg) scale(0.98)' },
          '50%': { transform: 'rotate(-2deg) scale(1.01)' },
          '60%': { transform: 'rotate(2deg) scale(0.99)' },
          '70%': { transform: 'rotate(-1deg) scale(1)' },
          '80%': { transform: 'rotate(1deg) scale(1)' },
          '90%': { transform: 'rotate(0deg) scale(1)' },
        },
        // 签筒容器左右摇动动画
        'bucket-sway': {
          '0%, 100%': { transform: 'translateX(0) rotate(0deg)' },
          '10%': { transform: 'translateX(-4px) rotate(-1deg)' },
          '20%': { transform: 'translateX(4px) rotate(1deg)' },
          '30%': { transform: 'translateX(-3px) rotate(-0.8deg)' },
          '40%': { transform: 'translateX(3px) rotate(0.8deg)' },
          '50%': { transform: 'translateX(-2px) rotate(-0.5deg)' },
          '60%': { transform: 'translateX(2px) rotate(0.5deg)' },
          '70%': { transform: 'translateX(-1px) rotate(-0.3deg)' },
          '80%': { transform: 'translateX(1px) rotate(0.3deg)' },
          '90%': { transform: 'translateX(0) rotate(0deg)' },
        },
        // Arrow Indicator 微交互：左右微摆 + 上下浮动，引导摇一摇（单位 px 必须写明）
        'arrow-float': {
          '0%, 100%': { transform: 'translate(0px, 0px)' },
          '25%': { transform: 'translate(10px, -4px)' },
          '50%': { transform: 'translate(-10px, 4px)' },
          '75%': { transform: 'translate(10px, -4px)' },
        },
        // Shake CTA 内 Icon 抖一抖微动效（水平微抖 + 轻微旋转）
        'icon-shake': {
          '0%, 100%': { transform: 'translateX(0) rotate(0deg)' },
          '25%': { transform: 'translateX(-3px) rotate(-4deg)' },
          '50%': { transform: 'translateX(3px) rotate(4deg)' },
          '75%': { transform: 'translateX(-2px) rotate(-2deg)' },
        },
        // 星星闪烁 Bling Bling（仅缩放，无位移无旋转，幅度 1–1.35）
        'star-twinkle': {
          '0%, 100%': { transform: 'scale(1)' },
          '25%, 75%': { transform: 'scale(1.25)' },
          '50%': { transform: 'scale(1.35)' },
        },
        // 星星 4 个 Vector 精确缩放（仅 scale，无 translate/rotate）
        'star-twinkle-scale-only': {
          '0%, 100%': { transform: 'scale(1)' },
          '25%, 75%': { transform: 'scale(1.25)' },
          '50%': { transform: 'scale(1.3)' },
        },
      },
      animation: {
        // 按钮抖动动画（持续 0.6 秒）
        'button-shake': 'button-shake 0.6s ease-in-out',
        // 签筒摇动动画（持续 0.8 秒）
        'bucket-sway': 'bucket-sway 0.8s ease-in-out',
        // Arrow Indicator 浮动（约 0.7s 一周期，无限循环）
        'arrow-float': 'arrow-float 0.7s ease-in-out infinite',
        // Shake CTA Icon 抖一抖（无限循环，约 0.8s 一周期）
        'icon-shake': 'icon-shake 0.8s ease-in-out infinite',
        // 星星闪烁（1.2s 一周期，仅缩放，无限循环，配合 style.animationDelay 使用）
        'star-twinkle': 'star-twinkle 1.2s ease-in-out infinite',
        // 星星 4 个 Vector 精确缩放（应用于 g#LuckyDraw_Stars_svg 内各 path）
        'star-twinkle-scale-only': 'star-twinkle-scale-only 1.2s ease-in-out infinite',
      },
    },
  },
}
