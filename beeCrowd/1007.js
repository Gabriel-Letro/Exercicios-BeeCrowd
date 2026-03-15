var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let A = parseFloat(lines[0])
let B = parseFloat(lines[1])
let C = parseFloat(lines[2])
let D = parseFloat(lines[3])

console.log(`DIFERENCA = ${(A * B - C * D)}`)