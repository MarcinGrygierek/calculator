class DivideByZeroError extends Error {
    
    constructor(message = 'Nie dziel przez zero bo wyjdzie błąd') {
        super(message);
        this.name = "DivideByZeroError";
    }
}

module.exports = {
    DivideByZeroError,
}
