'use strict';

function compute_median(collection) {
  //在这里写入代码
  const result = collection.sort((a, b) => a - b);
  return result.length % 2 === 0 ? (result[result.length / 2 - 1] + result[result.length / 2]) / 2 : result[Math.floor(result.length / 2)];
}

module.exports = compute_median;


