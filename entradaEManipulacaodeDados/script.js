//questão 5
var nome = prompt("Digite seu nome: ");
console.log("Bem vinda(o), ".concat(nome, "!!"));
//questao6
var idade = Number(prompt("Digite sua idade: "));
console.log("O tipo de dado \u00E9: ".concat(typeof idade));
//questao7
console.log("Seu n\u00FAmero \u00E9 ".concat(idade, " e ele convertido para n\u00FAmero com casa decimal \u00E9 ").concat(idade.toFixed(2)));
//questao8
var num1 = Number(prompt("Digite um número: "));
var num2 = Number(prompt("Digite outro número: "));
console.log("A soma dos dois n\u00FAmeros digitados \u00E9 ".concat(num1 + num2));
//questao9
var numeroDecimal = Number(prompt("Digite um número decimal: "));
console.log("O quadrado do n\u00FAmero que voc\u00EA digitou \u00E9 ".concat((numeroDecimal * numeroDecimal).toFixed(2)));
// questao10
var nascimento = Number(prompt("Digite o ano em que você nasceu: "));
console.log("A sua idade no ano atual \u00E9 ".concat(2024 - nascimento));
//questao11
var sobrenome = prompt("".concat(nome, ", digite seu sobrenome: "));
console.log("Seu nome completo \u00E9 ".concat(nome, " ").concat(sobrenome));
//questao12
var numeros = prompt("Digite uma sequência de números separados por espaço: ");
var array = numeros.split(" "); //split pega um conjunto de valores com um tipo de separador em específico (nesse caso é o espaço) e os transforma num array.
console.log(array.length);
//questao13
var animal = prompt("Digite o nome de um animal: ");
console.log(animal);
//questao14
console.log("Seu nome na ordem inversa: ".concat(sobrenome, " ").concat(nome));
//questao15
var texto = prompt("Digite uma frase qualquer: ");
var tamanhoTexto = texto;
console.log(tamanhoTexto.length);
//questao16
var num = Number(prompt("Digite um número: "));
console.log("".concat(num % 2 == 0 ? 'é par' : "é ímpar"));
//questao17
console.log("".concat(num >= 0 ? 'é positivo' : "é negativo"));
//questao18
console.log("O maior n\u00FAmero que voc\u00EA digitou foi ".concat(Math.max(num, num1, num2)));
//questao19
var peso = Number(prompt("Digite seu peso: "));
var altura = Number(prompt("Digite sua altura: "));
var imc = peso / (altura * altura);
console.log("".concat(nome, ", o seu IMC \u00E9 ").concat(imc.toFixed(2)));
// questao20
console.log("".concat(nome.length > 5 ? "O seu nome tem mais de 5 letras" : "O seu nome tem menos de 5 letras"));
//questao21
var estadoCivil = prompt("Digite seu estado civil: ");
console.log("".concat(estadoCivil == "solteiro" || estadoCivil == "solteira" ? "Voce é solteiro" : estadoCivil == "casado" || estadoCivil == "casada" ? "Você é casado" : "você não é nada"));
//questao23
var cidade = prompt("Digite o nome da cidade em que você mora: ");
console.log("".concat(cidade.charAt(0) == "R" ? "A cidade digitada começa com a letra R" : "A cidade digitada não começa com a letra R"));
//questao24
var numeroDecimal1 = Number(prompt("Digite um número decimal: "));
var numeroDecimal2 = Number(prompt("Digite outro número decimal: "));
console.log("O resto da divis\u00E3o dos n\u00FAmeros que voc\u00EA digitou \u00E9: ".concat((numeroDecimal1 % numeroDecimal2).toFixed(2)));
//questao25
var digito = Number(prompt("Digite um número decimal: "));
console.log(Math.floor(digito));
//questao26
var numInt = Number(prompt("Digite um número inteiro"));
var numIntAdicionado = numInt + 10;
var numString = numIntAdicionado.toString();
console.log("".concat(numString, " \u00E9 do tipo ").concat(typeof numString));
//question27
var dataNascimento = prompt("Digite sua data de nascimento. Exemplo: 'dd/mm/aaaa': ");
var dataSeparada = dataNascimento.split("/");
var diaStr = dataSeparada[0];
var mesStr = dataSeparada[1];
var anoStr = dataSeparada[2];
var dia = parseInt(diaStr);
var mes = parseInt(mesStr);
var ano = parseInt(anoStr);
console.log("Dia: ".concat(dia, ", M\u00EAs: ").concat(mes, ", Ano: ").concat(ano));
//questao28
