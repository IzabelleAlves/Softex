//questao5 
for (let i = 0; i < 10; i++) {
  console.log(`Questao do slide18: "Testando uma frase!"`) 
}

//questao6

for (let i = 0; i < 10; i++) {
  console.log(`Questao do slide26: ${i}`) 
}

//questao7

for (let i = 0; i < 10; i++) {
  if (i == 5){
      break;
  }
  console.log(`Questao do slide36: ${i}`)
}

//questao8

for (let i = 0; i < 10; i++) {
  if (i == 5){
      continue;
  }
  console.log(`Questao do slide38: ${i}`)
}

//questao9

let nomes = ['João',
  'Paulo',
  'Pedro',
  'Gustavo',
  'Maria']

  for(let n of nomes){
      console.log(`Questao do slide44: ${n}`)
  }

//questao10

for (let i = 1; i<=10;i++){
  console.log(i)
}

//questao11

for (let i = 10; i>=1;i--){
  console.log(i)
}

//questao12

let result: number = 0

for (let i = 1; i<=100; i++){
  result += i
}

console.log(result)

//questao13

for (let i = 1; i<=50;i++){
  if (i % 2 == 0) {
      console.log(i)
  }
}

//questao14

let result1: number = 1

for (let i = 1; i<=5; i++){
  result1 *= i
}

console.log(result1)

//questao15

let resultTabuada: number = 7

for (let i = 1; i<=10; i++){
  console.log(`${resultTabuada * i}`)
}

//questao16 

let nota1: number = 4
let nota2: number = 7
let nota3: number = 9
let nota4: number = 5
let nota5: number = 10

let media: number = (nota1 + nota2 + nota3 + nota4 + nota5) / 5

console.log(media)

//questao17

let n: number = 3

for (let i = 50; i >= 1; i--){
  if (i % n == 0){
      console.log(i)
  }
}

//questao18

let numeros: number[] = [0, 5, 7, 8, 9, 22, 12, 14, 6, 30]

let maiorNumero: number = Math.max(...numeros) //nao aceita um array diretamente
let menorNumero: number = Math.min(...numeros)

console.log(`O maior número é ${maiorNumero} e o menor é ${menorNumero}`)

//questao19

for (let i = 1; i <= 100; i++){
  if (i % 2 != 0){
      console.log(i)
  }
}

//questao20

let notas: number[] = [2, 7, 9, 6.9, 10]
let contador: number = 0

for (let i = 50; i < notas.length; i++){
  if (notas[i] >= 7){
      contador++
  }
}
console.log(`O total de alunos aprovados foi de ${contador}`)

//questao21 

let num = prompt("Digete um número de dois digitos:")

const resultado = num?.split("")

if (resultado != undefined){ 
    let soma = 0
    for (let i of resultado){
        soma += Number(i)
    }
    console.log(`TESTE ${soma}`)
}

//questao22

let numeroInteiro: number = 4

for (let i = 1; i <= numeroInteiro; i++){
  if (numeroInteiro % i == 0){
      console.log(i)
  }
}

//questao23

let altura1: number = 1.69
let altura2: number = 2.0
let altura3: number = 1.45
let altura4: number = 1.10
let altura5: number = 1.77

let mediaAltura: number = (altura1 + altura2 + altura3 + altura4 + altura5) / 5

console.log(mediaAltura)

//questao 24

for (let i = 100; i >= 1; i--){
  if (i % 3 == 0){
      console.log("Fizz")
  } else if (i % 5 == 0){
      console.log("Buzz")
  } else if(i % 3 == 0 && i % 5 == 0){
      console.log("FizzBuzz")
  } else {
      console.log(i)
  }
}

//questao25 

let digito = prompt("Digete um número de dois digitos:")

const resultadoDigito = digito?.split("")

if (resultadoDigito != undefined){ 
    let soma = 0
    for (let i of resultadoDigito){
      if (Number(i) % 2 == 0){
        soma += Number(i)
      }
    }
    console.log(`TESTE ${soma}`)
}

//questao26

let numero = "123"

if (numero != null) {
  console.log(numero.split(""))
    let numeroInvertido = Number(numero.split("").reverse().join(""))

    console.log(`Número invertido: ${numeroInvertido}`)
}