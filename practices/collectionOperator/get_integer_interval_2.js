'use strict';

function get_integer_interval_2(number_a, number_b) {
  //在这里写入代码
  const result = [...Array(Math.abs(number_a - number_b) + 1).keys()].map(n => n + Math.min(number_a, number_b)).filter(n => n % 2 === 0);
  return number_a < number_b ? result : result.reverse();
}

module.exports = get_integer_interval_2;
