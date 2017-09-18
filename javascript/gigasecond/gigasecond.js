function Gigasecond(startDate){
  this.startDate = startDate;
}

Gigasecond.prototype.date = function(){
  // gets ms since 1-1-1970 and adds 1 gigasecond in ms
  return new Date((this.startDate.getTime()) + (Math.pow(10, 9) * 1000));
};

module.exports = Gigasecond;