const {DivideByZeroError} = require('./divide-by-zero-error');


const calculate = (operator, a, b) => {
    try {
        switch (operator) {
            case '+':
                return a + b;
            case '-':
                return a - b;
            case '*':
                return a * b;
            case '/':
                if (b !== 0) {
                    return a / b
                } else {
                    throw new DivideByZeroError();
                }
            default:
                throw new Error('Invalid operator!')
        }
    }
    catch(err) {
        if (err instanceof DivideByZeroError) {
            console.log("You are trying to divide by zero, which is not a valid mathematical operation ")
        } else {
            console.log(err);
            console.log(`Something went wrong, you're likely attempting an unsupported operation. You can only perform addition (+), subtraction (-), multiplication (*), or division (/).`)
        }
    }
}

console.log(calculate('+', 2, 4));
console.log(calculate('-', 2, 4));
console.log(calculate('*', 2, 4));
console.log(calculate('/', 2, 4));
console.log(calculate('/', 2, 0));
