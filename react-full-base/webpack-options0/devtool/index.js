module.exports = function(env) {
  return {
    // devtool puede ser un string que indica el tipo de devtool o false
    config: {
      result: {
        devtool: (() => {
          if (env === production) return 'source-map';
          else return 'inline-source-map';
        })()
      },
      packages: []
    }
  };
};
