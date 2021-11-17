// string
let nome: string = 'Joao'
console.log(nome)
// nome = 2 
// mesmo nao definindo que tipo e a variavel, por eu ja ter atribuido um valor STRING, nao e possivel atribuir outro valor q n seja O JA 


// numbers 
let idade: number = 27
console.log(idade)
// idade = 'teste'

// TIPOS EXPLICITOS
let minhaIdade: number  // se eu nao definir o tipo ": string ", por exemplo, ele aceitara qualquer tipo dinamicamente.
minhaIdade = 23
console.log(typeof minhaIdade)
// minhaIdade = '27'
// console.log(typeof minhaIdade)


// ARRAY
let hobbies: any[] = ["Cozinhar", "Praticar esportes"]
console.log(hobbies[0])

hobbies = [100]
// hobbies= 100
console.log(hobbies)

//TUPLAS 
let endereco: [string, number] = ['Rua. Casal da Bouca', 300]
console.log(endereco)
endereco = ['rua legal', 200]
console.log(endereco)

//ENUM

enum Cor {
  Cinza = "Cinza",
  Verde = 'Verde',
  Vermelho = "Vermelho",
  Amaralo = "Amarelo",
  Laranja = "Laranja"
}
// ou posso definir o enum apenas com valores das cores sem atribuir realemnte as cores, caso aconteca, o console log sera respetivamente 0,1,2,3, caso eu atribua valor Cinza= 100 o verde passa a ser 101 por exepmplo.

let minhaCor: Cor = Cor.Verde
console.log(minhaCor)

//FUNCOES
function returnMyName (): string {
  return nome
}

console.log(returnMyName())

function digaOi() :void { // quando a funcao nao retorna nada dizemos que ela retorna VOID, vazio.
  console.log('Oi')
}

digaOi()

function multiply (numA: number, numB: number): number {
  return numA * numB
}

console.log(multiply(3,2))

//TIPO FUNCAO

let calculo: (numA: number, numB: number) => number

calculo = multiply
console.log(calculo(3,5))

//Objeto
let user: {name: string, age: number} = {
  name: 'Joao',
  age: 27
}
console.log(user)
user = {
  name: 'maria',
  age: 26
}
console.log(user)

let funcionario: {
  supervisores: string[], 
  baterPonto: (horarioA: number) => string
} = {
  supervisores: ["Arthur", "Joao", "Fernando"],
  baterPonto: function (horarioA:number): string{
    return horarioA > 8 ? 'Fora do Horario' :  "Ponto Normal"
  }
}

console.log(funcionario.supervisores[0], funcionario.baterPonto(8))


// Criar modelagem de tipo, caso eu tenha uma funcao que ja tenha um tipo pre definido nao e preciso repetir eu atribui um tipo ao que eu vou criar.
// ALIAS
type Funcionario ={
  supervisores: string[], 
  baterPonto: (horarioA: number) => string
}

let funcionario2: Funcionario = {
  supervisores: ["Arthur", "Joao", "Fernando"],
  baterPonto: function (horarioA:number): string{
    return horarioA > 8 ? 'Fora do Horario' :  "Ponto Normal"
  }
}

// UNION - Posso definiir mais de um tipo para a variavel.
let nota: string | number 
nota = 10
nota = '10'


// NEVER - E um valor que nunca retornara nada na funcao, no exemplo abaixo ele apenas pega o erro e joga.
function falha(msg: string): never {
  throw new Error(msg)
}

const produto ={
  nome: 'Sabao',
  preco: 2,
  validarProduto() {
    if(!this.nome || this.nome.trim().length == 0) return falha('precisa ter um nome') 
    if(this.preco <= 0) return falha('preco invalido.')
  }
}
produto.validarProduto()

// NULL - Se for atribuido um valor nulo a variavel, e nao declarar qual tipo, ele aceitara qualquer valor

let podeSerNulo = null // vai aceitar qualquer valor, como por exemplo eu tivesse declarado tipo any, pq declarei a variavel null  
podeSerNulo = 12

let declareiTipoNulo: null = null
// declareiTipoNulo = 12 // vai dar erro pq declarei que o tipo era nulo.

let altura = 12
let alturaOpcional: null | number = 12
alturaOpcional = null

type Contacto = {
  name: string,
  tel: number,
  tel2: null | number
}

let contacto1: Contacto ={
  name: 'Francisco',
  tel: 987655432,
  tel2: null
}


// DESAFIO

type bankAccount ={
  saldo : number,
  depositar: (valor: number) => void
}

type bankClient = {
  nome: string,
  contaBancaria: bankAccount,
  contatos: string[]
}

let contaBancaria: bankAccount = {
  saldo: 3456,
  depositar(valor) {
      this.saldo += valor
  }
}

let correntista: bankClient = {
  nome: 'Ana Silva',
  contaBancaria: contaBancaria,
  contatos: ['34567890', '98765432']
}

correntista.contaBancaria.depositar(3000)
console.log(correntista)