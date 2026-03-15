var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let cedulas = [100, 50, 20, 10, 5, 2, 1]

let valor = parseInt(lines.shift());
console.log(valor);

for(let i = 0; i < cedulas.length; i++){
    let quantidade = Math.floor(valor / cedulas[i]);
    console.log(`${quantidade} nota(s) de R$ ${cedulas[i]},00`);
    valor = valor % cedulas[i];
}
