/**
 * Backend API base URL (Step 3 draw API).
 * Set in .env as VITE_API_BASE_URL (e.g. http://localhost:3001).
 */
export const API_BASE =
  (import.meta.env.VITE_API_BASE_URL as string) || 'http://localhost:3000';
