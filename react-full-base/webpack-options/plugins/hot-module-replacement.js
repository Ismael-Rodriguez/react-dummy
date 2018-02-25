const webpack = require('webpack');

module.exports = function() {
  return {
    // crea un archivo "index.html" y le añade el js generado
    result: {
      plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
      ]
    },
    packages: []
  };
};
