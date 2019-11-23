module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        root: ['./src'],
        alias: {
          test: './test',
          underscore: 'lodash',
        },
      },
    ],
    '@babel/plugin-proposal-export-default-from',
  ],
};
