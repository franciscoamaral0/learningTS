"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const classes_js_1 = require("../classes/classes.js");
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
// Class com Generics
// class OperacaoBinaria {
//   constructor(public operando1: any, public operando2: any){}
//   executar(){
//     return this.operando1 + this.operando2
//   }
// }
// console.log(new OperacaoBinaria(2,3).executar())
// console.log(new OperacaoBinaria("bom ","dia").executar())
// console.log(new OperacaoBinaria("ola",3).executar())
// console.log(new OperacaoBinaria({},{}).executar())
class OperacaoBinaria {
    constructor(operando1, operando2) {
        this.operando1 = operando1;
        this.operando2 = operando2;
    }
}
class SomaBinaria extends OperacaoBinaria {
    executar() {
        return this.operando1 + this.operando2;
    }
}
console.log(new SomaBinaria(1, 2).executar());
console.log(new SomaBinaria(123, 223).executar());
class DiferencaDatas extends OperacaoBinaria {
    getTime(data) {
        let { dia, mes, ano } = data;
        return new Date(`${mes}/${dia}/${ano}`).getTime();
    }
    executar() {
        const t1 = this.getTime(this.operando1);
        const t2 = this.getTime(this.operando2);
        const diferenca = Math.abs(t1 - t2);
        const dia = 1000 * 60 * 60 * 24;
        return `${Math.ceil(diferenca / dia)} dia(s)`;
    }
}
const d1 = new classes_js_1.Data(1, 2, 2020);
const d2 = new classes_js_1.Data(5, 5, 2022);
console.log(new DiferencaDatas(d1, d2).executar());
// console.log(new DiferencaDatas(new Date().getFullYear(), 2010).executar())
//# sourceMappingURL=genericos.js.map