const webpack = require('webpack')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = {
  mode: 'development',
  devServer: {
    historyApiFallback: true,
    hot: true,
    open: true,
    proxy: {
      '/': {
        target: 'http://localhost:3000/api/',
        secure: false,
      },
    },
  },
  devtool: 'cheap-module-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.name': JSON.stringify('Sohan'),
    }),
    new ReactRefreshWebpackPlugin(),
  ],
}
