/*
 * As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
 * forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
 * compradas, calcule e escreva o valor total da compra.
 */


//Para uso do node no VsCode foi utilizado o comando npm install prompt-sync para obtenção dos dados externos
const prompt = require('prompt-sync')();

//Entrada de dados do usuário
let quantidadeDasMacas = Number(prompt("Informe a quantidade de maças: "));

//Variáveis criadas para controle
let precoMaca = 0.3;
let desconto = 0.05;
let descontoMaca = precoMaca - desconto;

//Processamento de dados e saída de informações como cálculo do valor a ser pago, com desconto e sem desconto, a partir da quantidade das maças
if(Number.isInteger(quantidadeDasMacas) && quantidadeDasMacas > 0){
    if(quantidadeDasMacas < 12) {
        let totalFinal = quantidadeDasMacas * precoMaca;
        if(quantidadeDasMacas == 1){
            console.log("Você comprou ", quantidadeDasMacas, "maçã e o valor à pagar é R$ ", parseFloat(totalFinal));
        } else {
            console.log("Você comprou ", quantidadeDasMacas, "maçãs e o valor à pagar é R$ ", parseFloat(totalFinal));
        }
        
    } else {
        totalFinal = quantidadeDasMacas * descontoMaca;
        console.log("Você comprou ", quantidadeDasMacas, "maças e o valor à pagar é R$ ", parseFloat(totalFinal))
    }
} else {
    console.log("Valor inválido!")
}