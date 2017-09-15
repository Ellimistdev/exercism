var alpha = 'abcdefghijklmnopqrstuvwxyz';

function Cipher(key) { 
  if (key != undefined && !key.match(/^[a-z]+$/)){
    throw Error('Bad key');
  }
  this.key = key || generateKey();
}

Cipher.prototype.encode = function(clearText){ 
  var cipherText = "";
  var self = this;
  
  clearText.split('').forEach(function(char, index) {
      var shift = alpha.indexOf(char) + alpha.indexOf(self.key[index]);
      if (shift >= alpha.length) {
        shift -= alpha.length;
      }
      cipherText += alpha[shift];
  });
  return cipherText;
};

Cipher.prototype.decode = function(cipherText){ 
  var clearText = "";
  var self = this;
  
  cipherText.split('').forEach(function(char, index) {
      var shift = alpha.indexOf(char) - alpha.indexOf(self.key[index]);
      if (shift < 0) {
        shift += alpha.length;
      }
      clearText += alpha[shift];
  });
  return clearText;
};

function generateKey() {
  var randomKey = '';
  
	for (var i = 0; i < 100; i++) {
		var randIndex = Math.floor(Math.random() * alpha.length);
		randomKey += alpha[randIndex];
	}
	return randomKey;
}

module.exports = Cipher;