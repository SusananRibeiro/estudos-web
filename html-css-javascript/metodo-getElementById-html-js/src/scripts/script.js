const divC1 = document.getElementById("c1"); // pegar um elemento pelo seu ID
const divC2 = document.getElementById("c2"); // pegar um elemento pelo seu ID
const divC3 = document.getElementById("c3"); // pegar um elemento pelo seu ID
const divC4 = document.getElementById("c4"); // pegar um elemento pelo seu ID
const divC5 = document.getElementById("c5"); // pegar um elemento pelo seu ID
const divC6 = document.getElementById("c6"); // pegar um elemento pelo seu ID

const arrayElememtos = [divC1, divC2, divC3, divC4, divC5, divC6];

arrayElememtos.map((elemento) => {
    elemento.innerHTML = "Olá, mundo!";
    console.log(elemento);
});

// arrayElememtos.map((elemento) => {
//     console.log(elemento);
// });

// for(d of arrayElememtos) {
//     d.innerHTML = "Olá, mundo!";
// }

// arrayElememtos.map((elemento, indice, array) => {
//     console.log(elemento, indice, array);
// });

// console.log(arrayElememtos);

// console.log(divC1);
// console.log(divC1.id);
// console.log(divC1.innerHTML);
// divC1.innerHTML = "Olá, mundo!"; // Mudar o valor da tag
