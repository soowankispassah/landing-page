/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    domains: [],
    unoptimized: false,
    remotePatterns: []
  },
  experimental: {
    turbo: {
      rules: {
        '*.write': false
      }
    },
    optimizePackageImports: ['@/components']
  }
};

module.exports = nextConfig; 