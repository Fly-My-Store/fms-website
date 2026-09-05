import { NextResponse } from 'next/server';

import { apiBaseForLane, normalizeShareLane } from '@/lib/shareLink';

export async function POST(req, { params }) {
  const { code } = await params;
  const value = String(code || '').trim();
  if (!value) {
    return NextResponse.json({ ok: false, message: 'code is required' }, { status: 400 });
  }
  const { searchParams } = new URL(req.url);
  const lane = normalizeShareLane(searchParams.get('lane'));
  const API_BASE = apiBaseForLane(lane);
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
