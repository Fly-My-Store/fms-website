import { benefits } from '@/lib/site';

export default function BenefitsSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">Why Fly My Store</p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
            Built for customers who want speed, trust, and convenience
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            A complete local commerce platform: customers shop, sellers pack, and riders deliver — all in dedicated apps.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <article
              key={benefit.title}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-2xl shadow-sm">
                {benefit.icon}
              </div>
              <h3 className="mt-5 text-lg font-semibold text-slate-900">{benefit.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">{benefit.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
