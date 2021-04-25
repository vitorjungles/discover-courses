// 1. Declare uma variável de nome weight
let weight

// 2. Que tipo de dado é a variável acima?
console.log(`O tipo de dado da variável acima é ${typeof weight}.`)

/* 
  3. Declare uma variável e atribua valores para cada um dos dados
    * name: String
    * age: Number (integer)
    * stars: Number (float)
    * isSubscribed: Boolean
*/
let name = 'John'
let age = 30
let stars = 20.4
let isSubscribed = true

/*
  4. A variável student abaixo é de que tipo de dado?

  4.1 Atribua a ela as mesmas propriedades e valores do exercício 3

  4.2 Mostre no console a seguinte mensagem:
    <name> de idade <age> pesa <weight> kg.

    Substituir <name>, <age> e <weight> por valores de cada propriedade do objeto
*/
let student = {
  name: 'Jack',
  age: 50,
  weight: 74.4,
  isSubscribed: true
}

console.log(`A variável student acima é do tipo ${typeof student}.`)

console.log(`${student.name} de idade ${student.age} pesa ${student.weight} Kg.`)

/*
  5. Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor, ou seja, somente o Array vazio
*/
let students = []

/*
  6. Reatribua valor para a variável acima, colocando dentro dela o objeto student da questão 4. (Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no Array)
*/
students = [
  student
]

/*
  7. Coloque no console o valor da posição zero do Array acima
*/
console.log(students[0])

/*
  8. Crie um novo student e coloque na posição 1 do Array students
*/
const william = {
  name: 'William',
  age: 20,
  weight: 80.3,
  isSubscribed: true
}

students[1] = william

/*
  9. Sem rodar o código responda qual é a resposta do código abaixo e porquê. Após sua resposta, rode o código e veja se acertou.

  console.log(a)
  var a = 1

  Resposta: undefined, por causa da elevação da variável causada pelo Hoisting
*/
console.log(a)
var a = 1