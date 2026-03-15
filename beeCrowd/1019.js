var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let N = parseInt(lines.shift());

let horas = Math.floor(N / 3600);
let minutos = Math.floor((N % 3600) / 60)
let segundos = N % 60

let resultado = `${horas}:${minutos}:${segundos}`
console.log(resultado)