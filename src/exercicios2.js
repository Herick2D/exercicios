// ========================================================
//  EXERCÍCIOS 2 — Nível intermediário
//  Foco: loops, arrays, strings e casos de borda.
//  Regra geral: NÃO modifique os arrays recebidos (retorne novos).
// ========================================================

/**
 * 1. Receba um array de números e retorne a soma de todos eles.
 * Array vazio retorna 0.
 * Ex: somarArray([1, 2, 3]) -> 6
 */
function somarArray(numeros) {
  // Escreva seu código aqui
}

/**
 * 2. Conte quantas vezes um valor aparece em um array.
 * Use comparação estrita (===): 1 é diferente de "1".
 * Ex: contarOcorrencias([1, 2, 1, 3, 1], 1) -> 3
 */
function contarOcorrencias(array, valor) {
  // Escreva seu código aqui
}

/**
 * 3. Verifique se um número é primo.
 * Primo: inteiro maior que 1 divisível apenas por 1 e por ele mesmo.
 * Atenção: 0, 1 e números negativos NÃO são primos.
 * Ex: ehPrimo(7) -> true | ehPrimo(9) -> false | ehPrimo(1) -> false
 */
function ehPrimo(n) {
  // Escreva seu código aqui
}

/**
 * 4. Retorne o n-ésimo número da sequência de Fibonacci (começando em 0).
 * Sequência: 0, 1, 1, 2, 3, 5, 8, 13...
 * Ex: fibonacci(0) -> 0 | fibonacci(1) -> 1 | fibonacci(7) -> 13
 */
function fibonacci(n) {
  // Escreva seu código aqui
}

/**
 * 5. Some os dígitos de um número inteiro.
 * Números negativos devem ser tratados pelo valor absoluto.
 * Ex: somaDigitos(1234) -> 10 | somaDigitos(-45) -> 9
 */
function somaDigitos(n) {
  // Escreva seu código aqui
}

/**
 * 6. Coloque a primeira letra de cada palavra em maiúscula
 * e as demais em minúscula. Palavras são separadas por espaço.
 * Ex: capitalizarPalavras("olá mUNDO") -> "Olá Mundo"
 */
function capitalizarPalavras(frase) {
  // Escreva seu código aqui
}

/**
 * 7. Conte quantas palavras existem em uma frase.
 * Atenção: espaços extras no início, fim ou entre palavras não contam.
 * String vazia (ou só com espaços) retorna 0.
 * Ex: contarPalavras("  eu   amo  js ") -> 3
 */
function contarPalavras(frase) {
  // Escreva seu código aqui
}

/**
 * 8. Retorne o SEGUNDO maior valor DISTINTO de um array.
 * Se não houver dois valores distintos, retorne null.
 * Ex: segundoMaior([5, 9, 9, 3]) -> 5 | segundoMaior([4, 4]) -> null
 */
function segundoMaior(numeros) {
  // Escreva seu código aqui
}

/**
 * 9. Verifique se duas palavras/frases são anagramas.
 * Ignore maiúsculas/minúsculas e espaços.
 * Ex: ehAnagrama("Amor", "Roma") -> true | ehAnagrama("casa", "caso") -> false
 */
function ehAnagrama(a, b) {
  // Escreva seu código aqui
}

/**
 * 10. Receba dois arrays JÁ ORDENADOS (crescente) e retorne um único
 * array ordenado com todos os elementos. Não altere os arrays originais.
 * Ex: mesclarOrdenados([1, 4, 7], [2, 3, 9]) -> [1, 2, 3, 4, 7, 9]
 */
function mesclarOrdenados(a, b) {
  // Escreva seu código aqui
}


module.exports = {
  somarArray, contarOcorrencias, ehPrimo, fibonacci, somaDigitos,
  capitalizarPalavras, contarPalavras, segundoMaior, ehAnagrama,
  mesclarOrdenados
};
