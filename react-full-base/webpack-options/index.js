const paths = require('./paths.js');

module.exports = {
  rules: {
    css_classic: {
      // css
      // se creará un tag <style> con el css que importemos
      // la forma de usarlo es utilizar las clases declaradas en el css
      // npm install --save-dev css-loader
      // npm install --save-dev style-loader
      active: true,
      config: require('./rules/css-classic')
    },
    image_loader: {
      // png|svg|jpg|gif
      // npm install --save-dev file-loader
      active: true,
      config: require('./rules/images-loader')
    },
    fonts_loader: {
      // woff|woff2|eot|ttf|otf
      // npm install --save-dev file-loader
      active: true,
      config: require('./rules/fonts-loader')
    },
    csv_tsv_loader: {
      // csv|tsv
      // npm install --save-dev csv-loader
      active: false,
      config: require('./rules/csv-tsv-loader')
    },
    xml_loader: {
      // xml
      // npm install --save-dev xml-loader
      active: false,
      config: require('./rules/xml-loader')
    }
  },
  plugins: {
    clean: {
      // borra el contenido del directorio especificado
      active: true,
      config: require('./plugins/clean')(paths.distFolder)
    },
    html: {
      // crea un archivo "index.html" y le añade el js generado
      active: true,
      config: require('./plugins/html')()
    }
  }
};
