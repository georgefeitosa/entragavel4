const countIntegersBetweenFirstAndN = require('./natural.js');

test('conta números inteiros corretamente entre o primeiro valor e N', () => {
  const dataSet = [0, 2, 6.4, 7, 8];
  const N = 20;

  const result = countIntegersBetweenFirstAndN(N, dataSet);

  expect(result).toBe(4); // Corrigido para o valor esperado

  console.log(`Há ${result} números inteiros entre ${dataSet[0]} e ${N}.`); // Corrigido para o caminho correto
});

test('conta números inteiros ', () => {
  const dataSet = [ 2, 4, 7, 8];
  const N = 20;

  const result = countIntegersBetweenFirstAndN(N, dataSet);

  expect(result).toBe(4); // Corrigido para o valor esperado

  console.log(`Há ${result} números inteiros entre ${dataSet[0]} e ${N}.`); // Corrigido para o caminho correto
});

