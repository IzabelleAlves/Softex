//questão1 Variáveis

let variavelNull: string | null = null;

// questão2

let variavelUndefined: string | undefined;

// questão3

if (variavelNull === null) {
  console.log("variavelNull é igual a null");
} else {
  console.log("variavelNull não é igual a null");
}

// questão 4

if (variavelUndefined === undefined){
  console.log("variavelUndefined é igual a undefined");
} else {
  console.log("variavelUndefined não é igual a undefined");
}

//questão5

type Pessoa = {
  nome?: string, // ou nome: string | undefined
  idade: number,
};

let p1: Pessoa = {
  nome: undefined,
  idade: 20,
} ;
console.log(p1.nome);