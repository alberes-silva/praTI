/*
 * Crie um programa que classifica a idade de uma pessoa em categorias (criança,
 * adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
 * controle if-else.
 */


//Para uso do node no VsCode foi utilizado o comando npm install prompt-sync para obtenção dos dados externos

const prompt = require('prompt-sync')()

//Entrada de dados
let idade = Number(prompt("Informe a idade da pessoa: "))


//Processamento de dados com verificação de erro
if(Number.isInteger(idade) && (idade > 0)){
    if(idade <= 12){
        console.log("A pessoa é uma criança")
    } else if(idade > 12 && idade <= 18){
        console.log("A pessoa é um adolescente")
    } else if(idade > 19 && idade < 59){
        console.log("A pessoa é um adulto")
    }else {
        console.log("A pessoa é um idoso")
    }
} else {
    console.error("Você digitou uma idade inválida")
}