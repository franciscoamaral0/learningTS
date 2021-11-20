"use strict";
// Usando generics 
function echo(objeto) {
    return objeto;
}
console.log(echo('João').length);
console.log(echo(27));
console.log(echo({ nome: "joao", idade: 27 }));
//Gerecis disponiveis na API
// Eu posso tipar atraves dos generics tbm
const avaliacoes = [10, 12, 9.93, 5, 5];
avaliacoes.push(3, 3);
console.log(avaliacoes);
// avaliacoes.push("2.2")
// Array
//Posso inferir um tipo generico para um array, poteriormente tipar os valores que vao pertencer ao mesmo.
function imprimir(args) {
    args.forEach(element => console.log(element));
}
imprimir([1, 2, 3]);
imprimir(["1", "2", "maria"]);
imprimir([
    { nome: "francisco", idade: 31 },
    { nome: "Camila", idade: 30 },
]);
imprimir([
    { nome: "Joao", idade: 20 },
    { nome: "Artur", idade: 20 }
]);
const chamarEcho = echo;
console.log(chamarEcho("alguma coisa"));
//# sourceMappingURL=genericos.js.map