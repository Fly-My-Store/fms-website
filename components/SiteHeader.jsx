import Image from 'next/image';
import Link from 'next/link';

import { navLinks, site } from '@/lib/site';

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt={site.name}
            width={40}
            height={40}
            className="h-10 w-10 rounded-xl object-contain"
            priority
          />
          <span className="text-lg font-semibold text-white">{site.name}</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="/support"
            className="hidden text-sm font-medium text-slate-300 transition-colors hover:text-white sm:inline"
          >
            Help
          </Link>
          <a
            href="#download"
            className="inline-flex h-10 items-center justify-center rounded-full bg-blue-600 px-4 text-sm font-semibold text-white transition-colors hover:bg-blue-500"
          >
            Get the app
          </a>
        </div>
      </div>
    </header>
  );
}
