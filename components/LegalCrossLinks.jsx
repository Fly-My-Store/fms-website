import Link from 'next/link';

import { legalRoles } from '@/lib/legal';

export default function LegalCrossLinks({ activeRole, pageType = 'privacy' }) {
  const others = legalRoles.filter((role) => role.id !== activeRole);
  const linkKey = pageType === 'terms' ? 'termsPath' : 'privacyPath';

  return (
    <div className="mt-10 border-t border-slate-200 pt-6 text-sm text-slate-600">
      <p>
        Looking for another app? See{' '}
        {others.map((role, index) => (
          <span key={role.id}>
            {index > 0 ? ' · ' : null}
            <Link href={role[linkKey]} className="text-blue-600 hover:text-blue-700">
              {role.label} {pageType === 'terms' ? 'terms' : 'privacy'}
            </Link>
          </span>
        ))}
        .{' '}
        <Link href="/support" className="text-blue-600 hover:text-blue-700">
          View all legal documents
        </Link>
      </p>
    </div>
  );
}
