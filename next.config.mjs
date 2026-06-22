/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/Terms&Condition',
        destination: '/terms',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
