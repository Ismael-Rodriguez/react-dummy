const path = require('path');

module.exports = (env, { dirname, distFolder }) => {
  return {
    // devServer es un objeto
    result: {
      devServer: {
        contentBase: path.resolve(dirname, distFolder)
      }
    },
    packages: ['webpack-dev-server']
  };
};
