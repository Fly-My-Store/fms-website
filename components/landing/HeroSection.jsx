import Link from 'next/link';

import PhoneMockup from '@/components/landing/PhoneMockup';
import SiteHeader from '@/components/SiteHeader';
import { site, stats } from '@/lib/site';

export default function HeroSection({ categories = [] }) {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-brand/20 blur-3xl" />
        <div className="absolute right-0 top-20 h-80 w-80 rounded-full bg-brand-navy/20 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:py-20">
        <div>
          <SiteHeader variant="dark" />

          <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-light">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Neighbourhood shopping
          </div>

          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            {site.tagline}
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">
            {site.description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/#download"
              className="inline-flex h-12 items-center justify-center rounded-full bg-brand px-6 text-sm font-semibold text-white transition-colors hover:bg-brand-hover"
            >
              Get the app
            </Link>
            <Link
              href="/#how-it-works"
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              See how it works
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-3">
                <p className="text-lg font-bold text-white">{stat.value}</p>
                <p className="mt-1 text-xs text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <PhoneMockup categories={categories} />
      </div>
    </section>
  );
}
