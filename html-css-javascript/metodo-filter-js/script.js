const idades = [15, 21, 30, 17, 18, 44, 12, 50];

// Criar um novo array somente com as pessoas que forem maior ou igual a 18 anos.
const maiorDeIdade = idades.filter((valor) => {
    if(valor >= 18) {
        return valor;
    }
});

// Menor de 18 anos
const menorDeIdade = idades.filter((valor) => {
    if(valor < 18) {
        return valor;
    }
});

console.log(idades);
console.log(maiorDeIdade);
console.log(menorDeIdade);


// // Primeira versão
// const idades = [15, 21, 30, 17, 18, 44, 12, 50];
// // const filtroMaior18 = (valor, indice, array) => {};
// const filtroMaior18 = (valor) => {
//     if(valor >= 18) {
//         return valor;
//     }
// };

// // Criar um novo array somente com as pessoas que forem maior ou igual a 18 anos.
// const maiorDeIdade = idades.filter(filtroMaior18);

// console.log(idades);
// console.log(maiorDeIdade)

