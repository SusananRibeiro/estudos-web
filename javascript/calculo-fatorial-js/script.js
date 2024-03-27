// 5! = 5*4*3*2*1 = 120
let numero = 10;
let fatorial = 1;

while(numero >= 1) {
    fatorial*=numero;
    numero--;
}

console.log(fatorial);


// Usando a Estrutura WHILE
function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
