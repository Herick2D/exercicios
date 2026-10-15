// ========================================================
//  EXERCÍCIOS 3 — Nível avançado
//  Foco: recursão, funções de ordem superior, estruturas
//  aninhadas e algoritmos clássicos.
//  Regra geral: NÃO modifique os argumentos recebidos.
// ========================================================

/**
 * 1. Agrupe os itens de um array pelo resultado de uma função.
 * Retorne um objeto onde cada chave é o resultado de fn(item)
 * e o valor é o array de itens (na ordem original).
 * Ex: agruparPor([1, 2, 3, 4], n => n % 2 === 0 ? "par" : "impar")
 *     -> { impar: [1, 3], par: [2, 4] }
 */
function agruparPor(array, fn) {
  // Escreva seu código aqui
}

/**
 * 2. "Achate" um array com qualquer nível de aninhamento.
 * DICA: recursão. Tente resolver sem usar array.flat(Infinity).
 * Ex: achatarArray([1, [2, [3, [4]], 5]]) -> [1, 2, 3, 4, 5]
 */
function achatarArray(array) {
  // Escreva seu código aqui
}

/**
 * 3. Converta um inteiro entre 1 e 3999 para algarismos romanos.
 * Ex: paraRomano(4) -> "IV" | paraRomano(1994) -> "MCMXCIV"
 * Para valores fora de 1..3999, lance um erro (throw new Error(...)).
 */
function paraRomano(n) {
  // Escreva seu código aqui
}

/**
 * 4. Verifique se os parênteses/colchetes/chaves de uma string
 * estão balanceados e na ordem correta. Outros caracteres são ignorados.
 * Ex: parentesesBalanceados("{[()]}") -> true
 *     parentesesBalanceados("([)]")   -> false
 *     parentesesBalanceados("((")     -> false
 */
function parentesesBalanceados(texto) {
  // Escreva seu código aqui
}

/**
 * 5. Retorne a frequência de cada palavra de um texto.
 * - Ignore maiúsculas/minúsculas.
 * - Ignore pontuação (. , ! ? ; :).
 * - Texto vazio retorna {}.
 * Ex: frequenciaPalavras("Oi, oi! Tudo bem?") -> { oi: 2, tudo: 1, bem: 1 }
 */
function frequenciaPalavras(texto) {
  // Escreva seu código aqui
}

/**
 * 6. Rotacione um array k posições para a DIREITA e retorne um novo array.
 * k pode ser maior que o tamanho do array ou negativo (esquerda).
 * Ex: rotacionarArray([1, 2, 3, 4, 5], 2)  -> [4, 5, 1, 2, 3]
 *     rotacionarArray([1, 2, 3, 4, 5], -1) -> [2, 3, 4, 5, 1]
 */
function rotacionarArray(array, k) {
  // Escreva seu código aqui
}

/**
 * 7. Calcule o Máximo Divisor Comum (MDC) de dois inteiros positivos.
 * DICA: algoritmo de Euclides.
 * Ex: mdc(48, 18) -> 6 | mdc(7, 13) -> 1
 */
function mdc(a, b) {
  // Escreva seu código aqui
}

/**
 * 8. Transponha uma matriz (linhas viram colunas).
 * Matriz vazia retorna [].
 * Ex: transporMatriz([[1, 2, 3], [4, 5, 6]]) -> [[1, 4], [2, 5], [3, 6]]
 */
function transporMatriz(matriz) {
  // Escreva seu código aqui
}

/**
 * 9. Encontre dois índices (i < j) cujos valores somem `alvo`.
 * Retorne [i, j]. Havendo várias respostas, retorne a de MENOR i
 * (e, em empate, a de menor j). Sem resposta, retorne null.
 * Ex: duasSomas([2, 7, 11, 15], 9) -> [0, 1]
 */
function duasSomas(numeros, alvo) {
  // Escreva seu código aqui
}

/**
 * 10. Composição de funções: receba N funções e retorne uma nova função
 * que as executa da DIREITA para a ESQUERDA.
 * compor(f, g, h)(x) é o mesmo que f(g(h(x))).
 * Sem nenhuma função, a função retornada devolve o próprio argumento.
 * Ex: compor(x => x + 1, x => x * 2)(5) -> 11
 */
function compor(...fns) {
  // Escreva seu código aqui
}


module.exports = {
  agruparPor, achatarArray, paraRomano, parentesesBalanceados,
  frequenciaPalavras, rotacionarArray, mdc, transporMatriz,
  duasSomas, compor
};
