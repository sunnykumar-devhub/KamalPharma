/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
      },
    ],
  },
  webpack: (config) => {
    config.ignoreWarnings = [
      { module: /node_modules/ },
      { file: /node_modules/ },
    ];
    return config;
  },
};

export default nextConfig;
