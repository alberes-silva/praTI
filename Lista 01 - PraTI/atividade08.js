/**
 * Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
 * e escreve-los em ordem crescente.
 */

//Para uso do node no VsCode foi utilizado o comando npm install prompt-sync para obtenção dos dados externos
const prompt = require('prompt-sync')();

//Entrada dos dados pelo usuário
let valorUm = Number(prompt("Informe o primeiro número: "));
let valorDois = Number(prompt("Informe o segundo número: "));


//Processamento de dados e saída das informações utilizando Math
if(valorUm == valorDois){
    console.log("Digite valores diferentes");
} else {
    let valorMenor = Math.min(valorUm, valorDois);
    let valorMaior = Math.max(valorUm, valorDois);
    
    console.log(`A ordem crescente dos números é ${valorMenor} e ${valorMaior}`);
}