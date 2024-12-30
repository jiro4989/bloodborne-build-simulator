/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: process.env.ASSET_PREFIX,
  output: 'export', // 静的ファイル出力を有効化
  reactStrictMode: true,
  compiler: {
    // data-test で始まるカスタムプロパティは本番デプロイ時に除外する
    reactRemoveProperties: true,
  },
  webpack: (config, context) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300
    }
    return config
  }
}

module.exports = nextConfig
