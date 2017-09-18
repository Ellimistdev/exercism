const EARTH_ORBITAL_S   = 31557600;
const MERCURY_ORBITAL_S = 7600543.81992;
const VENUS_ORBITAL_S   = 19414149.052176;
const MARS_ORBITAL_S    = 59354032.69008;
const JUPITER_ORBITAL_S = 374355659.124;
const SATURN_ORBITAL_S  = 929292362.8848;
const URANUS_ORBITAL_S  = 2651370019.3296;
const NEPTUNE_ORBITAL_S = 5200418560.032;

function SpaceAge(seconds){
  this.seconds = seconds;
}

SpaceAge.prototype.onEarth = function(){
  return this.calcAge(EARTH_ORBITAL_S);
};

SpaceAge.prototype.onMercury = function(){
  return this.calcAge(MERCURY_ORBITAL_S);
};

SpaceAge.prototype.onVenus = function(){
  return this.calcAge(VENUS_ORBITAL_S);
};

SpaceAge.prototype.onMars = function(){
  return this.calcAge(MARS_ORBITAL_S);
};

SpaceAge.prototype.onJupiter = function(){
  return this.calcAge(JUPITER_ORBITAL_S);
};

SpaceAge.prototype.onSaturn = function(){
  return this.calcAge(SATURN_ORBITAL_S);
};

SpaceAge.prototype.onUranus = function(){
  return this.calcAge(URANUS_ORBITAL_S);
};

SpaceAge.prototype.onNeptune = function(){
  return this.calcAge(NEPTUNE_ORBITAL_S);
};

SpaceAge.prototype.calcAge = function(orbital){
  return parseFloat((this.seconds / orbital).toFixed(2));
};

module.exports = SpaceAge;