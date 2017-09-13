function Cipher(key) { 
  console.log("'" + key + "'");
  if (key != undefined && !key.match(/^[a-z]+$/)){
    throw Error('Bad key');
  }
  
  this.key = key || generateKey();



  
}

Cipher.prototype.encode = function(plainText){ 
  return plainText;
};

Cipher.prototype.decode = function(cipher){ 
  return cipher;
};

function generateKey() {

}


module.exports = Cipher;

