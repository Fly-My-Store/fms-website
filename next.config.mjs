/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    const wellKnown = [
      { key: 'Content-Type', value: 'application/json' },
      { key: 'Cache-Control', value: 'public, max-age=300' },
    ];
    return [
      {
        source: '/.well-known/apple-app-site-association',
        headers: wellKnown,
      },
      {
        source: '/apple-app-site-association',
        headers: wellKnown,
      },
      {
        source: '/.well-known/assetlinks.json',
        headers: wellKnown,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/apple-app-site-association',
        destination: '/.well-known/apple-app-site-association',
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/customer/privacy-policy',
        destination: '/privacy-policy',
        permanent: true,
      },
      {
        source: '/customer/privacypolicy',
        destination: '/privacy-policy',
        permanent: true,
      },
      {
        source: '/customer/terms',
        destination: '/terms',
        permanent: true,
      },
      {
        source: '/Terms&Condition',
        destination: '/terms',
        permanent: true,
      },
      {
        source: '/terms-of-use',
        destination: '/terms',
        permanent: true,
      },
      {
        source: '/terms-of-service',
        destination: '/terms',
        permanent: true,
      },
      {
        source: '/seller/privacy-policy',
        destination: '/privacy-policy',
        permanent: true,
      },
      {
        source: '/seller/privacypolicy',
        destination: '/privacy-policy',
        permanent: true,
      },
      {
        source: '/seller/terms',
        destination: '/terms',
        permanent: true,
      },
      {
        source: '/rider/privacy-policy',
        destination: '/privacy-policy',
        permanent: true,
      },
      {
        source: '/rider/privacypolicy',
        destination: '/privacy-policy',
        permanent: true,
      },
      {
        source: '/rider/terms',
        destination: '/terms',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
