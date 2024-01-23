const {DivideByZeroError} = require('./divide-by-zero-error');


const calculate = (operator, a, b) => {
    try{
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
    } catch (e) {
        if(e instanceof DivideByZeroError)
            return "Division by zero is not allowed!";
        else
            return `Error: ${e.message}`;
    }
}

console.log(calculate('+', 2, 4));
console.log(calculate('-', 2, 4));
console.log(calculate('*', 2, 4));
console.log(calculate('/', 2, 4));
console.log(calculate('/', 2, 0));
console.log(calculate('4',2,0));