const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;

module.exports = function() {
  return {
    // crea un archivo "index.html" y le añade el js generado
    result: {
      plugins: [new BundleAnalyzerPlugin()]
    },
    packages: ['webpack-bundle-analyzer']
  };
};
