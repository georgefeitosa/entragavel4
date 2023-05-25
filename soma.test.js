const sum = require('./testesoma.js');

test('soma os elementos corretamente', () => {
  const input = [8, 9, 190];
  const expectedOutput = 207;

  const result = sum(input);

  expect(result).toBe(expectedOutput);
});
