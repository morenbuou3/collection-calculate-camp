'use strict';

function grouping_count(collection) {
  //在这里写入代码
  const map = {};
  collection.map(n => n in map ? map[n] += 1 : map[n] = 1);
  return map;
}

module.exports = grouping_count;
