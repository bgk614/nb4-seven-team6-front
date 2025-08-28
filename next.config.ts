import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
<<<<<<< HEAD
        source: '/groups/:groupId((?!/new).)*',
        destination: '/groups/:groupId*/records',
=======
        source: '/groups/:groupId((?!new$)[^/]+)',
        destination: '/groups/:groupId/records',
>>>>>>> upstream/main
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
<<<<<<< HEAD
        protocol: 'https',
        hostname: 'sprint-be-project.s3.ap-northeast-2.amazonaws.com',
=======
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
>>>>>>> upstream/main
      },
    ],
  },
};

export default nextConfig;
