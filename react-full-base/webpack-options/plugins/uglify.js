const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = function() {
  return new UglifyJSPlugin();
};
