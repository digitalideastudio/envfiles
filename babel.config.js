module.exports = {
  presets: [
    [
      '@vue/app',
      {
        useBuiltIns: 'entry',
      },
    ],
  ],
  plugins: [
    [
      'transform-imports',
      {
        vuetify: {
          transform: 'vuetify/es5/components/${member}', // eslint-disable-line
          preventFullImport: true,
        },
      },
    ],
    '@babel/plugin-proposal-export-default-from',
    ['@babel/plugin-proposal-class-properties', { spec: true }],
  ],
};
