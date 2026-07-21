import Link from 'next/link';

import { site } from '@/lib/site';

export default function DownloadSection() {
  return (
    <section id="download" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 px-6 py-10 text-white sm:px-10 sm:py-14">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-blue-100">
                Customer app
              </p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Get Fly My Store on your phone
              </h2>
              <p className="mt-4 max-w-xl text-blue-100">
                Browse neighbourhood stores, checkout with Razorpay or COD, and follow order status until
                delivery. Seller and rider apps power packing and fulfilment.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <span className="inline-flex h-12 items-center justify-center rounded-full bg-white px-5 text-sm font-semibold text-slate-900">
                  App Store — coming soon
                </span>
                <span className="inline-flex h-12 items-center justify-center rounded-full border border-white/20 bg-white/10 px-5 text-sm font-semibold text-white">
                  Google Play — coming soon
                </span>
              </div>

              <p className="mt-6 text-sm text-blue-100">
                Need help or partner onboarding?{' '}
                <Link href="/support" className="font-semibold text-white underline underline-offset-4">
                  Contact support
                </Link>
              </p>
            </div>

            <div className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-sm">
              <p className="text-sm font-semibold text-blue-100">Before you join</p>
              <ul className="mt-4 space-y-3 text-sm text-white">
                <li className="flex gap-3">
                  <span className="text-blue-200">✓</span>
                  <span>Read our privacy policy and terms before you sign up</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-200">✓</span>
                  <span>Email {site.supportEmail} or call {site.supportPhone}</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-200">✓</span>
                  <span>Sellers and riders: contact support for partner onboarding</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
