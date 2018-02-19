const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = function(path) {
  return new CleanWebpackPlugin([path]);
};
