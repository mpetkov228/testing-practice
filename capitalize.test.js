const capitalize = require('./capitalize.js');

test('Happy path (example 1)', () => {
    expect(capitalize('car')).toMatch(/Car/);
});