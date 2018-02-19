module.exports = function() {
  return {
    test: /\.css$/,
    use: ['style-loader', 'css-loader']
  };
};
