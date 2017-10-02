class ArgumentError extends Error {}

function WordProblem(question) {
  this.question = question;
  this.problem = this.getProblem();
  this.operation = this.parseProblem();
}

WordProblem.prototype.getProblem = function getProblem() {
  return this.question.replace(/What is /, '');
};

WordProblem.prototype.parseProblem = function parseProblem() {
  const work = this.problem.split(' ');
  const operation = [];
  for (let i = 0; i < work.length; i += 1) {
    const int = parseInt(work[i], 10);
    if (int) {
      operation.push(int);
    } else if (!(work[i] === 'by')) {
      operation.push(work[i]);
    }
  }
  return operation;
};

WordProblem.prototype.answer = function answer() {
  const op = this.operation;
  while (op.length > 1) {
    const result = this.processOperation(op[0], op[1], op[2]);
    op.splice(0, 3);
    op.unshift(result);
  }
  return op[0];
};

WordProblem.prototype.processOperation = function processOperation(operandA, operator, operandB) {
  switch (operator) {
    case 'plus':
      return operandA + operandB;
    case 'minus':
      return operandA - operandB;
    case 'multiplied':
      return operandA * operandB;
    case 'divided':
      return operandA / operandB;
    default:
      throw new ArgumentError();
  }
};

module.exports = { WordProblem, ArgumentError };
