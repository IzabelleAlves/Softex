//questao1

const numero = parseInt(prompt("Digite um número inteiro:"))

if (numero > 0) {
    console.log("O número é positivo.")
} else if (numero < 0) {
    console.log("O número é negativo.")
} else {
    console.log("O número é zero.")
}

//questao2

const idade = parseInt(prompt("Digite sua idade:"))

if (idade >= 18) {
    console.log("Você é maior de idade.")
} else {
    console.log("Você é menor de idade.")
}

//questao3

const num1 = parseInt(prompt("Digite o primeiro número:"))
const num2 = parseInt(prompt("Digite o segundo número:"))

if (num1 > num2) {
    console.log(`${num1} é maior que ${num2}.`)
} else if (num1 < num2) {
    console.log(`${num2} é maior que ${num1}.`)
} else {
    console.log(`Os números são iguais.`)
}

//questao4

const num = parseInt(prompt("Digite um número:"))

if (num % 2 === 0) {
    console.log("O número é par.")
} else {
    console.log("O número é ímpar.")
}

// questao5

const nota1 = parseFloat(prompt("Digite a primeira nota:"))
const nota2 = parseFloat(prompt("Digite a segunda nota:"))
const nota3 = parseFloat(prompt("Digite a terceira nota:"))

const media = (nota1 + nota2 + nota3) / 3

if (media >= 7) {
    console.log(`A média é ${media}. Aluno aprovado.`)
} else {
    console.log(`A média é ${media}. Aluno reprovado.`)
}

//questao6

const nome1 = prompt("Digite o primeiro nome:")
const nome2 = prompt("Digite o segundo nome:")

if (nome1.length > nome2.length) {
    console.log(`O nome com mais caracteres é ${nome1}.`)
} else if (nome1.length < nome2.length) {
    console.log(`O nome com mais caracteres é ${nome2}.`)
} else {
    console.log("Os nomes têm a mesma quantidade de caracteres.")
}

//questao7

const caractere = prompt("Digite um caractere:").toLowerCase()

if ("aeiou".includes(caractere)) {
    console.log("É uma vogal.")
} else {
    console.log("É uma consoante.")
}

//questao8

const num3 = parseInt(prompt("Digite o primeiro número:"))
const num4 = parseInt(prompt("Digite o segundo número:"))
const num5 = parseInt(prompt("Digite o terceiro número:"))

const numeros = [num3, num4, num5]

numeros.sort((a, b) => a - b)
console.log(`Números em ordem crescente: ${numeros.join(", ")}`)


//questao9

const peso = parseFloat(prompt("Digite seu peso (kg):"))
const altura = parseFloat(prompt("Digite sua altura (m):"))

const imc = peso / (altura * altura)

if (imc < 18.5) {
    console.log(`IMC: ${imc.toFixed(2)} - Abaixo do peso.`)
} else if (imc <= 24.9) {
    console.log(`IMC: ${imc.toFixed(2)} - Peso normal.`)
} else if (imc <= 29.9) {
    console.log(`IMC: ${imc.toFixed(2)} - Sobrepeso.`)
} else if (imc <= 34.9) {
    console.log(`IMC: ${imc.toFixed(2)} - Obesidade.`)
} else {
    console.log(`IMC: ${imc.toFixed(2)} - Obesidade grave.`)
}

//questao10

const mes = parseInt(prompt("Digite um número de 1 a 12:"))

const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]

if (mes >= 1 && mes <= 12) {
    console.log(`O mês é ${meses[mes - 1]}.`)
} else {
    console.log("Número inválido.")
}

//questao11

const salario = parseFloat(prompt("Digite seu salário:"))

let aumento = 0

if (salario > 1500) {
    aumento = salario * 0.10
} else {
    aumento = salario * 0.15
}

const salarioFinal = salario + aumento
console.log(`Salário após aumento: R$ ${salarioFinal.toFixed(2)}`)

//questao12

const num6 = parseInt(prompt("Digite um número inteiro:"))

if (num6 % 3 === 0 && num6 % 5 === 0) {
    console.log("O número é divisível por 3 e 5.")
} else {
    console.log("O número não é divisível por 3 e 5.")
}

//questao13

const dia = prompt("Digite o dia da semana por extenso:").toLowerCase()

const diasUteis = ["segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira"]
const fimDeSemana = ["sábado", "domingo"]

if (diasUteis.includes(dia)) {
    console.log("É um dia útil.")
} else {
    console.log("É fim de semana.")
}

//questao14

const nota = parseInt(prompt("Digite uma nota entre 1 e 5:"))

switch (nota) {
    case 1:
        console.log("Muito insuficiente")
        break
    case 2:
        console.log("Insuficiente")
        break
    case 3:
        console.log("Regular")
        break
    case 4:
        console.log("Bom")
        break
    case 5:
        console.log("Muito bom")
        break
    default:
        console.log("Nota inválida")
}

//questao15

const diaEmNumero = parseInt(prompt("Digite um número entre 1 e 7:"))

const diasDaSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"]

if (dia >= 1 && dia <= 7) {
    console.log(`O dia da semana é ${diasDaSemana[dia - 1]}.`)
} else {
    console.log("Número inválido.")
}

//questao17

const idadePessoa = parseInt(prompt("Digite sua idade:"))

if (idadePessoa >= 0 && idadePessoa <= 1) {
    console.log("Você é um bebê.")
} else if (idadePessoa <= 12) {
    console.log("Você é uma criança.")
} else if (idadePessoa <= 18) {
    console.log("Você é um adolescente.")
} else {
    console.log("Você é adulto.")
}

//questao18

const estadoCivil = prompt("Digite seu estado civil (solteiro, casado, divorciado, viúvo):").toLowerCase()

switch (estadoCivil) {
    case "solteiro":
        console.log("Você é solteiro.")
        break
    case "casado":
        console.log("Você é casado.")
        break
    case "divorciado":
        console.log("Você é divorciado.")
        break
    case "viúvo":
        console.log("Você é viúvo.")
        break
    default:
        console.log("Estado civil não reconhecido.")
}

//questao19

const num7 = parseInt(prompt("Digite o primeiro número:"))
const num8 = parseInt(prompt("Digite o segundo número:"))
const operacao = parseInt(prompt("Escolha a operação: 1 - soma, 2 - subtração, 3 - multiplicação, 4 - divisão"))

switch (operacao) {
    case 1:
        console.log(`Resultado: ${num7 + num8}`)
        break
    case 2:
        console.log(`Resultado: ${num7 - num8}`)
        break
    case 3:
        console.log(`Resultado: ${num7 * num8}`)
        break
    case 4:
        if (num8 != 0) {
            console.log(`Resultado: ${num7 / num8}`)
        } else {
            console.log("Erro: Divisão por zero.")
        }
        break
    default:
        console.log("Operação inválida.")
}
