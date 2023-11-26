/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [375, 640, 750, 828, 1080, 1200, 1920],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mc.yandex.ru",
        port: "",
        pathname: "/watch/95292842",
      },
      {
        protocol: "https",
        hostname: "yzi4d.ru",
        port: "",
        pathname: "/media/**",
      },
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "8080",
        pathname: "/media/**",
      },
    ],
  },
};

module.exports = nextConfig;
