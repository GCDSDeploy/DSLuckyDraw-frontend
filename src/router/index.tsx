/**
 * 路由配置
 * 
 * @description
 * 使用 React Router v6 管理页面路由
 * 支持微信 WebView 环境
 * 
 * 路由结构：
 * - / : 首页（Landing Page）
 * - /draw : 抽签页面（默认状态）
 * - /draw/shake : 抽签摇动动画页面
 * - /result/:id : 抽签结果页面
 * - /description/:id : 签文详情页面
 */

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import LuckyDrawDefault from '../pages/LuckyDrawDefault';
import LuckyDrawShake from '../pages/LuckyDrawShake';
import LuckyDrawResult from '../pages/LuckyDrawResult';
import LuckyDrawDescription from '../pages/LuckyDrawDescription';

/**
 * 路由配置
 * 
 * 注意：微信 WebView 使用 HashRouter 更稳定
 * 如需切换，将 createBrowserRouter 改为 createHashRouter
 */
export const router = createBrowserRouter(
  [
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/draw',
    element: <LuckyDrawDefault />,
  },
  {
    path: '/draw/shake',
    element: <LuckyDrawShake />,
  },
  {
    path: '/result/:id',
    element: <LuckyDrawResult />,
  },
  {
    path: '/description/:id',
    element: <LuckyDrawDescription />,
  },
  // 404 页面（可选）
  {
    path: '*',
    element: (
      <div className="w-full min-h-screen flex items-center justify-center" style={{ background: 'linear-gradient(-180deg, #F95279 10%, #F55243 100%)' }}>
        <div className="text-white text-center">
          <h1 className="text-2xl mb-4">页面未找到</h1>
          <a href="/" className="underline">返回首页</a>
        </div>
      </div>
    ),
  },
  ],
  {
    // React Router v7 未来标志
    // 提前启用 v7 的行为，避免未来升级时的破坏性变更
    future: {
      v7_startTransition: true, // 使用 React.startTransition 包装状态更新
      v7_relativeSplatPath: true, // 改进相对路径处理
    },
  }
);

/**
 * 路由提供者组件
 * 
 * @usage
 * 在 App.tsx 中使用：
 * import { Router } from './router';
 * export default function App() {
 *   return <Router />;
 * }
 */
export function Router() {
  return <RouterProvider router={router} />;
}

/**
 * 微信 WebView 兼容性说明
 * 
 * 如果遇到路由问题，可以切换到 HashRouter：
 * 
 * import { createHashRouter } from 'react-router-dom';
 * export const router = createHashRouter([...]);
 * 
 * HashRouter 的优势：
 * - 兼容性更好（特别是旧版微信）
 * - 不需要服务器配置
 * - URL 格式：/#/draw 而不是 /draw
 * 
 * BrowserRouter 的优势：
 * - URL 更简洁（/draw）
 * - 需要服务器配置支持（所有路由返回 index.html）
 */
