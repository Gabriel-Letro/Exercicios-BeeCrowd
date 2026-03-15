let numero = parseInt(lines[0])
let horas = parseInt(lines[1])
let valorPorHora = parseFloat(lines[2])

let salario = horas * valorPorHora

console.log(`NUMBER = ${numero}`)
console.log(`SALARY = U$ ${salario.toFixed(2)}`)
