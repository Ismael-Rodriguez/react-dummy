const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function(env, { styleFileName }) {
  return new ExtractTextPlugin({
    filename: styleFileName,
    disable: !!!env
  });
};
