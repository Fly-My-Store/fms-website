import { features } from '@/lib/site';

export default function FeaturesSection() {
  return (
    <section id="features" className="bg-slate-950 py-16 text-white sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-300">App features</p>
            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
              Everything you need in one customer app
            </h2>
            <p className="mt-4 text-slate-300">
              Designed around how people actually shop — discover stores, order fast, and stay updated until delivery.
            </p>

            <div className="mt-8 space-y-5">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5"
                >
                  <h3 className="font-semibold text-white">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-blue-600 to-indigo-700 p-6">
              <p className="text-sm text-blue-100">Nearby stores</p>
              <p className="mt-3 text-3xl font-bold">Open now</p>
              <p className="mt-2 text-sm text-blue-100">See local sellers delivering to you</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm text-slate-400">Order status</p>
              <p className="mt-3 text-3xl font-bold">Live</p>
              <p className="mt-2 text-sm text-slate-300">Track from placed to delivered</p>
            </div>
            <div className="col-span-2 rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-sm text-slate-400">Secure checkout</p>
                  <p className="mt-2 text-xl font-semibold">Razorpay payments</p>
                </div>
                <div className="flex gap-2">
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs">UPI</span>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs">Cards</span>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs">Wallets</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
