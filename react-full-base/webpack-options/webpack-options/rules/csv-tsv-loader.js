module.exports = function() {
  return {
    test: /\.(csv|tsv)$/,
    use: ['csv-loader']
  };
};
