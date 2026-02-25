/**
 * 应用主入口组件
 * 
 * @description
 * 使用 React Router 管理页面路由
 * 所有页面跳转通过路由系统处理
 * 
 * 路由配置：/src/router/index.tsx
 */

import { Toaster } from 'sonner';
import { Router } from '../router';

export default function App() {
  return (
    <>
      <Router />
      <Toaster position="top-center" richColors closeButton />
    </>
  );
}