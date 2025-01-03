/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  swcMinify: true,
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    domains: [],
    unoptimized: false,
    remotePatterns: []
  },
  logging: {
    fetches: {
      fullUrl: true
    }
  },
  experimental: {
    turbo: {
      rules: {
        // Prevents accidental writes to the filesystem during builds
        '*.write': false
      }
    },
    // Improved hydration handling
    optimizePackageImports: ['@/components'],
    missingSuspenseWithCSRBailout: true
  }
};

module.exports = nextConfig; 