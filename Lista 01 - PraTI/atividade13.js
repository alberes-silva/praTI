/**
 * Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
 * a média aritmética desses números.
 */

//Para uso do node no VsCode foi utilizado o comando npm install prompt-sync para obtenção dos dados externos
const prompt = require('prompt-sync')();

//Criação das variáveis de controle
let soma = 0;
let quantidade = 0;
let numero;


//Procesamento de dados utilizando do-while para controle de encerramento com 0 (zero)
do {
  numero = parseFloat(prompt("Digite um valor decimal (0 para encerrar): "));

  if (numero !== 0) {
    soma += numero;
    quantidade++;
  }

} while (numero !== 0);

    if (quantidade > 0) {
    let media = soma / quantidade;
    console.log("A média aritmética é: " + media.toFixed(2));
    } else {
    console.log("Nenhum número foi inserido para calcular a média.");
    }
