'use strict';

function get_letter_interval_2(number_a, number_b) {
  //在这里写入代码
  const result = [...Array(Math.abs(number_a - number_b) + 1).keys()].map(n => n + Math.min(number_a, number_b));
  const resultA = number_a < number_b ? result : result.reverse();
  return resultA.map(num => convert(num));
}

function convert(num){
  var result = [];
  while(num){
    var t = num % 26;
    if(!t){
      t = 26;
      -- num;
    }
    result.push(String.fromCodePoint(t + 96));
    num = ~~(num / 26);
  }
  return result.reverse().join('');
}

module.exports = get_letter_interval_2;

