const readline = require('readline');
const { DivideByZeroError } = require('./divide-by-zero-error');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const calculate = (operator, a, b) => {
    switch (operator) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/':
            if (b !== 0) {
                return a / b;
            } else {
                throw new DivideByZeroError();
            }
        default: throw new Error('Invalid operator!');
    }
};

const getNumberInput = (prompt) => {
    return new Promise((resolve, reject) => {
        rl.question(prompt, (input) => {
            const number = parseFloat(input);
            if (!isNaN(number)) {
                resolve(number);
            } else {
                reject(new Error(`'${input}' is not a valid number`));
            }
        });
    });
};

const main = async () => {
    try {
      
      const a = await getNumberInput('Enter first number: ');
      const b = await getNumberInput('Enter second number: ');
      
      const operator = await new Promise((resolve) => {
          rl.question('Enter operator (+, -, *, /): ', resolve);
      });
        const result = calculate(operator, a, b);
        console.log(`Result: ${result}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
    } finally {
        rl.close();
    }
};

main();