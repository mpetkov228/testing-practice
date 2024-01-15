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

const calculator = {
    add,
    subtract,
}

module.exports = calculator;