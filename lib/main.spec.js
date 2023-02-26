const t = require('tap')
const { sum, substract, multiply, divide } = require('./main.js');

t.equal(sum(1, 2), 3, 'sum(1, 2) should be 3');

t.test('substraction', t => {
    t.plan(1);
    t.equal(substract(1, 2), -1, 'substraction(1, 2) should be -1');
});

t.test('multiplication', async t => {
    t.equal(multiply(1, 2), 2, 'multiply(1, 2) should be 2');
});

t.test('division', t => {
    t.same(divide(1, 2), {quotient: 0, remainder: 1}, 'divide(1, 2) should return {quotient: 0, remainder: 1}');
    t.throws(() => divide('hello', 'world'), new Error('You must provide 2 numbers as dividend & divider!'));
    t.end()
});
