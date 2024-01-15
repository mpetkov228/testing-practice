const calculator = {
    add(a, b) {
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new TypeError('Invalid input!');
        }
        
        return a + b;
    },
}

module.exports = calculator;