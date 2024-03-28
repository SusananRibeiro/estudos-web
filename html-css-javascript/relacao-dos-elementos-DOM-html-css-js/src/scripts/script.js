const caixa1 = document.querySelector("#caixa1");
const btn_c = [...document.querySelectorAll(".curso")];
const c1_2 = document.querySelectorAll("#c1_2");

// console.log(c1_2.parentNode); // saber quem é o pai, dá erro
// console.log(c1_2.parentNode.parentNode); // saber quem é pai do pai, dá erro
console.log(c1_2.parentNode.parentNode.children[4]);

// console.log(caixa1.hasChildNodes()); // saber se o elemento possui filhos, ele retorna true se tiver
// console.log(btn_c[0].hasChildNodes()); // saber se o elemento possui filhos, ele retorna true se tiver
// console.log(btn_c[0].childNodes); // saber quem é o filho do elemento

// console.log(caixa1.firstElementChild.innerHTML = "Teste");
// console.log(caixa1.children[1].innerHTML = "Teste");

// Verificar se tem filhos
// console.log(btn_c[0].children.length > 0 ? "Possui filhos" : "Não possui filhos"); // Usando o operador ternario
// console.log(caixa1.children.length > 0 ? "Possui filhos" : "Nao possui filhos"); // Usando o operador ternario
// Verificar se tem filhos com IF tradicional
// if(caixa1.children.length > 0) {
//     console.log("Possui filhos");
// } else {
//     console.log("Nao possui filhos");
// }
// if(btn_c[0].children.length > 0) {
//     console.log("Possui filhos");
// } else {
//     console.log("Nao possui filhos");
// }

// Feito na aula 39
// console.log(btn_c[0].ownerDocument); // pega o nó raiz
// console.log(btn_c[0].getRootNode()); // pega o nó raiz
// console.log(document.getRootNode()); // pega o nó raiz
// console.log(caixa1.children[0]);
// console.log(caixa1.firstElementChild); // pega o primeiro elemento
// console.log(caixa1.lastElementChild); // pega o ultimo elemento
// console.log(caixa1.children); // pega todos os elementos