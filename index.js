const calculate = (operator, a, b) => {
    switch (operator) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': 
          if (b === 0) {
            return 'You cannot devide by zero!'
          } else {
            return a / b
          }
        default: throw new Error('Invalid operator!')
    }
}

console.log(calculate('+', 2, 4));
console.log(calculate('-', 2, 4));
console.log(calculate('*', 2, 4));
console.log(calculate('/', 2, 4));
console.log(calculate('/', 2, 0));