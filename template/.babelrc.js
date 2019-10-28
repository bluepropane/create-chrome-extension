module.exports = {
  presets: [
    '@babel/preset-env',
    [
      '@babel/preset-react',
      {
        pragma: 'h',
        throwIfNamespace: false,
      },
    ],
  ],
  plugins: [
    [
      'babel-plugin-module-resolver',
      {
        root: ['./src'],
        alias: {
          constants: './constants.js',
          animejs: 'animejs/lib/anime.es.js',
        },
      },
    ],
    [
      '@babel/plugin-proposal-class-properties',
      {
        loose: true,
      },
    ],
    'lodash',
  ],
};
