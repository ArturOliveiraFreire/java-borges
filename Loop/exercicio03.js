// // Faça um programa que imprima na tela a tabuada de um número
// qualquer escolhido pelo usuário até o 10.

let n = parseInt(prompt("Escolha um numero"))

for (let m = n ; (m / n) <= 10 ; m += n ) {
    console.log(n , "*" , (m/n) , "=" , m )
}