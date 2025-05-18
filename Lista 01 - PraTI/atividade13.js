/**
 * Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
 * a média aritmética desses números.
 */

//Para uso do node no VsCode foi utilizado o comando npm install prompt-sync para obtenção dos dados externos
const prompt = require('prompt-sync')();


let opcao = Number(prompt(`Para sair digite 0 (zero): `))

while(opcao != 0){
    console.log("Teste");
}