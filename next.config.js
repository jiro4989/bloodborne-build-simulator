/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 静的ファイル出力を有効化
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, context) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300
    }
    return config
  }
}

module.exports = nextConfig
