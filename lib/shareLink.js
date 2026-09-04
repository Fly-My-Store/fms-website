import { storeLinks } from './site';

const API_BASE = (process.env.FMS_API_URL || 'https://api.flymystore.com/api/v1').replace(/\/+$/, '');

export async function fetchShareLink(code) {
  const value = String(code || '').trim();
  if (!value) return null;
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
