const helpers = require('./helpers');
const path = require('path');

/*
  Los distintos paquetes pueden tener los valores
  active      - true/false
  packages    - paquetes que se necesitan instalar para esta opción
*/

const configChunks = (env, dirname, paths) => {
  return {
    entry: require('./entry')(env, { entry: paths.entry }),
    output: require('./output')(env, {
      dirname: dirname,
      distFolder: paths.distFolder,
      bundleFileName: paths.bundleFileName
    }),
    devtool: require('./devtool')(env, {}),
    devServer: require('./devServer')(env, {
      dirname: dirname,
      distFolder: paths.distFolder
    }),
    css_classic_loader: require('./rules/css-classic')(env, {
      styleFileName: paths.styleFileName
    }),
    images_loader: require('./rules/images-loader')(env, {}),
    fonts_loader: require('./rules/fonts-loader')(env, {}),
    csv_tsv_loader: require('./rules/csv-tsv-loader')(env, {}),
    xml_loader: require('./rules/xml-loader')(env, {}),
    clean_plugin: require('./plugins/clean')(env, {
      dirname,
      distFolder: paths.distFolder
    }),
    html_plugin: require('./plugins/html')(env, {}),
    hot_module_replacement_plugin: require('./plugins/hot-module-replacement')(
      env,
      {}
    ),
    uglify_plugin: require('./plugins/uglify')(env, {}),
    bundle_analyzer_plugin: require('./plugins/bundleAnalyzer')(env, {})
  };
};

const webpackConfig = {
  entry: true,
  output: true,
  devtool: true,
  devServer: true,
  // loaders
  css_classic_loader: true,
  images_loader: true,
  fonts_loader: true,
  csv_tsv_loader: true,
  xml_loader: true,
  // plugins
  clean_plugin: true,
  html_plugin: true,
  hot_module_replacement_plugin: true,
  uglify_plugin: true,
  bundle_analyzer_plugin: false
};

const getConfig = (env, dirname, paths) => {
  let webpackResultConfig = {};
  const configuredChunks = configChunks(env, dirname, paths);

  helpers.iterateWebpackConfig(
    webpackConfig,
    configuredChunks,
    webpackResultConfig
  );

  return webpackResultConfig;
};

module.exports = getConfig;
