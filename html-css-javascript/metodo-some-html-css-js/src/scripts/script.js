const p_array=document.querySelector("#array");
const btnVerificar=document.querySelector("#btnVerificar");
const resultado=document.querySelector("#resultado");

const elementos_array = [16, 12, 20, 10, 17, 15, 13, 11, 18];
p_array.innerHTML = "[" + elementos_array + "]";

btnVerificar.addEventListener("click", (evento) => {
    const retorno = elementos_array.some((elemento, indice) => {
        if(elemento < 18){ 
            resultado.innerHTML = "Array não conforme na posição " + indice;
        }
        return elemento >= 18;
    })
    if(retorno) {
        resultado.innerHTML = "OK";
    }
})