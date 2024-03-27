const objs = document.getElementsByTagName("div");

// For tradicional
for(let i = 0; i < objs.length; i++) {
    console.log(objs[i]);


}

// For OF
for(o of objs) {
    console.log(o); // imprime os elementos
}

// For IN
for(o in objs) {
    console.log(objs[o].innerHTML);
}



// let numero = [10, 20, 30, 40, 50];  

// // FOR Of
// for(n of numero) {
//     console.log(n); // imprime os elementos --> 10, 20, 30, 40 e 50
// }


// // FOR In
// for(n in numero) {
//     // console.log(n); // imprime a posição dos elementos --> 0, 1, 2, 3 e 4
//     console.log(numero[n]); // imprime os elementos --> 10, 20, 30, 40 e 50
// }


// FOR tradicional
// for(let i = 0; i < numero.length; i++) {
//     // console.log(i); // imprime a posição dos elementos --> 0, 1, 2, 3 e 4
//     console.log(numero[i]); // imprime os elementos --> 10, 20, 30, 40 e 50
// }