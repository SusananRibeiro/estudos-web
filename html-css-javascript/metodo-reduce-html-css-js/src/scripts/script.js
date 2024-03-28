const p_array = document.querySelector("#array");
const btnReduzir = document.querySelector("#btnReduzir");
const resultado = document.querySelector("#resultado");

const elementos_array = [1, 2, 3, 4, 5];
let valorAnterior = [];
let valorAtual = [];
let valorEmDobro = [];

p_array.innerHTML = "[" + elementos_array + "]";

btnReduzir.addEventListener("click", (evento) => {
    valorEmDobro.push(elementos_array[0] * 2);
    resultado.innerHTML = elementos_array.reduce((retornoAnterior, atual, pos) => {
        valorAnterior.push(retornoAnterior);
        valorAtual.push(atual);
        valorEmDobro.push(atual * 2);
        return atual + retornoAnterior;
    })
    resultado.innerHTML += "<br/>Valor anterior: " + valorAnterior + "<br/>Valor atual: " + valorAtual + "<br/>Dobro: " + valorEmDobro;
})