'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';

import { storeLinks } from '@/lib/site';
import {
  buildClipboardHandoffToken,
  formatPrice,
  normalizeShareLane,
  playStoreUrlForCode,
} from '@/lib/shareLink';

function detectPlatform(ua = '') {
  if (/Android/i.test(ua)) return 'android';
  if (/iPhone|iPad|iPod/i.test(ua)) return 'ios';
  return 'other';
}

async function writeIosHandoff(code, lane) {
  const token = buildClipboardHandoffToken(code, lane);
  if (!token || typeof navigator === 'undefined') return;
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(token);
      return;
    }
  } catch {
    // fall through to legacy path
  }
  try {
    const el = document.createElement('textarea');
    el.value = token;
    el.setAttribute('readonly', '');
    el.style.position = 'fixed';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  } catch {
    // ignore — install still works; user can re-tap the link
  }
}

export default function ShareLanding({ code, data, lane = 'x' }) {
  const resolvedLane = normalizeShareLane(lane);
  const preview = data?.preview || {};
  const android = data?.stores?.android || playStoreUrlForCode(code, storeLinks.customer.android);
  const ios = data?.stores?.ios || storeLinks.customer.ios;
  const appUrl = `fms://${resolvedLane}/${code}`;
  const price = formatPrice(preview.price_cents);
  const [platform, setPlatform] = useState('other');
  const [storeBusy, setStoreBusy] = useState(false);

  useEffect(() => {
    setPlatform(detectPlatform(navigator.userAgent || ''));
  }, []);

  useEffect(() => {
    const ua = navigator.userAgent || '';
    const isBot = /bot|crawler|spider|facebookexternalhit|WhatsApp|Slackbot|Twitterbot/i.test(ua);
    if (code && !isBot) {
      const qs = resolvedLane === 'xt' ? '?lane=xt' : '';
      fetch(`/api/share-links/${encodeURIComponent(code)}/open${qs}`, { method: 'POST' }).catch(() => {});
    }
  }, [code, resolvedLane]);

  const primaryStoreUrl = platform === 'android' ? android : ios;

  const goToStore = useCallback(async (storeUrl, { iosHandoff = false } = {}) => {
    if (!storeUrl || storeBusy) return;
    setStoreBusy(true);
    try {
      if (iosHandoff) {
        await writeIosHandoff(code, resolvedLane);
      }
    } finally {
      window.location.href = storeUrl;
    }
  }, [code, resolvedLane, storeBusy]);

  const onPrimaryStoreClick = useCallback((event) => {
    event.preventDefault();
    goToStore(primaryStoreUrl, { iosHandoff: platform === 'ios' });
  }, [goToStore, platform, primaryStoreUrl]);

  const onIosStoreClick = useCallback((event) => {
    event.preventDefault();
    goToStore(ios, { iosHandoff: true });
  }, [goToStore, ios]);

  const footerHint = useMemo(() => {
    if (platform === 'ios') {
      return 'After installing, open the app once — we try to open this product automatically. If not, tap this link again.';
    }
    if (platform === 'android') {
      return 'Install from the Play button above so this product can open on first launch.';
    }
    return 'Install the app, then open this link again on your phone.';
  }, [platform]);

  return (
    <main className="mx-auto flex min-h-screen max-w-lg flex-col px-4 py-10 sm:py-16">
      <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">Fly My Store</p>
      {resolvedLane === 'xt' ? (
        <p className="mt-1 text-xs font-medium text-amber-700">Development link</p>
      ) : null}
      <div className="mt-6 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        {preview.image_url ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={preview.image_url}
            alt={preview.title || 'Fly My Store'}
            className="h-56 w-full object-cover"
          />
        ) : (
          <div className="flex h-40 items-center justify-center bg-blue-600 text-white">
            <span className="text-lg font-semibold">Fly My Store</span>
          </div>
        )}
        <div className="space-y-2 p-6">
          <h1 className="text-2xl font-bold text-slate-900">{preview.title || 'Open in the app'}</h1>
          {preview.subtitle ? <p className="text-sm text-slate-600">{preview.subtitle}</p> : null}
          {price ? <p className="text-lg font-semibold text-slate-900">{price}</p> : null}
          <p className="pt-2 text-sm text-slate-500">
            Prices and stock are confirmed in the app for stores near you.
          </p>
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-3">
        <a
          href={primaryStoreUrl}
          onClick={onPrimaryStoreClick}
          className="inline-flex h-12 items-center justify-center rounded-full bg-blue-600 px-5 text-sm font-semibold text-white hover:bg-blue-700"
        >
          {platform === 'android' ? 'Get it on Google Play' : 'Download on the App Store'}
        </a>
        <a
          href={appUrl}
          className="inline-flex h-12 items-center justify-center rounded-full border border-slate-200 px-5 text-sm font-semibold text-slate-900 hover:bg-slate-50"
        >
          Already installed? Open app
        </a>
        {platform === 'android' ? (
          <a
            href={ios}
            onClick={onIosStoreClick}
            className="inline-flex h-12 items-center justify-center rounded-full border border-slate-200 px-5 text-sm font-semibold text-slate-900 hover:bg-slate-50"
          >
            Download on the App Store
          </a>
        ) : platform === 'ios' ? (
          <a
            href={android}
            className="inline-flex h-12 items-center justify-center rounded-full border border-slate-200 px-5 text-sm font-semibold text-slate-900 hover:bg-slate-50"
          >
            Get it on Google Play
          </a>
        ) : (
          <>
            <a
              href={ios}
              onClick={onIosStoreClick}
              className="inline-flex h-12 items-center justify-center rounded-full border border-slate-200 px-5 text-sm font-semibold text-slate-900 hover:bg-slate-50"
            >
              Download on the App Store
            </a>
            <a
              href={android}
              className="inline-flex h-12 items-center justify-center rounded-full border border-slate-200 px-5 text-sm font-semibold text-slate-900 hover:bg-slate-50"
            >
              Get it on Google Play
            </a>
          </>
        )}
      </div>
      <p className="mt-6 text-center text-xs text-slate-500">{footerHint}</p>
    </main>
  );
}
