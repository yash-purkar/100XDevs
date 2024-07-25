/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note:
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

const a = new Calculator();
// {result : 0}
a.add(5);
// 0 + 5
// {result: 5}
class Calculator {
  constructor() {
    this.result = 0;
  }

  add(num) {
    this.result += num;
  }

  subtract(num) {
    this.result -= num;
  }

  multiply(num) {
    this.result *= num;
  }

  divide(num) {
    const division = this.result / num;
  
    if (division && !(division == "Infinity")) {
      this.result = division;
    } else {
      throw new Error("Please enter valid expression");
    }
  }

  clear(num) {
    this.result = 0;
  }

  getResult() {
    return this.result;
  }

  calculate(expression) {
    var regExp = /[a-zA-Z]/g;
    if (regExp.test(expression) || eval(expression) == "Infinity") {
      throw new Error("Please enter valid expression");
    }

    this.result = eval(expression);
  }
}

module.exports = Calculator;
