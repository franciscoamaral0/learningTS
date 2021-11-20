"use strict";
// Rest  & Spread
const numbers = [1, 10, 99, -5];
console.log(Math.max(...numbers));
const turmaA = ["Arthur", "Joao", "Camila"];
const turmaB = ["Fernando", "Maria", "Francisco", ...turmaA];
function retornaArray(...args) {
    return args;
}
const numberos = retornaArray(1, 2, 3, 4, 5, 6, 7, 8, 9);
console.log(numberos);
console.log(retornaArray(...numbers));
// Rest & Spread (Tupla)
const tupla = [1, "abc", false];
function tuplaParams1(a, b, c) {
    console.log(`1) ${a} ${b} ${c}`);
}
tuplaParams1(...tupla);
function tuplaPArams2(...params) {
    console.log(`1) ${params[0]} ${params[1]} ${params[2]}`);
}
tuplaPArams2(...tupla);
// Destructuring (array)
const caracteristicas = ["motor zetec 1.8", 2020];
const [motor, ano] = caracteristicas;
console.log(motor);
// Destructuring (objeto)
const item = {
    hd: "ssd 480gb",
    preco: 200
};
const { hd } = item;
console.log(hd);
//Template string
//# sourceMappingURL=ecmascript.js.map