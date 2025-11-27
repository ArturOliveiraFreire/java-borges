// Função 1 -- Login com usuario e senha 
function Login() {
    let user = window.prompt("Insira nome de usuario")

    let passworld = window.prompt("Insira sua senha")

    if (user == "admin" && passworld == "senha123") {
        console.log("Tudo certo parça")
    }

    else {
        console.log("Algo errado")
    }
}


// Função 2 -- Entra um numero e retorna um dia da semana correspondente
function semana() {
    let number = window.prompt("Digite um numero de 1 a 7")

    switch (number) {
        case "1":
            console.log("Domingo")
            break;

        case "2":
            console.log("Segunda-Feira")
            break;

        case "3":
            console.log("Terça-Feira")
            break;

        case "4":
            console.log("Quarta-Feira")
            break;

        case "5":
            console.log("Quinta-Feira")
            break;

        case "6":
            console.log("Sexta-Feira")
            break;

        case "7":
            console.log("Sabado")
            break;

        default:
            console.log("Valor não aceito")
            break;
    }
}

// Função 3 -- Entra um numero e retorna par ou impar
function parouimpar() {
    let number = window.prompt("Insira um numero")

    if (number % 2 == 0) {
        console.log("Ele é PAR")
    }

    else {
        console.log("Ele é IMPAR")
    }
}

// Função 4 -- Faz media das notas
function notas() {
    let nota1 = Number.parseFloat(prompt("Digite a nota de português"))

    let nota2 = Number.parseFloat(prompt("Digite a nota de matematica"))

    let nota3 = Number.parseFloat(prompt("Digite a nota de quimica"))

    let nota4 = Number.parseFloat(prompt("Digite a nota de historia"))

    let media = (nota1 + nota2 + nota3 + nota4) / 4

    if (media >= 7) {
        console.log("APROVADO")
    }

    else if (media > 5 && media < 7) {
        console.log("RECUPERAÇÃO")
    }

    else {
        console.log("REPROVADO")
    }
}

// Função 5 -- Pede 3 numeros e fala se estão em ordem crescente ou não
function ordem() {
    let number1 = Number.parseFloat(prompt("Digite o primeiro numero:"))

    let number2 = Number.parseFloat(prompt("Digite o segundo numero:"))

    let number3 = Number.parseFloat(prompt("Digite o terceiro numero:"))

    if (number1 < number2 && number2 < number3) {
        console.log("Os numeros estão em ordem crescente: ", number1, number2, number3)
    }

    else {
        console.log("Os numeros não estão em ordem crescente")
    }
}

// Função 6 -- Entra um ano e retorna se é ou não maior de idade
function idade() {
    let anonascimento = parseInt(prompt("Digite o ano de nascimento"))
    let anoatual = new Date().getFullYear()

    let idade = anoatual - anonascimento

    if (idade >= 18) {
        console.log("Você é maior de idade. Pode acessar")
        console.log("Sua idade é: ", idade)
    }

    else {
        console.log("Você é menor de idade. VAZA!!!")
        console.log("Sua idade é: ", idade)
    }
}

// Função 7 -- Calcula desconto
function desconto() {
    let valor = Number.parseFloat(prompt("Indique o valor da compra:"))

    if (valor > 100.01 && valor <= 200) {
        desconto = valor / 10

        console.log("Valor total:", valor - desconto)
    }

    else if (valor > 200) {
        desconto = valor / 5

        console.log("Valor total:", valor - desconto)
    }

    else {
        console.log("Valor total:", valor.toFixed(2))
    }
}

// Função 8 -- Calcula IMC
function imc() {
    let peso = Number.parseFloat(prompt("Informe seu peso em quilogramas"))

    let altura = Number.parseFloat(prompt("Informe sua altura em metros"))

    let imc = peso / (altura * altura)

    console.log("Seu IMC é: ", imc.toFixed(2))

    if (imc < 18.5) {
        console.log("Sua Classifição: Abaixo do peso")
    }

    else if (imc >= 18.5 && imc <= 24.9) {
        console.log("Sua Classifição: Peso normal")
    }

    else if (imc >= 25 && imc <= 29.9) {
        console.log("Sua Classifição: obre peso")
    }

    else if (imc >= 30 && imc <= 34.9) {
        console.log(" Sua Classifição:Obsidade grau 1")
    }

    else if (imc >= 35 && imc <= 39.9) {
        console.log(" Sua Classifição: Obsidade grau 2")
    }

    else if (imc > 40) {
        console.log("Sua Classifição: Obsidade grau 3")
    }
}


let opcao = 0;

do {
    opcao = parseInt(prompt(`
    ============  🤠 MENU DE EXERCICIOS 🕴️  ============
    
    Digite o número das opções: 

    0 - Sair
    1 - Login
    2 - Dia da semana
    3 - Par or impar
    4 - Média do aluno
    5 - Número crescente
    6 - Idade
    7 - calculo de desconto
    8 - Calculo de IMC

    =========================================================
    `));

    switch (opcao) {
        case 0:
            alert("Volte sempre 😘");
            break;

        case 1:
            Login();
            break;

        case 2:
            semana();
            break;

        case 3:
            parouimpar();
            break;

        case 4:
            notas();
            break;

        case 5:
            ordem();
            break;

        case 6:
            idade();
            break;

        case 7:
            desconto();
            break;

        case 8:
            imc();
            break;

        default:
            alert(" 🤷‍♂️ Não entendi oque você digitou. tente escolher uma opção valida 👀");
            break;
    }

} while (opcao !== 0);