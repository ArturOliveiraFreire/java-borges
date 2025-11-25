// Escreva um programa que solicita três números ao usuário e verifica se eles estão em ordem
// crescente. Exibindo uma mensagem indicando se os números estão em ordem crescente ou
// não.

let number1 = Number.parseFloat(prompt("Digite o primeiro numero:"))

let number2 = Number.parseFloat(prompt("Digite o segundo numero:"))

let number3 = Number.parseFloat(prompt("Digite o terceiro numero:"))

if (number1 < number2 && number2 < number3) {
    console.log("Os numeros estão em ordem crescente: ", number1 , number2 , number3)
}

else {
    console.log("Os numeros não estão em ordem crescente")
}