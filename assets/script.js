//2 - Faça um algoritmo para receber um número qualquer e imprimir na tela se o número é par ou ímpar, positivo ou negativo. //

//pega os elementos e coloca na tela
let result = document.querySelector(".resultado");
let newp = document.createElement("p");
result.append(newp);

//pega os elementos
let input1 = document.querySelector("#number-1");


let button = document
  .querySelector(".button")
  .addEventListener("click", calcular);

function calcular() {
  //pega os valores
  let inputstring1 = input1.value;
 
  // transforma em Number
  let a = parseInt(inputstring1);
  

  let result = document.querySelector(".resultado");
  let newp = document.createElement("p");
  result.append(newp);

  if (!isNaN(a)) {

    //verifica se todos são numeros

    function somar() {
      if (a === 0) { // verifica se o numero é 0
        newp.textContent = 'O número é zero';
    } else if (a > 0) { //verifica se é positivo
        if (a % 2 === 0) {
            newp.textContent = `O número ${a} é par e positivo!`; //Se é Positivo e par
        } else {
            newp.textContent = `O número ${a} é ímpar e positivo!`;// Senão é impar e positivo
        }
    } else {
        if (a % 2 === 0) {
            newp.textContent = `O número ${a} é par e negativo!`; // É par e Negativo
        } else {
            newp.textContent = `O número ${a} é ímpar e negativo!`; // É impar e Negativo
        }
    }
  }
    somar();
  } else {
    newp.textContent = "O numero é invalido";
  }
  input1.value = "";
  
}

let reiniciar = document
  .querySelector(".buttonr")
  .addEventListener("click", () => {
    input1.value = "";
    result.innerHTML = "";
  });
