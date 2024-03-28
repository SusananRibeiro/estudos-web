const p_array = document.querySelector("#array");
const txt_pesquisar = document.querySelector("#txt_pesquisar");
const btnPesquisar = document.querySelector("#btnPesquisar");
const resultado = document.querySelector("#resultado");

const elementos_array = ["html", "css", "javascript"];
p_array.innerHTML = "[" + elementos_array + "]";

btnPesquisar.addEventListener("click", (evento) => {
    resultado.innerHTML = "Valor não encontrado"; 
    const retorno = elementos_array.find((elemento, indice) => {
        if(elemento.toUpperCase() === txt_pesquisar.value.toUpperCase()) {
            resultado.innerHTML = "Valor encontrado " + elemento + " na posição " + indice
            return elemento
        }
    })
    console.log(retorno)
})  