const paths = require('./paths.js');

/*
  Los distintos paquetes pueden tener los valores
  active      - true/false
  config      - array de funciones, cada función recibe como primer parametro el
                entorno (env) y como segundo parametro un objeto con el resto de
                argumentos que necesite la función
  packages    - paquetes que se necesitan instalar para esta opción
*/

module.exports = function(env) {
  return {
    rules: {
      css_classic: {
        // css
        // se creará un tag <style> con el css que importemos
        // la forma de usarlo es utilizar las clases declaradas en el css
        active: true,
        config: [require('./rules/css-classic')(env, {})],
        packages: ['css-loader', 'style-loader']
      },
      image_loader: {
        // png|svg|jpg|gif
        active: true,
        config: [require('./rules/images-loader')(env, {})],
        packages: ['file-loader']
      },
      fonts_loader: {
        // woff|woff2|eot|ttf|otf
        active: true,
        config: [require('./rules/fonts-loader')(env, {})],
        packages: ['file-loader']
      },
      csv_tsv_loader: {
        // csv|tsv
        active: false,
        config: [require('./rules/csv-tsv-loader')(env, {})],
        packages: ['csv-loader']
      },
      xml_loader: {
        // xml
        active: false,
        config: [require('./rules/xml-loader')(env, {})],
        packages: ['xml-loader']
      }
    },
    plugins: {
      clean: {
        // borra el contenido del directorio especificado
        active: true,
        config: [
          require('./plugins/clean')(env, { distFolder: paths.distFolder })
        ],
        packages: ['clean-webpack-plugin']
      },
      html: {
        // crea un archivo "index.html" y le añade el js generado
        active: true,
        config: [require('./plugins/html')(env, {})],
        packages: ['html-webpack-plugin']
      },
      hotModuleReplacement: {
        active: true,
        config: [
          require('./plugins/named-modules')(env, {}),
          require('./plugins/hot-module-replacement')(env, {})
        ],
        packages: []
      },
      uglify: {
        active: true,
        config: [require('./plugins/uglify')(env, {})],
        packages: ['uglifyjs-webpack-plugin']
      }
    },
    output: {
      conf: {
        active: true,
        config: [
          require('./output/filename')(env, {
            bundleFileName: paths.bundleFileName
          }),
          require('./output/path')(env, { distFolder: paths.distFolder })
        ],
        packages: []
      }
    }
  };
};
