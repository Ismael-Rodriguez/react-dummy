module.exports = function(env, { entry }) {
  return {
    // entry puede ser un String o un objeto en los que cada clave da lugar
    // a un bundle concreto
    result: {
      entry: {
        main: entry
      }
    },
    packages: []
  };
};
