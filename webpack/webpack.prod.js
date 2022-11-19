const webpack = require('webpack')
// const BundleAnalyzerPlugin =
//   require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.name': JSON.stringify('Snicker'),
      BASE_URL: JSON.stringify('https://animetube-server.herokuapp.com/api'),
    }),
    // new BundleAnalyzerPlugin(),
  ],
}
