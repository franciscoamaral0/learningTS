import {Data} from '../classes/classes.js'
// Usando generics 
function echo<T>(objeto:T):T{ //o T e um parametro generico que assumira o TIPO sempre que eu passar um argumento pro objeto
  return objeto
}


console.log(echo('João').length)
console.log(echo<number>(27))
console.log(echo({nome: "joao", idade:27}))

//Gerecis disponiveis na API
// Eu posso tipar atraves dos generics tbm
const avaliacoes:Array<number> = [10,12,9.93,5,5]

avaliacoes.push(3,3)
console.log(avaliacoes)
// avaliacoes.push("2.2")


// Array
//Posso inferir um tipo generico para um array, poteriormente tipar os valores que vao pertencer ao mesmo.

function imprimir<T>(args: T[]){
  args.forEach(element => console.log(element));
}

imprimir([1,2,3])
imprimir<string>(["1","2","maria"])
imprimir<{nome: string, idade: number}>([
  {nome: "francisco", idade:31},
  {nome: "Camila", idade:30},
  
])

type Aluno ={nome: string, idade: number}

imprimir<Aluno>([
  {nome: "Joao", idade: 20},
  {nome: "Artur", idade: 20}
])


// Tipo generico

type Chamar = <T>(data: T) => T

const chamarEcho : Chamar = echo
console.log(chamarEcho<string>("alguma coisa"))

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

abstract class OperacaoBinaria<T, R> {
  constructor(public operando1: T, public operando2: T){}

  abstract executar(): R
}

class SomaBinaria extends OperacaoBinaria<number, number> {
  executar(): number{
    return this.operando1 + this.operando2
  }
}

console.log(new SomaBinaria(1,2).executar())
console.log(new SomaBinaria(123,223).executar())

class DiferencaDatas extends OperacaoBinaria<Data,string>{
  
  getTime(data: Data): number{
    let {dia, mes, ano} = data
    return new Date(`${mes}/${dia}/${ano}`).getTime()
  }

  executar(): string{
    const t1 = this.getTime(this.operando1)
    const t2 = this.getTime(this.operando2)
    const diferenca = Math.abs(t1-t2)
    const dia = 1000 * 60 * 60 * 24
    return `${Math.ceil(diferenca / dia)} dia(s)`

  }
}

const d1 = new Data(1,2,2020)
const d2 = new Data(5,5,2022)
console.log(new DiferencaDatas(d1,d2).executar())




// console.log(new DiferencaDatas(new Date().getFullYear(), 2010).executar())





