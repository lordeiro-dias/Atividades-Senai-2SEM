//* FILTER()

//* 1. Dado o array const notas = [4, 7, 9, 3, 10, 5];, filtre apenas as notas maiores ou iguais a 7.

// const notas = [4, 7, 9, 3, 10, 5];

// const notasMaiores = notas.filter(nota => nota >= 7);

// console.log(notasMaiores);

//* 2. Dado o array const palavras = ["sol", "mar", "computador", "lua", "código"];, filtre apenas as palavras com mais de 4 letras.

// const palavras = ["sol", "mar", "computador", "lua", "código"];

// const maiorQueQuatro = palavras.filter(nome => nome.length > 4);

// console.log(maiorQueQuatro);

//* 3. Dado o array const animais = ["gato", "cachorro", "peixe", "elefante", "abelha"];, filtre apenas os animais cujo nome começa com a letra "c".

// const animais = ["gato", "cachorro", "peixe", "elefante", "abelha"];

// const letraC = animais.filter(animal => animal.startsWith("c"));

// console.log(letraC);


//* FIND()

//* 1. Dado o array const filmes = ["Avatar", "Batman", "Vingadores", "Matrix", "Barbie"];, encontre o primeiro filme que começa com a letra "B".

// const filmes = ["Avatar", "Batman", "Vingadores", "Matrix", "Barbie"];

// const filmeComB = filmes.find(filme => filme.startsWith("B"));
// console.log(filmeComB);

//* 2. Dado o array const numeros = [2, 4, 6, 9, 12, 15];, encontre o primeiro número ímpar.

// const numeros = [2, 4, 6, 9, 12, 15];

// const primeiroImpar = numeros.find(numero => numero % 2 === 1);
// console.log(primeiroImpar);

//* 3. Dado o array const alunos = [{nome: "Ana", nota: 8}, {nome: "Carlos", nota: 5}, {nome: "Beatriz", nota: 9}];, encontre o primeiro aluno com nota maior ou igual a 7.

// const alunos = [
//     {nome: "Ana", nota: 8}, 
//     {nome: "Carlos", nota: 5}, 
//     {nome: "Beatriz", nota: 9}
// ];

// const notaMaior = alunos.find(aluno => aluno.nota >= 7);
// console.log(notaMaior);


//* MAP()

//* 1. Dado o array const temperaturas = [20, 25, 30, 15];, crie um novo array convertendo para Fahrenheit (C * 1.8 + 32).

// const temperaturas = [20, 25, 30, 15];

// const fahrenheit = temperaturas.map(temperatura => temperatura * 1.8 + 32);
// console.log(fahrenheit);

//* 2. Dado o array const produtos = ["camisa", "calça", "sapato"];, crie um novo array com os nomes em maiúsculo e prefixo "Produto: ".

// const produtos = ["camisa", "calça", "sapato"];

// const maiusculo = produtos.map(produto => "Produto: " + produto.toUpperCase());
// console.log(maiusculo);

//* 3. Dado o array const numeros = [1, 2, 3, 4];, crie um novo array com cada número elevado ao quadrado (x ** 2).

// const numeros = [1, 2, 3, 4];

// const quadrados = numeros.map(numero => numero ** 2);
// console.log(quadrados);


//* REDUCE()

//* 1. Dado o array const valores = [100, 200, 50, 150];, calcule o total (como se fosse uma soma de compras).

// const valores = [100, 200, 50, 150];

// const soma = valores.reduce((total, valor) => total + valor, 0);
// console.log(soma);

//* 2. Dado o array const palavras = ["JS", "é", "muito", "legal"];, use reduce para juntar tudo em uma única frase.

// const palavras = ["JS", "é", "muito", "legal"];

// const unicaPalavra = palavras.reduce((unidas, palavra) => unidas + " " + palavra);
// console.log(unicaPalavra);

//* 3. Dado o array const numeros = [1, 2, 3, 4, 5];, use reduce para calcular a média.

// const numeros = [1, 2, 3, 4, 5];

// const numeroMedia = numeros.reduce((total, numero) => total + numero) / 2;
// console.log(numeroMedia);


//* DESAFIOS (misturando funções)

//* 1. Filtre apenas os livros com mais de 200 páginas, crie um array apenas com os títulos, calcule o total de páginas de todos os livros.

// const livros = [
//     { titulo: "Dom Casmurro", paginas: 300 },
//     { titulo: "O Hobbit", paginas: 295 },
//     { titulo: "A Revolução dos Bichos", paginas: 112 }
//   ];

// const maisDe200 = livros.filter(livro => livro.paginas > 200);
// const titulos = livros.map(tituloLivro => tituloLivro.titulo);
// const totalPaginas = livros.reduce((total, livro) => total + livro.paginas, 0);

// console.log("Os livros com mais de 200 páginas são: ", maisDe200);
// console.log("Os títulos são: ", titulos);
// console.log("O total de paginas de todos os livros: ", totalPaginas);


//* 2. Use map para criar uma lista de string no formato "Produto: X - R$, Use reduce para calcular o valor total da compra, use find para encontrar o produto chamado "mouse";

const carrinho = [
    { produto: "Notebook", preco: 2500 },
    { produto: "Mouse", preco: 100 },
    { produto: "Teclado", preco: 200 }
  ];

const listaProdutos = carrinho.map(lista => "Produto: " + lista.produto + " - R$" + lista.preco);
const valorTotal = carrinho.reduce((total, valor) => total + valor.preco, 0);
const produtoMouse = carrinho.find(prodMouse => prodMouse.produto.startsWith("M"));

console.log(listaProdutos);
console.log("Valor total da compra: ", valorTotal);
console.log("Produto: ", produtoMouse);