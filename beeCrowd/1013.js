var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

//Faça um programa que leia três valores e apresente o maior dos três valores lidos seguido da mensagem “eh o maior”. Utilize a fórmula:
//Obs.: a fórmula apenas calcula o maior entre os dois primeiros (a e b). Um segundo passo, portanto é necessário para chegar no resultado esperado.

let [A, B, C] = lines.shift().split(' ').map(item => parseInt(item));
let maiorAB = (A + B + Math.abs(A - B)) / 2;
let maior = (maiorAB + C + Math.abs(maiorAB - C)) / 2;  
console.log(`${maior} eh o maior`);
