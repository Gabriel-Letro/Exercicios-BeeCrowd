// x e y representam o tamanho da placa
//m representa a quantidade de placas
//xi e yi representam o tamanho do pedido
let input = "10 10 3\n5 5\n10 10\n5 25\n2 3 1\n3 2";
let lines = input.split(/\s+/);

let i = 0
while (i < lines.length){
    let x = parseInt(lines[i++]); // i = 0 //altura da placa
    let y = parseInt(lines[i++]); // i = 1 //largura da placa
    let p = parseInt(lines[i++]); // i = 2 //quantidade de placas
    for (let j = 0; j < p; j++){
        let xi = parseInt(lines[i++]) //altura da placa do pedido
        let yi = parseInt(lines[i++]) //largura da placa do pedido
        if ((xi <= x && yi <= y) || (xi <= y && yi <= x)){
            console.log('Sim');
        }
        else{
            console.log('Nao')}
    }
}





