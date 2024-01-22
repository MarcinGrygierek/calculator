const {DivideByZeroError} = require('./divide-by-zero-error');


const calculate = (operator, a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error(`Invalid input: a and b must be numbers, got ${typeof a} and ${typeof b}`);
}
    switch (operator) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': 
            if (b !== 0) {
              return a / b
            }
            else {
              throw new DivideByZeroError();
            }
        default: throw new Error('Invalid operator!')
    }
}

console.log(calculate('+', 2, 4));
console.log(calculate('-', 2, 4));
console.log(calculate('*', '2', 4));
console.log(calculate('/', 2, 4));
console.log(calculate('/', 2, 0));