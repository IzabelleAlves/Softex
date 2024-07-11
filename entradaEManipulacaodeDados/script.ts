//questão 5
const idade = prompt("Digite sua idade: ")
let idadeConvertida = 0

if (idade != null){
  idadeConvertida = parseInt(idade)
  console.log(`O tipo de dado é: ${typeof idadeConvertida}`)
}

//questao6
const nome = prompt("Digite seu nome: ")
  console.log(`Bem vinda(o), ${nome}!!`)

//questao7
console.log(`Seu número é ${idade} e ele convertido para número com casa decimal é ${idadeConvertida.toFixed(2)}`)

//questao8
const num1 = Number(prompt("Digite um número para realizar uma soma: "))
const num2 = Number(prompt("Digite outro número para realizar a soma: "))
console.log(`A soma dos dois números digitados é ${ num1 + num2}`)

//questao9
const numeroDecimal =  Number(prompt("Digite um número decimal para descobrirmos o quadrado dele: "))
console.log(`O quadrado do número que você digitou é ${(numeroDecimal * numeroDecimal).toFixed(2)}`)

// questao10
const nascimento = Number(prompt("Digite o ano em que você nasceu: "))
console.log(`No ano atual a sua idade é de ${2024 - nascimento} anos`)

//questao11
const sobrenome = prompt(`${nome}, digite seu sobrenome: `)
console.log(`Seu nome completo é ${nome} ${sobrenome}`)

//questao12
const numeros = prompt("Digite uma sequência de números separados por espaço: ")
let array: string[] = []

if (numeros != null) { // TRIM -> : Verifica se o campo está vazio ou apenas com espaços
  array = numeros.split(" "); // split pega um conjunto de valores com um tipo de separador em específico (nesse caso é o espaço) e os transforma num array.
} else {
  console.log("Nenhum número foi digitado.");
}
console.log(`A quantidade de caracteres da frase digitada é de: ${array.length}`)

//questao13
const animal = prompt("Digite o nome de um animal: ")
console.log(`O nome do animal digitado foi: ${animal}`)

//questao14
console.log(`Seu nome na ordem inversa: ${sobrenome} ${nome}`)

//questao15
const texto = prompt("Digite uma frase qualquer: ")

if (texto != null) {
  let tamanhoTexto = texto.length
  console.log(tamanhoTexto)
} else {
  console.log("Nenhuma frase foi digitada.")
}

//questao16
const num = Number(prompt("Digite um número para checarmos se ele é par ou ímpar, positivo ou negativo: "))
console.log(`${num % 2 == 0 ? 'O número é par' : "O número é ímpar"}`)

//questao17
console.log(`${num >= 0 ? 'O número é positivo' : "O número é negativo"}`)

//questao18
console.log(`O maior número que você digitou foi ${Math.max(num, num1, num2)}`)

//questao19
const peso = Number(prompt("Digite seu peso: "))
const altura = Number(prompt("Digite sua altura: "))
let imc = peso / (altura * altura)

console.log(`${nome}, o seu IMC é ${imc.toFixed(2)}`)

// questao20
if (nome != null){ 
  console.log(`${nome.length > 5 ? "O seu nome tem mais de 5 letras" : "O seu nome tem menos de 5 letras"}`)
}

//questao21
const estadoCivil = prompt("Digite seu estado civil: ")

console.log(`${estadoCivil == "solteiro" || estadoCivil == "solteira" ? "Voce é solteiro(a)" : estadoCivil == "casado" || estadoCivil == "casada" ? "Você é casado(a)" : "Você não é nem solteiro e nem casado."}`)

//questao22

const baseTriangulo = Number(prompt("Digite a base do triangulo: "))
const alturaTriangulo = Number(prompt("Digite a altura do triangulo: "))
const areaTriangulo = baseTriangulo * alturaTriangulo

console.log(`A base do triângulo é ${areaTriangulo}`)

//questao23
const cidade = prompt("Digite o nome da cidade em que você mora: ")
if (cidade != null) {
  console.log(`${cidade.charAt(0) == "S" ? "A cidade digitada começa com a letra S" : "A cidade digitada não começa com a letra S"}`);
}

