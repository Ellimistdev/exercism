function Binary(num){
  this.num = num;
}


Binary.prototype.toDecimal = function(){
  if ((this.num.match(/[^01]/))) return 0;

  var sum = 0;
  var count = this.num.length - 1;
  
  for (var i = 0; i < this.num.length; i++){
    sum += this.num[i] * Math.pow(2, count);
    count--;
  }
  return sum;
};

module.exports = Binary;