/**
 * Escreva um programa que gera e imprime os primeiros 10 números da sequência de
 * Fibonacci utilizando um loop for.
 */

//Para uso do node no VsCode foi utilizado o comando npm install prompt-sync para obtenção dos dados externos

//Criando as variáveis para os dois primeiros números da sequência
let primeiroNumero = 0;
let segundoNumero = 1;

//Saída de dados dos dois primeiros valores
console.log("Sequência de Fibonacci dos 10 primeiros números:");
console.log(primeiroNumero);
console.log(segundoNumero);

//Processamento de dados e saída dos próximos 8 números
for (let i = 2; i < 10; i++) {
  let proximo = primeiroNumero + segundoNumero;
  console.log(proximo); 
  primeiroNumero = segundoNumero;
  segundoNumero = proximo;
}
