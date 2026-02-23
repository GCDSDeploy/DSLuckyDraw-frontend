// ===== LuckyDraw_Result 页面组件 =====
// 功能：抽签结果展示页面（显示抽取的签）
// 设计基准：375px 移动端
// 迁移目标：Cursor 项目 @/pages/LuckyDrawResult.tsx
// 数据驱动：使用 LuckyDrawResultPage 组件（支持动态签文）
// =========================================

import { useNavigate, useParams } from 'react-router-dom';
import LuckyDrawResultPage from '../components/LuckyDrawResultPage';
import type { LuckyDrawResult } from '../types';

/**
 * LuckyDrawResult 页面
 * 
 * 功能：
 * - 375px 移动端基准容器
 * - 数据驱动的签文显示
 * - 从 URL 参数获取 resultId
 * - 支持"立即解签"按钮跳转到详情页
 * - 支持"返回主页"按钮
 * 
 * 数据驱动架构：
 * - /src/types/index.ts: TypeScript 类型定义
 * - /src/data/luckyDrawResults.ts: 11 个签文静态数据
 * - /src/components/FortuneSlip.tsx: 可复用签条组件
 * - /src/components/LuckyDrawResultPage.tsx: 页面布局组件
 */
export default function LuckyDrawResult() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  
  // 从 URL 参数获取签文 ID，默认为 1
  const resultId = id ? Number(id) : 1;

  // 点击"立即解签"按钮，跳转到签文详情页面
  const handleButtonClick = (result: LuckyDrawResult) => {
    navigate(`/description/${result.id}`);
  };

  return (
    // 全屏居中容器 - 确保在各种设备上正确显示
    <div className="w-full min-h-screen flex justify-center" style={{ background: 'linear-gradient(-180deg, #F95279 10%, #F55243 100%)' }}>
      <div
        className="relative w-full max-w-[430px] mx-auto h-screen overflow-hidden"
        data-page="lucky-draw-result"
      >
        <LuckyDrawResultPage
          resultId={resultId}
          onButtonClick={handleButtonClick}
        />
        
        {/* ===== TODO(cursor-migration) ===== */}
        {/* 
          数据驱动架构已完成：
          
          1. 类型定义 ✅
             文件：/src/types/index.ts
             - LuckyDrawLevel: 签文等级枚举
             - LuckyDrawResult: 签文数据结构
             - 包含特殊签（再抽一次）支持
          
          2. 静态数据 ✅
             文件：/src/data/luckyDrawResults.ts
             - 11 个签文数据（10 个正常签 + 1 个特殊签）
             - 工具函数：getLuckyDrawResultById()
             - 工具函数：getRandomLuckyDrawResult()
             - 工具函数：getLuckyDrawResultsByLevel()
             - 完整的 API 替换指南注释
          
          3. 签条组件 ✅
             文件：/src/components/FortuneSlip.tsx
             - 数据驱动的签条显示
             - 支持正常签和特殊签两种布局
             - 1:1 像素还原 Figma 设计
             - 完全可复用
          
          4. 页面组件 ✅
             文件：/src/components/LuckyDrawResultPage.tsx
             - 数据驱动的页面布局
             - 接收 resultId 或 result prop
             - 动态更新顶部描述文字
             - 事件处理和回调支持
          
          5. 页面容器 ✅
             文件：/src/pages/LuckyDrawResult.tsx（本文件）
             - 375px 移动端基准容器
             - Props 接口定义
             - 事件占位函数
          
          迁移到 Cursor 时需要：
          
          1. API 集成：
             a. 创建 API 服务层
                文件：@/services/luckyDrawService.ts
                ```tsx
                export async function fetchLuckyDrawResult(id: number) {
                  const res = await fetch(`/api/lucky-draw/result/${id}`);
                  return res.json();
                }
                
                export async function drawLuckyResult() {
                  const res = await fetch('/api/lucky-draw/draw', { method: 'POST' });
                  return res.json();
                }
                ```
             
             b. 替换静态数据导入
                旧代码：
                ```tsx
                import { getLuckyDrawResultById } from '@/data/luckyDrawResults';
                const result = getLuckyDrawResultById(id);
                ```
                
                新代码：
                ```tsx
                import { fetchLuckyDrawResult } from '@/services/luckyDrawService';
                const result = await fetchLuckyDrawResult(id);
                ```
          
          2. 路由集成：
             a. Next.js App Router
                ```tsx
                // app/result/[id]/page.tsx
                export default function ResultPage({ params }: { params: { id: string } }) {
                  const router = useRouter();
                  
                  return (
                    <LuckyDrawResult
                      resultId={Number(params.id)}
                      onButtonClick={(result) => {
                        router.push(`/description/${result.id}`);
                      }}
                    />
                  );
                }
                ```
             
             b. React Router
                ```tsx
                // routes/result.tsx
                function ResultRoute() {
                  const { id } = useParams();
                  const navigate = useNavigate();
                  
                  return (
                    <LuckyDrawResult
                      resultId={Number(id)}
                      onButtonClick={(result) => {
                        navigate(`/description/${result.id}`);
                      }}
                    />
                  );
                }
                ```
          
          3. 状态管理（可选）：
             a. 使用 React Query 缓存数据
                ```tsx
                import { useQuery } from '@tanstack/react-query';
                import { fetchLuckyDrawResult } from '@/services/luckyDrawService';
                
                function ResultRoute() {
                  const { id } = useParams();
                  const { data, isLoading, error } = useQuery({
                    queryKey: ['luckyDrawResult', id],
                    queryFn: () => fetchLuckyDrawResult(Number(id)),
                  });
                  
                  if (isLoading) return <LoadingPage />;
                  if (error) return <ErrorPage error={error} />;
                  
                  return <LuckyDrawResult result={data} onButtonClick={handleClick} />;
                }
                ```
             
             b. 使用 Zustand 全局状态
                ```tsx
                // store/luckyDrawStore.ts
                interface LuckyDrawStore {
                  currentResult: LuckyDrawResult | null;
                  setResult: (result: LuckyDrawResult) => void;
                }
                
                export const useLuckyDrawStore = create<LuckyDrawStore>((set) => ({
                  currentResult: null,
                  setResult: (result) => set({ currentResult: result }),
                }));
                ```
          
          4. 错误处理和加载状态：
             ```tsx
             function ResultRoute() {
               const { id } = useParams();
               const [result, setResult] = useState<LuckyDrawResult | null>(null);
               const [loading, setLoading] = useState(true);
               const [error, setError] = useState<string | null>(null);
               
               useEffect(() => {
                 fetchLuckyDrawResult(Number(id))
                   .then(setResult)
                   .catch(err => setError(err.message))
                   .finally(() => setLoading(false));
               }, [id]);
               
               if (loading) return <LoadingSpinner />;
               if (error) return <ErrorMessage message={error} />;
               if (!result) return <NotFoundPage />;
               
               return <LuckyDrawResult result={result} onButtonClick={handleClick} />;
             }
             ```
          
          5. 测试不同签文：
             - 正常签：<LuckyDrawResult resultId={1} /> （No.88 皆大欢喜）
             - 上上签：<LuckyDrawResult resultId={2} /> （No.26 扶摇直上）
             - 特签：<LuckyDrawResult resultId={9} /> （No.2026 天时地利）
             - 特殊签：<LuckyDrawResult resultId={11} /> （再试试手气）
          
          6. 组件优化建议：
             - 使用 React.memo 缓存子组件
             - 使用 useMemo 缓存计算结果
             - 使用 useCallback 稳定事件处理函数
             - 考虑使用虚拟滚动（如需要）
          
          7. 无障碍支持：
             - 添加 aria-label 描述签文内容
             - 添加键盘导航支持
             - 添加屏幕阅读器支持
        */}
        {/* ================================== */}
      </div>
    </div>
  );
}


// ===== Cursor 迁移架构总结 =====
// 
// 文件结构：
// ├── /src/types/index.ts                    ← 类型定义
// ├── /src/data/luckyDrawResults.ts          ← 静态数据（开发用）
// ├── /src/services/luckyDrawService.ts      ← API 服务层（迁移时创建）
// ├── /src/components/FortuneSlip.tsx        ← 签条组件
// ├── /src/components/LuckyDrawResultPage.tsx ← 页面布局组件
// └── /src/pages/LuckyDrawResult.tsx         ← 页面容器（本文件）
// 
// 数据流：
// API → Service → Component → UI
//  或
// Static Data → Component → UI（当前开发环境）
// 
// 优势：
// ✅ 完全数据驱动
// ✅ 组件可复用
// ✅ 类型安全
// ✅ 易于测试
// ✅ 易于迁移到后端 API
// ✅ 支持 11 种签文（包含特殊签）
// ✅ 1:1 像素还原 Figma 设计
// 
// ===================================