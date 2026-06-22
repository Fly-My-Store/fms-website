import Link from 'next/link';

import { categories, site, stats } from '@/lib/site';

function PhoneMockup() {
  return (
    <div className="phone-mockup mx-auto w-full max-w-[320px]">
      <div className="rounded-[2rem] border border-white/10 bg-slate-900 p-3 shadow-2xl shadow-blue-500/20">
        <div className="overflow-hidden rounded-[1.5rem] bg-slate-950">
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
            <div>
              <p className="text-[10px] uppercase tracking-wide text-slate-500">Deliver to</p>
              <p className="text-sm font-semibold text-white">Your neighbourhood</p>
            </div>
            <span className="rounded-full bg-emerald-500/20 px-2 py-1 text-[10px] font-semibold text-emerald-300">
              Open now
            </span>
          </div>

          <div className="space-y-3 p-4">
            <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 p-4">
              <p className="text-xs text-blue-100">Today&apos;s picks</p>
              <p className="mt-1 text-lg font-bold text-white">Shop local stores</p>
              <p className="mt-1 text-xs text-blue-100">Fresh groceries & essentials nearby</p>
            </div>

            <div className="grid grid-cols-4 gap-2">
              {categories.slice(0, 4).map((cat) => (
                <div
                  key={cat.label}
                  className="rounded-xl bg-white/5 p-2 text-center"
                >
                  <div className="text-lg">{cat.emoji}</div>
                  <p className="mt-1 text-[9px] leading-tight text-slate-300">{cat.label}</p>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold text-white">Order #2841</p>
                  <p className="text-[10px] text-slate-400">Out for delivery</p>
                </div>
                <span className="text-xs font-semibold text-blue-300">12 min</span>
              </div>
              <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-slate-800">
                <div className="h-full w-3/4 rounded-full bg-blue-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute right-0 top-20 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-200">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Now delivering in your city
          </div>

          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            {site.tagline}
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">
            {site.description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#download"
              className="inline-flex h-12 items-center justify-center rounded-full bg-blue-600 px-6 text-sm font-semibold text-white transition-colors hover:bg-blue-500"
            >
              Download customer app
            </a>
            <Link
              href="#how-it-works"
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

        <PhoneMockup />
      </div>
    </section>
  );
}
