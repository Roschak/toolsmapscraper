/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [
    '@prospecthunter/classification',
    '@prospecthunter/database',
    '@prospecthunter/entity-resolution',
    '@prospecthunter/lead-scoring',
    '@prospecthunter/providers',
    '@prospecthunter/search-engine',
    '@prospecthunter/security',
    '@prospecthunter/shared',
    '@prospecthunter/website-discovery',
    '@prospecthunter/config',
  ],
  async rewrites() {
    const backendUrl = process.env.BACKEND_API_URL || process.env.API_URL;
    if (backendUrl && !backendUrl.startsWith('/')) {
      const cleanUrl = backendUrl.replace(/\/api\/?$/, '');
      return [
        {
          source: '/api/:path*',
          destination: `${cleanUrl}/api/:path*`,
        },
      ];
    }
    return [];
  },
};

export default nextConfig;
