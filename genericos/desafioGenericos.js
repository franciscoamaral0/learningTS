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
class Mapa {
    constructor() {
        this.itens = new Array();
    }
    obter(chave) {
        const resultado = this.itens.filter(i => i.chave === chave);
        return resultado ? resultado[0] : null;
    }
    colocar(par) {
        const encontrado = this.obter(par.chave);
        if (encontrado) {
            encontrado.valor = par.valor;
        }
        else {
            this.itens.push(par);
        }
    }
    limpar() {
        this.itens = new Array();
    }
    imprimir() {
        console.log(this.itens);
    }
}
const mapa = new Mapa();
mapa.colocar({ chave: 1, valor: 'Pedro' });
mapa.colocar({ chave: 2, valor: 'Rebeca' });
mapa.colocar({ chave: 3, valor: 'Maria' });
mapa.colocar({ chave: 1, valor: 'Gustavo' });
console.log(mapa.obter(2));
mapa.imprimir();
mapa.limpar();
mapa.imprimir();
//# sourceMappingURL=desafioGenericos.js.map