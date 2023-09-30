const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

/** @type { import('@storybook/nextjs').StorybookConfig } */
const config = {
  stories: ['../**/*.mdx', '../**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-tailwind-dark-mode',
    'storybook-dark-mode',
    {
      name: '@storybook/addon-styling',
      options: {
        postCss: {
          implementation: require.resolve('postcss'),
        },
      },
    },
  ],
  staticDirs: ['../public'],
  webpackFinal: async (config, { configType }) => {
    config.resolve.plugins = [new TsconfigPathsPlugin()]
    return config
  },
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
}
export default config
