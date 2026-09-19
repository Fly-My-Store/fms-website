import Link from 'next/link';

export default function PartnerStrip() {
  return (
    <section className="border-t border-slate-200 bg-slate-50 py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Partners</p>
        <h2 className="mt-2 text-2xl font-bold text-slate-900">Own a store or ride with us</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <Link
            href="/selling-partners"
            className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-[#0072CE]/40 hover:shadow-sm"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-[#0072CE]">Stores</p>
            <h3 className="mt-2 font-semibold text-slate-900">Sell on Fly My Store</h3>
            <p className="mt-2 text-sm text-slate-600">
              Reach customers who already live around your shop. Call us to get onboarded.
            </p>
            <span className="mt-4 inline-block text-sm font-semibold text-[#0072CE]">Learn more →</span>
          </Link>
          <Link
            href="/delivery-partners"
            className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-[#228B22]/40 hover:shadow-sm"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-[#228B22]">Riders</p>
            <h3 className="mt-2 font-semibold text-slate-900">Deliver with Fly My Store</h3>
            <p className="mt-2 text-sm text-slate-600">
              Pick up from neighbourhood stores and drop nearby. Call us to join.
            </p>
            <span className="mt-4 inline-block text-sm font-semibold text-[#228B22]">Learn more →</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
