"use strict";
function saudarComOla(pessoa) {
    console.log("Olá " + pessoa.nome);
}
function mudarNome(pessoa) {
    pessoa.nome = "Joana";
}
const pessoa = {
    nome: "João",
    idade: 27,
    saudar(sobrenome) {
        console.log("Olá, meu nome é " + this.nome + ' ' + sobrenome);
    }
};
saudarComOla(pessoa);
mudarNome(pessoa);
// saudarComOla({nome:'Francisco', idade:27, altura: 1.75})
pessoa.saudar("Amaral");
// Usando Classes
class Cliente {
    constructor() {
        this.nome = '';
    }
    saudar(sobrenome) {
        console.log('Olá, meu nome é ' + this.nome + ' ' + sobrenome);
    }
}
const client = new Cliente();
client.nome = 'Hans';
saudarComOla(client);
client.saudar('Solo');
let potencia;
potencia = function (base, exp) {
    return Math.pow(base, exp);
};
console.log(potencia(3, 10));
class RealA {
    a() { }
}
class RealAB {
    a() { }
    b() { }
}
class RealABC {
    a() { }
    b() { }
    c() { }
}
class AbstractABD {
    a() { }
    b() { }
}
Object.prototype.log = function () {
    console.log(this.toString());
};
const x = 2;
const y = 3;
const z = 4;
x.log();
y.log();
z.log();
//# sourceMappingURL=interfaces.js.map