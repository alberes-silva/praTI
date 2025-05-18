const prompt = require('prompt-sync')()

let idade = parseInt(prompt("Informe a idade da pessoa: "))

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