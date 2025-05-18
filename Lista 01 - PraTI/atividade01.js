/*
*Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
utilizando uma estrutura de controle if. 
*/

//Para uso do node no VsCode foi utilizado o comando npm install prompt-sync para obtenção dos dados externos

const prompt = require('prompt-sync')();

//Recebe a informação vindo do usuário
let numero = prompt("Digite o número desejado: ");

//Processa a informação do usuário e informa se o número é par ou impar
let resultado = numero % 2 == 0 ? console.log("O número "+ numero + " é par") : console.log("O número "+ numero + " é impar");
