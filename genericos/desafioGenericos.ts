class Fila<T> {

  private fila: Array<T> = [];

  entrar(args: T) {
    return this.fila.push(args);
  }

  proximo(): void{
    this.fila.length === 1 ? console.log(`Não há mais ninguem na fila, o(a) ${this.fila[0]} que é a ultima pessoa esta a ser atendida`)
    : console.log(`${this.fila.shift()} saiu da fila, o proximo a ser atendido é o ${this.fila[0]} `)
  }

  imprimir():void {
    console.log(`Estão na fila ${this.fila.length } pessoas.`)
  }
}

const fila = new Fila<string>()
fila.entrar("Fernando")
fila.entrar("Camila")
fila.entrar("Joao")
fila.entrar("Maria")
fila.entrar("Paulo")
fila.entrar("Joana")

fila.imprimir()
fila.proximo()
fila.proximo()
fila.proximo()
fila.proximo()
fila.proximo()
fila.proximo()
fila.imprimir()

//

type Par<C, V> = {chave: C, valor: V}

class Mapa<C, V>{
  itens: Array<Par<C,V>> = new Array<Par<C,V>>()

  obter(chave: C) : Par<C,V> | null{
    const resultado = this.itens.filter(i => i.chave === chave)

    return resultado ? resultado[0] : null
  }

  colocar(par: Par<C,V>):void{
    const encontrado = this.obter(par.chave)
    if(encontrado){
      encontrado.valor = par.valor
    } else{
      this.itens.push(par)
    }
  }

  limpar(){
    this.itens = new Array<Par<C,V>>()
  }

  imprimir(): void {
    console.log(this.itens)
  }
}

const mapa = new Mapa<number, string>()
mapa.colocar({ chave: 1, valor: 'Pedro' })
mapa.colocar({ chave: 2, valor: 'Rebeca' })
mapa.colocar({ chave: 3, valor: 'Maria' })
mapa.colocar({ chave: 1, valor: 'Gustavo' })
 
console.log(mapa.obter(2))
mapa.imprimir()
mapa.limpar()
mapa.imprimir()