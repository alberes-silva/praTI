
/*
 * Implemente um programa que recebe uma nota de 0 a 10 e classifica como
 * "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.
 */

//Para uso do node no VsCode foi utilizado o comando npm install prompt-sync para obtenção dos dados externos

const prompt = require('prompt-sync')()

//Entrada de dados
let nota01 = Number(prompt("Digite a primeira nota: "));
let nota02 = Number(prompt("Digite a segunda nota: "));
let nota03 = Number(prompt("Digite a terceira nota: "));
let nota04 = Number(prompt("Digite a quarta nota: "));

//Limpeza do console
console.clear();

//Calculo da média

let media = (nota01 + nota02 + nota03 + nota04) / 4;


//Saída de dados
if(parseFloat(media)){
    console.log("A sua média foi ",media.toFixed(2));
} else {
    console.log("Valores inválidos");
}


//Avaliação do resultado da média com saída de dados
if(!isNaN(media) && media >= 0 && media <=10){
    if (media < 5){
    console.log("Aluno reprovado");
    } else if (media >= 5 && media < 7){
    console.log("Aluno em recuperação");
    } else {
    console.log("aluno Aprovado");
    }
} else {
    console.log("Reveja os valores informados nas notas")
}
