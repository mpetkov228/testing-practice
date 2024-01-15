const { add, subtract, divide } = require('./calculator.js')

// Add function tests
test('Add happy path (example 1)', () => {
    expect(add(1, 2)).toBe(3);
});

test('Add happy path (example 2)', () => {
    expect(add(5, 3)).toBe(8);
});

test('Add floating point numbers', () => {
    expect(add(0.2, 0.3)).toBeCloseTo(0.5);
});

test('Test on no input', () => {
    expect(() => add()).toThrow(TypeError);
});

test('Test on wrong number of arguments', () => {
    expect(() => add(1)).toThrow(TypeError);
});

test('Test on arguments of wrong type (example 1)', () => {
    expect(() => add('ab', 'cd')).toThrow(TypeError);
});

test('Test of arguments of wrong type (example 2)', () => {
    expect(() => add('ab', 2)).toThrow(TypeError);
});

test('Test of arguments of wrong type (example 3)', () => {
    expect(() => add([1, 2], 2)).toThrow(TypeError);
});

// Subtract function tests
test('Subtract happy path (example 1)', () => {
    expect(subtract(2, 1)).toBe(1);
});

test('Subtract happy path (example 2)', () => {
    expect(subtract(12, 4)).toBe(8);
});

test('Subtract floating point numbers', () => {
    expect(subtract(0.3, 0.2)).toBeCloseTo(0.1);
});

test('Subtract when a < b', () => {
    expect(subtract(3, 6)).toBe(-3);
});

test('Test on no input', () => {
    expect(() => subtract()).toThrow(TypeError);
});

test('Test on wrong number of arguments', () => {
    expect(() => subtract(4)).toThrow(TypeError);
});

test('Test on arguments of wrong type (example 1)', () => {
    expect(() => subtract('ab', 'cd')).toThrow(TypeError);
});

test('Test on arguments of wrong type (example 2)', () => {
    expect(() => subtract(4, 'cd')).toThrow(TypeError);
});

test('Test on arguments of wrong type (example 3)', () => {
    expect(() => subtract(2, [1, 2])).toThrow(TypeError);
});

// Divide function tests
test('Divide happy path (example 1)', () => {
    expect(divide(4, 2)).toBe(2);
});

test('Divide happy path (example 2)', () => {
    expect(divide(9, 3)).toBe(3);
});

test('Divide floating point numbers (example 1)', () => {
    expect(divide(0.4, 0.2)).toBe(2)
});

test('Divide floating point numbers (example 2)', () => {
    expect(divide(0.7, 3)).toBeCloseTo(0.23)
});

test('Divide when a < b', () => {
    expect(divide(1, 2)).toBeCloseTo(0.5);
});

test('Division by zero', () => {
    expect(() => divide(3, 0)).toThrow(/divide by zero/);
});

test('Test on no input', () => {
    expect(() => divide()).toThrow(TypeError);
});

test('Test on wrong number of arguments', () => {
    expect(() => divide(2)).toThrow(TypeError);
});

test('Test on arguments of wrong type (example 1)', () => {
    expect(() => divide('ab', 'cd')).toThrow(TypeError);
});

test('Test on arguments of wrong type (example 2)', () => {
    expect(() => divide(2, 'cd')).toThrow(TypeError);
});

test('Test on arguments of wrong type (example 3)', () => {
    expect(() => divide([1, 2], 3)).toThrow(TypeError);
});