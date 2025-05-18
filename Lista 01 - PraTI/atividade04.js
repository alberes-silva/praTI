const prompt = require('prompt-sync')();

let valor = 0;
let opcao = 0;

opcao = parseInt(prompt("Escolha as opções de pagamento: 1-Débito 2-Cartão de Crédito, 3-PIX "));


console.clear();

switch(opcao) {
    case 1:
        valor = parseFloat(prompt("Digite o valor e confirme: R$ "));
        console.log("Pagamento no débito de R$ " + valor.toFixed(2));
        break;
    case 2:
        valor = parseFloat(prompt("Digite o valor e confirme: R$ "));
        console.log("Pagamento no Cartão de Crédito de R$ " + valor.toFixed(2));
        break;
    case 3:
        valor = parseFloat(prompt("Digite o valor e confirme: R$ "));
        console.log("Pagamento via PIX de R$ " + valor.toFixed(2));
        break;
    default:
        console.log("Opção inválida!");
}
