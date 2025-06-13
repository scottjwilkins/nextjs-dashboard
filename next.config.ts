import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // Warning: this skips _all_ ESLint checks at build time
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
