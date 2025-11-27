function saudacao() {
    let nome = prompt("Digite seu nome chapa:")

    let hora = new Date().getHours()

    if (hora > 6 && hora < 13) {
        alert("Bom dia " + nome)
    } else if (hora >= 13 && hora < 18) {
        alert("Boa tarde " + nome)
    } else {
        alert("Boa noite " + nome)
    }
}

saudacao()


let pessoa = {
    nome: "Artur",
    idade: 17,
    sobrenome: "Fantine",
    estado: "SP",
    cidade: "SCS",
    VivoOuMorto: "Morto"
}

console.log(pessoa.nome)
console.log(pessoa.idade)
console.log(pessoa.VivoOuMorto)