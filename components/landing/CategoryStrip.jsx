import Image from 'next/image';

export default function CategoryStrip({ categories = [] }) {
  if (!categories.length) return null;

  return (
    <section className="border-b border-slate-200 bg-white py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-brand">Categories</p>
          <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
            What neighbourhood stores stock
          </h2>
        </div>

        <div className="mt-8 flex gap-3 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {categories.map((category) => (
            <div
              key={category.id || category.slug}
              className="min-w-[120px] shrink-0 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-center transition-transform hover:-translate-y-0.5"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center">
                {category.iconUrl ? (
                  <Image
                    src={category.iconUrl}
                    alt=""
                    width={48}
                    height={48}
                    className="h-12 w-12 object-contain"
                  />
                ) : (
                  <span className="h-12 w-12 rounded-xl bg-slate-200" />
                )}
              </div>
              <p className="mt-3 text-sm font-semibold text-slate-800">{category.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
