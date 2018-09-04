'use strict';
var number_map_to_word_over_26 = function(collection){
  return collection.map(n => convert(n));
};


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
module.exports = number_map_to_word_over_26;
