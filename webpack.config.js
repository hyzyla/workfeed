const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
    allowedHosts: [
        '.gitpod.io'
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Example',
      filename: 'index.html',
      template: 'src/pages/index.html'
    }),
    new CleanWebpackPlugin(),
  ],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};