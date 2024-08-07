// questao3
var i = 0;
while (i < 10) {
    console.log("Testando uma frase!!!");
    i++;
}
//questao4 -- REVER
var i1 = 465484133;
while (i1 > 10) {
    console.log(i1.toFixed(2));
    i1 /= 35;
}
//questao5
var i2 = 0;
do {
    console.log(i2);
    i2++;
} while (i2 < 5);
//questao6
var numeroCrescente = 1;
while (numeroCrescente <= 10) {
    console.log(numeroCrescente);
    numeroCrescente++;
}
//questao7
var numeroDecrescente = 10;
while (numeroDecrescente >= 1) {
    console.log(numeroDecrescente);
    numeroDecrescente--;
}
//questao8
var soma = 0;
var cont = 1;
while (cont <= 100) {
    soma += cont;
    cont++;
}
console.log(soma);
// questao9
var multiplicacao = 1;
var contador = 1;
while (contador <= 5) {
    multiplicacao *= contador;
    contador++;
}
console.log(multiplicacao);
// questao10
var cc = 1;
var result = 0;
while (cc <= 10) {
    result = 9 * cc;
    console.log("".concat(cc, " * 9 = ").concat(result));
    cc++;
}
//questao11
var sequencia = Number(prompt("Digite uma sequência de números inteiros clicando ENTER após cada número. Se desejar parar, digite '0'."));
var sequenciaArray = [];
while (sequencia != 0) {
    sequenciaArray.push(sequencia);
    sequencia = Number(prompt("Digite uma sequência de números inteiros clicando ENTER após cada número. Se desejar parar, digite '-1'."));
}
var menorSequencia = Math.min.apply(Math, sequenciaArray);
console.log("O menor n\u00FAmero digitado foi: ".concat(menorSequencia));
//questao12
var sequencia1 = Number(prompt("Digite uma sequência de números inteiros clicando ENTER após cada número. Se desejar parar, digita '-1'."));
var sequencia1Array = [];
while (sequencia1 != -1) {
    sequencia1Array.push(sequencia1);
    sequencia1 = Number(prompt("Digite uma sequência de números inteiros clicando ENTER após cada número. Se desejar parar, digita '-1'."));
}
var mediasequencia1 = sequencia1Array.reduce(function (a, b) { return a + b; }) / sequencia1Array.length;
console.log("A m\u00E9dia dos n\u00FAmeros digitados \u00E9: ".concat(mediasequencia1.toFixed(2)));
//questao13
var numInteiro = prompt("Digite um número:");
var numSeparado = numInteiro === null || numInteiro === void 0 ? void 0 : numInteiro.split("");
var soma1 = 0;
var index = 0;
if (numSeparado != undefined) {
    while (index < numSeparado.length) {
        soma1 += Math.pow(Number(numSeparado[index]), 3);
        index++;
    }
}
console.log("Resultado: ".concat(soma1));
//questao14
var num = 1;
while (num <= 100) {
    if (num % 2 != 0) {
        console.log(num);
    }
    num++;
}
//questao15
var multiplo = 1;
while (multiplo <= 50) {
    if (multiplo % 3 === 0) {
        console.log(multiplo);
    }
    multiplo++;
}
//questao16
var contadorr = 0;
var alunoAprovado = 0;
var alunoReprovado = 0;
while (contadorr < 5) {
    var notaAluno = Number(prompt("Digite uma nota:"));
    if (notaAluno >= 7) {
        alunoAprovado++;
    }
    else {
        alunoReprovado++;
    }
    contador++;
}
console.log("O total de alunos reprovados foi de: ".concat(alunoReprovado, " e ").concat(alunoAprovado, " de aprovados."));
//questao17
var conT = 0;
var numeros = Number(prompt("Digite um número (digite 0 para parar):"));
while (numeros != 0 && numeros % 2 == 0) {
    conT++;
    numeros = Number(prompt("Digite um número (digite 0 para parar):"));
}
console.log("N\u00FAmeros pares digitados antes do \u00EDmpar: ".concat(conT));
//questao18
var contPar = 0;
var contImpar = 0;
var numeros1 = Number(prompt("Digite um número. Digite 0 para parar:"));
while (numeros1 != 0) {
    if (numeros1 % 2 == 0) {
        contPar++;
    }
    else {
        contImpar++;
    }
    numeros1 = Number(prompt("Digite um número. Digite 0 para parar:"));
}
console.log("O total de n\u00FAmeros pares digitados foi de: ".concat(contPar, " e o total de \u00EDmpares foi de: ").concat(contImpar));
//questao19
var divisiveis = Number(prompt("Digite um valor aleatório e 0 para parar: "));
var contadorDois = 0;
var contadorTres = 0;
var contadorCinco = 0;
while (divisiveis != 0) {
    if (divisiveis % 2 == 0) {
        contadorDois++;
    }
    if (divisiveis % 3 == 0) {
        contadorTres++;
    }
    if (divisiveis % 5 == 0) {
        contadorCinco++;
    }
    divisiveis = Number(prompt("Digite um valor aleatório e 0 para parar: "));
}
console.log("O total de n\u00FAmeros divis\u00EDveis por dois: ".concat(contadorDois, ". O total de n\u00FAmeros divis\u00EDveis por tr\u00EAs: ").concat(contadorTres, "O total de n\u00FAmeros divis\u00EDveis por cinco: ").concat(contadorCinco, "."));
//questao20
var numInteiros = Number(prompt("Digite um número. Se quiser parar, digite 0"));
var somaNumInteiros = 0;
var contadorNumInteiros = 0;
while (numInteiros != 0) {
    if (numInteiros % 3 == 0) {
        soma += numInteiros;
        contadorNumInteiros++;
    }
    numInteiros = Number(prompt("Digite um número. Se quiser parar, digite 0"));
}
var mediaNumInteiros = soma / contadorNumInteiros;
console.log("A m\u00E9dia dos n\u00FAmeros digitados \u00E9: ".concat(mediaNumInteiros));
//questao21
var numSequencia = prompt("Digite um número com 3 digitos. Se quiser parar, clique '0'");
var contadorSequencia = 0;
while (numSequencia != '0') {
    var numTresDigitos = numSequencia === null || numSequencia === void 0 ? void 0 : numSequencia.split("");
    if (numTresDigitos != undefined) {
        if (numTresDigitos.length > 3) {
            contadorSequencia++;
        }
    }
    numSequencia = prompt("Digite um número com 3 digitos. Se quiser parar, clique '0'");
}
console.log("".concat(contadorSequencia, " n\u00FAmeros foram digitados com mais de tr\u00EAs digitos."));
//questao22
var numMedia = Number(prompt("Digite um número qualuqer e '0' caso deseje parar."));
var numIntervalo = [];
while (numMedia != 0) {
    if (numMedia >= 50 && numMedia <= 100) {
        numIntervalo.push(numMedia);
    }
    numMedia = Number(prompt("Digite um número qualuqer e '0' caso deseje parar."));
}
var mediaIntervalo = numIntervalo.reduce(function (a, b) { return a + b; }) / numIntervalo.length;
console.log("A m\u00E9dia dos n\u00FAmeros digitados que est\u00E3o no intervalo entre 50 e 100 \u00E9: ".concat(mediaIntervalo));
//questao23
var valor = Number(prompt("Digite um valor. Se quiser parar, digite '0'."));
var valorArray = [];
while (valor != 0) {
    valorArray.push(valor);
    valor = Number(prompt("Digite um valor. Se quiser parar, digite '0'."));
}
var valorMenor = Math.max.apply(Math, valorArray);
for (var i_1 = 0; i_1 < valorArray.length; i_1++) {
    if (valorArray[i_1] < valorMenor && valorArray[i_1] > 0 && valorArray[i_1] % 2 != 0) {
        valorMenor = valorArray[i_1];
    }
}
console.log("O menor valor positivo e \u00EDmpar digitado foi: ".concat(valorMenor));
//questao24
var contadorPar = 0;
var contadorImpar = 0;
var numero1 = Number(prompt("Digite um número. Digite 0 para parar:"));
while (numero1 != 0) {
    if (numero1 % 2 == 0) {
        contadorPar++;
    }
    else {
        contadorImpar++;
    }
    numero1 = Number(prompt("Digite um número. Digite 0 para parar:"));
}
console.log("O total de n\u00FAmeros pares digitados foi de: ".concat(contadorPar, " e o total de \u00EDmpares foi de: ").concat(contadorImpar));
