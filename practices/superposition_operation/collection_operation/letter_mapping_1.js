'use strict';

function even_to_letter(collection) {
  //在这里写入代码
  return collection.filter(n => n % 2 === 0).map(m => String.fromCharCode(m + 96));
}

module.exports = even_to_letter;
