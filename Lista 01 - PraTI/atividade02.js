/*
 * Crie um programa que classifica a idade de uma pessoa em categorias (criança,
 * adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
 * controle if-else.
 */


//Para uso do node no VsCode foi utilizado o comando npm install prompt-sync para obtenção dos dados externos

const prompt = require('prompt-sync')()

let idade = Number(prompt("Informe a idade da pessoa: "))

if(idade > 0){
    if(idade <= 15){
        console.log("A pessoa é uma criança")
    } else if(idade > 15 && idade <= 21){
        console.log("A pessoa é um adolescente")
    } else if(idade > 21 && idade < 65){
        console.log("A pessoa é um adulto")
    }else {
        console.log("A pessoa é um idoso")
    }
} else {
    console.error("Você digitou uma idade inválida")
}