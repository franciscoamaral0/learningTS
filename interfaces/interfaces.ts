interface Humano {
  nome: string
  idade?: number // quando coloco ? significa que aquele atributo nao e obrigatorio
  [prop:string]: any // prop significa que posso adicionar qualquer atributo dentro do objeto
  saudar(sobrenome: string):void
}

function saudarComOla(pessoa: Humano): void {
  console.log("Olá " + pessoa.nome)
}

function mudarNome (pessoa: Humano): void {
  pessoa.nome = "Joana"
}

const pessoa: Humano ={
  nome: "João",
  idade: 27,
  saudar(sobrenome: string): void{
    console.log("Olá, meu nome é " + this.nome + ' ' + sobrenome)
  }
}

saudarComOla(pessoa)
mudarNome(pessoa)
// saudarComOla({nome:'Francisco', idade:27, altura: 1.75})
pessoa.saudar("Amaral")


// Usando Classes

class Cliente implements Humano{
  nome: string = ''
  saudar(sobrenome: string): void {
    console.log('Olá, meu nome é ' + this.nome + ' ' + sobrenome)
  }
}

const client = new Cliente()
client.nome = 'Hans'
saudarComOla(client)
client.saudar('Solo')

// Interface Funcao

interface FuncaoCalculo{
  (a: number, b:number): number
}

let potencia: FuncaoCalculo

potencia = function(base: number, exp: number): number{
  return base ** exp
}


console.log(potencia(3,10))


// Herança

interface A {
  a(): void
}

interface B {
  b(): void
}

interface ABC extends A,B{
  c():void

}

class RealA implements A{
  a():void{}
  
  
}

class RealAB implements A,B{
  a():void{}
  b():void{}
}

class RealABC implements ABC{
  a():void{}
  b():void{}
  c():void{}
}

abstract class AbstractABD implements A, B{
  a():void{}
  b():void{}
  abstract d(): void
}


// nao entendi direito, ele criou um metodo log, que funcionara como console.log. AULA 107 TYPESCRIPT COD3R

interface Object {
  log(): void
}

Object.prototype.log = function(){
  console.log(this.toString())
}


const x = 2
const y = 3 
const z = 4


x.log()
y.log()
z.log()