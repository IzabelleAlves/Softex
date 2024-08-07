// questao3

let i: number = 0

while (i < 10) {
    console.log("Testando uma frase!!!")
    i++
}

//questao4 -- REVER

let i1: number = 465484133

while (i1 > 10) {
    console.log(i1.toFixed(2))
    i1 /= 35
}


//questao5

let i2: number = 0

do {
    console.log(i2)
    i2++
} 
while (i2 < 5)

//questao6

let numeroCrescente: number = 1

while (numeroCrescente <= 10) {
    console.log(numeroCrescente)
    numeroCrescente++
}

//questao7

let numeroDecrescente: number = 10

while (numeroDecrescente >= 1) {
    console.log(numeroDecrescente)
    numeroDecrescente--
}

//questao8

let soma: number = 0
let cont: number = 1

while (cont <= 100) {
    soma += cont
    cont++
}
console.log(soma)

// questao9

let multiplicacao: number = 1
let contador: number = 1

while (contador <= 5) {
    multiplicacao *= contador
    contador++
}
console.log(multiplicacao)

// questao10

let cc: number = 1
let result: number = 0

while (cc <= 10) {
    result = 9 * cc
    console.log(`${cc} * 9 = ${result}`)
    cc++
}

//questao11

let sequencia = Number(prompt("Digite uma sequência de números inteiros clicando ENTER após cada número. Se desejar parar, digite '0'."))
let sequenciaArray: number[] = []

while (sequencia != 0) {
  sequenciaArray.push(sequencia)
  sequencia = Number(prompt("Digite uma sequência de números inteiros clicando ENTER após cada número. Se desejar parar, digite '-1'."))
} 

let menorSequencia = Math.min(...sequenciaArray)

console.log(`O menor número digitado foi: ${menorSequencia}`)

//questao12

let sequencia1 = Number(prompt("Digite uma sequência de números inteiros clicando ENTER após cada número. Se desejar parar, digita '-1'."))
let sequencia1Array: number[] = []

while (sequencia1 != -1) {
  sequencia1Array.push(sequencia1)
  sequencia1 = Number(prompt("Digite uma sequência de números inteiros clicando ENTER após cada número. Se desejar parar, digita '-1'."))
} 

let mediasequencia1: number = sequencia1Array.reduce((a, b) => a + b) / sequencia1Array.length

console.log(`A média dos números digitados é: ${mediasequencia1.toFixed(2)}`)

//questao13

let numInteiro = prompt("Digite um número:")
let numSeparado = numInteiro?.split("")
let soma1: number = 0
let index = 0

if (numSeparado != undefined) {
  while (index < numSeparado.length) {
    soma1 += Number(numSeparado[index])**3
    index++
  }
}

console.log(`Resultado: ${soma1}`)

//questao14

let num: number = 1

while (num <= 100) {
  if (num % 2 != 0){
    console.log(num)
  }
  num++
}

//questao15

let multiplo: number = 1

while (multiplo <= 50) {
  if (multiplo % 3 === 0){
    console.log(multiplo)
  }
  multiplo++
}

//questao16

let contadorr: number = 0
let alunoAprovado: number = 0
let alunoReprovado: number = 0

while (contadorr < 5){
  let notaAluno = Number(prompt("Digite uma nota:"))

  if (notaAluno>= 7){
    alunoAprovado++
  } else {
    alunoReprovado++
  }

  contador++
}

console.log(`O total de alunos reprovados foi de: ${alunoReprovado} e ${alunoAprovado} de aprovados.`)

//questao17

let conT: number = 0;
let numeros = Number(prompt("Digite um número (digite 0 para parar):"));

while (numeros != 0 && numeros % 2 == 0) {
      conT++;

  numeros = Number(prompt("Digite um número (digite 0 para parar):"));

}

console.log(`Números pares digitados antes do ímpar: ${conT}`);

//questao18

let contPar: number = 0;
let contImpar: number = 0;
let numeros1 = Number(prompt("Digite um número. Digite 0 para parar:"));

while (numeros1 != 0) {
  if (numeros1 % 2 == 0){
    contPar++
  } else {
    contImpar++
  }
  
  numeros1 = Number(prompt("Digite um número. Digite 0 para parar:"));

}

