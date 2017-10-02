function DnaTranscriber() {}

DnaTranscriber.prototype.toRna = function toRna(dna) {
  let rna = '';
  const nucleotides = {
    G: 'C',
    C: 'G',
    T: 'A',
    A: 'U',
  };
  Array.from(dna).map((nucleotide) => {
    if (!nucleotides[nucleotide]) {
      throw Error('Invalid input');
    } else {
      rna += nucleotides[nucleotide];
    }
  });
  return rna;
};

module.exports = DnaTranscriber;
