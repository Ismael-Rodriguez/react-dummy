const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = function(env, { dirname, distFolder }) {
  return {
    // borra el contenido del directorio especificado
    result: {
      plugins: [
        new CleanWebpackPlugin([path.resolve(dirname, distFolder)], {
          allowExternal: true
        })
      ]
    },
    packages: ['clean-webpack-plugin']
  };
};
