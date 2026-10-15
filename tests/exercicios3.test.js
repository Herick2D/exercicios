const f = require('../src/exercicios3');

describe('--- EXERCÍCIOS 3 ---', () => {
  test('1. agruparPor', () => {
    expect(f.agruparPor([1, 2, 3, 4], n => (n % 2 === 0 ? "par" : "impar")))
      .toEqual({ impar: [1, 3], par: [2, 4] });
    expect(f.agruparPor(["ab", "c", "de", "f"], s => s.length))
      .toEqual({ 1: ["c", "f"], 2: ["ab", "de"] });
    expect(f.agruparPor([], x => x)).toEqual({});
  });

  test('2. achatarArray', () => {
    expect(f.achatarArray([1, [2, [3, [4]], 5]])).toEqual([1, 2, 3, 4, 5]);
    expect(f.achatarArray([1, 2, 3])).toEqual([1, 2, 3]);
    expect(f.achatarArray([])).toEqual([]);
    expect(f.achatarArray([[], [[]], [1]])).toEqual([1]);
    expect(f.achatarArray([["a"], ["b", ["c"]]])).toEqual(["a", "b", "c"]);
  });

  test('2b. achatarArray não altera o original', () => {
    const original = [1, [2, [3]]];
    const r = f.achatarArray(original);
    expect(r).toEqual([1, 2, 3]);
    expect(original).toEqual([1, [2, [3]]]);
  });

  test('3. paraRomano', () => {
    expect(f.paraRomano(1)).toBe("I");
    expect(f.paraRomano(4)).toBe("IV");
    expect(f.paraRomano(9)).toBe("IX");
    expect(f.paraRomano(14)).toBe("XIV");
    expect(f.paraRomano(40)).toBe("XL");
    expect(f.paraRomano(1994)).toBe("MCMXCIV");
    expect(f.paraRomano(3999)).toBe("MMMCMXCIX");
  });

  test('3b. paraRomano lança erro fora do intervalo 1..3999', () => {
    expect(() => f.paraRomano(0)).toThrow();
    expect(() => f.paraRomano(4000)).toThrow();
    expect(() => f.paraRomano(-3)).toThrow();
  });

  test('4. parentesesBalanceados', () => {
    expect(f.parentesesBalanceados("{[()]}")).toBe(true);
    expect(f.parentesesBalanceados("()[]{}")).toBe(true);
    expect(f.parentesesBalanceados("a(b[c]d)e")).toBe(true);
    expect(f.parentesesBalanceados("")).toBe(true);
    expect(f.parentesesBalanceados("([)]")).toBe(false);
    expect(f.parentesesBalanceados("((")).toBe(false);
    expect(f.parentesesBalanceados("))")).toBe(false);
    expect(f.parentesesBalanceados(")(")).toBe(false);
  });

  test('5. frequenciaPalavras', () => {
    expect(f.frequenciaPalavras("Oi, oi! Tudo bem?"))
      .toEqual({ oi: 2, tudo: 1, bem: 1 });
    expect(f.frequenciaPalavras("a a a")).toEqual({ a: 3 });
    expect(f.frequenciaPalavras("Sim. SIM; sim:")).toEqual({ sim: 3 });
    expect(f.frequenciaPalavras("")).toEqual({});
  });

  test('6. rotacionarArray', () => {
    expect(f.rotacionarArray([1, 2, 3, 4, 5], 2)).toEqual([4, 5, 1, 2, 3]);
    expect(f.rotacionarArray([1, 2, 3, 4, 5], -1)).toEqual([2, 3, 4, 5, 1]);
    expect(f.rotacionarArray([1, 2, 3], 0)).toEqual([1, 2, 3]);
    expect(f.rotacionarArray([1, 2, 3], 3)).toEqual([1, 2, 3]);
    expect(f.rotacionarArray([1, 2, 3], 4)).toEqual([3, 1, 2]);
    expect(f.rotacionarArray([], 5)).toEqual([]);
  });

  test('6b. rotacionarArray não altera o original', () => {
    const original = [1, 2, 3];
    const r = f.rotacionarArray(original, 1);
    expect(r).toEqual([3, 1, 2]);
    expect(r).not.toBe(original);
    expect(original).toEqual([1, 2, 3]);
  });

  test('7. mdc', () => {
    expect(f.mdc(48, 18)).toBe(6);
    expect(f.mdc(18, 48)).toBe(6);
    expect(f.mdc(7, 13)).toBe(1);
    expect(f.mdc(10, 10)).toBe(10);
    expect(f.mdc(100, 25)).toBe(25);
    expect(f.mdc(1, 999)).toBe(1);
  });

  test('8. transporMatriz', () => {
    expect(f.transporMatriz([[1, 2, 3], [4, 5, 6]]))
      .toEqual([[1, 4], [2, 5], [3, 6]]);
    expect(f.transporMatriz([[1, 2], [3, 4]])).toEqual([[1, 3], [2, 4]]);
    expect(f.transporMatriz([[1], [2], [3]])).toEqual([[1, 2, 3]]);
    expect(f.transporMatriz([])).toEqual([]);
  });

  test('9. duasSomas', () => {
    expect(f.duasSomas([2, 7, 11, 15], 9)).toEqual([0, 1]);
    expect(f.duasSomas([3, 2, 4], 6)).toEqual([1, 2]);
    expect(f.duasSomas([3, 3], 6)).toEqual([0, 1]);
    expect(f.duasSomas([1, 5, 5, 1], 6)).toEqual([0, 1]);
    expect(f.duasSomas([1, 2, 3], 100)).toBeNull();
    expect(f.duasSomas([5], 10)).toBeNull();
    expect(f.duasSomas([], 0)).toBeNull();
  });

  test('10. compor', () => {
    const soma1 = x => x + 1;
    const dobro = x => x * 2;
    expect(f.compor(soma1, dobro)(5)).toBe(11);
    expect(f.compor(dobro, soma1)(5)).toBe(12);
    expect(f.compor(soma1, soma1, soma1)(0)).toBe(3);
    expect(f.compor(s => s + "!", s => s.toUpperCase())("oi")).toBe("OI!");
    expect(f.compor()(42)).toBe(42);
    expect(typeof f.compor(soma1)).toBe("function");
  });
});
