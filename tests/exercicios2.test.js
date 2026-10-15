const f = require('../src/exercicios2');

describe('--- EXERCÍCIOS 2 ---', () => {
  test('1. somarArray', () => {
    expect(f.somarArray([1, 2, 3])).toBe(6);
    expect(f.somarArray([])).toBe(0);
    expect(f.somarArray([-5, 5, 10])).toBe(10);
    expect(f.somarArray([0.5, 0.25])).toBe(0.75);
  });

  test('2. contarOcorrencias', () => {
    expect(f.contarOcorrencias([1, 2, 1, 3, 1], 1)).toBe(3);
    expect(f.contarOcorrencias([], 1)).toBe(0);
    expect(f.contarOcorrencias([1, 2, 3], 9)).toBe(0);
    expect(f.contarOcorrencias([1, "1", 1], "1")).toBe(1);
    expect(f.contarOcorrencias(["a", "b", "a"], "a")).toBe(2);
  });

  test('3. ehPrimo', () => {
    [2, 3, 5, 7, 11, 97].forEach(n => expect(f.ehPrimo(n)).toBe(true));
    [4, 9, 15, 100].forEach(n => expect(f.ehPrimo(n)).toBe(false));
    [1, 0, -7].forEach(n => expect(f.ehPrimo(n)).toBe(false));
  });

  test('4. fibonacci', () => {
    expect(f.fibonacci(0)).toBe(0);
    expect(f.fibonacci(1)).toBe(1);
    expect(f.fibonacci(2)).toBe(1);
    expect(f.fibonacci(7)).toBe(13);
    expect(f.fibonacci(20)).toBe(6765);
  });

  test('5. somaDigitos', () => {
    expect(f.somaDigitos(1234)).toBe(10);
    expect(f.somaDigitos(0)).toBe(0);
    expect(f.somaDigitos(7)).toBe(7);
    expect(f.somaDigitos(-45)).toBe(9);
    expect(f.somaDigitos(1000)).toBe(1);
  });

  test('6. capitalizarPalavras', () => {
    expect(f.capitalizarPalavras("olá mundo")).toBe("Olá Mundo");
    expect(f.capitalizarPalavras("olá mUNDO")).toBe("Olá Mundo");
    expect(f.capitalizarPalavras("javascript")).toBe("Javascript");
    expect(f.capitalizarPalavras("")).toBe("");
  });

  test('7. contarPalavras', () => {
    expect(f.contarPalavras("eu amo js")).toBe(3);
    expect(f.contarPalavras("  eu   amo  js ")).toBe(3);
    expect(f.contarPalavras("")).toBe(0);
    expect(f.contarPalavras("    ")).toBe(0);
    expect(f.contarPalavras("palavra")).toBe(1);
  });

  test('8. segundoMaior', () => {
    expect(f.segundoMaior([5, 9, 3])).toBe(5);
    expect(f.segundoMaior([5, 9, 9, 3])).toBe(5);
    expect(f.segundoMaior([-1, -5, -3])).toBe(-3);
    expect(f.segundoMaior([4, 4])).toBeNull();
    expect(f.segundoMaior([7])).toBeNull();
    expect(f.segundoMaior([])).toBeNull();
  });

  test('9. ehAnagrama', () => {
    expect(f.ehAnagrama("Amor", "Roma")).toBe(true);
    expect(f.ehAnagrama("listen", "silent")).toBe(true);
    expect(f.ehAnagrama("a gentleman", "elegant man")).toBe(true);
    expect(f.ehAnagrama("casa", "caso")).toBe(false);
    expect(f.ehAnagrama("aab", "abb")).toBe(false);
    expect(f.ehAnagrama("abc", "abcd")).toBe(false);
  });

  test('10. mesclarOrdenados', () => {
    expect(f.mesclarOrdenados([1, 4, 7], [2, 3, 9])).toEqual([1, 2, 3, 4, 7, 9]);
    expect(f.mesclarOrdenados([], [1, 2])).toEqual([1, 2]);
    expect(f.mesclarOrdenados([1, 2], [])).toEqual([1, 2]);
    expect(f.mesclarOrdenados([], [])).toEqual([]);
    expect(f.mesclarOrdenados([1, 2, 2], [2, 3])).toEqual([1, 2, 2, 2, 3]);
  });

  test('10b. mesclarOrdenados não altera os arrays originais', () => {
    const a = [1, 4];
    const b = [2, 3];
    const r = f.mesclarOrdenados(a, b);
    expect(r).toEqual([1, 2, 3, 4]);
    expect(r).not.toBe(a);
    expect(a).toEqual([1, 4]);
    expect(b).toEqual([2, 3]);
  });
});
