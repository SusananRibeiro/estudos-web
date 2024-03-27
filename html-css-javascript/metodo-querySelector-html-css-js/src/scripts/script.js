const divTodas = [...document.getElementsByTagName("div")];
const cursosTodos = [...document.getElementsByClassName("curso")];
const cursosC1 = [...document.getElementsByClassName("c1")];
const cursosC2 = [...document.getElementsByClassName("c2")];
const cursoEspecial = document.getElementById("c1");

const query_divTodas = document.querySelectorAll("div > p"); // Obter todos elementos "p" que tem como parent o elemeto "div"
console.log(query_divTodas); 

// const query_divTodas = document.querySelectorAll("div[class]"); // Pegar as divs que tem o atributo class
// console.log(query_divTodas); 

// const query_cursosC1 = [...document.querySelectorAll(".c1, p")];
// console.log(query_cursosC1);  

// const query_divTodas = document.querySelectorAll("div, p"); // Pegar mais de uma tag
// console.log(query_divTodas); 

// // const query_cursoEspecial = document.querySelector("#c1");
// const query_cursoEspecial = document.querySelector("#c1")[0];
// console.log(query_cursoEspecial);

// const query_cursosC1 = [...document.querySelectorAll(".c1")];
// const query_cursosC2 = [...document.querySelectorAll(".c2")];
// console.log(query_cursosC1);  
// console.log(query_cursosC2);  

// const query_cursosTodos = [...document.querySelectorAll(".curso")];
// console.log(query_cursosTodos);  

// const queryAll_divTodas = [...document.querySelectorAll("div")]; // Retorna todos elemento que achar
// console.log(queryAll_divTodas);   

// console.log(divTodas);
// console.log(cursosTodos);
// console.log(cursosC1);
// console.log(cursosC2);
// console.log(cursoEspecial);


// cursosC2.map((elemento) => {
//     elemento.classList.add("destaque");
// });




