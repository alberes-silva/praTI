/**
 * Implemente um programa que exibe uma contagem regressiva de 10 até 1 no console
 * utilizando um loop for.
 */

//Para uso do node no VsCode foi utilizado o comando npm install prompt-sync para obtenção dos dados externos
const prompt = require('prompt-sync')();

//Loop utilizando o for com contagem reqressiva de 10 até 1.
for(let n = 10; n >= 1; n--){
    console.log(n);
}