module.exports = function() {
  return {
    // woff|woff2|eot|ttf|otf
    result: {
      modules: {
        rules: [
          {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: ['file-loader']
          }
        ]
      }
    },
    packages: ['file-loader']
  };
};
