var Bob = function() {};

Bob.prototype.hey = function(input) {
  var inputTrimmed = input.trim();

  if(inputTrimmed.length === 0) {
    return("Fine. Be that way!");
  }

  if(inputTrimmed.toUpperCase() === inputTrimmed && inputTrimmed.toLowerCase() !== inputTrimmed) {
    return("Whoa, chill out!");
  }

  if(inputTrimmed.indexOf('?') === inputTrimmed.length - 1) {
    return("Sure.");
  }

  return("Whatever.");
};

module.exports = Bob;