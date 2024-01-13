const reverseString = require('./reverseString.js');

test('Happy path (example 1)', () => {
    expect(reverseString('test')).toMatch(/tset/);
});

test('Happy path (example 2)', () => {
    expect(reverseString('abcde')).toMatch(/edcba/);
});

test('Test on string of numbers', () => {
    expect(reverseString('12345')).toMatch(/54321/);
});

test('Test on no input', () => {
    expect(() => reverseString()).toThrow(TypeError);
});

test('Test on number input', () => {
    expect(() => reverseString(123)).toThrow(TypeError);
});

test('Test on array input', () => {
    expect(() => reverseString(['a', 'b', 'c', 'd'])).toThrow(TypeError);
});