console.log(`O total de números pares digitados foi de: ${contPar} e o total de ímpares foi de: ${contImpar}`);

//questao19

let divisiveis = Number(prompt("Digite um valor aleatório e 0 para parar: "))
let contadorDois: number = 0
let contadorTres: number = 0
let contadorCinco: number = 0

while (divisiveis != 0){
  if (divisiveis % 2 == 0) {
    contadorDois++
  } 
  if (divisiveis % 3 == 0){
    contadorTres++
  }
  if (divisiveis % 5 == 0){
    contadorCinco++
  }

  divisiveis = Number(prompt("Digite um valor aleatório e 0 para parar: "))
}

console.log(`O total de números divisíveis por dois: ${contadorDois}. O total de números divisíveis por três: ${contadorTres}O total de números divisíveis por cinco: ${contadorCinco}.`)

//questao20

let numInteiros = Number(prompt("Digite um número. Se quiser parar, digite 0"))
let somaNumInteiros: number = 0
let contadorNumInteiros: number = 0

while (numInteiros != 0){
  if (numInteiros % 3 == 0) {
    soma += numInteiros
    contadorNumInteiros++
  }
  numInteiros = Number(prompt("Digite um número. Se quiser parar, digite 0"))
}

let mediaNumInteiros: number = soma / contadorNumInteiros

console.log(`A média dos números digitados é: ${mediaNumInteiros}`)

//questao21

let numSequencia = prompt("Digite um número com 3 digitos. Se quiser parar, clique '0'")
let contadorSequencia: number = 0

while (numSequencia != '0'){
  let numTresDigitos = numSequencia?.split("")
  if (numTresDigitos != undefined){
    if (numTresDigitos.length > 3){
      contadorSequencia++
    }
  }
  numSequencia = prompt("Digite um número com 3 digitos. Se quiser parar, clique '0'")
}

console.log(`${contadorSequencia} números foram digitados com mais de três digitos.`)

//questao22

let numMedia = Number(prompt("Digite um número qualuqer e '0' caso deseje parar."))
let numIntervalo: number[] = []

while (numMedia != 0){
  if (numMedia >= 50 && numMedia <= 100) {
    numIntervalo.push(numMedia)
  }
  numMedia = Number(prompt("Digite um número qualuqer e '0' caso deseje parar."))
}

let mediaIntervalo: number = numIntervalo.reduce((a, b) => a + b) / numIntervalo.length 

console.log(`A média dos números digitados que estão no intervalo entre 50 e 100 é: ${mediaIntervalo}`)

//questao23

let valor = Number(prompt("Digite um valor. Se quiser parar, digite '0'."))
let valorMenor = Infinity // é maior que qualquer número que o usuário pode digitar

while (valor != 0){
    if (valor < valorMenor && valor > 0 && valor % 2 != 0) {
      valorMenor = valor
    }
  valor = Number(prompt("Digite um valor. Se quiser parar, digite '0'."))
}

//outra opção: 
// let valor = Number(prompt("Digite um valor. Se quiser parar, digite '0'."))
// let valorArray: number[] = []

// while (valor != 0){
//   valorArray.push(valor)
//   valor = Number(prompt("Digite um valor. Se quiser parar, digite '0'."))
// }

// let valorMenor = Math.max(...valorArray)

// for (let i = 0; i< valorArray.length; i++){
//   if (valorArray[i] < valorMenor && valorArray[i] > 0 && valorArray[i] % 2 != 0) {
//     valorMenor = valorArray[i]
//   }
// }

console.log(`O menor valor positivo e ímpar digitado foi: ${valorMenor}`)

//questao24

let contadorPar: number = 0;
let contadorImpar: number = 0;
let numero1 = Number(prompt("Digite um número. Digite 0 para parar:"));

while (numero1 != 0) {
  if (numero1 % 2 == 0){
    contadorPar++
  } else {
    contadorImpar++
  }
  
  numero1 = Number(prompt("Digite um número. Digite 0 para parar:"));

}

console.log(`O total de números pares digitados foi de: ${contadorPar} e o total de ímpares foi de: ${contadorImpar}`);
