function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  return (create_updated_collection_decrease(count_same_elements(collection_a), object_b));
}

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

function create_updated_collection_decrease(collection_a, object_b) {
  //在这里写入代码
  collection_a.map(n =>{
    if (object_b.value.includes(n.key)) {
      if(n.count >= 3) n.count -= parseInt(n.count / 3);
    }})
  return collection_a;
}

module.exports = create_updated_collection;
