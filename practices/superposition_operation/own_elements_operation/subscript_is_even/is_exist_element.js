'use strict';
var is_exist_element = function(collection,element){
  return collection.filter((item, index) => index % 2 === 0 && item === element).length > 0;
};
module.exports = is_exist_element;
