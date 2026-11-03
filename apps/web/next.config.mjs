/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
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
