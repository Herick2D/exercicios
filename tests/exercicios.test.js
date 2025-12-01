const f = require('../src/exercicios');

describe('--- NÍVEL 1: FÁCIL ---', () => {
  test('1. Deve somar dois números corretamente', () => {
    expect(f.somar(2, 3)).toBe(5);
    expect(f.somar(-1, 1)).toBe(0);
  });

  test('2. Deve retornar a saudação correta', () => {
    expect(f.cumprimentar("Maria")).toBe("Olá, Maria!");
  });

  test('3. Deve identificar se o número é par', () => {
    expect(f.ehPar(4)).toBe(true);
    expect(f.ehPar(7)).toBe(false);
  });

  test('4. Deve retornar o maior número', () => {
    expect(f.maiorEntreDois(10, 20)).toBe(20);
  });
});

describe('--- NÍVEL 2: MÉDIO ---', () => {
  test('5. Deve calcular o fatorial', () => {
    expect(f.fatorial(5)).toBe(120);
    expect(f.fatorial(0)).toBe(1);
  });

  test('6. Deve encontrar o maior número do array', () => {
    expect(f.maiorDoArray([1, 5, 3, 9, 2])).toBe(9);
  });

  test('7. Deve contar vogais corretamente', () => {
    expect(f.contarVogais("javascript")).toBe(3);
  });
});

describe('--- NÍVEL 3: DIFÍCIL ---', () => {
  test('8. Deve verificar palíndromos', () => {
    expect(f.ehPalindromo("radar")).toBe(true);
    expect(f.ehPalindromo("casa")).toBe(false);
  });

  test('9. FizzBuzz Lógica', () => {
    expect(f.fizzBuzz(3)).toBe("Fizz");
    expect(f.fizzBuzz(5)).toBe("Buzz");
    expect(f.fizzBuzz(15)).toBe("FizzBuzz");
    expect(f.fizzBuzz(7)).toBe(7);
  });

  test('10. Deve remover duplicatas', () => {
    expect(f.removerDuplicatas([1, 2, 2, 3, 3, 4])).toEqual([1, 2, 3, 4]);
  });
});