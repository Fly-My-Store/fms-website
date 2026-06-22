import { testimonials } from '@/lib/site';

export default function TestimonialsSection() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">Happy customers</p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
            Loved by shoppers who want local, fast, and reliable
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <blockquote
              key={item.name}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <p className="text-sm leading-7 text-slate-700">&ldquo;{item.quote}&rdquo;</p>
              <footer className="mt-6 border-t border-slate-100 pt-4">
                <p className="font-semibold text-slate-900">{item.name}</p>
                <p className="text-sm text-slate-500">{item.location}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
