/**
 * Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
 * formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
 * Isósceles, escaleno ou eqüilátero.
 * Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
 * Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
 * Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
 * Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)
  */

//Para uso do node no VsCode foi utilizado o comando npm install prompt-sync para obtenção dos dados externos
const prompt = require('prompt-sync')();

let ladoA = Number(prompt("Informe o lado A: "));
let ladoB = Number(prompt("Informe o lado B: "));
let ladoC = Number(prompt("Informe o lado C: "));

const formaTriangulo = (
    ladoA > 0 && ladoB > 0 && ladoC > 0 &&
    ladoA < ladoB + ladoC &&
    ladoB < ladoA + ladoC &&
    ladoC < ladoA + ladoB
);

if (formaTriangulo) {
    if (ladoA === ladoB && ladoB === ladoC) {
        console.log("Triângulo equilátero");
    } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
        console.log("Triângulo isósceles");
    } else {
        console.log("Triângulo escaleno");
    }
} else {
    console.log("Os valores informados não formam um triângulo válido.");
}
