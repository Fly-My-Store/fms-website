/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/customer/privacy-policy',
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
    ];
  },
};

export default nextConfig;
