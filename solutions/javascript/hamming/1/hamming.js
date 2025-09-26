var Hamming = function () {};

Hamming.prototype.compute = function(strandA, strandB) {
  if(strandB.length !== strandA.length) {
    throw new Error('DNA strands must be of equal length.');
  }

  var count = 0;

  for(i = 0; i < strandA.length; i++ ) {
    if(strandA.charAt(i) !== strandB.charAt(i)) {
      count++;
    }
  }

  return(count);
};

module.exports = Hamming;