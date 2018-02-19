const path = require('path');

const paths = require('./webpack-options/paths');

webPackConfig = {};

webPackConfig.entry = paths.entry;

webPackConfig.output = {
  filename: paths.bundleFileName,
  path: path.resolve(__dirname, paths.distFolder)
};

// #############################################################################
// PLUGINS
// #############################################################################
webPackConfig.plugins = [];

let plugins = webPackConfig.plugins;

let pluginsConfig = require('./webpack-options').plugins;

Object.keys(pluginsConfig).forEach(key => {
  if (pluginsConfig[key].active) plugins.push(pluginsConfig[key].config);
});

// #############################################################################
// END PLUGINS
// #############################################################################

webPackConfig.module = {};

// #############################################################################
// RULES
// #############################################################################
webPackConfig.module.rules = [];

let rules = webPackConfig.module.rules;

let rulesConfig = require('./webpack-options').rules;

Object.keys(rulesConfig).forEach(key => {
  if (rulesConfig[key].active) rules.push(rulesConfig[key].config);
});

// #############################################################################
// END RULES
// #############################################################################

module.exports = webPackConfig;
