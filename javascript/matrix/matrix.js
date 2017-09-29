function Matrix(input) {
  this.input = input;
  this.rows = this.getRows();
  this.columns = this.getColumns();
}

Matrix.prototype.getRows = function getRows() {
  const rows = this.input.split('\n');
  for (let i = 0; i < rows.length; i += 1) {
    rows[i] = rows[i].split(/\s/);
    for (let j = 0; j < rows[i].length; j += 1) {
      rows[i][j] = parseInt(rows[i][j], 10);
    }
  }
  return rows;
};

Matrix.prototype.getColumns = function getColumns() {
  const columns = [];
  let column = [];
  let j = 0;
  while (j < this.rows[0].length) {
    for (let i = 0; i < this.rows.length; i += 1) {
      column.push(this.rows[i][j]);
    }
    columns.push(column);
    column = [];
    j += 1;
  }
  return columns;
};

module.exports = Matrix;
