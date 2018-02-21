const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = env => {
  return {
    // css
    // se creará un tag <style> con el css que importemos
    // la forma de usarlo es utilizar las clases declaradas en el css
    result: {
      modules: {
        rules: [
          {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
              fallback: 'style-loader',
              use: 'css-loader'
            })
          }
        ]
      },
      plugins: [
        new ExtractTextPlugin({
          filename: paths.styleFileName,
          disable: !(env === 'production')
        })
      ]
    },
    packages: ['css-loader', 'style-loader', 'extract-text-webpack-plugin']
  };
};
