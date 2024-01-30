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
                try {
                    throw new DivideByZeroError('Nie można dzielić przez zero');
                } catch (error) {
                    // console.error(error.message);
                    console.log(`wyszło ci:`);
                    return null;
                }
            }

}}

console.log(calculate('+', 2, 4));
console.log(calculate('-', 2, 4));
console.log(calculate('*', 2, 4));
console.log(calculate('/', 2, 4));
console.log(calculate('/', 2, 0));

