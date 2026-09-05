import { storeLinks } from './site';

const PROD_API = (process.env.FMS_API_URL || 'https://api.flymystore.com/api/v1').replace(/\/+$/, '');
const DEV_API = (process.env.FMS_API_URL_DEV || 'https://api-dev.flymystore.com/api/v1').replace(/\/+$/, '');

/** `x` = production API, `xt` = api-dev */
export function normalizeShareLane(lane) {
  return String(lane || 'x').toLowerCase() === 'xt' ? 'xt' : 'x';
}

export function apiBaseForLane(lane) {
  return normalizeShareLane(lane) === 'xt' ? DEV_API : PROD_API;
}

export async function fetchShareLink(code, { lane = 'x' } = {}) {
  const value = String(code || '').trim();
  if (!value) return null;
  const API_BASE = apiBaseForLane(lane);
  try {
    const res = await fetch(`${API_BASE}/public/share-links/${encodeURIComponent(value)}`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return null;
    const json = await res.json();
    return json?.data || null;
  } catch {
    return null;
  }
}

export function formatPrice(cents) {
  const n = Number(cents);
  if (!Number.isFinite(n) || n <= 0) return null;
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(n / 100);
}

export function playStoreUrlForCode(code, fallbackAndroid) {
  if (!code) return fallbackAndroid || storeLinks.customer.android;
  const referrer = encodeURIComponent(`fms_code=${code}`);
  return `https://play.google.com/store/apps/details?id=com.fmscustomerapp&referrer=${referrer}`;
}
