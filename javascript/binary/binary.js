function Binary(num) {
  this.num = num;
}

Binary.prototype.toDecimal = function toDecimal() {
  if ((this.num.match(/[^01]/))) return 0;

  let sum = 0;
  let count = this.num.length - 1;

  for (let i = 0; i < this.num.length; i += 1) {
    sum += this.num[i] * (2 ** count);
    count -= 1;
  }
  return sum;
};

module.exports = Binary;
