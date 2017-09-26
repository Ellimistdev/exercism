var usedNames = [];

function Robot() {
  this.name;
  this.genName();
}

Robot.prototype.genName = function() {
  var seed = GenSeed();
  var name = ConvertSeed(seed);
  
  if (usedNames.includes(name)){
    this.genName();
  } else {
    usedNames.push(name);
    this.name = name;
  }
};

Robot.prototype.reset = function(){
  this.genName();
};

function ConvertSeed(seed){
  var alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var name = "";
  var i = 0;
  
  for (i; i < 2; i++){
    name += alpha[seed[i]];
  }
  for (i; i < seed.length; i++){
    name += seed[i].toString();
  }
  return name;
}

function GenSeed(){
  var nameSeed = [];
  var i = 0;
  for (i; i < 2; i++){
    nameSeed.push(Math.floor(Math.random() * 25));
  }
  for (i; i < 5; i++){
    nameSeed.push(Math.floor(Math.random() * 9));
  }
  return nameSeed;
}

module.exports = Robot;