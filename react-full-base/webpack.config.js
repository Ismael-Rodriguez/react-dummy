const path = require('path');

const paths = {
  entry: './src/index.js',
  bundleFileName: 'bundle.js',
  distFolder: 'dist'
};

module.exports = {
  entry: paths.entry,
  output: {
    filename: paths.bundleFileName,
    path: path.resolve(__dirname, paths.distFolder)
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // npm install css-loader
        // npm install style-loader
        // se creará un tag <style> con el css que importemos
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};
