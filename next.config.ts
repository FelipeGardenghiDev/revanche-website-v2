import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'bandarevanche.com.br',
      },
      {
        protocol: 'https',
        hostname: 'gist.githubusercontent.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/loja',
        destination: '/merch',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
