/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizeFonts: true,
    optimizeImages: true,
    optimizeCss: true,
    optimizeJs: true,
    scrollRestoration: true,
  },
    images: {
        remotePatterns: [
          {
            protocol: 'http',
            hostname: '**',
          },
        ]
    }
}

module.exports = nextConfig
