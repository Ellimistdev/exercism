class List {
  constructor(values = []) {
    this.values = values;
  }

  append(list) {
    list.values.forEach((value) => {
      this.values.push(value);
    });

    return this;
  }

  concat(list) {
    return this.append(list);
  }

  filter(func) {
    const filtered = [];

    this.values.forEach((value) => {
      if (func(value)) {
        filtered.push(value);
      }
    });

    return new List(filtered);
  }

  length() {
    return this.values.length;
  }

  map(func) {
    this.values.forEach((entry, index) => {
      this.values[index] = func(entry);
    });

    return this;
  }

  foldl(func, accumulator) {
    let folded = accumulator;
    this.values.forEach((entry, index) => {
      folded = func(this.values[index], folded);
    });

    return folded;
  }

  foldr(func, accumulator) {
    return this.reverse().foldl(func, accumulator);
  }

  reverse() {
    const reversed = [];
    const length = this.values.length - 1;

    this.values.forEach((entry, index) => {
      reversed[index] = this.values[length - index];
    });

    return new List(reversed);
  }
}

module.exports = List;
