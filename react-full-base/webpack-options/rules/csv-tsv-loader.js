module.exports = {
  // csv-loader permite importar csv y usarlo en javascript
  // npm install --save-dev csv-loader
  test: /\.(csv|tsv)$/,
  use: ['csv-loader']
};
