// Usando Spread em Arrays
// let numero1 = [10, 20, 30];
// let numero2 = [11, 22, 33, 44, 55];
// // let numero3 = [...numero1]; // usando o operador spread
// let numero3 = [...numero1, ...numero2];
// console.log("NUMERO 1: " + numero1);
// console.log("NUMERO 2: " + numero2);
// console.log("NUMERO 3: " + numero3);
// console.log("Tipo do NUMERO 3: " + typeof(numero3));

// Usando Spread em Objetos
// const jogador1 = {nome: "Susana", energia: 100, vidas: 3, magia: 150};
// const jogador2 = {nome: "Camila", energia: 100, vidas: 5, velocidade: 80};
// const jogador3 = {...jogador1, ...jogador2};
// console.log(jogador3); // { nome: 'Camila', energia: 100, vidas: 5, magia: 150, velocidade: 80 } --> o que for igual nos dois ele tras o do ultimo.

// Usando Spread em Funções
// const soma = (valor1, valor2, valor3) => {
//     return valor1 + valor2 + valor3;
// };

// let valores = [1, 5, 4];
// console.log(soma(...valores));

const objs1 = document.getElementsByTagName("div"); // Retorna uma coleção de elementos HTML
const objs2 = [...document.getElementsByTagName("div")]; // Retorna uma coleção de elementos HTML

objs2.forEach(element => {
    console.log(element)
});

console.log(objs1);
console.log(objs2);




  
