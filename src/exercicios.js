// ========================================================
//  NÍVEL 1: FÁCIL (Sintaxe básica, matemática simples)
// ========================================================

/**
 * 1. Crie uma função que receba dois números e retorne a soma deles.
 * DICA: Use o operador '+'.
 */
function somar(a, b) {
  // Escreva seu código aqui
}

/**
 * 2. Crie uma função que retorne a string "Olá, [nome]!"
 * DICA: Use concatenação (+) ou Template Strings (`${}`).
 */
function cumprimentar(nome) {
  // Escreva seu código aqui
}

/**
 * 3. Crie uma função que verifique se um número é par.
 * Deve retornar true se for par, false se for ímpar.
 * DICA: Use o operador de resto da divisão (%).
 */
function ehPar(numero) {
  // Escreva seu código aqui
}

/**
 * 4. Crie uma função que retorne o maior entre dois números.
 * DICA: Use uma condicional if/else ou Math.max().
 */
function maiorEntreDois(a, b) {
  // Escreva seu código aqui
}


// ========================================================
//  NÍVEL 2: MÉDIO (Loops, Arrays, Condicionais compostas)
// ========================================================

/**
 * 5. Crie uma função que receba um número e retorne o fatorial dele.
 * Ex: 5! = 5 * 4 * 3 * 2 * 1 = 120
 * DICA: Use um loop 'for' ou 'while'.
 */
function fatorial(n) {
  // Escreva seu código aqui
}

/**
 * 6. Crie uma função que receba um array de números e retorne o maior número.
 * DICA: Você pode iterar sobre o array ou usar Math.max com spread operator.
 */
function maiorDoArray(numeros) {
  // Escreva seu código aqui
}

/**
 * 7. Crie uma função que conte quantas vogais (a, e, i, o, u) existem em uma string.
 * DICA: Percorra a string e verifique cada caractere.
 */
function contarVogais(texto) {
  // Escreva seu código aqui
}


// ========================================================
//  NÍVEL 3: DIFÍCIL (Lógica complexa, Manipulação de Strings/Arrays)
// ========================================================

/**
 * 8. Crie uma função que verifique se uma string é um palíndromo.
 * (Lê-se igual de trás para frente, ex: "ana", "reviver").
 * DICA: Inverta a string e compare com a original.
 */
function ehPalindromo(palavra) {
  // Escreva seu código aqui
}

/**
 * 9. Implemente o clássico FizzBuzz.
 * Para um número n, retorne:
 * - "Fizz" se divisível por 3
 * - "Buzz" se divisível por 5
 * - "FizzBuzz" se divisível por 3 e 5
 * - O próprio número se não for divisível por nenhum
 */
function fizzBuzz(n) {
  // Escreva seu código aqui
}

/**
 * 10. Crie uma função que receba um array e retorne um novo array sem duplicatas.
 * DICA: Use um 'Set' ou o método 'filter' com 'indexOf'.
 */
function removerDuplicatas(array) {
  // Escreva seu código aqui
}



module.exports = {
  somar, cumprimentar, ehPar, maiorEntreDois,
  fatorial, maiorDoArray, contarVogais,
  ehPalindromo, fizzBuzz, removerDuplicatas
};