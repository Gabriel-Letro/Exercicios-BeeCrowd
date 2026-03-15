var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let tempoViagem = parseInt(lines.shift());
let velocidadeMedia = parseInt(lines.shift());

let distancia = tempoViagem * velocidadeMedia;

let litrosConsumidos = distancia / 12;


console.log(`${litrosConsumidos.toFixed(3)}`)