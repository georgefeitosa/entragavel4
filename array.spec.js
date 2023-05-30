const sortArray = require('./array');

test('ordem certa', () => {
  const numbers = [5, 7, 8, 8, 9, 13, 22];
  const expectedArray = [5, 7, 8, 8, 9, 13, 22];
  expect(sortArray(numbers)).toMatchObject(expectedArray);
});

test('deve iniciar com 5', () => {
  const numbers = [5];
  const expectedArray = [5];
  expect(sortArray(numbers)).toMatchObject(expectedArray);
});


