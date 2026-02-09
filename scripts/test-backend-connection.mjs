#!/usr/bin/env node
/**
 * Temporary test script: verify frontend can reach backend API.
 * Reads backend PORT from ../backend/.env (if present), else defaults to 3000.
 * No backend code or .env is modified.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const frontendRoot = path.resolve(__dirname, '..');
const backendDir = path.join(frontendRoot, '..', 'backend');
const envPath = path.join(backendDir, '.env');

function getBackendPort() {
  let port = 3000;
  try {
    if (fs.existsSync(envPath)) {
      const content = fs.readFileSync(envPath, 'utf8');
      for (const line of content.split('\n')) {
        const m = line.match(/^\s*PORT\s*=\s*(.+)\s*$/);
        if (m) {
          const v = m[1].trim();
          const n = parseInt(v, 10);
          if (!Number.isNaN(n) && n > 0) {
            port = n;
            break;
          }
        }
      }
    }
  } catch (_) {
    // keep default 3000
  }
  return port;
}

const port = getBackendPort();
const url = `http://localhost:${port}/draw`;

console.log('[test-backend] Backend .env path (read-only):', envPath);
console.log('[test-backend] Using PORT:', port, '->', url);

try {
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({}),
  });
  const ok = res.ok || res.status === 503;
  const body = await res.text();
  let data;
  try {
    data = JSON.parse(body);
  } catch {
    data = body;
  }
  if (ok) {
    console.log('[test-backend] SUCCESS: Backend API reachable. Status:', res.status, 'Body:', data);
    process.exit(0);
  } else {
    console.error('[test-backend] Backend returned non-OK status:', res.status, data);
    process.exit(1);
  }
} catch (err) {
  console.error('[test-backend] FAILED: Could not connect to backend:', err.message);
  console.error('[test-backend] Ensure backend is running (e.g. cd backend && npm start).');
  process.exit(1);
}
