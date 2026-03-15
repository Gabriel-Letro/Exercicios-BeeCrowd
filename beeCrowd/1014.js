var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let distancia = parseInt(lines.shift());
let litros = parseFloat(lines.shift());

let consumo = distancia / litros 
console.log(`${consumo.toFixed(3)} km/l`)