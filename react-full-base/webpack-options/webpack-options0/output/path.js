const path = require('path');

module.exports = function(env, { dirname, distFolder }) {
  return {
    path: path.resolve(dirname, distFolder)
  };
};
