function iterateWebpackConfig(webpackConfig, configuredChunks, resultObj) {
  Object.keys(webpackConfig).forEach(isActive => {
    if (webpackConfig[isActive]) {
      iterateObj(configuredChunks[isActive]['result'], resultObj);
    }
  });
}

function iterateObj(configObj, resultObj) {
  Object.keys(configObj).forEach(confKey => {
    if (isUndefined(resultObj[confKey])) {
      resultObj[confKey] = configObj[confKey];
    } else if (isArray(resultObj[confKey])) {
      resultObj[confKey].push(...configObj[confKey]);
    } else if (!isObject(resultObj[confKey])) {
      resultObj[confKey] = configObj[confKey];
    } else if (isObject(resultObj[confKey])) {
      iterateObj(configObj[confKey], resultObj[confKey]);
    }
  });
}

function isUndefined(testUndefined) {
  return Object.prototype.toString.call(testUndefined) === '[object Undefined]';
}

function isArray(testArray) {
  return Object.prototype.toString.call(testArray) === '[object Array]';
}

function isObject(testObject) {
  return Object.prototype.toString.call(testObject) === '[object Object]';
}

module.exports = { iterateWebpackConfig };
