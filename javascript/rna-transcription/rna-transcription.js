var DnaTranscriber = function() {

};

DnaTranscriber.prototype.toRna = function(dna) {
    var rna = "";
 
    for (var nucleotide of dna) {
    
        switch(nucleotide) {
          case 'G':
           rna += 'C';
           break;
          case 'C':
           rna += 'G';
           break;
          case 'T':
           rna += 'A';
           break;
          case 'A': 
           rna += 'U';
           break;
          default:
           throw Error('Invalid input');
        }
    }
    return rna;
};

module.exports = DnaTranscriber;