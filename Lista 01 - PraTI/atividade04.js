/*
 * Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
 * Utilize switch-case para implementar a lógica de cada opção selecionada.
 */


//Para uso do node no VsCode foi utilizado o comando npm install prompt-sync para obtenção dos dados externos

const prompt = require('prompt-sync')();

//Criação de variavéis
let valor = 0;
let opcao = 0;

//Opção para escolha dos usuários
opcao = parseInt(prompt("Escolha as opções de pagamento: 1-Débito 2-Cartão de Crédito, 3-PIX "));

//Limpeza de tela
console.clear();


//Processamento das informações fornecida pelo usuário - utilizamos o switch
switch(opcao) {
    case 1:
        valor = parseFloat(prompt("Digite o valor e confirme: R$ "));
        console.log("Pagamento no débito de R$ " + valor.toFixed(2) + " realizado com suscesso.");
        break;
    case 2:
        valor = parseFloat(prompt("Digite o valor e confirme: R$ "));
        console.log("Pagamento no Cartão de Crédito de R$ " + valor.toFixed(2) + " realizado com suscesso.");
        break;
    case 3:
        valor = parseFloat(prompt("Digite o valor e confirme: R$ "));
        console.log("Pagamento via PIX de R$ " + valor.toFixed(2) + " realizado com suscesso.");
        break;
    default:
        console.log("Opção inválida!");
}
