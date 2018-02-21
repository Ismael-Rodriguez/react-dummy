const path = require('path');

module.exports = function(env, { dirname, distFolder }) {
  return {
    // borra el contenido del directorio especificado
    result: {
      plugins: [
        new CleanWebpackPlugin([path.resolve(dirname, paths.distFolder)], {
          allowExternal: true
        })
      ]
    },
    packages: ['clean-webpack-plugin']
  };
};
