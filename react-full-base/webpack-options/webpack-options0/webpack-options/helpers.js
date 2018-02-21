const objResult = configObj => {
  let result = {};
  Object.keys(configObj).forEach(key => {
    if (configObj[key].active) Object.assign(result, ...configObj[key].config);
  });
  return result;
};

const arrayResult = configObj => {
  let result = [];
  Object.keys(configObj).forEach(key => {
    if (configObj[key].active) result.push(...configObj[key].config);
  });
  return result;
};

const stringResult = configObj => {
  let result = [];
  Object.keys(configObj).forEach(key => {
    if (configObj[key].active) result = configObj[key].config[0];
  });
  return result;
};

module.exports = { objResult, arrayResult, stringResult };
