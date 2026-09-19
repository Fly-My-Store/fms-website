import Link from 'next/link';

import { site, storeLinks } from '@/lib/site';

function StoreBadge({ href, label, light = false }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={
        light
          ? 'inline-flex h-12 items-center justify-center rounded-full border border-white/20 bg-white/10 px-5 text-sm font-semibold text-white transition hover:bg-white/20'
          : 'inline-flex h-12 items-center justify-center rounded-full bg-white px-5 text-sm font-semibold text-slate-900 transition hover:bg-brand-soft'
      }
    >
      {label}
    </a>
  );
}

export default function DownloadSection() {
  const { customer } = storeLinks;

  return (
    <section id="download" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand via-brand-navy to-slate-900 px-6 py-10 text-white sm:px-10 sm:py-14">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-brand-light">
                Download
              </p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Get Fly My Store on your phone
              </h2>
              <p className="mt-4 max-w-xl text-white/80">
                Set your pin and shop the stores on your street.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <StoreBadge href={customer.ios} label="Download on the App Store" />
                <StoreBadge href={customer.android} label="Get it on Google Play" light />
              </div>
            </div>

            <div className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-sm">
              <p className="text-sm font-semibold text-brand-light">Need help?</p>
              <p className="mt-3 text-sm text-white">
                Email {site.supportEmail} or call {site.supportPhone}.
              </p>
              <p className="mt-4 text-sm text-white/80">
                Own a store?{' '}
                <Link href="/selling-partners" className="font-semibold text-white underline underline-offset-4">
                  Sell on Fly My Store
                </Link>
                . Want to ride?{' '}
                <Link href="/delivery-partners" className="font-semibold text-white underline underline-offset-4">
                  Deliver with Fly My Store
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
