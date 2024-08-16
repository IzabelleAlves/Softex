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

