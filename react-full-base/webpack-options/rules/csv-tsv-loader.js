module.exports = function() {
  return {
    // csv|tsv
    result: {
      module: {
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
