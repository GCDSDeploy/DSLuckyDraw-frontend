/**
 * 前端生成并持久化 guest_id（UUID），每次抽签请求携带。
 * 后端据此判定轮次与「第 2 次必中」，不维护登录态。
 */

const STORAGE_KEY = 'ds_lucky_draw_guest_id';

function generateUUID(): string {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

/**
 * 获取或创建 guest_id，存 localStorage，保证同设备同浏览器持久一致。
 */
export function getOrCreateGuestId(): string {
  if (typeof window === 'undefined') {
    return generateUUID();
  }
  try {
    let id = localStorage.getItem(STORAGE_KEY);
    if (!id || id.trim() === '') {
      id = generateUUID();
      localStorage.setItem(STORAGE_KEY, id);
    }
    return id;
  } catch {
    return generateUUID();
  }
}
