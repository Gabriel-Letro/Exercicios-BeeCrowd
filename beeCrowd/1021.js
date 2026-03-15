var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let valorMonetario = parseFloat(lines.shift());

let notas = [100, 50, 20, 10, 5, 2];
let moedas = [1, 0.50, 0.25, 0.10, 0.05, 0.01];

console.log("NOTAS:");
for(let i = 0; i < notas.length; i++){
    let quantidade = Math.floor(valorMonetario / notas [i])
    console.log(`${quantidade} nota(s) de R$ ${notas[i].toFixed(2)}`);
    valorMonetario = (valorMonetario % notas[i]).toFixed(2);
}
console.log("MOEDAS:");
for(let j = 0; j < moedas.length; j++){
    let quantidade = Math.floor(valorMonetario / moedas[j])
    console.log(`${quantidade} moeda(s) de R$ ${moedas[j].toFixed(2)}`)
    valorMonetario = (valorMonetario % moedas[j]).toFixed(2);
}
