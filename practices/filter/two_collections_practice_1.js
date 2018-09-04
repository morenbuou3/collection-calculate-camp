'use strict';

function choose_common_elements(collection_a, collection_b) {
  //在这里写入代码
  return Array.from(new Set(collection_a.filter(v => new Set(collection_b).has(v))));
}

module.exports = choose_common_elements;
