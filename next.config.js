/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
    unoptimized: false,
  },
  // Enable TypeScript
  typescript: {
    ignoreBuildErrors: false,
  },
  // Optimize for production
  poweredByHeader: false,
  compress: true,
}

export default nextConfig
