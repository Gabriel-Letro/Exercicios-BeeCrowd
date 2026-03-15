var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let [X, Y] = lines.shift().split(' ').map(item => parseInt(item));
let distancia = X * 2;
console.log(`${distancia} minutos`)