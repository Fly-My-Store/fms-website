import Link from 'next/link';

import { footerLinks, site } from '@/lib/site';

export default function SiteFooter() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="text-lg font-semibold text-white">{site.name}</p>
            <p className="mt-3 max-w-sm text-sm leading-6 text-slate-400">{site.description}</p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Company</p>
            <div className="mt-4 flex flex-col gap-3 text-sm">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Contact</p>
            <div className="mt-4 flex flex-col gap-3 text-sm">
              <a href={`mailto:${site.supportEmail}`} className="transition-colors hover:text-white">
                {site.supportEmail}
              </a>
              <a href={`tel:${site.supportPhoneTel}`} className="transition-colors hover:text-white">
                {site.supportPhone}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800 px-4 py-5 text-center text-xs text-slate-500 sm:px-6">
        © {new Date().getFullYear()} {site.legalName}. All rights reserved.
      </div>
    </footer>
  );
}
