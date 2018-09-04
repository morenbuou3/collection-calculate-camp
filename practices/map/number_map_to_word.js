'use strict';
var number_map_to_word = function(collection){
  return collection.map(n => String.fromCharCode(n + 96));
};

module.exports = number_map_to_word;
