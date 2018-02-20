const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function(env) {
  // if (env) {
  //   return {
  //     test: /\.css$/,
  //     use: ExtractTextPlugin.extract({
  //       fallback: 'style-loader',
  //       use: 'css-loader'
  //     })
  //   };
  // } else {
  //   return {
  //     test: /\.css$/,
  //     use: ['style-loader', 'css-loader']
  //   };
  // }
  return {
    test: /\.css$/,
    use: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: 'css-loader'
    })
  };
};
