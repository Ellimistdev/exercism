var DnaTranscriber = function() {

};

DnaTranscriber.prototype.toRna = function(input) {
    this.dna = input;
    this.rna = "";
 
    for (var nucleotide of this.dna) {
    
        switch(nucleotide) {
          case 'G':
           this.rna += 'C';
           break;
          case 'C':
           this.rna += 'G';
           break;
          case 'T':
           this.rna += 'A';
           break;
          case 'A': 
           this.rna += 'U';
           break;
          default:
           throw Error('Invalid input');
        }
    }
    return this.rna;
};

module.exports = DnaTranscriber;