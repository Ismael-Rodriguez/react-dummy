module.exports = function() {
  return {
    // xml
    result: {
      modules: {
        rules: [
          {
            test: /\.xml$/,
            use: ['xml-loader']
          }
        ]
      }
    },
    packages: ['xml-loader']
  };
};
