//* NÍVEL BÁSICO

//* EXERCICIO 1 - Verificar Maioridade

// let idade = parseInt(prompt("Digite sua idade: "));

// if(idade >= 18){
//     alert("Você é maior de idade");
// }

// else if(idade < 18 && idade > 0){
//     alert("Você é menor de idade");
// }

// else{
//     alert("Você não existe");
// }

//* EXERCÍCIO 2 - Verificar se um número é positivo ou negativo

// let num = parseInt(prompt("Digite um número inteiro: "));

// if(num > 0){
//     alert("Seu número é positivo");
// }

// else{
//     alert("Seu número é negativo");
// }

//* EXERCÍCIO 3 - Aprovação em prova

// let nota = parseInt(prompt("Insira uma nota de 0 a 100"));

// if(nota >= 60 && nota <= 100){
//     alert("Aprovado");
// }

// else if(nota >= 0 && nota < 60){
//     alert("Reprovado");
// }

// else {
//     alert("Nota inválida");
// }

//* EXERCÍCIO 4 - Verificar se um número é positivo, negativo ou zero.

// let numero = parseInt(prompt("Digite um número inteiro:"));

// if(numero > 0){
//     alert("Seu número é positivo");
// }

// else if(numero < 0){
//     alert("Seu número é negativo");
// }

// else{
//     alert("Seu número é zero");
// }

//* EXERCÍCIO 5 - Classificação de idade

// let age = parseInt(prompt("Digite sua idade"));

// if(age >= 0 && age <= 12){
//     alert("Você é uma criança");
// }

// else if(age >= 13 && age <= 17){
//     alert("Você é um adolescente");
// }

// else if(age >= 18){
//     alert("Você é um adulto");
// }

// else {
//     alert("Você não existe");
// }

//* EXERCÍCIO 6 - Verificar se um número é par ou ímpar

// let number = parseInt(prompt("Digite um número inteiro"));

// if(number % 2 == 0){
//     alert("O número digitado é par");
// }

// else{
//     alert("O número digitado é ímpar");
// }

//? NÍVEL INTERMEDIARIO

//? EXERCÍCIO 1 - Calculadora Simples

// let num1 = parseInt(prompt("Digite um número inteiro"));
// let num2 = parseInt(prompt("Digite outro número inteiro"));
// let operacao = prompt("Escolha uma operação entre +, -, * ou /");
// let result = 0;

// if(operacao == "+"){
//     result = num1 + num2;
//     alert("O resultado da soma é " + result);
// }

// else if(operacao == "-"){
//     result = num1 - num2;
//     alert("O resultado da subtração é " + result);
// }

// else if (operacao == "*"){
//     result = num1 * num2;
//     alert("O resultado da multiplicação é " + result);
// }

// else if(operacao == "/"){
//     result = num1 / num2;
//     alert("O resultado da divisão é " + result);
// }

// else{
//     alert("Operação inválida");
// }

//? EXERCÍCIO 2 - Maior entre três números

// let number1 = parseInt(prompt("Insira um número inteiro"));
// let number2 = parseInt(prompt("Insira outro número inteiro"));
// let number3 = parseInt(prompt("Insira outro número inteiro"));

// if(number1 > number2 && number1 > number3){
//     alert("O número " + number1 + " é o maior dos três números");
// }

// else if(number2 > number1 && number2 > number3){
//     alert("O número " + number2 + " é o maior dos três números");
// }

// else if(number3 > number1 && number3 > number2){
//     alert("O número " + number3 + " é o maior dos três números");
// }

// else{
//     alert("Os números são iguais");
// }

//? EXERCÍCIO 3 - Desconto em compras

// let valorCompra = parseFloat(prompt("Digite o valor da sua compra: "));
// let valorNovo = 0;

// if(valorCompra > 100){
//     valorNovo = valorCompra - (valorCompra * 0.1);
//     alert("Sua compra teve um desconto de 10%, ficando R$" + valorNovo);
// }

// else{
//     alert("Sua compra não teve desconto, ficando R$" + valorCompra);
// }

//? EXERCÍCIO 4 - Sistema de login simples

// let usuario = prompt("Digite o usuário");
// let senha = parseInt(prompt("Digite a senha"));

// if(usuario == "admin" && senha == 1234){
//     alert("Login bem-sucedido");
// }

// else{
//     alert("Acesso negado");
// }

//! NÍVEL AVANÇADO

//! EXERCÍCIO 1 - Classificação de triângulos

// let a = parseInt(prompt("Insira o primeiro lado do triângulo"));
// let b = parseInt(prompt("Insira o segundo lado do triângulo"));
// let c = parseInt(prompt("Insira o terceiro lado do triângulo"));

// if (a < b + c && b < a + c && c < a + b) {
//     if (a != b && a != c && b != c) {
//         alert("Esse triângulo é escaleno");
//     }

//     else if (a == b && b != c || a == c && c != b || b == c && c != a) {
//         alert("Esse triângulo é isósceles");
//     }

//     else {
//         alert("Esse triângulo é equilátero");
//     }
// }
// else {
//     alert("Não formou um triângulo, digite outros valores");
// }

//! EXERCÍCIO 2 - Conversão de notas para conceitos

// let nota1 = parseInt(prompt("Digite uma nota de 0 a 100"));

// if(nota1 >= 0 && nota1 < 60){
//     alert("Seu conceito é F");
// }

// else if(nota1 >= 60 && nota1 <= 69){
//     alert("Seu conceito é D");
// }

// else if(nota1 >= 70 && nota1 <= 79){
//     alert("Seu conceito é C");
// }

// else if(nota1 >= 80 && nota1 <= 89){
//     alert("Seu conceito é B");
// }

// else if(nota1 >= 90 && nota1 <= 100){
//     alert("Seu conceito é A");
// }

// else{
//     alert("Nota inválida!");
// }

//! EXERCÍCIO 3 - Cálculo de IMC

// let peso = parseFloat(prompt("Digite um peso"));
// let altura = parseFloat(prompt("Digite uma altura em metros"));
// let imc = peso / (altura * altura);
// imc = imc.toFixed(2);

// if(imc < 18.5){
//     alert("Seu IMC é de: " + imc + " e está em baixo peso");
// }

// else if(imc >= 18.5 && imc <= 24.9){
//     alert("Seu IMC é de: " + imc + " e está em peso normal");
// }

// else if(imc >= 25 && imc <= 29.9){
//     alert("Seu IMC é de: " + imc + " e está em excesso de peso");
// }

// else if(imc >= 30 && imc <= 35){
//     alert("Seu IMC é de: " + imc + " e está em obesidade");
// }

// else if(imc > 35){
//     alert("Seu IMC é de: " + imc + " e está em obesidade extrema");
// }

// else{
//     alert("Seu IMC é de: " + imc + " e está em magreza extrema");
// }

//! EXERCÍCIO 4 - Validação de ano bissexto

let ano = parseInt(prompt("Digite um ano para saber se o ano é bissexto: "));

if(ano % 4 == 0){
    if(ano % 100 == 0){
        if(ano % 400 == 0){
            alert("O ano " + ano + " é bissexto");
        }

        else{
            alert("O ano " + ano + " não é bissexto");
        }
    }

    else{
        alert("O ano " + ano + " é bissexto");
    }
}

else{
    alert("O ano " + ano + " não é bissexto");
}