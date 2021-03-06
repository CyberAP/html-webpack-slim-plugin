var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackSlimPlugin = require('../..');
var webpackMajorVersion = require('webpack/package.json').version.split('.')[0];

module.exports = {
  entry: './example.js',
  output: {
    path: path.join(__dirname, 'dist/webpack-' + webpackMajorVersion),
    publicPath: '',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.css$/, use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' }) },
      { test: /\.png$/, use: 'file-loader' }
    ]
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
    new HtmlWebpackPlugin({
      template: 'template.slim',
      filename: 'layout.slim',
      inject: 'head'
    }),
    new HtmlWebpackPlugin({
      template: 'template2.slim',
      filename: 'layout2.slim',
      inject: 'body'
    }),
    new HtmlWebpackPlugin({
      template: 'template2-tab.slim',
      filename: 'layout2-tab.slim',
      inject: 'body'
    }),
    new HtmlWebpackSlimPlugin()
  ]
};
