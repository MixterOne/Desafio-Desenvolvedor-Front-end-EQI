function convertValor (valor) {
	let valorSemCurrency = valor.replace(/r\$\s?/i, '');
	return isNaN(valorSemCurrency) ? 0 : parseFloat(valorSemCurrency);
}




function change () {
    let realLeft = document.getElementById('realLeft').value;
      /*ERROS NOS INPUTS------- */
  
      let spanErrorLeft = document.querySelector('.errorLeft');
      let aporteErrorLeft = document.querySelector('.aporteLeft');
      
       
        if (isNaN(realLeft) == true || realLeft == "") {
          spanErrorLeft.style.color = 'red'
          spanErrorLeft.innerHTML = 'Aporte deve ser um número!'
          aporteErrorLeft.style.color = 'red'
        }
        else {
          spanErrorLeft.style.display = 'none'
          aporteErrorLeft.style.color = 'rgba(27, 27, 27, 0.836) '
        }

}

function change2(){
  /*FUNÇÃO DE CONVERSÃO DO APORTE MENSAL*/

let realRight = document.getElementById('realRight').value;

/*ERROS NOS INPUTS------- */
  
let spanErrorRight = document.querySelector('.errorRight');
let aporteErrorRight = document.querySelector('.aporteRight');

 
  if (isNaN(realRight) == true || realRight == "") {
    spanErrorRight.style.color = 'red'
    spanErrorRight.innerHTML = 'Aporte deve ser um número!'
    aporteErrorRight.style.color = 'red'
  }
  else {
    spanErrorRight.style.display = 'none'
    aporteErrorRight.style.color = 'rgba(27, 27, 27, 0.836) '
  }
}
        
//FUNÇÃO PARA CHEGAR SE OS INPUT ESTÃO PREENCHIDOS E VALIDAR O BUTTON-------

function checkInputs(inputs) {
  var filled = true;
  
  inputs.forEach(function(input) {
      
    if(input.value === "") {
        filled = false;
    }
  
  });
  
  return filled;
  
}
var inputs = document.querySelectorAll("input");
var button = document.querySelector(".simu");
inputs.forEach(function(input) {
    
  input.addEventListener("keyup", function() {
    if(checkInputs(inputs)) {
      button.disabled = false;
    } else {
      button.disabled = true;
      button.style.background = 'rgb(255, 142, 100)'
    }
  });
});