const webpack = require('webpack');

// This plugin will cause the relative path of the module to be displayed
// when HMR is enabled

module.exports = function() {
  return new webpack.NamedModulesPlugin();
};
