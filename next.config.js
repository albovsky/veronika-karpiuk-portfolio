/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ['@headlessui/react', 'framer-motion'],
  },
  images: {
    formats: ['image/webp', 'image/avif'],
  },
}

module.exports = nextConfig