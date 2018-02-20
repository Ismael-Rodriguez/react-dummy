const path = require('path');

module.exports = function(env, { dirname, distFolder }) {
  return {
    contentBase: path.resolve(dirname, distFolder)
  };
};
