'use strict';

function double_to_one(collection) {
  //在这里写入代码
  return Array.from(new Set(collection.reduce((acc, val) => Array.isArray(val) ? acc.concat(double_to_one(val)) : acc.concat(val), [])));
}

module.exports = double_to_one;
