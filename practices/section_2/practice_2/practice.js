function count_same_elements(collection) {
  //在这里写入代码
  var result = [];
  collection.forEach(item => {
    if (!result.find(element => element.key === item)) {
      if (item.length === 1) {
        result.push({key: item, count: collection.filter(element => element === item).length});
      } else {
        result.push({key: item.split("-")[0], count: Number.parseInt(item.split("-")[1])});
      }
    }
  });
  return result;
}

module.exports = count_same_elements;
