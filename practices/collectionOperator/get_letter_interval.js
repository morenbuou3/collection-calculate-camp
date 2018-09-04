'use strict';

function get_letter_interval(number_a, number_b) {
  //在这里写入代码
  const result = [...Array(Math.abs(number_a - number_b) + 1).keys()].map(n => String.fromCharCode(n + Math.min(number_a, number_b) + 96));
  return number_a < number_b ? result : result.reverse();
}

module.exports = get_letter_interval;
