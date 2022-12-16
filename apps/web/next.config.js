/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
    transpilePackages: ['ui'],
    serverComponentsExternalPackages: ['@prisma/client', 'prisma']
  },
};

module.exports = nextConfig;