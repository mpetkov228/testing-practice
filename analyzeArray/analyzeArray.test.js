const analyzeArray = require('./analyzeArray.js');

test('Happy path (example 1)', () => {
    expect(analyzeArray([1, 2, 3])).toEqual({ average: 2, min: 1, max: 3, length: 3 });
});

test('Happy path (example 2)', () => {
    expect(analyzeArray([8, 9, 3, 5, 2, 3])).toEqual({ average: 5, min: 2, max: 9, length: 6 });
});

test('Test on wrong input type', () => {
    expect(() => analyzeArray({ one: 1, two: 2})).toThrow(TypeError);
});