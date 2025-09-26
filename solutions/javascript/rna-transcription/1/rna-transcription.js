var DnaTranscriber = function () {};

DnaTranscriber.prototype.toRna = function(strand) {
  var rnaStrand = '';

  for(i = 0; i < strand.length; i++){
    switch(strand.charAt(i)) {
    case 'A':
      rnaStrand += 'U';
      break;
    case 'C':
      rnaStrand += 'G';
      break;
    case 'G':
      rnaStrand += 'C';
      break;
    case 'T':
      rnaStrand += 'A';
      break;
    default:
      break;
    }
  }
  return(rnaStrand);
};

module.exports = DnaTranscriber;