var alpha = 'abcdefghijklmnopqrstuvwxyz';

function Cipher(key) { 
  if (key != undefined && !key.match(/^[a-z]+$/)){
    throw Error('Bad key');
  }
  this.key = key || generateKey();
}

Cipher.prototype.encode = function(clearText){
  var cipherText = this.generateOutput(clearText, true);
  return cipherText;
};

Cipher.prototype.decode = function(cipherText){ 
  var clearText = this.generateOutput(cipherText, false);
  return clearText;
};

// given a string, encodes or decodes the string based on the is_encoding bit
Cipher.prototype.generateOutput = function(input, is_encoding){
  var output = "";
  var shift, charCode, val;
  for (var i = 0; i < input.length; i++) {
    shift = alpha.indexOf(this.key[i % this.key.length]);
    val = (is_encoding == true) ? (input[i].charCodeAt() + shift) : (input[i].charCodeAt() - shift);
    charCode = wrap(val);
    output += String.fromCharCode(charCode);
  }
  return output;
};

function generateKey() {
  var randomKey = '';
	for (var i = 0; i < 100; i++) {
		randomKey += alpha[Math.floor(Math.random() * alpha.length)];
	}
	return randomKey;
}

// if char is outside the range 'a'..'z', wraps the char back into the range.
function wrap(charCode){
  if (charCode > 122) {
    return charCode - 26;
  } 
  else if (charCode < 97) {
    return charCode + 26;
  } else {
    return charCode;
  }
}

module.exports = Cipher;