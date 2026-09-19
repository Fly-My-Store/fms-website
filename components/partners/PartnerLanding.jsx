import Link from 'next/link';

import SiteFooter from '@/components/SiteFooter';
import SiteHeader from '@/components/SiteHeader';
import { site } from '@/lib/site';

function CallButton({ className }) {
  return (
    <a
      href={`tel:${site.supportPhoneTel}`}
      className={className}
    >
      Call {site.supportPhone}
    </a>
  );
}

export default function PartnerLanding({
  eyebrow,
  title,
  description,
  theme = 'seller',
  highlights,
  steps,
  requirements,
  faqs,
  appLinks,
  appLabel,
  callHint,
}) {
  return (
    <div className="flex min-h-screen flex-col bg-white" data-theme={theme}>
      <main className="flex-1 pb-24 sm:pb-0">
        <section className="relative overflow-hidden bg-gradient-to-b from-brand-soft via-white to-white">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-2 lg:py-20">
            <div>
              <SiteHeader />
              <p className="mt-8 text-sm font-semibold uppercase tracking-wide text-brand">
                {eyebrow}
              </p>
              <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                {title}
              </h1>
              <p className="mt-4 max-w-xl text-lg leading-8 text-slate-600">
                {description}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <CallButton
                  className="inline-flex h-12 items-center justify-center rounded-full bg-brand px-6 text-sm font-semibold text-white transition-colors hover:bg-brand-hover"
                />
                <a
                  href={`mailto:${site.supportEmail}`}
                  className="inline-flex h-12 items-center justify-center rounded-full border border-slate-200 px-6 text-sm font-semibold text-slate-800 transition-colors hover:bg-slate-50"
                >
                  Email us
                </a>
              </div>
              <p className="mt-4 text-sm text-slate-500">
                No web form. Call or email, then upload documents in the app for approval.
              </p>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <p className="text-sm font-semibold text-slate-900">Talk to us</p>
              <a
                href={`tel:${site.supportPhoneTel}`}
                className="mt-3 block text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
              >
                {site.supportPhone}
              </a>
              <p className="mt-3 text-sm text-slate-600">
                Mon–Sat, 10am–7pm IST. Tell us you want to {callHint}.
              </p>
              <div className="mt-6 flex flex-col gap-2 text-sm">
                <a href={`tel:${site.supportPhoneTel}`} className="font-semibold text-brand">
                  Tap to call →
                </a>
                <a href={`mailto:${site.supportEmail}`} className="font-semibold text-slate-700">
                  {site.supportEmail}
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-slate-100 py-14 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Why partner with us</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {highlights.map((item) => (
                <article key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <p className="text-2xl" aria-hidden>{item.icon}</p>
                  <h3 className="mt-3 font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-950 py-14 text-white sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="text-2xl font-bold sm:text-3xl">How it works</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((step) => (
                <article key={step.step} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm font-bold text-brand-light">{step.step}</p>
                  <h3 className="mt-3 text-lg font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{step.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 sm:py-16">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">What you need</h2>
              <ul className="mt-6 space-y-3">
                {requirements.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-6 text-slate-700">
                    <span className="text-brand">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Get the {appLabel}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Download the app, complete your details, and upload documents. You go live after we approve.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={appLinks.ios}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-brand px-5 text-sm font-semibold text-white hover:bg-brand-hover"
                >
                  App Store
                </a>
                <a
                  href={appLinks.android}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-slate-200 px-5 text-sm font-semibold text-slate-900 hover:bg-brand-soft"
                >
                  Google Play
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-slate-100 bg-slate-50 py-14 sm:py-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Questions</h2>
            <div className="mt-8 space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-2xl border border-slate-200 bg-white p-5"
                >
                  <summary className="cursor-pointer list-none font-semibold text-slate-900">
                    <div className="flex items-center justify-between gap-4">
                      <span>{faq.question}</span>
                      <span className="text-brand transition-transform group-open:rotate-45">+</span>
                    </div>
                  </summary>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{faq.body}</p>
                </details>
              ))}
            </div>
            <p className="mt-8 text-sm text-slate-600">
              Still stuck?{' '}
              <Link href="/support" className="font-semibold text-brand hover:text-brand-hover">
                Support
              </Link>
              .
            </p>
          </div>
        </section>
      </main>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur sm:hidden">
        <CallButton
          className="flex h-12 w-full items-center justify-center rounded-full bg-brand text-sm font-semibold text-white hover:bg-brand-hover"
        />
      </div>

      <div className="pb-16 sm:pb-0">
        <SiteFooter />
      </div>
    </div>
  );
}
