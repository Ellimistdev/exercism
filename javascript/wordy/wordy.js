'use strict'; 
function WordProblem(question) {
  this.question = question;
  this.problem = this.getProblem();
  this.operation = this.parseProblem();
}

WordProblem.prototype.getProblem = function(){
  return this.question.replace(/What is /, '');
};

WordProblem.prototype.parseProblem = function(){
  var work = this.problem.split(" ");
  var operation = [];
  for (var i = 0; i < work.length; i++){
    var int = parseInt(work[i], 10);
    if (int){
      operation.push(int);
    } else if (work[i] === "by"){
      continue;
    } else {
      operation.push(work[i]);
    }
  }
  return operation;
};

WordProblem.prototype.answer = function(){
  var op = this.operation;
  while (op.length > 1){
    var result = this.processOperation(op[0], op[1], op[2]);
    op.splice(0,3);
    op.unshift(result);
  }
  return op[0];
};

WordProblem.prototype.processOperation = function(operandA, operator, operandB){
  switch(operator){
    case "plus":
      return operandA + operandB;
    case "minus":
      return operandA - operandB;
    case "multiplied":
      return operandA * operandB;
    case "divided":
      return operandA / operandB;
    default:
      throw new ArgumentError();
  }
};

class ArgumentError extends Error {}

module.exports = {
  WordProblem: WordProblem,
  ArgumentError: ArgumentError
};
