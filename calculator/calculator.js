function add(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new TypeError('Invalid input!');
    }
    
    return a + b;
}

function subtract(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new TypeError('Invalid input!');
    }

    return a - b;
}

function divide(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new TypeError('Invalid input!');
    }

    if (b === 0) {
        throw new Error('Error! Cannot divide by zero!');
    }

    return a / b;
}

function multiply(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new TypeError('Invalid input!');
    }
    
    return a * b;
}

const calculator = {
    add,
    subtract,
    divide,
    multiply
};

module.exports = calculator;