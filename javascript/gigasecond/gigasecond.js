function Gigasecond(startDate) {
  this.startDate = startDate;
}

Gigasecond.prototype.date = function date() {
  // gets ms since 1-1-1970 and adds 1 gigasecond in ms
  return new Date(this.startDate.getTime() + (10 ** 12));
};

module.exports = Gigasecond;
