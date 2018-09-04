'use strict';

function average_uneven(collection) {
  //在这里写入代码
  let odd = collection.filter(n => n % 2 !== 0);
  return odd.reduce((acc, num) => acc + num) / odd.length;

}

module.exports = average_uneven;
