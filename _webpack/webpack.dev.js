const merge = require('webpack-merge');
const path = require('path');

const CommonConfig = require('./webpack.common');

module.exports = merge(CommonConfig, {
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, '../_dist'),
    compress: true,
    port: 8001,
  },
});