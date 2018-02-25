module.exports = function() {
  return {
    // xml
    result: {
      module: {
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
