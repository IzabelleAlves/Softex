// questão1 Array

let lista: number[] = [];

// questao2

lista.push(1, 2, 3, 4);
console.log(lista);

// questão3

console.log(lista[1]);

//questão 4

lista[2] = 10;
console.log(lista);

// questao 5

lista.pop();
console.log(lista);

// questao6

console.log(lista.length);

// questao7

let frutas : string[] = ["maçã", "banana","laranja"];

//questão8

console.log(frutas[0]);

// questao9

frutas.push("uva");

// questao10

type Aluno = {
  nome: string,
  idade:  string,
};

let aluno1: Aluno = {
  nome: "Maria",
  idade: "12",
};

let alunos: Aluno[] = []; //declarei com um array do tipo Aluno, igual à variável aluno1 que é do tipo Aluno.
alunos.push(aluno1);
console.log(alunos);

// questao11

console.log(alunos[0].nome);

//questao12 - PULAR

//questao13

let produtos: string[] = ["arroz", "feijão", "macarrão", "leite", "ovos", "pão", "carne", "frutas", "verduras", "sabão"
];

for (let i = 0; i <produtos.length; i++){
  if (i % 2 === 0){
    console.log(produtos[i])
  }
};
