/**
 * webpack production mode settings
 */

const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  plugins: [new CleanWebpackPlugin(['./dist']), new UglifyJSPlugin()],
});
