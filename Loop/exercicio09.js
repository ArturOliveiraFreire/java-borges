// Faça um programa que receba um número do usuário e continue
// a pedir o número se o numero for diferente de 0.

let n = parseInt(prompt("Digite 0:"))

while (n !== 0){
    n = parseInt(prompt("Digite 0:"))
}

console.log(n)

if (n == 0) {
    window.alert("0 selecionado! EBA!!!")
}