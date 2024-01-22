class DivideByZeroError extends Error {
    
    constructor(message) {
        super(message);
        this.name = "DivideByZeroError";
        throw new DivideByZeroError("Remember, division by zero is not allowed.");
    }
}

module.exports = {
    DivideByZeroError,
}
