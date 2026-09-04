'use client';

import { useEffect } from 'react';

import { storeLinks } from '@/lib/site';
import { formatPrice, playStoreUrlForCode } from '@/lib/shareLink';

export default function ShareLanding({ code, data }) {
  const preview = data?.preview || {};
  const android = data?.stores?.android || playStoreUrlForCode(code, storeLinks.customer.android);
  const ios = data?.stores?.ios || storeLinks.customer.ios;
  const appUrl = `fms://x/${code}`;
  const price = formatPrice(preview.price_cents);

  useEffect(() => {
    const ua = navigator.userAgent || '';
    const isBot = /bot|crawler|spider|facebookexternalhit|WhatsApp|Slackbot|Twitterbot/i.test(ua);
    if (code && !isBot) {
      fetch(`/api/share-links/${encodeURIComponent(code)}/open`, { method: 'POST' }).catch(() => {});
    }
    const isMobile = /iPhone|iPad|iPod|Android/i.test(ua);
    if (!isMobile) return undefined;
    const t = window.setTimeout(() => {
      window.location.href = appUrl;
    }, 300);
    return () => window.clearTimeout(t);
  }, [appUrl, code]);

  return (
    <main className="mx-auto flex min-h-screen max-w-lg flex-col px-4 py-10 sm:py-16">
      <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">Fly My Store</p>
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
          href={appUrl}
          className="inline-flex h-12 items-center justify-center rounded-full bg-blue-600 px-5 text-sm font-semibold text-white hover:bg-blue-700"
        >
          Open in Fly My Store
        </a>
        <a
          href={ios}
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
      </div>
      <p className="mt-6 text-center text-xs text-slate-500">
        After installing on iPhone, tap this link again to open the product.
      </p>
    </main>
  );
}