//questao24
const numeroDecimal1 = Number(prompt("Digite um número decimal: "))
const numeroDecimal2 = Number(prompt("Digite outro número decimal: "))

console.log(`O resto da divisão dos números decimais que você digitou é: ${(numeroDecimal1 % numeroDecimal2).toFixed(2)}`)

//questao25
const digito = Number(prompt("Digite um número decimal para arrendondarmos: "))
console.log(`O número ${digito} arrendondado é ${Math.floor(digito)}`)

//questao26
const numInt = Number(prompt("Digite um número inteiro"))
let numIntAdicionado = numInt + 10
let numString = numIntAdicionado.toString()

console.log(`${numString} é do tipo ${typeof numString}`)

//question27
const dataNascimento = prompt("Digite sua data de nascimento. Exemplo: 'dd/mm/aaaa': ")
let dataSeparada: string[] = []

if (dataNascimento != null) {
  dataSeparada = dataNascimento.split("/")
}

let dia: number = parseInt(dataSeparada[0])
let mes: number = parseInt(dataSeparada[1])
let ano: number = parseInt(dataSeparada[2])

console.log(`Dia: ${dia}, Mês: ${mes}, Ano: ${ano}`)

//questao28

const estado = prompt("Você já disse a cidade em que mora, agora diga qual o estado: ")

console.log(`Você mora em ${cidade}, ${estado}.`)

//questao29
console.log(`Bem-vindo ao nosso programa, nascido em ${nascimento}!`)

//questao30

const dados1 = Number(prompt("Digite um número inteiro: "))
const dados2 = prompt("Digite uma string: ")

console.log(`Dados concatenados: ${dados1 + " " + dados2}`)

//questao31

const produto = prompt("Digite o produto: ")
const preco = prompt("Digite o preço do produto: ")

console.log(`Resumo pedido: ${produto}, R$${preco}`)

//questao32

console.log(`O dobro de ${numInt} é igual a ${numInt ** 2}`)

//questao33

const email = prompt("Digite seu e-mail: ")
console.log(`Obrigada por se inscrever. Continuaremos enviando notícias para o e-mail: ${email}!!`)

//questao34

console.log(`A soma de ${num} + ${numInt} é ${num + numInt}`)
console.log(`A diferença de ${num} + ${numInt} é ${Math.abs(num - numInt)}`)
console.log(`O produto de ${num} + ${numInt} é ${num * numInt}`)
console.log(`O quociente de ${num} + ${numInt} é ${num / numInt}`)

//questao35

const baseTriangulo1 = Number(prompt("Digite a base do triangulo: "))
const alturaTriangulo1 = Number(prompt("Digite a altura do triangulo: "))
const areaTriangulo1 = baseTriangulo1 * alturaTriangulo1
console.log(`A base do triângulo é ${areaTriangulo1}`)

//questao36

const raio = Number(prompt("Digite o raio de uma circunferência: "))
const pi = 3.14
const perimetro = 2 * pi * raio

console.log(perimetro)

//questao37

console.log(`O perímetro do triângulo 1 é: ${2 * (baseTriangulo + alturaTriangulo)}`)

//questao38

console.log(`A média aritmética entre os três números decimais já digitados aqui é: ${(numeroDecimal + numeroDecimal1 + numeroDecimal2 / 3)}`)

//questao39

console.log(`${nome}, você já viveu ${idadeConvertida * 365} dias e ${idadeConvertida * 12} meses`)

//questao40

const valorReal = Number(prompt("Digite o valor valor em real: "))
const cotacaoDolar = Number(prompt("Digite a cotação do dólar atualmente: "))
const valorDolar = valorReal * cotacaoDolar

console.log(valorDolar)

// questao41 

console.log(`O número decimal ${numeroDecimal}convertido para o número mais próximo é: ${Math.ceil(numeroDecimal)}`)

// questao42

console.log(`O resultado da operação com três números inteiros ((n1 + n2) * n3) é: ${(num + num1) * numInt}`)

// questao43

const temperatura = Number(prompt("Digite uma temperatura em graus Celsius: "))
const temperaturaConvertida = (temperatura * 9/5) + 32

console.log(temperaturaConvertida)