'use strict';

function get_integer_interval(number_a, number_b) {
  //在这里写入代码
  const result = [...Array(Math.abs(number_a - number_b) + 1).keys()].map(n => n + Math.min(number_a, number_b));
  return number_a < number_b ? result : result.reverse();
}

module.exports = get_integer_interval;

