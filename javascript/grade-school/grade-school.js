function School() {
  this.students = {};
}

School.prototype.roster = function roster() {
  return this.students;
};

School.prototype.grade = function grade(value) {
  return this.students[value] || [];
};

School.prototype.add = function add(name, grade) {
  const currentClass = this.students[grade] || [];
  currentClass.push(name);
  this.students[grade] = currentClass.sort();
};

module.exports = School;
