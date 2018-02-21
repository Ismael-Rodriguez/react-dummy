module.exports = function() {
  return {
    // csv|tsv
    result: {
      modules: {
        rules: [
          {
            test: /\.(csv|tsv)$/,
            use: ['csv-loader']
          }
        ]
      }
    },
    packages: ['csv-loader']
  };
};
