const helpers = require('./webpack-options/helpers');
const paths = require('./webpack-options/paths.js');

// process.env.NODE_ENV  = production || undefined

module.exports = require('./webpack-options')(
  process.env.NODE_ENV,
  __dirname,
  paths
);
