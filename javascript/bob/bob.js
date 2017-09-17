function Bob() {}

Bob.prototype.hey = function(string){
  var out = "";
  var prompt = string.replace(/\s/g, "");
  
  if (prompt === "") {
    out = "Fine. Be that way!";
  } else if (prompt === prompt.toUpperCase() && !prompt.match(/^[^a-zA-Z]+$/)){
    out = "Whoa, chill out!";
  } else if (prompt.slice(-1) === '?'){
    out = "Sure.";
  } else {
    out = "Whatever.";
  }
  
  return out;
};

module.exports = Bob;