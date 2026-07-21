import Link from 'next/link';

import { apps } from '@/lib/site';

export default function PartnerStrip() {
  const partnerApps = apps.filter((app) => !app.primary);

  return (
    <section className="border-t border-slate-200 bg-slate-50 py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">For partners</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-900">Seller & rider apps</h2>
          </div>
          <p className="max-w-lg text-sm text-slate-600">
            Sellers confirm and pack orders. Riders accept jobs, navigate to pickup and drop, and mark deliveries complete.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {partnerApps.map((app) => (
            <article
              key={app.id}
              className="rounded-2xl border border-slate-200 bg-white p-5"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div
                    className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-sm font-bold text-white"
                    style={{ backgroundColor: app.accent }}
                  >
                    {app.label.charAt(0)}
                  </div>
                  <h3 className="mt-4 font-semibold text-slate-900">{app.label}</h3>
                  <p className="mt-2 text-sm text-slate-600">{app.description}</p>
                </div>
              </div>
              <Link
                href={app.href}
                className="mt-4 inline-flex text-sm font-semibold text-blue-600 hover:text-blue-700"
              >
                Partner support →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
