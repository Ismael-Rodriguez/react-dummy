const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = function(env, { dirname, distFolder }) {
  return new CleanWebpackPlugin([path.resolve(dirname, distFolder)], {
    allowExternal: true
  });
};
