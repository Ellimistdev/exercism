function PrimeFactors() {}

PrimeFactors.prototype.for = function(num) {
  let testNum = num;
  let divisor = 2;
  const factors = [];

  while (testNum > 1) {
    if (testNum % divisor === 0) {
      testNum /= divisor;
      factors.push(divisor);
      // retry successful factor
      divisor -= 1;
    }
    divisor += 1;
  }
  return factors;
};

module.exports = PrimeFactors;
