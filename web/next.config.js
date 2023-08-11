/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ["avatars.githubusercontent.com", "api.dicebear.com"],
  },
  async redirects() {
    return [];
  },
};

module.exports = nextConfig;
