'use strict';

function calculate_elements_sum(collection, element) {
  //在这里写入代码
  return collection.length - collection.reverse().findIndex(n => n === element) - 1;
}

module.exports = calculate_elements_sum;
