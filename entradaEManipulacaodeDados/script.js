//questão 5
var nome = prompt("Digite seu nome: ");
console.log("Bem vinda(o), ".concat(nome, "!!"));
//questao6
var idade = Number(prompt("Digite sua idade: "));
console.log("O tipo de dado \u00E9: ".concat(typeof idade));
//questao7
console.log("Seu n\u00FAmero \u00E9 ".concat(idade, " e ele convertido para n\u00FAmero com casa decimal \u00E9 ").concat(idade.toFixed(2)));
//questao8
var num1 = Number(prompt("Digite um número para realizar uma soma: "));
var num2 = Number(prompt("Digite outro número para realizar a soma: "));
console.log("A soma dos dois n\u00FAmeros digitados \u00E9 ".concat(num1 + num2));
//questao9
var numeroDecimal = Number(prompt("Digite um número decimal para descobrirmos o quadrado dele: "));
console.log("O quadrado do n\u00FAmero que voc\u00EA digitou \u00E9 ".concat((numeroDecimal * numeroDecimal).toFixed(2)));
// questao10
var nascimento = Number(prompt("Digite o ano em que você nasceu: "));
console.log("No ano atual a sua idade \u00E9 de ".concat(2024 - nascimento, " anos"));
//questao11
var sobrenome = prompt("".concat(nome, ", digite seu sobrenome: "));
console.log("Seu nome completo \u00E9 ".concat(nome, " ").concat(sobrenome));
//questao12
var numeros = prompt("Digite uma sequência de números separados por espaço: ");
var array = [];
if (numeros != null) { // TRIM -> : Verifica se o campo está vazio ou apenas com espaços
    array = numeros.split(" "); // split pega um conjunto de valores com um tipo de separador em específico (nesse caso é o espaço) e os transforma num array.
}
else {
    console.log("Nenhum número foi digitado.");
}
console.log("A quantidade de caracteres da frase digitada \u00E9 de: ".concat(array.length));
//questao13
var animal = prompt("Digite o nome de um animal: ");
console.log("O nome do animal digitado foi: ".concat(animal));
//questao14
console.log("Seu nome na ordem inversa: ".concat(sobrenome, " ").concat(nome));
//questao15
var texto = prompt("Digite uma frase qualquer: ");
if (texto != null) {
    var tamanhoTexto = texto.length;
    console.log(tamanhoTexto);
}
else {
    console.log("Nenhuma frase foi digitada.");
}
//questao16
var num = Number(prompt("Digite um número para checarmos se ele é par ou ímpar, positivo ou negativo: "));
console.log("".concat(num % 2 == 0 ? 'O número é par' : "O número é ímpar"));
//questao17
console.log("".concat(num >= 0 ? 'O número é positivo' : "O número é negativo"));
//questao18
console.log("O maior n\u00FAmero que voc\u00EA digitou foi ".concat(Math.max(num, num1, num2)));
//questao19
var peso = Number(prompt("Digite seu peso: "));
var altura = Number(prompt("Digite sua altura: "));
var imc = peso / (altura * altura);
console.log("".concat(nome, ", o seu IMC \u00E9 ").concat(imc.toFixed(2)));
// questao20
if (nome != null) {
    console.log("".concat(nome.length > 5 ? "O seu nome tem mais de 5 letras" : "O seu nome tem menos de 5 letras"));
}
//questao21
var estadoCivil = prompt("Digite seu estado civil: ");
console.log("".concat(estadoCivil == "solteiro" || estadoCivil == "solteira" ? "Voce é solteiro(a)" : estadoCivil == "casado" || estadoCivil == "casada" ? "Você é casado(a)" : "Você não é nem solteiro e nem casado."));
//questao22
var baseTriangulo = Number(prompt("Digite a base do triangulo: "));
var alturaTriangulo = Number(prompt("Digite a altura do triangulo: "));
var areaTriangulo = baseTriangulo * alturaTriangulo;
console.log("A base do triangulo \u00E9 ".concat(areaTriangulo));
//questao23
var cidade = prompt("Digite o nome da cidade em que você mora: ");
if (cidade != null) {
    console.log("".concat(cidade.charAt(0) == "S" ? "A cidade digitada começa com a letra S" : "A cidade digitada não começa com a letra S"));
}
//questao24
var numeroDecimal1 = Number(prompt("Digite um número decimal: "));
var numeroDecimal2 = Number(prompt("Digite outro número decimal: "));
console.log("O resto da divis\u00E3o dos n\u00FAmeros decimais que voc\u00EA digitou \u00E9: ".concat((numeroDecimal1 % numeroDecimal2).toFixed(2)));
//questao25
var digito = Number(prompt("Digite um número decimal para arrendondarmos: "));
console.log("O n\u00FAmero ".concat(digito, " arrendondado \u00E9 ").concat(Math.floor(digito)));
//questao26
var numInt = Number(prompt("Digite um número inteiro"));
var numIntAdicionado = numInt + 10;
var numString = numIntAdicionado.toString();
console.log("".concat(numString, " \u00E9 do tipo ").concat(typeof numString));
//question27
var dataNascimento = prompt("Digite sua data de nascimento. Exemplo: 'dd/mm/aaaa': ");
var dataSeparada = [];
if (dataNascimento != null) {
    dataSeparada = dataNascimento.split("/");
}
var dia = parseInt(dataSeparada[0]);
var mes = parseInt(dataSeparada[1]);
var ano = parseInt(dataSeparada[2]);
console.log("Dia: ".concat(dia, ", M\u00EAs: ").concat(mes, ", Ano: ").concat(ano));
//questao28
var estado = prompt("Você já disse a cidade em que mora, agora diga qual o estado: ");
console.log("Voc\u00EA mora em ".concat(cidade, ", ").concat(estado, "."));
//questao29
console.log("Bem-vindo ao nosso programa, nascido em ".concat(nascimento, "!"));
//questao30
var dados1 = Number(prompt("Digite um número inteiro: "));
var dados2 = prompt("Digite uma string: ");
console.log("Dados concatenados: ".concat(dados1 + " " + dados2));
//questao33
