/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    BASE_URL: "localhost:3000",
  },
  webpack(config) {
    // svg 불러오기
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    // 절대 경로 설정
    config.resolve.modules.push(__dirname);
    return config;
  },
};

module.exports = nextConfig;
