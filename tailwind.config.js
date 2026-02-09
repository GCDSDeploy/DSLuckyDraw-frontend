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
      },
      animation: {
        // 按钮抖动动画（持续 0.6 秒）
        'button-shake': 'button-shake 0.6s ease-in-out',
        // 签筒摇动动画（持续 0.8 秒）
        'bucket-sway': 'bucket-sway 0.8s ease-in-out',
      },
    },
  },
}
