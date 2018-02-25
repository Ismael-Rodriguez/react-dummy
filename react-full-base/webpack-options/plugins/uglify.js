const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = function(env) {
  return {
    // crea un archivo "index.html" y le añade el js generado
    result: {
      plugins: [
        (() => {
          if (env === 'production')
            return new UglifyJSPlugin({ sourceMap: true });
          return () => true;
        })()
      ]
    },
    packages: ['uglifyjs-webpack-plugin']
  };
};
