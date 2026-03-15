var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');  

let nota1 = parseFloat(lines[0])
let nota2 = parseFloat(lines[1])
let nota3 = parseFloat(lines[2])
let nota4 = parseFloat(lines[3])

let media = (nota1 * 2 + nota2 * 3 + nota3 * 4 + nota4 * 1) / 10

console.log(`Media: ${media.toFixed(1)}`)
        
if(media >= 7.0){
    console.log("Aluno aprovado.")
}
else if(media < 5.0){
    console.log("Aluno reprovado.")
}
else{
    console.log("Aluno em exame.");
    let notaExame = parseFloat(lines[4]);
    console.log(`Nota do exame: ${notaExame.toFixed(1)}`);
    media = (media + notaExame) / 2;
    if(media >= 5.0){
        console.log("Aluno aprovado.");
    }   
    else{
        console.log("Aluno reprovado.");
    }
    console.log(`Media final: ${media.toFixed(1)}`);
}