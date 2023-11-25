/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mc.yandex.ru",
        port: "",
        pathname: "/watch/95292842",
      },
    ],
  },
};

module.exports = nextConfig;
