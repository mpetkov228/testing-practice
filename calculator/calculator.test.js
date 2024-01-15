const calculator = require('./calculator.js')

// Add function tests
test('Add happy path (example 1)', () => {
    expect(calculator.add(1, 2)).toBe(3);
});

test('Add happy path (example 2)', () => {
    expect(calculator.add(5, 3)).toBe(8);
});

test('Test on no input', () => {
    expect(() => calculator.add()).toThrow(TypeError);
});

test('Test on wrong number of arguments', () => {
    expect(() => calculator.add(1)).toThrow(TypeError);
});

test('Test on arguments of wrong type (example 1)', () => {
    expect(() => calculator.add('ab', 'cd')).toThrow(TypeError);
});

test('Test of arguments of wrong type (example 2)', () => {
    expect(() => calculator.add('ab', 2)).toThrow(TypeError);
});

// Subtract function tests
test('Subtract happy path (example 1)', () => {
    expect(calculator.subtract(2, 1)).toBe(1);
});