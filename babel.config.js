const { NODE_ENV } = process.env

module.exports = function (api) {
  api.cache(true)
  return {
    presets: [
      '@babel/preset-react',
      [
        '@babel/preset-env',
        { modules: NODE_ENV === 'test' ? 'auto' : false, loose: true },
      ],
      '@babel/preset-typescript',
    ],
    plugins: [
      ['@babel/plugin-proposal-class-properties', { loose: true }],
      ['@babel/plugin-proposal-private-methods', { loose: true }],
      ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
    ],
  }
}
