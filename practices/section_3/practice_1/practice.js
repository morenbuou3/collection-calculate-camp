function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  collection_a.map(n =>{
    if (object_b.value.includes(n.key)) {
      n.count--
    }})
  return collection_a;
}

module.exports = create_updated_collection;
