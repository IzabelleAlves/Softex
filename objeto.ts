//questão1 Objeto
type Pessoa = {
    nome: string,
    idade: number,
    endereco: string,
};

//questão2

const p1: Pessoa = {
    nome: 'Maria',
    idade: 23,
    endereco: 'Rua do Bom Jesus',
};
console.log(p1.nome);

//questão3 - pular

//questão4

p1.idade = 14;
console.log(p1.idade);

// questão5 

type Animal = {
    nome: string,
    especie: string,
    cor: string,
};

let cachorro: Animal = {
    nome: 'toby',
    especie: 'bulldog',
    cor: 'preto'
};

//questão6

type Livro = {
    titulo: string,
    autor: string,
    ano: number,
};

let livro1: Livro = {
    titulo: 'A lista de convidados',
    autor: 'Lucy Foley',
    ano: 2021,
};

// questão7
console.log(livro1.autor);

//questao8

livro1.ano = 2010;
console.log(livro1.ano);

//questao9 - pular

//questão10

type Carro = {
    marca: string,
    modelo?: string,
    ano: number,
};

let carro: Carro = {
    marca:'gol',
    modelo: 'g1',
    ano: 1990,
};

//questao11 

carro.modelo = undefined;
console.log(carro);