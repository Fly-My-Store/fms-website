import { Inter } from 'next/font/google';

import { site } from '@/lib/site';

import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata = {
  title: {
    default: `${site.name} — Shop local. Delivered fast.`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  metadataBase: new URL(site.domain),
  icons: {
    icon: [{ url: '/logo.png', type: 'image/png' }],
    apple: [{ url: '/logo.png', type: 'image/png' }],
    shortcut: ['/logo.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} min-h-screen bg-white font-sans text-slate-900 antialiased`}>
        {children}
      </body>
    </html>
  );
}
