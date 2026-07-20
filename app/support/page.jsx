import Link from 'next/link';

import LegalPage from '@/components/LegalPage';
import { legalDocuments } from '@/lib/legal';
import { site } from '@/lib/site';

export const metadata = {
  title: 'Support',
  description: `Get help with ${site.name} apps.`,
};

const faqs = [
  {
    question: 'How do I get help with an order?',
    answer:
      'Open the Fly My Store customer app, go to your order details, or use the in-app Support section to create a ticket.',
  },
  {
    question: 'I am a seller. How do I contact support?',
    answer:
      'Use the Support section in the seller app to submit a ticket. Include your store name and order ID when relevant.',
  },
  {
    question: 'I am a rider. How do I report a delivery issue?',
    answer:
      'Use the Support section in the rider app to create a ticket with delivery details and any relevant screenshots.',
  },
  {
    question: 'How quickly will you respond?',
    answer:
      'We aim to respond to support requests within 1–2 business days. Urgent order issues are prioritized when possible.',
  },
];

export default function SupportPage() {
  return (
    <LegalPage
      title="Support"
      description="We are here to help customers, sellers, and riders using Fly My Store."
    >
      <section>
        <h2>Contact us</h2>
        <p>
          Email us at{' '}
          <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a> or call{' '}
          <a href={`tel:${site.supportPhoneTel}`}>{site.supportPhone}</a>.
        </p>
      </section>

      <section>
        <h2>Frequently asked questions</h2>
        <div className="space-y-5">
          {faqs.map((faq) => (
            <div key={faq.question}>
              <h3 className="font-semibold text-slate-900">{faq.question}</h3>
              <p className="mt-2">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>Legal documents</h2>
        <p className="mb-3">
          The same privacy policy and terms & conditions apply to the customer, seller, and rider apps.
        </p>
        <p>
          {legalDocuments.map((doc, index) => (
            <span key={doc.href}>
              {index > 0 ? ' · ' : null}
              <Link href={doc.href} className="text-blue-600 hover:text-blue-700">
                {doc.label}
              </Link>
            </span>
          ))}
        </p>
      </section>
    </LegalPage>
  );
}
