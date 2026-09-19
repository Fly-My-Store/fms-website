import Image from 'next/image';
import Link from 'next/link';

import { site } from '@/lib/site';

export default function SiteHeader({ variant = 'light' }) {
  const dark = variant === 'dark';

  return (
    <Link href="/" className="flex w-fit items-center gap-2.5">
      <Image
        src="/logo.png"
        alt=""
        width={36}
        height={36}
        className="h-9 w-9 rounded-lg object-contain"
        priority
      />
      <span
        className={
          dark
            ? 'text-base font-semibold tracking-tight text-white sm:text-lg'
            : 'text-base font-semibold tracking-tight text-slate-900 sm:text-lg'
        }
      >
        {site.name}
      </span>
    </Link>
  );
}
