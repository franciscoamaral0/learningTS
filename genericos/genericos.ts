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