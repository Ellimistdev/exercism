function List(values){
  this.values = values || [];
}

List.prototype.append = function append(vals) {
  (vals.values).map(val => {
    this.values.push(val);
  });
  return this.values;
};

List.prototype.concat = function concat(list) {
  this.append(list).sort();
  return this.values;
};

List.prototype.filter = function filter(func) {
  let filtered = [];
  this.values.forEach(function(value) {
    if (func(value)){
      filtered.push(value);
    }
  });
  this.values = filtered;
};

List.prototype.length = function length() {
  let length = 0;
  this.values.forEach(function(entry) {
    length += 1;
  });
  return length;
};


List.prototype.map = function map(func) {
  let mapped = [];
  this.values.forEach(function(element) {
    mapped.push(func(element));
  });
  this.values = mapped;
};

List.prototype.foldl = function foldl(func, val) {

};

List.prototype.foldr = function foldr(func, val) {

};

List.prototype.reverse = function reverse() {

};

module.exports = List;
