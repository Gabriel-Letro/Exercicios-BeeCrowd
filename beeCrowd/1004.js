var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let A = parseFloat(lines[0])
let B = parseFloat(lines[1])

let PROD = A*B
console.log(`PROD = ${PROD}`)