// Oque é o DOM

// DOM é Document Object Model, ou seja, é um Modelo de Objeto de Documento. É a arvore do HTML com os seus elementos.


// Pq EXISTE ter o DOM?

// Para o JS conseguir manipular os elementos HTML no formato de objetos, podendo acessar propriedades e funções desses objetos.


// No JS como acessamos o HTML?

// Pela palavra Document, ou seja, o Document é o HTML do site em formato de objeto.


// Class ou ID?

// Classe - É um identificador de elementos 
// ID - É um identificador de elementos porém ;e para um únicos elementos


let elementosClass = document.getElementsByClassName("texto");
let elementoID = document.getElementById("formulario")

console.log(elementosClass);
console.log(elementoID);


// Crie uma variavel que tenha o valor de um elemento de busca pela sua tag ✅

let elementoTag = document.getElementsByTagName("p")

console.log(elementoTag);

// Acesse a propiedade innerText da variavel ElementoTag (éum array vão ter que acessar a posição do elemento)e exiba-a ✅

console.log(elementoTag[0].innerText);

elementoTag[0].textContent = "Personagem Legal"; // modifica o conteudo do elemento

// acesse apropriedade style.color e atribua uma nova cor a possição 1 da varriavel ElementoTag ✅

elementoTag[0].style.color = "red";

// acessar o style.fontSize e atribuir 30px

elementoTag[0].style.fontSize = "30px";