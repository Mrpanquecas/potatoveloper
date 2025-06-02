/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React strict mode for better development experience
  reactStrictMode: true,

  // Enable SWC minification for faster builds
  swcMinify: true,

  // Experimental features (uncomment as needed)
  experimental: {
    // Enable app directory (for Next.js 13+ app router)
    // appDir: true,
    // Enable server components logging
    // logging: {
    //   level: 'verbose',
    // },
  },

  // Image optimization configuration
  images: {
    // Configure image domains if you're loading images from external sources
    domains: [
      // 'example.com',
      // 'images.unsplash.com',
    ],

    // Image formats to support
    formats: ["image/webp", "image/avif"]
  },

  // Environment variables to expose to the browser (prefix with NEXT_PUBLIC_)
  env: {
    // CUSTOM_KEY: process.env.CUSTOM_KEY,
  },

  // Custom webpack configuration (if needed)
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Add custom webpack configuration here if needed
    return config
  },

  // Redirects (if needed)
  async redirects() {
    return [
      // {
      //   source: '/old-path',
      //   destination: '/new-path',
      //   permanent: true,
      // },
    ]
  },

  // Rewrites (if needed)
  async rewrites() {
    return [
      // {
      //   source: '/api/proxy/:path*',
      //   destination: 'https://external-api.com/:path*',
      // },
    ]
  },

  // Headers configuration (if needed)
  async headers() {
    return [
      // {
      //   source: '/(.*)',
      //   headers: [
      //     {
      //       key: 'X-Content-Type-Options',
      //       value: 'nosniff',
      //     },
      //   ],
      // },
    ]
  },

  // Compiler options
  compiler: {
    // Remove console logs in production
    removeConsole: process.env.NODE_ENV === "production"

    // Enable styled-components support (if using)
    // styledComponents: true,
  }

  // Output configuration (if building for static export)
  // output: 'export',
  // trailingSlash: true,

  // Base path (if deploying to a subdirectory)
  // basePath: '/my-app',

  // Asset prefix (if using a CDN)
  // assetPrefix: process.env.NODE_ENV === 'production' ? 'https://cdn.example.com' : '',
}

module.exports = nextConfig
