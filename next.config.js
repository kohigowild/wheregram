/** @type {import('next').NextConfig} */
const runtimeCaching = require('next-pwa/cache');
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  runtimeCaching,
  buildExcludes: [/middleware-manifest.json$/],
});

const nextConfig = withPWA({
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    domains: ['localhost', 'firebasestorage.googleapis.com', 'lh3.googleusercontent.com', 'i.pinimg.com'],
    path: '/_next/image',
    loader: 'default',
    loaderFile: '',
    disableStaticImages: false,
    minimumCacheTTL: 60,
    formats: ['image/webp'],
    dangerouslyAllowSVG: false,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    contentDispositionType: 'inline',
    remotePatterns: [],
    unoptimized: false,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
});

module.exports = nextConfig;
