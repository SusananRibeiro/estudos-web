const caixa1 = document.querySelector("#caixa1");
const btn_c = [...document.querySelectorAll(".curso")];
const c1_2 = document.querySelectorAll("#c1_2");
const cursos = ["HTML", "CSS", "JavaScript", "PHP", "React", "MySQL", "React Native"];

// Criar a estrutura dinamicamente
cursos.map((elemento, chave) => {
    const novoElemento = document.createElement("div");
    novoElemento.setAttribute("id", "c" + (chave + 1)); // "chave + 1" para que o valor comece do 1
    novoElemento.setAttribute("class", "curso c1");
    novoElemento.innerHTML = elemento;    
    caixa1.appendChild(novoElemento);

});

// Exemplo 1
// const novoElemento = document.createElement("div");
// novoElemento.setAttribute("id", "c7");
// novoElemento.setAttribute("class", "curso c1");
// novoElemento.innerHTML = "React Native";    
// caixa1.appendChild(novoElemento);
