module.exports = (env, { dirname, distFolder }) => {
  return {
    // devServer es un objeto
    config: {
      result: {
        devServer: {
          contentBase: path.resolve(dirname, distFolder)
        }
      },
      packages: ['webpack-dev-server']
    }
  };
};
