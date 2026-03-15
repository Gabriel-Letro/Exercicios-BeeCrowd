var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let [A, B, C, D] = lines.shift().split(' ').map(item => parseInt(item)); 

if (B > C && D > A && (C + D) > (A + B) && C >= 0 && D >= 0 && A % 2 == 0){
    console.log("Valores aceitos");
}else{
    console.log("Valores nao aceitos");
}