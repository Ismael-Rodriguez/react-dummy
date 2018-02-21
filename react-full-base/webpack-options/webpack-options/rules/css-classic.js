const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function(env) {
  return {
    test: /\.css$/,
    use: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: 'css-loader'
    })
  };
};
