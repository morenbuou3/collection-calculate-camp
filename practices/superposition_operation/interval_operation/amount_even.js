'use strict';

function amount_even(collection) {
  //在这里写入代码
  return collection.filter(n => n % 2 === 0).reduce((acc, num) => acc + num);
}

module.exports = amount_even;
