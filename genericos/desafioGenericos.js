"use strict";
class Fila {
    constructor() {
        this.fila = [];
    }
    entrar(args) {
        return this.fila.push(args);
    }
    proximo() {
        this.fila.length === 1 ? console.log(`Não há mais ninguem na fila, o(a) ${this.fila[0]} que é a ultima pessoa esta a ser atendida`)
            : console.log(`${this.fila.shift()} saiu da fila, o proximo a ser atendido é o ${this.fila[0]} `);
    }
    imprimir() {
        console.log(`Estão na fila ${this.fila.length} pessoas.`);
    }
}
const fila = new Fila();
fila.entrar("Fernando");
fila.entrar("Camila");
fila.entrar("Joao");
fila.entrar("Maria");
fila.entrar("Paulo");
fila.entrar("Joana");
fila.imprimir();
fila.proximo();
fila.proximo();
fila.proximo();
fila.proximo();
fila.proximo();
fila.proximo();
fila.imprimir();
//# sourceMappingURL=desafioGenericos.js.map