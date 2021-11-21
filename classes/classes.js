"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Data = void 0;
class Data {
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
exports.Data = Data;
// Publico por padrao, pode ser definido como static ou private
Data.nome = "Francisco";
const aniversario = new Data(3, 1, 1991);
aniversario.dia = 4;
console.log(aniversario.dia);
console.log(aniversario);
console.log(Data.nome);
const casamento = new Data;
console.log(casamento);
class DataEsperta {
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
// Publico por padrao, pode ser definido como static ou private
DataEsperta.nome = "Francisco";
const niverEsperto = new DataEsperta(3, 1, 1991);
niverEsperto.dia = 4;
console.log(niverEsperto.dia);
console.log(niverEsperto);
console.log(DataEsperta.nome);
const casamentoEsperto = new DataEsperta;
console.log(casamentoEsperto);
class Produto {
    constructor(nome, preco, desconto = 0) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }
    precoComDesconto() {
        return this.preco - (this.preco * this.desconto);
    }
    resumo() {
        return `${this.nome} custa ${this.precoComDesconto()}€ (${this.desconto * 100}%OFF)`;
    }
}
const notebook = new Produto("Macbook", 4.2, 0.05);
const pcGamer = new Produto("Pc", 1000);
console.log(notebook.resumo());
console.log(notebook);
console.log(pcGamer);
class Carro {
    constructor(marca, modelo, velocidadeMaxima = 200) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadeMaxima = velocidadeMaxima;
        this.velocidadeAtual = 0;
    }
    alterarVelocidade(delta) {
        const novaVelocidade = this.velocidadeAtual + delta;
        const velocidadeValida = novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima;
        if (velocidadeValida) {
            this.velocidadeAtual = novaVelocidade;
        }
        else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
        }
        return this.velocidadeAtual;
    }
    acelerar() {
        return this.alterarVelocidade(5);
    }
    frear() {
        return this.alterarVelocidade(-5);
    }
}
const carro = new Carro("ford", "ka");
console.log(carro);
Array(30).fill(0).forEach(() => carro.acelerar());
console.log(carro.acelerar());
Array(20).fill(0).forEach(() => carro.frear());
console.log(carro.acelerar());
class Ferrari extends Carro {
    constructor(modelo, velocidadeMaxima) {
        super("Ferrari", modelo, velocidadeMaxima);
    }
    acelerar() {
        return this.alterarVelocidade(25);
    }
    frear() {
        return this.alterarVelocidade(-10);
    }
}
const ferrari = new Ferrari("f40", 500);
console.log(ferrari);
console.log(ferrari.acelerar());
console.log(ferrari.frear());
// Getters & Setters
class Pessoa {
    constructor() {
        this._idade = 0;
    }
    get idade() {
        return this._idade;
    }
    set idade(valor) {
        valor >= 0 && valor <= 120 ? this._idade = valor : null;
    }
}
const pessoa1 = new Pessoa;
pessoa1.idade = 10;
console.log(pessoa1);
//Atributos e metodos staticos
class Matematica {
    static areaCirc(raio) {
        return this.PI * raio * raio;
    }
}
Matematica.PI = 3.1416;
console.log(Matematica.areaCirc(3));
// Classe abstrata
class Calculo {
    constructor() {
        this.resultado = 0;
    }
    getResultado() {
        return this.resultado;
    }
}
class Soma extends Calculo {
    executar(...numeros) {
        this.resultado = numeros.reduce((t, a) => t + a);
    }
}
class Multriplicacao extends Calculo {
    executar(...numeros) {
        this.resultado = numeros.reduce((t, a) => t * a);
    }
}
let c1 = new Soma();
c1.executar(1, 2, 3, 4, 5);
console.log(c1.getResultado());
c1 = new Multriplicacao();
c1.executar(2, 3, 4, 5);
console.log(c1.getResultado());
// Somente Leitura
class Aviao {
    constructor(modelo, prefixo) {
        this.prefixo = prefixo;
        this.modelo = modelo;
    }
}
const turboHelice = new Aviao("A320", "PT-ABC");
console.log(turboHelice);
//# sourceMappingURL=classes.js.map