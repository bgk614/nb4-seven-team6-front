import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/groups/:groupId((?!new$)[^/]+)',
        destination: '/groups/:groupId/records',
        permanent: false,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3001',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '6123',
      },
      // {
      //   protocol: 'https',
      //   hostname: 'sprint-be-project.s3.ap-northeast-2.amazonaws.com',
      // },
      {
        protocol: 'https',
        hostname: 'codeit.teamproject1.server.bgk.dev',
      },
      {
        protocol: 'https',
        hostname: 'example.com',
      },
    ],
  },
};

export default nextConfig;
