/**
 * Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
 * 10) utilizando um loop for.
 */

//Para uso do node no VsCode foi utilizado o comando npm install prompt-sync para obtenção dos dados externos
const prompt = require('prompt-sync')();

let numero = Number(prompt("Digite o valor para o cálculo: "));

console.clear();

console.log(`
 ___________________________________________________________________________________
|                                                                                   |
|                                       TABUADA                                     |
|___________________________________________________________________________________|
    `)
console.log(`A tabuada de ${numero} é:`)
for (let n = 1; n <= 10; n++){
    let resultado = numero * n;
    console.log(`${numero} X ${n} = ${resultado}`);
}