const cursosTodos = [...document.getElementsByClassName("curso")];
const cursosC1 = [...document.getElementsByClassName("c1")];
const cursosC2 = [...document.getElementsByClassName("c2")];
const cursoEspecial = document.getElementsByClassName("curso")[6]; // pegar um eleemnto só

console.log(cursosTodos);
console.log(cursosC1);
console.log(cursosC2);
console.log(cursoEspecial);


cursosC1.map((elemento) => {
    elemento.classList.add("destaque");
});
