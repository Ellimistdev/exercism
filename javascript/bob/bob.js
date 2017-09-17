function Bob() {}

Bob.prototype.hey = function(string){
  var prompt = string.trim();
  
  if (prompt === "") return "Fine. Be that way!";
  if (prompt === prompt.toUpperCase() && !prompt.match(/^[^a-zA-Z]+$/)) return "Whoa, chill out!";
  if (prompt.slice(-1) === '?') return "Sure.";
  return "Whatever.";
  
};

module.exports = Bob;