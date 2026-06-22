import { howItWorks } from '@/lib/site';

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">How it works</p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
            From browse to doorstep in three simple steps
          </h2>
          <p className="mt-4 text-slate-600">
            Inspired by the best quick-commerce experiences — built for your local neighbourhood stores.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {howItWorks.map((item, index) => (
            <article
              key={item.step}
              className="relative rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <span className="text-sm font-bold text-blue-600">{item.step}</span>
              <h3 className="mt-4 text-xl font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
              {index < howItWorks.length - 1 ? (
                <span className="absolute -right-3 top-1/2 hidden h-px w-6 bg-slate-300 lg:block" />
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
