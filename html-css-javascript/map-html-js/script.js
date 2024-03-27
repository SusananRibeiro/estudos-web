// Exemplo 6
const converterInt = (elemento) => parseInt(elemento);
let numero1 = ['1', '2', '3', '4', '5'].map(converterInt);
console.log(numero1);

const dobrar = (elemento) => elemento * 2;
let numero2 = ['1', '2', '3', '4', '5'].map(dobrar);
console.log(numero2);

// Exemplo 5 - Se usa o HTML junto
// const elemento = document.getElementsByTagName("div");
// const valores = Array.prototype.map.call(elemento, ({innerHTML}) => innerHTML);
// console.log(valores);


// Exemplo 4 - Se usa o HTML junto
// let elemento = document.getElementsByTagName("div");
// elemento = [...elemento]; // precisa deixar iteravel, se não fizer isso da erro
// elemento.map((elem, indice) => {
//     console.log(elem.innerHTML);
// });



// const cursos = ["HTML", "CSS", "JavaScript", "PHP", "React"];

// Exemplo 3
// let curso = cursos.map((elemento, indice) => {
//     return "<div>" + elemento + "</div>";
// });
// console.log(curso); // [ '<div>HTML</div>', '<div>CSS</div>', '<div>JavaScript</div>', '<div>PHP</div>', '<div>React</div>']

// Exemplo 2
// let curso = cursos.map((elemento, indice) => {
//     return elemento;
// });
// console.log(curso); // [ 'HTML', 'CSS', 'JavaScript', 'PHP', 'React' ]

// Exemplo 1
// cursos.map((elemento, indice) => {
//     console.log("Curso: " + elemento + " - Posição do curso: " + indice)
// });
