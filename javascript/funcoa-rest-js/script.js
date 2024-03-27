// "..." transforma em parâmetros REST
function soma(...valores) {
    let tamanho = valores.length;
    let resultado = 0;

    // for(let i = 0; i < tamanho; i++) {
    //     resultado += valores[i];
    // }

    for(let valor of valores) {
        resultado += valor;
    }

    return resultado;
}

console.log(soma(5, 10, 2, 50));