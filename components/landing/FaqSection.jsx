import Link from 'next/link';

import { faqs, site } from '@/lib/site';

export default function FaqSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">FAQ</p>
            <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
              Common questions
            </h2>
            <p className="mt-4 text-slate-600">
              Still need help? Our support team is ready at{' '}
              <a href={`mailto:${site.supportEmail}`} className="font-medium text-blue-600 hover:text-blue-700">
                {site.supportEmail}
              </a>
              .
            </p>
            <Link
              href="/support"
              className="mt-6 inline-flex text-sm font-semibold text-blue-600 hover:text-blue-700"
            >
              Visit support page →
            </Link>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-slate-200 bg-slate-50 p-5"
              >
                <summary className="cursor-pointer list-none font-semibold text-slate-900 marker:content-none">
                  <div className="flex items-center justify-between gap-4">
                    <span>{faq.question}</span>
                    <span className="text-blue-600 transition-transform group-open:rotate-45">+</span>
                  </div>
                </summary>
                <p className="mt-4 text-sm leading-7 text-slate-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
