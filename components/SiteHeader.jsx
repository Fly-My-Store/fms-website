'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import { navLinks, site } from '@/lib/site';

export default function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const onHome = pathname === '/';

  return (
    <header
      className={
        onHome
          ? 'sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur-md'
          : 'sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md'
      }
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2.5"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src="/logo.png"
            alt={site.name}
            width={36}
            height={36}
            className="h-9 w-9 rounded-lg object-contain"
            priority
          />
          <span
            className={
              onHome
                ? 'text-base font-semibold tracking-tight text-white sm:text-lg'
                : 'text-base font-semibold tracking-tight text-slate-900 sm:text-lg'
            }
          >
            {site.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                onHome
                  ? 'rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-white/5 hover:text-white'
                  : 'rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900'
              }
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/#download"
            className={
              onHome
                ? 'inline-flex h-9 items-center justify-center rounded-lg bg-blue-600 px-3.5 text-sm font-semibold text-white transition-colors hover:bg-blue-500 sm:h-10 sm:px-4'
                : 'inline-flex h-9 items-center justify-center rounded-lg bg-slate-900 px-3.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800 sm:h-10 sm:px-4'
            }
          >
            Get the app
          </Link>

          <button
            type="button"
            className={
              onHome
                ? 'inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 text-white md:hidden'
                : 'inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-800 md:hidden'
            }
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="sr-only">Menu</span>
            <span aria-hidden className="text-lg leading-none">
              {menuOpen ? '×' : '☰'}
            </span>
          </button>
        </div>
      </div>

      {menuOpen ? (
        <nav
          className={
            onHome
              ? 'border-t border-white/10 px-4 py-3 md:hidden'
              : 'border-t border-slate-200 px-4 py-3 md:hidden'
          }
        >
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={
                  onHome
                    ? 'rounded-lg px-3 py-2.5 text-sm font-medium text-slate-200 hover:bg-white/5'
                    : 'rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-100'
                }
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
