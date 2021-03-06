var path = require('path')
var config = require('./base');
var webpack = require('webpack')

module.exports = Object.assign({}, config, {
  entry: './src/ClickConfirm.vue',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'click-confirm.js',
    library: ['click-confirm'],
    libraryTarget: 'umd'
  },
  devtool: false,
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin()
  ]
});