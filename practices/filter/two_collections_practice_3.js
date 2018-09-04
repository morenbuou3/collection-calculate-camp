'use strict';

function choose_divisible_integer(collection_a, collection_b) {
  //在这里写入代码
  return collection_a.filter(x => collection_b.filter(n => x % n === 0).length > 0);
}

module.exports = choose_divisible_integer;
