function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
  return collection_a.filter(n => new Set(collection_b).has(n));
}

module.exports = collect_same_elements;
