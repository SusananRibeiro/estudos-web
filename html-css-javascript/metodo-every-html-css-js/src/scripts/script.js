const p_array = document.querySelector("#array");
const btnVerificar=document.querySelector("#btnVerificar");
const resultado=document.querySelector("#resultado");

const elementos_array = [21, 25, 19, 20, 18, 18, 22];
p_array.innerHTML = "[" + elementos_array + "]";

btnVerificar.addEventListener("click", (evento) => {
    const retorno = elementos_array.every((elemento, indice) => {
        if(elemento < 18){
            resultado.innerHTML = "Array não conforme na posição " + indice;
        }
        return elemento >= 18;
    })
    if(retorno) {
        resultado.innerHTML = "OK";
    }
    //console.log(retorno);
})


