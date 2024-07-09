//questão 5
let nome = prompt("Digite seu nome: ")
  console.log(`Bem vinda(o), ${nome}!!`)

//questao6
let idade = Number(prompt("Digite sua idade: "))
console.log(`O tipo de dado é: ${typeof idade}`)

//questao7
console.log(`Seu número é ${idade} e ele convertido para número com casa decimal é ${idade.toFixed(2)}`)

//questao8
let num1 = Number(prompt("Digite um número para realizar uma soma: "))
let num2 = Number(prompt("Digite outro número para realizar a soma: "))
console.log(`A soma dos dois números digitados é ${ num1 + num2}`)

//questao9
let numeroDecimal =  Number(prompt("Digite um número decimal para descobrirmos o quadrado dele: "))
console.log(`O quadrado do número que você digitou é ${(numeroDecimal * numeroDecimal).toFixed(2)}`)

// questao10
let nascimento = Number(prompt("Digite o ano em que você nasceu: "))
console.log(`No ano atual a sua idade é de ${2024 - nascimento} anos`)

//questao11
let sobrenome = prompt(`${nome}, digite seu sobrenome: `)
console.log(`Seu nome completo é ${nome} ${sobrenome}`)

//questao12
let numeros = prompt("Digite uma sequência de números separados por espaço: ")
let array = [];

if (numeros != null && numeros.trim() != "") { // TRIM -> : Verifica se o campo está vazio ou apenas com espaços
  let array = numeros.split(" "); // split pega um conjunto de valores com um tipo de separador em específico (nesse caso é o espaço) e os transforma num array.
} else {
  console.log("Nenhum número foi digitado.");
}
console.log(`A quantidade de caracteres da frase digitada é de: ${array.length}`)

//questao13
let animal = prompt("Digite o nome de um animal: ")
console.log(`O nome do animal digitado foi: ${animal}`)

//questao14
console.log(`Seu nome na ordem inversa: ${sobrenome} ${nome}`)

//questao15
let texto = prompt("Digite uma frase qualquer: ")

if (texto != null) {
  let tamanhoTexto = texto.length
  console.log(tamanhoTexto)
} else {
  console.log("Nenhuma frase foi digitada.")
}

//questao16
let num = Number(prompt("Digite um número para checarmos se ele é par ou ímpar, positivo ou negativo: "))
console.log(`${num % 2 == 0 ? 'O número é par' : "O número éé ímpar"}`)

//questao17
console.log(`${num >= 0 ? 'O número é positivo' : "O número é negativo"}`)

//questao18
console.log(`O maior número que você digitou foi ${Math.max(num, num1, num2)}`)

//questao19
let peso = Number(prompt("Digite seu peso: "))
let altura = Number(prompt("Digite sua altura: "))
let imc = peso / (altura * altura)

console.log(`${nome}, o seu IMC é ${imc.toFixed(2)}`)

// questao20
if (nome != null){ 
  console.log(`${nome.length > 5 ? "O seu nome tem mais de 5 letras" : "O seu nome tem menos de 5 letras"}`)
}

//questao21
let estadoCivil = prompt("Digite seu estado civil: ")

console.log(`${estadoCivil == "solteiro" || estadoCivil == "solteira" ? "Voce é solteiro(a)" : estadoCivil == "casado" || estadoCivil == "casada" ? "Você é casado(a)" : "Você não é nem solteiro e nem casado."}`)

//questao23
let cidade = prompt("Digite o nome da cidade em que você mora: ")
if (cidade != null) {
  console.log(`${cidade.charAt(0) == "R" ? "A cidade digitada começa com a letra R" : "A cidade digitada não começa com a letra R"}`);
}

//questao24
let numeroDecimal1 = Number(prompt("Digite um número decimal: "))
let numeroDecimal2 = Number(prompt("Digite outro número decimal: "))

console.log(`O resto da divisão dos números decimais que você digitou é: ${(numeroDecimal1 % numeroDecimal2).toFixed(2)}`)

//questao25
let digito = Number(prompt("Digite um número decimal para arrendondarmos: "))
console.log(`O número ${digito} arrendondado é ${Math.floor(digito)}`)

//questao26
let numInt = Number(prompt("Digite um número inteiro"))
let numIntAdicionado = numInt + 10
let numString = numIntAdicionado.toString()

console.log(`${numString} é do tipo ${typeof numString}`)

//question27
let dataNascimento = prompt("Digite sua data de nascimento. Exemplo: 'dd/mm/aaaa': ")
let dataSeparada: string[] = []

if (dataNascimento != null) {
  dataSeparada = dataNascimento.split("/")
}

let diaStr: string = dataSeparada[0]
let mesStr: string = dataSeparada[1]
let anoStr: string = dataSeparada[2]

let dia: number = parseInt(diaStr)
let mes: number = parseInt(mesStr)
let ano: number = parseInt(anoStr)

console.log(`Dia: ${dia}, Mês: ${mes}, Ano: ${ano}`)

//questao28