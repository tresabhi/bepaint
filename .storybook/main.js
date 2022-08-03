const sveltePreprocess = require('svelte-preprocess');
const path = require('path');

module.exports = {
  stories: [
    './stories/*.stories.mdx',
    './stories/*.stories.@(js|jsx|ts|tsx|svelte)',
  ],

  // stories: ['../src/stories/**/*.stories.*'],
  logLevel: 'debug',
  svelteOptions: {
    preprocess: sveltePreprocess(),
  },
  addons: [
    '@storybook/addon-storysource',
    '@storybook/addon-actions',
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
      },
    },
    '@storybook/addon-controls',
    '@storybook/addon-links',
    '@storybook/addon-knobs',
    '@storybook/addon-backgrounds',
    '@storybook/addon-viewport',
    '@storybook/addon-a11y',
  ],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: [/\.stories\.js$/, /index\.js$/],
      use: [require.resolve('@storybook/source-loader')],
      include: [path.resolve(__dirname, '../src')],
      enforce: 'pre',
    });
    return config;
  },
  core: {
    builder: 'webpack4',
  },
};
