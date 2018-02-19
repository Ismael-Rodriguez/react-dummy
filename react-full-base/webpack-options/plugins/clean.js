const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = function(env, { distFolder }) {
  return new CleanWebpackPlugin([distFolder]);
};
