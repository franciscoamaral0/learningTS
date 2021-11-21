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