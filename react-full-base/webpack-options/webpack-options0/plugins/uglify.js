const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = function(env) {
  if (env) return new UglifyJSPlugin({ sourceMap: true });
  return () => true;
};
