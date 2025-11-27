let secao = document.getElementsByTagName("section")

let novoparagrafo = document.createElement("p"); // Cria um elemento no meu HTML

novoparagrafo .textContent = "Palmeirassssss" // poe um conteudo no p

secao[0].appendChild(novoparagrafo);

// remover a tag label

let formularioelemento = document.getElementById("formulario")

let labelelemento = document.getElementById("label")

formularioelemento.removeChild(labelelemento); 