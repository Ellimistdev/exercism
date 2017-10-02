const alpha = 'abcdefghijklmnopqrstuvwxyz';

// if char is outside the range 'a'..'z', wraps the char back into the range.
function wrap(charCode) {
  if (charCode > 122) {
    return charCode - 26;
  } else if (charCode < 97) {
    return charCode + 26;
  }
  return charCode;
}

function generateKey() {
  let randomKey = '';
  for (let i = 0; i < 100; i += 1) {
    randomKey += alpha[Math.floor(Math.random() * alpha.length)];
  }
  return randomKey;
}

function Cipher(key) {
  if (key !== undefined && !key.match(/^[a-z]+$/)) {
    throw Error('Bad key');
  }
  this.key = key || generateKey();
}

Cipher.prototype.encode = function encode(clearText) {
  return this.generateOutput(clearText, true);
};

Cipher.prototype.decode = function decode(cipherText) {
  return this.generateOutput(cipherText, false);
};

// given a string, encodes or decodes the string based on the isEncoding bit
Cipher.prototype.generateOutput = function generateOutput(input, isEncoding) {
  let shift;
  let charCode;
  let val;
  let output = '';

  for (let i = 0; i < input.length; i += 1) {
    shift = alpha.indexOf(this.key[i % this.key.length]);
    val = (isEncoding === true)
      ? (input[i].charCodeAt() + shift)
      : (input[i].charCodeAt() - shift);
    charCode = wrap(val);
    output += String.fromCharCode(charCode);
  }
  return output;
};

module.exports = Cipher;
