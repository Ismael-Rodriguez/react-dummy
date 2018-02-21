const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function(env) {
  return {
    // crea un archivo "index.html" y le añade el js generado
    result: {
      plugins: [
        (() => {
          if (env === 'production') {
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
        })()
      ]
    },
    packages: ['html-webpack-plugin']
  };
};
