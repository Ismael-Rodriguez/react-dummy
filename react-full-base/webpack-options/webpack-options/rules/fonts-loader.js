module.exports = function() {
  return {
    test: /\.(woff|woff2|eot|ttf|otf)$/,
    use: ['file-loader']
  };
};
