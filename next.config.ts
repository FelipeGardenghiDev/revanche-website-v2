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
};

export default nextConfig;
