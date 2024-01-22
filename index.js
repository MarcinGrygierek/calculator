const {DivideByZeroError} = require('./divide-by-zero-error');


const calculate = (operator, a, b) => {
    switch (operator) {
        case '+': return `${a} + ${b} = ${a + b}`;
        case '-': return `${a} - ${b} = ${a - b}`;
        case '*': return `${a} * ${b} = ${a * b}`;
        case '/': 
            if (b !== 0) {
              return `${a} / ${b} = ${a / b}`
            }
            else {
              throw new DivideByZeroError();
            }
        default: throw new Error('Invalid operator!')
    }
}



console.log(calculate('+', 4, 3));
console.log(calculate('-', 4, 3));
console.log(calculate('*', 4, 3));
console.log(calculate('/', 4, 3));
console.log(calculate('/', 4, 0));