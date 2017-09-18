function PrimeFactors() {}

PrimeFactors.prototype.for = function(num){
  var testNum = num;
  var divisor = 2;
  var factors = [];
  
  while (testNum > 1){
    if (testNum % divisor === 0){
      testNum = testNum / divisor;
      factors.push(divisor);  
      // retry successful factor
      divisor--;
    }
  divisor++;
  }
  return factors;
};

module.exports = PrimeFactors;