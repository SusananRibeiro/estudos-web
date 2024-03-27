const caixa1 = document.querySelector("#caixa1");
const btn_c = [...document.querySelectorAll(".curso")];

console.log(caixa1.hasChildNodes()); // saber se o elemento possui filhos, ele retorna true se tiver
console.log(btn_c[0].hasChildNodes()); // saber se o elemento possui filhos, ele retorna true se tiver
console.log(btn_c[0].childNodes); // saber quem é o filho do elemento

// Verificar se tem filhos
console.log(btn_c[0].children.length > 0 ? "Possui filhos" : "Não possui filhos"); // Usando o operador ternario
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

// console.log(btn_c[0].ownerDocument); // pega o nó raiz
// console.log(btn_c[0].getRootNode()); // pega o nó raiz
// console.log(document.getRootNode()); // pega o nó raiz
// console.log(caixa1.children[0]);
// console.log(caixa1.firstElementChild); // pega o primeiro elemento
// console.log(caixa1.lastElementChild); // pega o ultimo elemento
// console.log(caixa1.children); // pega todos os elementos