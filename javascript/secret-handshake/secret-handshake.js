function SecretHandshake(input) {
  if (!(/\d/).test(input)) {
    throw Error('Handshake must be a number');
  }
  this.dec = input;
  this.bin = this.toBin();
}

SecretHandshake.prototype.commands = function commands() {
  const handshake = [];
  let sequence = this.bin;
  let reverse = false;

  while (sequence > 0) {
    if (sequence - 10000 >= 0) {
      sequence -= 10000;
      reverse = true;
    } else if (sequence - 1000 >= 0) {
      sequence -= 1000;
      handshake.push('jump');
    } else if (sequence - 100 >= 0) {
      sequence -= 100;
      handshake.push('close your eyes');
    } else if (sequence - 10 >= 0) {
      sequence -= 10;
      handshake.push('double blink');
    } else if (sequence - 1 >= 0) {
      sequence -= 1;
      handshake.push('wink');
    }
  }
  if (reverse === false) {
    handshake.reverse();
  }
  return handshake;
};

SecretHandshake.prototype.toBin = function toBin() {
  let result = '';
  let num = this.dec;
  while (num > 0) {
    result += num % 2;
    num = Math.floor(num / 2);
  }
  return result.split('').reverse().join('');
};

module.exports = SecretHandshake;
