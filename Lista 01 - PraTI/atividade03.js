const prompt = require('prompt-sync')()

//Entrada de dados
let nota01 = parseFloat(prompt("Digite a primeira nota: "));
let nota02 = parseFloat(prompt("Digite a segunda nota: "));
let nota03 = parseFloat(prompt("Digite a terceira nota: "));
let nota04 = parseFloat(prompt("Digite a quarta nota: "));

//Limpeza do console
console.clear();

//Calculo da média
let media = (nota01 + nota02 + nota03 + nota04) / 4;

//Saída de dados
console.log("A sua média foi ",media);

//Avaliação do resultado da média com saída de dados
if (media < 5){
    console.log("Aluno reprovado");
} else if (media >= 5 && media < 7){
    console.log("Aluno em recuperação");
} else {
    console.log("aluno Aprovado");
}
