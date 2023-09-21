/** @type {import('next').NextConfig} */
const nextConfig = {
  /**
   *
   * @param {import('webpack').Configuration} config
   * @param {import('next/dist/server/config-shared').WebpackConfigContext} context
   * @returns {import('webpack').Configuration}
   */
  webpack: (config) => {
    if (process.env.NEXT_OUTPUT_MODE !== 'export' || !config.module) {
      return config
    }
    config.module.rules?.push({
      test: /src\/app\/test/,
      loader: 'ignore-loader',
    })
    return config
  },
  experimental: {
    externalDir: true,
  },
}

module.exports = nextConfig
