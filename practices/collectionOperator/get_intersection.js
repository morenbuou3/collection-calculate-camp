'use strict';

function get_intersection(collection_a, collection_b) {
  //在这里写入代码
  return Array.from(new Set(collection_b.filter(v => new Set(collection_a).has(v))));
}

module.exports = get_intersection;
