import { features } from '@/lib/site';

export default function FeaturesSection() {
  return (
    <section id="features" className="bg-slate-950 py-16 text-white sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-light">App features</p>
            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
              Built around your pin
            </h2>
            <p className="mt-4 text-slate-300">
              Nearby stores and screen guards that fit your phone — from shops on your street.
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
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-brand to-brand-navy p-6">
              <p className="text-sm text-brand-light">Nearby stores</p>
              <p className="mt-3 text-3xl font-bold">Open now</p>
              <p className="mt-2 text-sm text-brand-light">See local sellers delivering to you</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm text-slate-400">Protect</p>
              <p className="mt-3 text-3xl font-bold">Fits</p>
              <p className="mt-2 text-sm text-slate-300">Guards matched to your phone</p>
            </div>
            <div className="col-span-2 rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm text-slate-400">On your street</p>
              <p className="mt-2 text-xl font-semibold">Not a warehouse</p>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs">Grocery</span>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs">Pharmacy</span>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs">Food</span>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs">Mobiles</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
