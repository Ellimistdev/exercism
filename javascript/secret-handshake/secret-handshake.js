function SecretHandshake(input) {
  if (!(/\d/).test(input)){
   throw Error("Handshake must be a number");
  }
  this._dec = input;
  this._bin = this.to_bin();
}

SecretHandshake.prototype.commands = function() {
  var handshake = [];
  var commands = this._bin;
  var reverse = false;
  
  while (commands > 0){
    if (commands - 10000 >= 0){
      commands -= 10000;
      reverse = true;
    } else if (commands - 1000 >= 0){
      commands -= 1000;
      handshake.push("jump");
    } else if (commands - 100 >= 0){
      commands -= 100;
      handshake.push("close your eyes");
    } else if (commands - 10 >= 0){
      commands -= 10;
      handshake.push("double blink");
    } else if (commands - 1 >= 0){
      commands -= 1;
      handshake.push("wink");
    }
  }
  if (reverse === false){
    handshake.reverse();
  }
  return handshake;
};

SecretHandshake.prototype.to_bin = function() {
  var result = "";
  var num = this._dec;
  while (num > 0){
    result += num % 2;
    num = Math.floor(num / 2);
  }
  return result.split("").reverse().join("");
};

module.exports = SecretHandshake;