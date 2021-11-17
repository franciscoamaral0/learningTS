class Data {

  // Publico por padrao, pode ser definido como static ou private
  dia: number
  mes: number
  ano: number
  static nome: String = "Francisco"


  constructor(dia: number = 1, mes: number = 1, ano: number = 1970){
    this.dia = dia
    this.mes = mes
    this.ano = ano
  }
}

const aniversario = new Data(3,1,1991)
aniversario.dia = 4
console.log(aniversario.dia)
console.log(aniversario)
console.log(Data.nome)

const casamento = new Data
console.log(casamento)

class DataEsperta {

  // Publico por padrao, pode ser definido como static ou private
  static nome: String = "Francisco"


  constructor(public dia: number = 1, public mes: number = 1, public ano: number = 1970){
   
  }
}

const niverEsperto = new DataEsperta(3,1,1991)
niverEsperto.dia = 4
console.log(niverEsperto.dia)
console.log(niverEsperto)
console.log(DataEsperta.nome)

const casamentoEsperto = new DataEsperta
console.log(casamentoEsperto)


class Produto {

  constructor(public nome: string, public preco: number, public desconto: number = 0){

  }

  public precoComDesconto(): number {
    return this.preco - (this.preco * this.desconto )
  }

  public resumo(): string {
    return `${this.nome} custa ${this.precoComDesconto()}€ (${this.desconto * 100}%OFF)` 
  }

}

const notebook = new Produto("Macbook", 4.2, 0.05 )
const pcGamer = new Produto("Pc", 1000)
console.log(notebook.resumo())

console.log(notebook)
console.log(pcGamer)

class Carro{
  private velocidadeAtual: number= 0
  
  constructor(public marca: string, public modelo: string,
    private velocidadeMaxima: number = 200){

    }

    protected alterarVelocidade(delta: number): number{
      const novaVelocidade = this.velocidadeAtual + delta
      const velocidadeValida = novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima
      
      if(velocidadeValida){
        this.velocidadeAtual = novaVelocidade
    
      } else{
        this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0
      }
      return this.velocidadeAtual
    }

    public acelerar(): number{
      return this.alterarVelocidade(5)
    }
    public frear(): number {
      return this.alterarVelocidade(-5) 
    }
}

const carro = new Carro("ford", "ka")
console.log(carro)
Array(30).fill(0).forEach(() => carro.acelerar());
console.log(carro.acelerar())
Array(20).fill(0).forEach(() => carro.frear());
console.log(carro.acelerar())

class Ferrari  extends Carro {
  constructor(modelo: string, velocidadeMaxima: number){
    super("Ferrari", modelo, velocidadeMaxima)
  }

  public acelerar(): number{
    return this.alterarVelocidade(25)
  }
  public frear(): number {
    return this.alterarVelocidade(-10) 
  }
}


const ferrari = new Ferrari("f40", 500)
console.log(ferrari)

console.log(ferrari.acelerar())
console.log(ferrari.frear())

// Getters & Setters

class Pessoa {
  private _idade:number = 0

  get idade():number {
    return this._idade
  }

  set idade(valor: number){
    valor >= 0 && valor <=120 ? this._idade= valor : null
  } 
}

const pessoa1 = new Pessoa
pessoa1.idade = 10
console.log(pessoa1)

//Atributos e metodos staticos
class Matematica {
  static PI: number = 3.1416

  static areaCirc (raio: number): number{
    return this.PI * raio * raio
  }
}


console.log(Matematica.areaCirc(3))

// Classe abstrata

abstract class Calculo {
  protected resultado: number =0 

  abstract executar (...numeros: number[]): void
  
  getResultado(): number{
    return this.resultado
  }
}

class Soma extends Calculo{
   executar (...numeros: number[]): void{
     this.resultado = numeros.reduce((t, a) => t+a)
   }
}
class Multriplicacao extends Calculo{
   executar (...numeros: number[]): void{
     this.resultado = numeros.reduce((t, a) => t*a)
   }
}

let c1: Calculo = new Soma()
c1.executar(1,2,3,4,5)
console.log(c1.getResultado())

c1 = new Multriplicacao()
c1.executar(2,3,4,5)
console.log(c1.getResultado())

// Somente Leitura

class Aviao {
  public readonly modelo: string

  constructor(modelo: string, public readonly prefixo: string){
    this.modelo = modelo
  }

}

const turboHelice = new Aviao("A320", "PT-ABC")
console.log(turboHelice)