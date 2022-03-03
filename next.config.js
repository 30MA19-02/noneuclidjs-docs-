/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: process.env.NODE_ENV === 'production' ? '.' : '',
  exportPathMap: async function (defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
    return {
      '/': { page: '/examples/basic', dev: true },
      '/framework': { page: '/next', dev: true },
    };
  },
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
  images: {
    loader: 'imgix',
    path: '',
  },
};

const withTM = require('next-transpile-modules')(['three']);
module.exports = withTM(nextConfig);
