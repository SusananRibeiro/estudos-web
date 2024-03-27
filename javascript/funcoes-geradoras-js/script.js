// Exemplo 3
function* contador() {
    let i = 0;
    while(true) {
        yield i++;
        if(i > 5) {
            break;
        }
    }
}

const iterator = contador();
for(let c of iterator) {
    console.log(c);
}
// for(let i = 0; i < 10; i++) {
//     console.log(iterator.next().value);
// }


// Exemplo 2
// function* perguntas() {
//     const nome = yield 'Qual o sue nome?';
//     const esporte = yield 'Qual o seu esporte favorito?';
//     return "Seu nome é " + nome + ", seu esporte favorito é " + esporte;
// }

// const iterator = perguntas();
// console.log(iterator.next().value);
// console.log(iterator.next("Susana").value);
// console.log(iterator.next('Ping pong').value);


// Exemplo 1
// function* cores() {
//     yield 'Vermelho'; // "yield" é o ponto de parada
//     yield 'Verde';
//     yield 'Azul';
// }

// const iterator = cores();
// console.log(iterator.next().value);
