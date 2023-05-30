const calcularMDC = require('./mdc.js');

test('calcula o MDC corretamente', () => {
  const resultado1 = calcularMDC(5, 10);
  const resultado2 = calcularMDC(7, 8);

  expect(resultado1).toBe(5);
  expect(resultado2).toBe(1);
});

test('MDC', () => {
  expect(calcularMDC(5, 10)).toBe(5);
});
