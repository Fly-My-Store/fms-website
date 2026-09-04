import { NextResponse } from 'next/server';

const API_BASE = (process.env.FMS_API_URL || 'https://api.flymystore.com/api/v1').replace(/\/+$/, '');

export async function POST(_req, { params }) {
  const { code } = await params;
  const value = String(code || '').trim();
  if (!value) {
    return NextResponse.json({ ok: false, message: 'code is required' }, { status: 400 });
  }
  try {
    const res = await fetch(`${API_BASE}/public/share-links/${encodeURIComponent(value)}/open`, {
      method: 'POST',
    });
    const json = await res.json().catch(() => ({ ok: false }));
    return NextResponse.json(json, { status: res.status });
  } catch {
    return NextResponse.json({ ok: false, message: 'Could not record open' }, { status: 502 });
  }
}
