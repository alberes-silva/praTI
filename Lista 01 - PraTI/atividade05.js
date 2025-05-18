/*
 * Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
 * determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
 * utilizando if-else.
 */

//Para uso do node no VsCode foi utilizado o comando npm install prompt-sync para obtenção dos dados externos
const prompt = require('prompt-sync')();

//Entrada de dados - Informação do usuário
let peso = Number(prompt("Informe o seu peso atual: "));
let altura = Number(prompt("Informe a sua altura: "));

//Verificação de dados corretos - Só aceitos números
if(!isNaN(peso)){ 
    if(!isNaN(altura)){
        var imc = peso / (altura * altura); 
        console.log("O Índice de Massa Corporal (IMC) é ", imc.toFixed(2));
    }
} else {
    console.log("Verifique os valores informados no peso e altura");
}


//Processamento e saída de dados com as informações de suas cormobidades.
if(imc <= 18.5){
    console.log("Abaixo do peso");
}
if(imc >= 18.5 && imc < 24.9){
    console.log("Peso normal");
}
if(imc >= 25 && imc < 29.9){
    console.log("Sobrepeso");
}
if(imc >= 30 && imc < 34.9){
    console.log("Obesidade grau I");
}
if(imc >= 35 && imc < 39.9){
    console.log("Obesidade grau II");
}
if(imc >= 40) {
    console.log("Obesidade grau III");
}
