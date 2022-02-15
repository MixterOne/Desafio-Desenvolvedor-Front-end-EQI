




function change() {
  /*ERROO NO APORTE INICIAL------ */

  let realLeft = document.getElementById('realLeft').value;
  let spanErrorLeft = document.querySelector('.errorLeft');
  let aporteErrorLeft = document.querySelector('.aporteLeft');


  if (isNaN(realLeft) == true || realLeft == "") {
    spanErrorLeft.style.color = 'red'
    spanErrorLeft.innerHTML = 'Aporte deve ser um número!'
    aporteErrorLeft.style.color = 'red'
  }
  else if (isNaN(realLeft) == false || realLeft == Number) {
    spanErrorLeft.style.display = 'none'
    aporteErrorLeft.style.color = 'rgba(27, 27, 27, 0.836) '
  }

  //CONVERSÃO DO APORTE INICIAL---

  var atual = document.querySelector('#realLeft');

  function sanitizeValor(valor) {
    var valorSemCurrency = valor.replace(/r\$\s?/i, '');
    return isNaN(valorSemCurrency) ? 0 : parseFloat(valorSemCurrency);
  }

  atual.addEventListener("blur", function () {
    var valor = sanitizeValor(this.value);
    var valor2 = valor.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL"
    });
    atual.value = valor2;
  });


}

function change2() {
  //ERROS NO APORTE MENSAL------- 
  let realRight = document.getElementById('realRight').value;
  let spanErrorRight = document.querySelector('.errorRight');
  let aporteErrorRight = document.querySelector('.aporteRight');


  if (isNaN(realRight) == true || realRight == "") {
    spanErrorRight.style.color = 'red'
    spanErrorRight.innerHTML = 'Aporte deve ser um número!'
    aporteErrorRight.style.color = 'red'
  }
  else if (isNaN(realRight) == false || realRight == Number) {
    spanErrorRight.style.display = 'none'
    aporteErrorRight.style.color = 'rgba(27, 27, 27, 0.836) '
  }
}

//CONVERSÃO DO APORTE MENSAL-----
var atual = document.querySelector('#realRight');

function sanitizeValor(valor) {
  var valorSemCurrency = valor.replace(/r\$\s?/i, '');
  return isNaN(valorSemCurrency) ? 0 : parseFloat(valorSemCurrency);
}

atual.addEventListener("blur", function () {
 
  var valor = sanitizeValor(this.value);
  var valor2 = valor.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL"
  });
  atual.value = valor2;
});

//FUNÇÃO PARA CHECAR SE OS INPUTS ESTÃO PREENCHIDOS E VALIDAR O BUTTON-------

function checkInputs(inputs) {
  var filled = true;

  inputs.forEach(function (input) {

    if (input.value === "") {
      filled = false;
    }

  });

  return filled;

}

var inputs = document.querySelectorAll("input");
var button = document.querySelector(".simu");
inputs.forEach(function (input) {

  input.addEventListener("keyup", function () {
    if (checkInputs(inputs)) {
      button.disabled = false;
    } else {
      button.disabled = true;
      button.style.background = 'rgb(255, 142, 100)'
    }
  });
});