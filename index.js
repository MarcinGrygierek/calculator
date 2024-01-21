const {DivideByZeroError} = require('./divide-by-zero-error');


const calculate = (operator, a, b) => {
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

try {
    console.log(calculate('+', 2, 4));
    console.log(calculate('-', 2, 4));
    console.log(calculate('*', 2, 4));
    console.log(calculate('/', 2, 4));
    console.log(calculate('/', 2, 0));
} catch (error) {
    if (error instanceof DivideByZeroError) {
        console.log("Error: Division by zero is not allowed.");
    } else {
        console.log("Error: " + error.message);
    }
}
