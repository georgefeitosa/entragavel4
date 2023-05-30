 

const primeNumber = require('./primo.js');

test('verifica se 2 é primo', () => {
  expect(primeNumber(2)).toBe(true);
});

test('se 7 é primo', () => {
  expect(primeNumber(7)).toBe(true);
});
