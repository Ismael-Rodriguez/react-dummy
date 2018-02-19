const path = require('path');

const paths = require('./webpack-options/paths');

// process.env.NODE_ENV  production / undefined
webPackOptions = require('./webpack-options')(process.env.NODE_ENV);

webPackConfig = {};

webPackConfig.entry = paths.entry;

// #############################################################################
// OUTPUT
// #############################################################################
webPackConfig.output = {};

let output = webPackConfig.output;

let outPutConfig = webPackOptions.output;

Object.keys(outPutConfig).forEach(key => {
  if (outPutConfig[key].active)
    Object.assign(webPackConfig.output, ...outPutConfig[key].config);
});
// #############################################################################
// OUTPUT END
// #############################################################################

webPackConfig.devtool = 'inline-source-map';

webPackConfig.devServer = {
  // npm install --save-dev webpack-dev-server
  contentBase: path.resolve(__dirname, paths.distFolder)
};

// #############################################################################
// PLUGINS
// #############################################################################
webPackConfig.plugins = [];

let plugins = webPackConfig.plugins;

let pluginsConfig = webPackOptions.plugins;

Object.keys(pluginsConfig).forEach(key => {
  if (pluginsConfig[key].active) plugins.push(...pluginsConfig[key].config);
});
// #############################################################################
// PLUGINS END
// #############################################################################

webPackConfig.module = {};

// #############################################################################
// RULES
// #############################################################################
webPackConfig.module.rules = [];

let rules = webPackConfig.module.rules;

let rulesConfig = webPackOptions.rules;

Object.keys(rulesConfig).forEach(key => {
  if (rulesConfig[key].active) rules.push(...rulesConfig[key].config);
});
// #############################################################################
// RULES END
// #############################################################################

module.exports = webPackConfig;
