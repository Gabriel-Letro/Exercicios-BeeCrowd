var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let idadeEmDias = parseInt(lines.shift());

let anos = Math.floor(idadeEmDias / 365)
let meses = Math.floor((idadeEmDias % 365) / 30)
let dias = idadeEmDias - (anos * 365 + meses * 30)

console.log(`${anos} ano(s)`);
console.log(`${meses} mes(es)`);
console.log(`${dias} dia(s)`);