const multiply = require('./multiply');

test('multiply(2,2) should be equal to 4', () => {
    expect(multiply(2,2)).toEqual(4);
});