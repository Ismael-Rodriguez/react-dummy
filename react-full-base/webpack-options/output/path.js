const path = require('path');

module.exports = function(env, { distFolder }) {
  return {
    path: path.resolve(__dirname, distFolder)
  };
};
