// const c1 = document.getElementById("c1");
// const c4 = document.querySelector("#c4");
const cursos = [...document.querySelectorAll(".curso")];

cursos.map((elemento) => {
    elemento.addEventListener("click", (evento) => {
        const elemento = evento.target;
        elemento.classList.add("destaque");
        console.log(elemento.id + " foi clicado"); // somente para debug do código, não precisa dessa parte
        console.log(elemento.innerHTML + " foi clicado"); // somente para debug do código, não precisa dessa parte
    });    
});

// const mensagem3 = () => {
//     alert('Clicou em PHP');
// }

// c4.addEventListener("click", (evento) => {
//     const elemento = evento.target;
//     elemento.classList.add("destaque");
// }); 

// vai escutar o evento
// c4.addEventListener("click", () => {
//     mensagem3();
// }); 

const mensagem2 = () => {
    alert('Clicou em JavaScript');
}

function mensagem() {
    alert('Clicou');
}



