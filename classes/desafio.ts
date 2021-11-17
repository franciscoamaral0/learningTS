class Moto {
  public velocidade: number = 0
  constructor(public nome: String, ){

  }

  buzinar(): void{
    console.log("toooooooot")
  }

  acelerar(delta:number): number{
    return this.velocidade = this.velocidade + delta
  }

}

const moto = new Moto("ducati")
moto.buzinar()
console.log(moto.acelerar(10))
console.log(moto.acelerar(10))
console.log(moto.acelerar(10))
console.log(moto.acelerar(10))
console.log(moto.acelerar(10))


// Exercicio 2 - Heranca

class Objeto2D{
  
  constructor(public base: number = 0, public altura: number = 0){

  }
}

class Retangulo extends Objeto2D{

  area(): number{
    return this.base * this.altura
  }
}

const retangulo = new Retangulo(10, 20)
console.log(retangulo.area())


// Exercicio 3 Getters & Setters

class Estagiario {
  private _primeiroNome: String = ''

  get primeiroNome(): String{
    return this._primeiroNome
  }

  set primeiroNome(nome: String){
    nome.length >= 3 ?  this._primeiroNome = nome : ''
  }
}

const estagirio = new Estagiario
estagirio.primeiroNome = "le"
console.log(estagirio.primeiroNome)

estagirio.primeiroNome = "Francisco"
console.log(estagirio.primeiroNome)