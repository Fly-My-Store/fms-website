import Link from 'next/link';

import { legalDocuments } from '@/lib/legal';

export default function LegalCrossLinks({ currentPath }) {
  const others = legalDocuments.filter((doc) => doc.href !== currentPath);

  if (!others.length) {
    return null;
  }

  return (
    <div className="mt-10 border-t border-slate-200 pt-6 text-sm text-slate-600">
      <p>
        See also{' '}
        {others.map((doc, index) => (
          <span key={doc.href}>
            {index > 0 ? ' · ' : null}
            <Link href={doc.href} className="text-brand hover:text-brand-hover">
              {doc.label}
            </Link>
          </span>
        ))}
        .{' '}
        <Link href="/support" className="text-brand hover:text-brand-hover">
          Support
        </Link>
      </p>
    </div>
  );
}
