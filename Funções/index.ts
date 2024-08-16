//questao5

function soma (a: number, b: number): number{
  return a + b
}
console.log(soma(3, 5))

//questao6

function isPar(n: number): boolean{
  return n % 2 == 0
}
console.log(isPar(2))

//questao7

function media(a: number, b: number, c: number): number {
  return ((a + b + c) / arguments.length)
}
console.log(media(10, 10, 10))

//questao8

function imc (peso: number, altura: number): string{
  return `O IMC é ${(peso / (altura * altura)).toFixed(2)}`
}
console.log(imc(66, 1.69))

//questao9

function calcularDesconto (produto: number, percentualDesconto: number): number {
  let valorDesconto:  number = produto * (percentualDesconto / 100)
  let valorFinal: number = (produto - valorDesconto)
  return valorFinal
}
console.log(calcularDesconto(200, 15))

//questao10

function calcularImpostoRenda (salario: number): number {
  let imposto: number = 0

  if (salario > 4664.68){
    imposto = salario * (27.5 / 100)
  } else if (salario > 3751.06){
    imposto = salario * (22.5 / 100)
  } else if (salario > 2826.66){
    imposto = salario * (15 / 100)
  } else if (salario > 1903.99){
    imposto = salario * (7.5 / 100)
  } else {
    imposto = 0
  }

  return imposto
}
console.log(calcularImpostoRenda(5700).toFixed(2))

//questao11

function calcularMediaArredondada (...numbers: number[]): number{
  let soma: number = numbers.reduce((a, b) => a + b)
  return soma / numbers.length
} 
console.log(Math.round(calcularMediaArredondada(7, 14, 21)))

//questao12
const numeros = prompt('Digite um número inteiro com vários digitos: ')

function contarDigitosParesImpares (numeros: string): void{
  let contPar: number = 0
  let contImpar: number = 0

  for (const digito of numeros){
    const numero = parseInt(digito)
    if (numero % 2 == 0){
      contPar++
    } else {
      contImpar++
    }
  }
  console.log(`A quantidade de digitos pares é ${contPar} e ímpares é ${contImpar}`)
}
if (numeros !== null){
  contarDigitosParesImpares(numeros)
}

//questao13

type Aluno = {
  nome: string,
  nota: number,
}

const alunos : Aluno[] = [
  {nome: 'Izabelinha', nota: 8.5},
  {nome: 'Rubinha', nota: 10},
  {nome: 'Celsinho', nota: 10}
]

function calcularMediaAlunos (alunos: Aluno[]): number{
  let somaNotas: number = 0
  for (const aluno of alunos){
    somaNotas += aluno.nota
  }
  return somaNotas / alunos.length
}

console.log(calcularMediaAlunos(alunos))

//questao14

function calcularIdade (nascimento: number): number{
  let idadeAtual: number = 2024 - nascimento

  return idadeAtual
}
console.log(calcularIdade(2000))

//questao15

function gerarTabuada (n: number): void{
  for (let i = 1; i <= 10; i++){
    let multiplicacao: number = i * n
    console.log(`${i} x ${n} = ${multiplicacao}`)
  }
}
gerarTabuada(9)

//questao16

function adivinheNumero(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min
  //Math.random() -> gera um número decimal aleatório entre 0 (inclusivo) e 1 (exclusivo). Isso significa que o número pode ser 0, mas nunca será 1
}

function respostaAdivinharNumero(): void {
  let numAleatorio = adivinheNumero(1, 100)
  let contador: number = 0
  let tentativa: number;

do {
  tentativa = Number(prompt("Tente adivinhar o número de 1 à 100: "))
  contador++

  if (tentativa < numAleatorio) {
    console.log("O número correto é maior que o número que você digitou :(");
  } else if (tentativa > numAleatorio) {
    console.log("O número correto é menor que o número que você digitou :(");
  } else {
    console.log(`Parabéns!!! Você acertou o número escondido depois de ${contador} tentativas`);
  }
} while(tentativa != numAleatorio)
}
respostaAdivinharNumero()

//questao17

type Pessoa = {
  nome: string
  sobrenome: string
}

function verificarPropriedade (objeto: Pessoa, propriedade: string){
  return propriedade in objeto
}

let pessoa1 = {
  nome: 'Rubia',
  sobrenome: 'Alves'
}

console.log(verificarPropriedade(pessoa1, 'nome'))

// questao18

function calcularPrecoProduto(custo: number, margemLucro: number, frete: number): number {
  let lucro: number = custo * (margemLucro / 100)
  return lucro + custo + frete
}

console.log(calcularPrecoProduto(100, 20, 15))

// questao19

function palavraMaisLonga(frase: string): string{
  const palavras = frase.split(" ")
  let maiorPalavra = palavras[0]

  for (let i = 1; i < palavras.length; i++){
    if (palavras[i].length > maiorPalavra.length){
      maiorPalavra = palavras[i]
    }
  }
  return maiorPalavra
}

console.log(palavraMaisLonga("Tutorial de Desenvolvimento da Web"))

// questao20