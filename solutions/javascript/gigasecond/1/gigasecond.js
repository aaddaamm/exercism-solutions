var Gigasecond = function(inputDate) {this.inputDate = inputDate};

Gigasecond.prototype.date = function() {
  var inputTime = this.inputDate.getTime();
  var gigasecondDate = new Date(inputTime + 1000000000000);
  return gigasecondDate;
};

module.exports = Gigasecond;