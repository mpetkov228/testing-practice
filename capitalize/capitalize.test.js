const capitalize = require('./capitalize.js');

test('Happy path (example 1)', () => {
    expect(capitalize('car')).toMatch(/Car/);
});

test('Happy path (example 2)', () => {
    expect(capitalize('bottle')).toMatch(/Bottle/);
});

test('Test all capitals input', () => {
    expect(capitalize('PLANE')).toMatch(/PLANE/);
});

test('Test no input', () => {
    expect(() => capitalize()).toThrow(TypeError);
});

test('Test input of wrong type (example 1)', () => {
    expect(() => capitalize(10)).toThrow(TypeError);
});

test('Test input of wrong type (example 2)', () => {
    expect(() => capitalize(['a', 'b', 'c'])).toThrow(TypeError);
});