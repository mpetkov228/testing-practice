const calculator = require('./calculator.js')

test('Add happy path (example 1)', () => {
    expect(calculator.add(1, 2)).toBe(3);
});