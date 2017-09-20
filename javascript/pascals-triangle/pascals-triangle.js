function Triangle(num) {
  this.rows = [];
  this.lastRow = [];
  this.genRows(num);
}

Triangle.prototype.genRows = function(num) {
  var row = [];
  var j = -1;
  
  for (var i = 0; i < num; i++){
    while (j++ < i){
      var prev = this.lastRow[j-1] ? this.lastRow[j-1] : 0;
      var current = this.lastRow[j] ? this.lastRow[j] : 0;
      
      prev + current === 0 ? row.push(1) : row.push(current + prev);
    }
    this.rows.push(row);
    this.lastRow = this.rows[this.rows.length-1];
    // reset
    row = [];
    j = -1;
  }
};

module.exports = Triangle;