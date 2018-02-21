const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function(env) {
  if (env) {
    return new HtmlWebpackPlugin({
      title: '',
      hash: true,
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        html5: true,
        minifyCSS: true,
        removeComments: true,
        removeEmptyAttributes: true
      }
    });
  } else {
    return new HtmlWebpackPlugin({
      title: ''
    });
  }
};
