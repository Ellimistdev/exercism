function Year(input) {
  this.year = input;
}

Year.prototype.isLeap = function isLeap() {
  if ((this.year % 100 === 0) && !(this.year % 400 === 0)) {
    return false;
  } else if (this.year % 4 === 0) {
    return true;
  }
  return false;
};

module.exports = Year;
