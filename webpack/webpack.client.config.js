const path = require('path')
const webpack = require('webpack')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const BrotliPlugin = require('brotli-webpack-plugin')

const { ProvidePlugin } = webpack

const { CLIENT_PORT, NODE_ENV, SERVER_PORT } = process.env

const isDevMode = NODE_ENV === 'development'

module.exports = {
  name: 'client',
  mode: NODE_ENV,
  target: 'web',
  devtool: isDevMode ? 'eval-source-map' : 'source-map',
  cache: true,
  entry: {
    app: 'src/client/index.tsx',
  },
  output: {
    path: path.resolve(__dirname, '../build/client'),
    filename: 'js/[name]/[name].js',
    assetModuleFilename: 'assets/[name].[ext]',
  },
  optimization: {
    minimizer: [new TerserPlugin({ extractComments: false }), new CssMinimizerPlugin()],
    runtimeChunk: {
      name: 'runtime',
    },
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
        },
      },
    },
  },
  devServer: isDevMode
    ? {
        hot: true,
        static: path.resolve(__dirname, '../public'),
        compress: false,
        host: '0.0.0.0',
        port: CLIENT_PORT,
        historyApiFallback: true,
        proxy: [
          {
            context: '/fake-api',
            target: 'http://ui-bb:' + SERVER_PORT,
            secure: false,
          },
        ],
      }
    : undefined,
  resolve: {
    plugins: [new TsconfigPathsPlugin()],
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    symlinks: false,
    cacheWithContext: false,
  },
  plugins: [
    new NodePolyfillPlugin(),
    new ProvidePlugin({ process: 'process/browser' }),
    ...(isDevMode
      ? [new webpack.EnvironmentPlugin([])]
      : [
          new BrotliPlugin({
            asset: '[file].br',
            test: /\.(js)$/,
          }),
          new CopyPlugin({
            patterns: [
              {
                from: path.resolve(__dirname, '../public'),
                to: path.resolve(__dirname, '../build/client'),
              },
            ],
          }),
        ]),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        include: path.resolve(__dirname, '../src'),
        loader: 'ts-loader',
        options: { configFile: 'tsconfig.webpack.json' },
      },
      {
        test: /\.scss$/,
        include: path.resolve(__dirname, '../src'),
        use: [
          {
            loader: 'style-loader',
            options: {
              insert: 'head',
              injectType: 'singletonStyleTag',
            },
          },
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                loadPaths: [path.resolve(__dirname, '../src/lib')],
              },
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        include: [
          path.resolve(__dirname, '../src/client/assets'),
          path.resolve(__dirname, '../src/lib/assets'),
        ],
        type: 'asset/resource',
      },
    ],
  },
}
