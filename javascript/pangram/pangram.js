var alpha = "abcdefghijklmnopqrstuvwxyz";

function Pangram(input){
  this.input = input.toLowerCase();
}

// match each char [a-z], ignoring all other chars, return all matches. If no matches, create []
Pangram.prototype.isPangram = function() {
  // verify the result has 26 unique elements
  return (this.input.match(/([a-z])(?!.*\1)/g) || []).length ===26;
};

module.exports = Pangram;