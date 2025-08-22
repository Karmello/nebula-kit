const path = require('path')
const webpack = require('webpack')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
  name: 'server',
  mode: 'production',
  target: 'node',
  cache: true,
  devtool: false,
  entry: 'src/server/index.ts',
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'server.js',
  },
  optimization: {
    minimizer: [new TerserPlugin({ extractComments: false })],
  },
  resolve: {
    plugins: [new TsconfigPathsPlugin()],
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    symlinks: false,
    cacheWithContext: false,
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        include: path.resolve(__dirname, '../src'),
        loader: 'ts-loader',
      },
      {
        test: /\.(scss|jpg|jpeg|png)$/,
        include: path.resolve(__dirname, '../src'),
        loader: 'ignore-loader',
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.BUILD_TIMESTAMP': JSON.stringify(Date.now()),
    }),
  ],
  externals: {
    bufferutil: 'bufferutil',
    'utf-8-validate': 'utf-8-validate',
  },
}
