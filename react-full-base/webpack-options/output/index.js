const path = require('path');

module.exports = function(env, { dirname, distFolder, bundleFileName }) {
  return {
    // output es un object
    result: {
      output: {
        filename: bundleFileName,
        path: path.resolve(dirname, distFolder)
      }
    },
    packages: []
  };
};
