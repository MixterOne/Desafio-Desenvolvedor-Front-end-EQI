/*FUNÇÃO DE CONVERSÃO DO APORTE INICIAL*/

let realLeft = document.getElementById('realLeft');

function convertValor (valor) {
	let valorSemCurrency = valor.replace(/r\$\s?/i, '');
	return isNaN(valorSemCurrency) ? 0 : parseFloat(valorSemCurrency);
}

realLeft.addEventListener("blur", function() {
  
  let valor = convertValor(this.value);
  let valor2 = valor.toLocaleString("pt-br", {
	style: "currency",
	currency: "BRL"
  });
  realLeft.value = valor2;

  /*ERROS NOS INPUTS------- */

  let spanErrorLeft = document.querySelector('.errorLeft');
  let aporteErrorLeft = document.querySelector('.aporteLeft')

  if(realLeft.value != Number){
    spanErrorLeft.style.color = 'red'
    aporteErrorLeft.style.color = 'red'
    spanErrorLeft.innerHTML = 'Aporte deve ser um número!'
  }
});






/*FUNÇÃO DE CONVERSÃO DO APORTE MENSAL*/


let realRight = document.getElementById('realRight');

function convertValor (valor) {
	let valorSemCurrency2 = valor.replace(/r\$\s?/i, '');
	return isNaN(valorSemCurrency2) ? 0 : parseFloat(valorSemCurrency2);
}

realRight.addEventListener("blur", function() {
  
  let valor = convertValor(this.value);
  let valor2 = valor.toLocaleString("pt-br", {
	style: "currency",
	currency: "BRL"
  });
  realRight.value = valor2;

  /*ERROS NOS INPUTS------- */

  let spanErrorRight = document.querySelector('.errorRight');
  let aporteErrorRight = document.querySelector('.aporteRight')

  if(realRight.value != Number){
    spanErrorRight.style.color = 'red'
    aporteErrorRight.style.color = 'red'
    spanErrorRight.innerHTML = 'Aporte deve ser um número!'
  }
});

