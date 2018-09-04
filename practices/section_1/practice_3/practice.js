function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  return collection_a.filter(n => new Set(object_b.value).has(n));
}

module.exports = collect_same_elements;
