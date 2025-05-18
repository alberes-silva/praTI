/**
 * Crie um programa que calcula o fatorial de um número fornecido pelo usuário
 * utilizando um loop for ou while.
 */

//Para uso do node no VsCode foi utilizado o comando npm install prompt-sync para obtenção dos dados externos
const prompt = require('prompt-sync')();

//Entrada de dados do usuário
let numero = parseInt(prompt("Digite o valor para calculo do Fatorial: "));

//Verificação de número inteiro e positivo, cálculo do fatorial utilizando while
if (isNaN(numero) || numero < 0) {
  console.log("Por favor, digite um número inteiro positivo.");
} else {
  let fatorial = 1;
  let i = 1;

  while (i <= numero) {
    fatorial *= i;
    i++;
  }

  console.log(`O fatorial de ${numero} é: ${fatorial}`);
}

