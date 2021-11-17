"use strict";
class Moto {
    constructor(nome) {
        this.nome = nome;
        this.velocidade = 0;
    }
    buzinar() {
        console.log("toooooooot");
    }
    acelerar(delta) {
        return this.velocidade = this.velocidade + delta;
    }
}
const moto = new Moto("ducati");
moto.buzinar();
console.log(moto.acelerar(10));
console.log(moto.acelerar(10));
console.log(moto.acelerar(10));
console.log(moto.acelerar(10));
console.log(moto.acelerar(10));
// Exercicio 2 - Heranca
class Objeto2D {
    constructor(base = 0, altura = 0) {
        this.base = base;
        this.altura = altura;
    }
}
class Retangulo extends Objeto2D {
    area() {
        return this.base * this.altura;
    }
}
const retangulo = new Retangulo(10, 20);
console.log(retangulo.area());
// Exercicio 3 Getters & Setters
class Estagiario {
    constructor() {
        this._primeiroNome = '';
    }
    get primeiroNome() {
        return this._primeiroNome;
    }
    set primeiroNome(nome) {
        nome.length >= 3 ? this._primeiroNome = nome : '';
    }
}
const estagirio = new Estagiario;
estagirio.primeiroNome = "le";
console.log(estagirio.primeiroNome);
estagirio.primeiroNome = "Francisco";
console.log(estagirio.primeiroNome);
//# sourceMappingURL=desafio.js.map