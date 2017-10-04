const usedNames = {};

function ConvertSeed(seed) {
  const alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let name = '';
  let i = 0;

  for (i; i < 2; i += 1) {
    name += alpha[seed[i]];
  }
  for (i; i < seed.length; i += 1) {
    name += seed[i].toString();
  }
  return name;
}

function GenSeed() {
  const nameSeed = [];
  let i = 0;
  for (i; i < 2; i += 1) {
    nameSeed.push(Math.floor(Math.random() * 26));
  }
  for (i; i < 5; i += 1) {
    nameSeed.push(Math.floor(Math.random() * 10));
  }
  return nameSeed;
}

function Robot() {
  this.name = '';
  this.genName();
}

Robot.prototype.genName = function genName() {
  const seed = GenSeed();
  const name = ConvertSeed(seed);

  if (usedNames[name]) {
    this.genName();
  } else {
    usedNames[name] = true;
    this.name = name;
  }
};

Robot.prototype.reset = function reset() {
  this.genName();
};

module.exports = Robot;
