function School() {
 this.students = {};
}

School.prototype.roster = function() {
  return this.students;
};

School.prototype.grade = function(grade) {
  return this.students[grade] || [];
  
};

School.prototype.add = function(name, grade) {
  var currentClass = this.students[grade] || []; 
  currentClass.push(name);
  this.students[grade] = currentClass.sort();
};

module.exports = School;