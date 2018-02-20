const path = require('path');

const paths = require('./webpack-options/paths');
const helpers = require('./webpack-options/helpers');

// process.env.NODE_ENV  = production || undefined
webPackOptions = require('./webpack-options')(process.env.NODE_ENV, __dirname);

const resultTypes = {
  OBJECT: 'object',
  ARRAY: 'array',
  STRING: 'string'
};

const getConf = (configObj, type) => {
  if (type === resultTypes.OBJECT) return helpers.objResult(configObj);
  if (type === resultTypes.ARRAY) return helpers.arrayResult(configObj);
  if (type === resultTypes.STRING) return helpers.stringResult(configObj);
};

webPackConfig = {};
webPackConfig.entry = getConf(webPackOptions.entry, resultTypes.STRING);
webPackConfig.output = getConf(webPackOptions.output, resultTypes.OBJECT);
webPackConfig.devtool = getConf(webPackOptions.devtool, resultTypes.STRING);
webPackConfig.devServer = getConf(webPackOptions.devServer, resultTypes.OBJECT);
webPackConfig.plugins = getConf(webPackOptions.plugins, resultTypes.ARRAY);
webPackConfig.module = {};
webPackConfig.module.rules = getConf(webPackOptions.rules, resultTypes.ARRAY);

module.exports = webPackConfig;
