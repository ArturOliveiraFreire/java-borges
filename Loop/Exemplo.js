// For = loop contado

// Contador do 0 ao 10
// for(inicializador; condição; contador)

for (let num = 0; num <= 10; num++) {
    console.log("Eu vim Barganhar " + num)
}


// while - loop condicional

// salario de 1000 a 5000

let salario = 1000

while (salario < 5000) {
    // salario = 100 = salario
    salario += 100

    console.log("O salário é de R$: ", salario)
}



// Do while - condicional (Executa primeiro e depois valida)

let aumento = 1000

do {
    console.log("Esse é o seu salário: ", aumento)
    aumento += 100
} while (aumento < 5000)



// Array
let fruta = ["banana", "laranja", "Maça", "Pitaya", "Melancia", "Uva" , "Tadeu"]

console.log(fruta[0])
console.log(fruta[4])

// forEach => percorre uma lista

fruta.forEach(jonas => {
console.log("A fruta é: " + jonas)
})



// Persorre uma lista com For

for (let indice = 0; indice < fruta.length ; indice++) {
    console.log(fruta[indice])

    if(fruta[indice] == "Uva"){
        console.log("Eu gosto de " , fruta[indice])
    }
}