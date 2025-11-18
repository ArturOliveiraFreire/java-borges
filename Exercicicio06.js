// A pessoa vai escrever o ano que nasceu e tem que aparecer a idade dela

let anonascimento = parseInt(prompt("Digite o ano de nascimento"))
let anoatual = new Date().getFullYear()

let idade = anoatual - anonascimento

if (idade>=18) {
console.log("Você é maior de idade. Pode acessar")
console.log("Sua idade é: " , idade)
}

else {
console.log("Você é menor de idade. VAZA!!!")
console.log("Sua idade é: " , idade)
}