function Hamming() {}

Hamming.prototype.compute = function doCompute(strA, strB) {
  if (strA.length !== strB.length) {
    throw Error('DNA strands must be of equal length.');
  }
  const distance = strA.split('').filter((char, index) => char !== strB[index]);
  return distance.length;
};


module.exports = Hamming;
