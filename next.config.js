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
  // Redirects for route migration
  async redirects() {
    return [
      {
        source: '/treks/regions/:regionId',
        destination: '/regions/:regionId',
        permanent: true, // 301 redirect
      },
    ]
  },
}

export default nextConfig
