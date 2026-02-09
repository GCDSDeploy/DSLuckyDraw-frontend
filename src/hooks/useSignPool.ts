import { useState, useEffect, useCallback } from 'react';
import type { Sign } from '../types/sign';
import { SignType, SignLevel } from '../types/sign';

/**
 * 抽签池配置
 */
const TOTAL_SIGNS = 10000;
const TOP_TOP_COUNT = 40;
const TOP_COUNT = 200;
const SPECIAL_COUNT = 150;
const EMPTY_COUNT = TOTAL_SIGNS - TOP_TOP_COUNT - TOP_COUNT - SPECIAL_COUNT; // 9610

/**
 * localStorage 键名
 */
const STORAGE_KEY_SIGN_POOL = 'luckyDraw_signPool';
const STORAGE_KEY_DRAWN_SIGNS = 'luckyDraw_drawnSigns';

/**
 * 生成单个签
 */
function generateSign(level: number, type: string, index: number): Sign {
  const levelStr = level.toString().padStart(2, '0');
  const indexStr = index.toString().padStart(4, '0');
  const id = `S${levelStr}-${indexStr}`;
  
  let rewardCode = 'R00';
  if (level === SignLevel.TOP_TOP) {
    rewardCode = 'R01';
  } else if (level === SignLevel.TOP) {
    rewardCode = 'R02';
  } else if (level === SignLevel.SPECIAL) {
    rewardCode = 'R03';
  }
  
  return {
    id,
    level,
    type,
    rewardCode,
    isEmpty: level === SignLevel.EMPTY,
  };
}

/**
 * 生成所有签的池
 */
function generateSignPool(): Sign[] {
  const pool: Sign[] = [];
  
  // 生成 Top-Top 签（S01-0001 到 S01-0040）
  for (let i = 1; i <= TOP_TOP_COUNT; i++) {
    pool.push(generateSign(SignLevel.TOP_TOP, SignType.TOP_TOP, i));
  }
  
  // 生成 Top 签（S02-0001 到 S02-0200）
  for (let i = 1; i <= TOP_COUNT; i++) {
    pool.push(generateSign(SignLevel.TOP, SignType.TOP, i));
  }
  
  // 生成 Special 签（S03-0001 到 S03-0150）
  for (let i = 1; i <= SPECIAL_COUNT; i++) {
    pool.push(generateSign(SignLevel.SPECIAL, SignType.SPECIAL, i));
  }
  
  // 生成 Empty 签（S00-0001 到 S00-9610）
  for (let i = 1; i <= EMPTY_COUNT; i++) {
    pool.push(generateSign(SignLevel.EMPTY, SignType.EMPTY, i));
  }
  
  return pool;
}

/**
 * Fisher-Yates 洗牌算法
 */
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

/**
 * 从 localStorage 加载数据
 */
function loadFromStorage<T>(key: string): T | null {
  try {
    const item = localStorage.getItem(key);
    if (item) {
      return JSON.parse(item) as T;
    }
  } catch (error) {
    console.error(`Failed to load ${key} from localStorage:`, error);
  }
  return null;
}

/**
 * 保存到 localStorage
 */
function saveToStorage<T>(key: string, data: T): void {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error(`Failed to save ${key} to localStorage:`, error);
  }
}

/**
 * 抽签池管理 Hook
 * 
 * 功能：
 * - 预生成10000个签
 * - 使用Fisher-Yates洗牌
 * - 从池中顺序抽取（pop）
 * - 使用localStorage持久化
 */
export function useSignPool() {
  const [signPool, setSignPool] = useState<Sign[]>([]);
  const [drawnSigns, setDrawnSigns] = useState<Sign[]>([]);
  const [isInitialized, setIsInitialized] = useState(false);

  /**
   * 初始化抽签池
   */
  const initializePool = useCallback(() => {
    // 尝试从 localStorage 加载
    const savedPool = loadFromStorage<Sign[]>(STORAGE_KEY_SIGN_POOL);
    const savedDrawn = loadFromStorage<Sign[]>(STORAGE_KEY_DRAWN_SIGNS);

    if (savedPool && savedPool.length > 0) {
      // 使用保存的池
      console.log(`[抽签池] 从 localStorage 加载: ${savedPool.length} 个签剩余, ${(savedDrawn || []).length} 个已抽取`);
      setSignPool(savedPool);
      setDrawnSigns(savedDrawn || []);
      setIsInitialized(true);
      return;
    }

    // 生成新池
    console.log(`[抽签池] 生成新池: 总计 ${TOTAL_SIGNS} 个签 (Top-Top: ${TOP_TOP_COUNT}, Top: ${TOP_COUNT}, Special: ${SPECIAL_COUNT}, Empty: ${EMPTY_COUNT})`);
    const newPool = generateSignPool();
    const shuffledPool = shuffleArray(newPool);
    
    console.log(`[抽签池] 洗牌完成，准备就绪`);
    setSignPool(shuffledPool);
    setDrawnSigns([]);
    setIsInitialized(true);
    
    // 保存到 localStorage
    saveToStorage(STORAGE_KEY_SIGN_POOL, shuffledPool);
    saveToStorage(STORAGE_KEY_DRAWN_SIGNS, []);
  }, []);

  /**
   * 初始化（组件挂载时）
   */
  useEffect(() => {
    if (!isInitialized) {
      initializePool();
    }
  }, [isInitialized, initializePool]);

  /**
   * 抽签
   * 从池中pop()一个签，添加到已抽取列表
   */
  const drawSign = useCallback((): Sign | null => {
    if (signPool.length === 0) {
      console.warn('Sign pool is empty');
      return null;
    }

    // 从池中pop()一个签（使用数组的pop操作）
    const poolCopy = [...signPool];
    const sign = poolCopy.pop();
    
    if (!sign) {
      return null;
    }

    const newDrawn = [...drawnSigns, sign];

    console.log(`[抽签] 抽取签: ${sign.id} (${sign.type}, level ${sign.level}), 剩余: ${poolCopy.length} 个`);

    // 更新状态
    setSignPool(poolCopy);
    setDrawnSigns(newDrawn);

    // 保存到 localStorage
    saveToStorage(STORAGE_KEY_SIGN_POOL, poolCopy);
    saveToStorage(STORAGE_KEY_DRAWN_SIGNS, newDrawn);

    return sign;
  }, [signPool, drawnSigns]);

  /**
   * 重置抽签池（清空已抽取记录，重新生成和洗牌）
   */
  const resetPool = useCallback(() => {
    const newPool = generateSignPool();
    const shuffledPool = shuffleArray(newPool);
    
    setSignPool(shuffledPool);
    setDrawnSigns([]);
    
    // 保存到 localStorage
    saveToStorage(STORAGE_KEY_SIGN_POOL, shuffledPool);
    saveToStorage(STORAGE_KEY_DRAWN_SIGNS, []);
  }, []);

  /**
   * 获取剩余签数
   */
  const getRemainingCount = useCallback(() => {
    return signPool.length;
  }, [signPool]);

  /**
   * 获取已抽取签数
   */
  const getDrawnCount = useCallback(() => {
    return drawnSigns.length;
  }, [drawnSigns]);

  return {
    signPool,
    drawnSigns,
    isInitialized,
    drawSign,
    resetPool,
    getRemainingCount,
    getDrawnCount,
  };
}
