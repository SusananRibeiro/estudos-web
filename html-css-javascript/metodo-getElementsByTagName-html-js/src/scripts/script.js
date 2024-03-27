const divC1 = document.getElementById("c1"); // pegar um elemento pelo seu ID
const divC2 = document.getElementById("c2"); // pegar um elemento pelo seu ID
const divC3 = document.getElementById("c3"); // pegar um elemento pelo seu ID
const divC4 = document.getElementById("c4"); // pegar um elemento pelo seu ID
const divC5 = document.getElementById("c5"); // pegar um elemento pelo seu ID
const divC6 = document.getElementById("c6"); // pegar um elemento pelo seu ID

// const arrayElememtos = [divC1, divC2, divC3, divC4, divC5, divC6];
// console.log(arrayElememtos);

// const colecaoHTML = [...document.getElementsByTagName("div")]; // para poder usar como array, uma das formas de fazer
let colecaoHTML = document.getElementsByTagName("div"); // para poder usar como array, outra forma de fazer
colecaoHTML = [...colecaoHTML];
console.log(colecaoHTML);

colecaoHTML.map((elemento) => {
    console.log(elemento);
})

