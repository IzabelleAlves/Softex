// Crie um programa que receba n notas de alunos até que o número -1 seja teclado.
// *Mostre a maior notas
// *Mostre a menor notas 
// *Mostre quantas notas foram inseridas 
// *Calcule a média das notas 
// *Mostre quantos foram aprovados e quantos não foram aprovados (aprovado >= 7)

let nota = Number(prompt("Digite as notas: "))
let notaArray: number[] = []
let contt: number = 1

while (nota !== -1) {
    notaArray.push(nota)
    nota = Number(prompt("Digite as notas: "))
    contt++
}

let media = notaArray.reduce((a, b) => a + b) / notaArray.length
let maior = Math.max(...notaArray)
let menor = Math.min(...notaArray)

console.log(`${contt} notas foram digitadas.`)
console.log(`A maior nota digitada foi ${maior}`)
console.log(`A menor nota digitada foi ${menor}`)
console.log(`A média da turma foi ${media}`)

let aprovado: number = 0
let reprovado: number = 0

for (let i = 0; i < notaArray.length; i++){
    notaArray[i] >= 7 ? aprovado++ : reprovado++
}

console.log(`Nessa turma, tivemos ${aprovado} alunos aprovados e ${reprovado} reprovados.`)