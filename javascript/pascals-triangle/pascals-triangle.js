function Triangle(num) {
  this.rows = [];
  this.lastRow = [];
  this.genRows(num);
}

Triangle.prototype.genRows = function genRows(num) {
  let row = [];
  let j = -1;

  for (let i = 0; i < num; i += 1) {
    while (j < i) {
      j += 1;
      const prev = this.lastRow[j - 1] ? this.lastRow[j - 1] : 0;
      const current = this.lastRow[j] ? this.lastRow[j] : 0;
      prev + current === 0 ? row.push(1) : row.push(current + prev);
    }
    this.rows.push(row);
    this.lastRow = row;
    // reset
    row = [];
    j = -1;
  }
};

module.exports = Triangle;
