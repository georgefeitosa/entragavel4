function countIntegersBetweenFirstAndN(N, dataSet) {
  let count = 0;
  const firstValue = dataSet[0];

  for (let i = firstValue; i <= N; i++) {
    if (Number.isInteger(i) && dataSet.includes(i)) {
      count++;
    }
  }

  return count;
}

module.exports = countIntegersBetweenFirstAndN;

  