/**
 * Escreva um programa que solicita ao usuário 5 números e calcula a soma total
 * utilizando um loop for.
 */

//Para uso do node no VsCode foi utilizado o comando npm install prompt-sync para obtenção dos dados externos
const prompt = require('prompt-sync')();

//Criação de variável de controle soma
let soma = 0;

//Processamento de dados com for
for(let controle = 1; controle <= 5; controle++){
    let numero = Number(prompt("Digite o "+ controle+ "º número: "));
    soma += numero;
}

//Saída de dados
console.log(`A soma de todos os valoroes é ${soma}`);