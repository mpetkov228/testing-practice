const caesarCipher = require('./caesarCipher.js');

test('Happy path (example 1)', () => {
    expect(caesarCipher('abc', 1)).toMatch(/bcd/);
});

test('Happy path (example 2)', () => {
    expect(caesarCipher('pie', 3)).toMatch(/slh/);
});

test('Happy path (example 3)', () => {
    expect(caesarCipher('coconut', 5)).toMatch(/hthtszy/);
});

test('Test wrapping from z to a (example 1)', () => {
    expect(caesarCipher('xyz', 3)).toMatch(/abc/);
});

test('Test wrapping from z to a (example 2)', () => {
    expect(caesarCipher('zebra', 6)).toMatch(/fkhxg/);
});

test('Test capital case input (example 1)', () => {
    expect(caesarCipher('ABC', 1)).toMatch(/BCD/);
});

test('Test capital case input (example 2)', () => {
    expect(caesarCipher('BANANA', 4)).toMatch(/FERERE/);
});

test('Test capital case wrapping from Z to A (example 1)', () => {
    expect(caesarCipher('XYZ', 3)).toMatch(/ABC/);
});

test('Test capital case wrapping from Z to A (example 2)', () => {
    expect(caesarCipher('ZERO', 5)).toMatch(/EJWT/);
});

test('Test mixed case input', () => {
    expect(caesarCipher('apPlE', 2)).toMatch(/crRnG/);
});

test('Test on input with punctuation (example 1)', () => {
    expect(caesarCipher('ab.c!', 1)).toMatch(/bc.d!/);
});

test('Test on input with punctuation (example 2)', () => {
    expect(caesarCipher('Tf?h,L[', 3)).toBe('Wi?k,O[');
});

test('Test on no input', () => {
    expect(() => caesarCipher()).toThrow(TypeError);
});

test('Test when shift factor not provided', () => {
    expect(caesarCipher('abc')).toBe('abc');
});