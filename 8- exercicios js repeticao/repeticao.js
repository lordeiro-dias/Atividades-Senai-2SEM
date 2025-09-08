//* FOR
//* Contando de 1 até N

// let n = parseInt(prompt("Digite um número"));

// for(let i = n; i >= 1; i--){
//     console.log(i);
// } 


// for(let i = 1; i <= n; i++) {
//     console.log(i);
// }

//* WHILE

// let soma = 0;
// let i = 1;

// while(i <= 10){
//     soma += i;
//     console.log("O resultado atual é " + soma);
//     i++;
// }

// console.log("O resultado total dos 10 números é " + soma);


//* DO WHILE

// let numero = 1;

// do{
//     console.log("numero: " + numero);
//     numero++;
// }

// while(numero <= 100);

//* FOREACH

// let numeros = [1, 2, 3, 4, 5];

// numeros.forEach(function(numero){
//     console.log("Numero: " + numero);
// });

// let frutas = ["maçã", "banana", "uva", "pera"];

// frutas.forEach(function(fruta){
//     console.log("Fruta: " + fruta);
// });

// for(let i = 0; i < numeros.length; i++){
//     console.log("Numero: " + numeros[i]);
// }




//* EXERCÍCIOS DE LAÇO DE REPETIÇÃO
//* NÍVEL BÁSICO

//* 1- Contagem de 1 a 10:

// for(let i = 1; i <= 10; i++){
//     console.log(i);
// }

//* 2- Tabuada de um número:

// let numero = parseInt(prompt("Digite um número: "));

// console.log("Tabuada do " + numero);
// let tabuada = 0;

// for(let i = 1; i <= 10; i++){
//     tabuada = numero * i
//     console.log(numero + " x " + i + " = " + tabuada);
// }

//* 3- Soma dos primeiros N números naturais:

// let n = parseInt(prompt("Digite um número"));
// let soma = 0;

// for(let i = 1; i <= n; i++){
//     soma += i;
// }

// console.log("O resultado da soma é de " + soma);


//? NÍVEL INTERMEDIÁRIO
//? 1- Exibir os números pares de 1 a 50:

// for(let i = 0; i <= 50; i++){
//     if(!(i % 2)){
//         console.log("Número par: " + i);
//     }
// }

//? 2- Jogo da advinhação:

// let numRandom = Math.floor(Math.random() * 101);

// let numUser = parseInt(prompt("Advinhe um número de 1 a 100: "));

// if(numUser == numRandom){
//     console.log("Acertou!!! O número sorteado era " + numRandom);
// }

// else{
//     while(numUser != numRandom){
//         if(numUser < numRandom){
//             numUser = parseInt(prompt("O número " + numUser + " é menor do que o número sorteado, digite outro."));
//         }

//         else{
//             numUser = parseInt(prompt("O número " + numUser + " é maior do que o número sorteado, digite outro."));
//         }
//     }

//     console.log("Acertou!!! O número sorteado era " + numRandom);
// }

//? 3- Contagem Regressiva:

// let num = parseInt(prompt("Digite um número positivo para contagem regressiva"));

// while(num >= 0){
//     console.log(num--);
// }


//! NÍVEL AVANÇADO
//! 1- Soma dos digitos de um número:

// let num = parseInt(prompt("Digite um número inteiro e positivo"));

// while(num)

//! 2- Fatorial de um número:

// let num = parseInt(prompt("Digite um número"));
// let fatorial = num;

// for(let i = num - 1; i >= 1; i--){
//     fatorial = fatorial * i;
// }

// console.log("O fatorial do número " + num + " é " + fatorial);

//! 3- Inverter um número:

// let numero = parseInt(prompt("Digite um número"));

// while(numero);

//! 4- Números perfeitos de 1 a 1000:
let numPerf = [];
let counter = 0;
let contador = 0;
let divisores = []; 
let soma = 0;
let contadorSoma = 0;

for(let i = 0; i <= 1000; i++)
{
    for(let k = 0; k <= i; k++){
        if(i % k == 0 && k != i){
            divisores[contador] = k;
            contador++;
        }
    }

    while(contadorSoma < divisores.length){
        soma = soma + divisores[contadorSoma];
        contadorSoma++;
    }

    if(i == soma){
        numPerf[counter] = i;
        counter++;
    }

    contador = 0;
    divisores = [];
    soma = 0;
    contadorSoma = 0;
}

for(let i = 1; i < numPerf.length; i++){
    console.log(numPerf[i]);
}