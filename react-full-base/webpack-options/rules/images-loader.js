module.exports = function() {
  return {
    test: /\.(png|svg|jpg|gif)$/,
    use: ['file-loader']
  };
};
