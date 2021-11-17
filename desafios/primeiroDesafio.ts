// Abaixo temos um código em JavaScript. "Traduza-o" para TypeScript!

const dobro = function(valor: number): number {
  return valor * 2
}

console.log(dobro(10))

//  Verifique se há espaço para melhorias nesse trecho de código!

const dizerOla = function (nome: string = 'Pessoa'): void {
  console.log(`Olá ${nome}`)
}

dizerOla(undefined)

// Dado esse array, imprima o menor valor!


const nums: number[] = [-3, 33, 38, 5]


console.log(Math.min(...nums))

// Adicione os elementos de nums em array !

let numss: number[] = [-3, 33, 38, 5]
let array: number[] = [55, 20, ...numss].sort((a,b) => a-b)
console.log(array)

//Simplifique os trechos de código abaixo utilizando o operador Destructuring!
let notas = [8.5, 6.3, 9.4]
let [nota1, nota2, nota3] = notas
console.log(nota1)
console.log(nota2)
console.log(nota3)

let cientista = {primeiroNome: "Will", experiencia: 12}
let{primeiroNome, experiencia} = cientista
console.log(primeiroNome, experiencia)
