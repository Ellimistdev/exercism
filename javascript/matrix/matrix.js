function Matrix(input) {
  this.input = input;
  this.rows = this.getRows();
  this.columns = this.getColumns();
}

Matrix.prototype.getRows = function(){
  var rows = this.input.split("\n");
  for (var i = 0; i < rows.length; i++){
    rows[i] = rows[i].split(/\s/);
    for (var j = 0; j < rows[i].length; j++){
      rows[i][j] = parseInt(rows[i][j]);
    }
  }
  return rows;
};

Matrix.prototype.getColumns = function(){
  var columns = [];
  var column = [];
  var j = 0;
  while (j < this.rows[0].length){
    for (var i = 0; i < this.rows.length; i++){
      column.push(this.rows[i][j]);
    }
  columns.push(column);
  column = [];
  j++;
  }
  return columns;
};

module.exports = Matrix;