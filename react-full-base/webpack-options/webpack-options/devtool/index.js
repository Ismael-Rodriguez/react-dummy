module.exports = function(env) {
  if (env) return 'source-map';
  else return 'inline-source-map';
};
