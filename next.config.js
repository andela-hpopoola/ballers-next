/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,

  images: {
    domains: ['images.weserv.nl'],
  },

  async headers() {
    const isDev = process.env.NODE_ENV === 'development';

    return [
      // 🔒 1. Prevent preview.ballers.ng from being indexed
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'preview.ballers.ng' }],
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex, nofollow, noarchive, nosnippet',
          },
        ],
      },

      // 🔒 2. Global security headers
      {
        source: '/:path*',
        headers: [
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },

          // 🛡️ Content Security Policy
          {
            key: 'Content-Security-Policy',
            value: isDev
              ? [
                  "default-src 'self' data: blob: https:;",
                  "img-src 'self' data: https:;",
                  "script-src 'self' 'unsafe-eval' 'unsafe-inline' blob: data: https:;",
                  "style-src 'self' 'unsafe-inline' https:;",
                  "font-src 'self' data: https:;",
                  // 👇 Added so local API calls work
                  "connect-src 'self' http://localhost:4000 http://127.0.0.1:4000 ws://localhost:4000 ws://127.0.0.1:4000 https://accounts.google.com https://*.google.com;",
                ].join(' ')
              : [
                  "default-src 'self';",
                  "img-src 'self' https: data:;",
                  "style-src 'self' 'unsafe-inline' https:;",
                  "script-src 'self' https:;",
                  "font-src 'self' https:;",
                  "connect-src 'self' https:;",
                  "object-src 'none';",
                  "frame-ancestors 'self';",
                ].join(' '),
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
