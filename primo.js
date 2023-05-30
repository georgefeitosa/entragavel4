function primeNumber(num) {
    for (let divisor = 2; divisor < num; divisor++) {
      if (num % divisor === 0) {
        return false;
      }
    }
    return true;
  }
  
  module.exports = primeNumber;
  