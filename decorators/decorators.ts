
function logarClasse(constructor: Function){
  console.log(constructor)
}


function decoratorVazio(_: Function){}


function logarClasseSe(valor: boolean){
  return valor ? logarClasse : decoratorVazio
}

function decorator(obj: {a: string, b?: number}){
  return function(_: Function): void{
    console.log(obj.a + ' ' + obj.b)
  }
}




@logarObjeto
class Eletrodomestico{
  constructor(){
    console.log('novo...')
  }
}

type Constructor = {new(...args: any[]):{}}

function logarObjeto(constructor: Constructor ){
  console.log('carregando...')
  return class extends constructor{
    constructor(...args: any[]){
      console.log('antes...')
      super(...args)
      console.log('depois...')
    }
  }
}

new Eletrodomestico()
new Eletrodomestico()

// Desafio 
const usuarioLogado = {
  nome: 'Guilherme Filho',
  email: 'gui@gui.com',
  admin: true
}
@perfilAdmin
class MudancaAdministrativa {
  critico(){
    console.log('Algo esta errado')
  }
}

new MudancaAdministrativa().critico()
function perfilAdmin<T extends Constructor>(constructor : T){
  return class extends constructor{
    constructor(...args: any[]){
      super(...args)
      if(!usuarioLogado || !usuarioLogado.admin){
        throw new Error('Sem permissao')
      }
      
    }
  }
}

class ContaCorrente {
  private saldo: number

  constructor(saldo: number){
    this.saldo = saldo
  }
@congelar
  sacar(valor: number){
    if(valor <= this.saldo){
      this.saldo -= valor
      return true
    } else{
      return false
    }
  }
  @congelar
  getSaldoo(){
    return this.saldo
  }
}


const cc = new ContaCorrente(20000)
cc.sacar(4000)


cc.getSaldoo = function(){
  return this['saldo'] + 7000
}

console.log(cc.getSaldoo())

function congelar(alvo: any, method: any, descritor: PropertyDescriptor){
  console.log(alvo)
  console.log(method)
  descritor.writable = false
}