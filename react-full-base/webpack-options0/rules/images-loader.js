module.exports = function() {
  return {
    // png|svg|jpg|gif
    result: {
      modules: {
        rules: [
          {
            test: /\.(png|svg|jpg|gif)$/,
            use: ['file-loader']
          }
        ]
      }
    },
    packages: ['file-loader']
  };
};
