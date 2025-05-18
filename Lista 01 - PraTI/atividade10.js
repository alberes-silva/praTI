/**
 * Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.
 */

//Para uso do node no VsCode foi utilizado o comando npm install prompt-sync para obtenção dos dados externos
const prompt = require('prompt-sync')();

let numero = parseInt(prompt("Informe o valor: "));

for (let controle = 0; controle < 10; controle++){
    console.log(numero);
}