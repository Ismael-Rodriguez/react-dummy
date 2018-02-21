module.exports = function(env, { bundleFileName, distFolder }) {
  return {
    // output es un object
    config: {
      result: {
        output: {
          filename: bundleFileName,
          output: distFolder
        }
      },
      packages: []
    }
  };
};
