const calculate = (operator, a, b) => {
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return b !== 0 ? a / b : 'Divide by 0 is not exist!';
        default:
            throw new Error('Invalid operator!')
    }
}

console.log(calculate('+', 2, 4));
console.log(calculate('-', 2, 4));
console.log(calculate('*', 2, 4));
console.log(calculate('/', 2, 4));
console.log(calculate('/', 0, 1));