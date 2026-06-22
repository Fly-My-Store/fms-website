import { categories } from '@/lib/site';

export default function CategoryStrip() {
  return (
    <section className="border-b border-slate-200 bg-white py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">Categories</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
              Everything your neighbourhood store offers
            </h2>
          </div>
          <p className="max-w-md text-sm text-slate-600">
            Browse fresh produce, daily essentials, electronics, and more from trusted local sellers.
          </p>
        </div>

        <div className="mt-8 flex gap-3 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {categories.map((category) => (
            <div
              key={category.label}
              className="min-w-[140px] shrink-0 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-center transition-transform hover:-translate-y-0.5"
            >
              <div className="text-3xl">{category.emoji}</div>
              <p className="mt-3 text-sm font-semibold text-slate-800">{category.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
