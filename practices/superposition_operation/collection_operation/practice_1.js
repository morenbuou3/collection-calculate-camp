'use strict';

function hybrid_operation(collection) {
  //在这里写入代码
  return collection.map(n => n * 3 + 2).reduce((acc, num) => acc + num);
}

module.exports = hybrid_operation;

