"use strict";
// string
let nome = 'Joao';
console.log(nome);
// nome = 2 
// mesmo nao definindo que tipo e a variavel, por eu ja ter atribuido um valor STRING, nao e possivel atribuir outro valor q n seja O JA 
// numbers 
let idade = 27;
console.log(idade);
// idade = 'teste'
// TIPOS EXPLICITOS
let minhaIdade; // se eu nao definir o tipo ": string ", por exemplo, ele aceitara qualquer tipo dinamicamente.
minhaIdade = 23;
console.log(typeof minhaIdade);
// minhaIdade = '27'
// console.log(typeof minhaIdade)
// ARRAY
let hobbies = ["Cozinhar", "Praticar esportes"];
console.log(hobbies[0]);
hobbies = [100];
// hobbies= 100
console.log(hobbies);
//TUPLAS 
let endereco = ['Rua. Casal da Bouca', 300];
console.log(endereco);
endereco = ['rua legal', 200];
console.log(endereco);
//ENUM
var Cor;
(function (Cor) {
    Cor["Cinza"] = "Cinza";
    Cor["Verde"] = "Verde";
    Cor["Vermelho"] = "Vermelho";
    Cor["Amaralo"] = "Amarelo";
    Cor["Laranja"] = "Laranja";
})(Cor || (Cor = {}));
// ou posso definir o enum apenas com valores das cores sem atribuir realemnte as cores, caso aconteca, o console log sera respetivamente 0,1,2,3, caso eu atribua valor Cinza= 100 o verde passa a ser 101 por exepmplo.
let minhaCor = Cor.Verde;
console.log(minhaCor);
//FUNCOES
function returnMyName() {
    return nome;
}
console.log(returnMyName());
function digaOi() {
    console.log('Oi');
}
digaOi();
function multiply(numA, numB) {
    return numA * numB;
}
console.log(multiply(3, 2));
//TIPO FUNCAO
let calculo;
calculo = multiply;
console.log(calculo(3, 5));
//Objeto
let user = {
    name: 'Joao',
    age: 27
};
console.log(user);
user = {
    name: 'maria',
    age: 26
};
console.log(user);
let funcionario = {
    supervisores: ["Arthur", "Joao", "Fernando"],
    baterPonto: function (horarioA) {
        return horarioA > 8 ? 'Fora do Horario' : "Ponto Normal";
    }
};
console.log(funcionario.supervisores[0], funcionario.baterPonto(8));
let funcionario2 = {
    supervisores: ["Arthur", "Joao", "Fernando"],
    baterPonto: function (horarioA) {
        return horarioA > 8 ? 'Fora do Horario' : "Ponto Normal";
    }
};
// UNION - Posso definiir mais de um tipo para a variavel.
let nota;
nota = 10;
nota = '10';
// NEVER - E um valor que nunca retornara nada na funcao, no exemplo abaixo ele apenas pega o erro e joga.
function falha(msg) {
    throw new Error(msg);
}
const produto = {
    nome: 'Sabao',
    preco: 2,
    validarProduto() {
        if (!this.nome || this.nome.trim().length == 0)
            return falha('precisa ter um nome');
        if (this.preco <= 0)
            return falha('preco invalido.');
    }
};
produto.validarProduto();
// NULL - Se for atribuido um valor nulo a variavel, e nao declarar qual tipo, ele aceitara qualquer valor
let podeSerNulo = null; // vai aceitar qualquer valor, como por exemplo eu tivesse declarado tipo any, pq declarei a variavel null  
podeSerNulo = 12;
let declareiTipoNulo = null;
// declareiTipoNulo = 12 // vai dar erro pq declarei que o tipo era nulo.
let altura = 12;
let alturaOpcional = 12;
alturaOpcional = null;
let contacto1 = {
    name: 'Francisco',
    tel: 987655432,
    tel2: null
};
let contaBancaria = {
    saldo: 3456,
    depositar(valor) {
        this.saldo += valor;
    }
};
let correntista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['34567890', '98765432']
};
correntista.contaBancaria.depositar(3000);
console.log(correntista);
//# sourceMappingURL=types.js.map