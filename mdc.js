function calcularMDC(a, b) {
  // Implemente o algoritmo para calcular o MDC entre 'a' e 'b' aqui
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

module.exports = calcularMDC;
