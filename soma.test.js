const sum = require('./testesoma.js');
const assert = require('assert');

test('soma os elementos corretamente', () => {
  const input = [8, 9, 190];
  const expectedOutput = 207;
  const result = sum(input);
  assert.strictEqual(result, expectedOutput);
});
test('se 2+2 é 4', () => {
  const input = [2, 2];
  const expectedOutput = 4;
  const result = sum(input);
  expect(result).toBe(expectedOutput);
});
