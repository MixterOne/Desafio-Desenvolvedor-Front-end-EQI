/*FUNÇÃO DE CONVERSÃO DO APORTE INICIAL*/

let realLeft = document.getElementById('realLeft').value;

function convertValor (valor) {
	let valorSemCurrency = valor.replace(/r\$\s?/i, '');
	return isNaN(valorSemCurrency) ? 0 : parseFloat(valorSemCurrency);
}


/* 
  realLeft.addEventListener("blur", function(){
  
  let valor = convertValor(this.value);
  let valor2 = valor.toLocaleString("pt-br", {
	style: "currency",
	currency: "BRL"
});

*/

  /* 
    CHAT:
    nem pra ter avisado em
    tenta agora, tenho fé agora
   
    cara ta dando que nn ta definido
    panErrorLeft.style.color = 'red'
        aporteErrorLeft.style.color = 'red'
    não apaga, deixa eu terminar 

  CARA TA CARREGANDO INFINITAMENTE kkkkkkk ACHO QUE É O LOOP

  como assim carregando infinitamente?

  fica rodando a bolinha de carregando a pagina sabe? ae nn me deixar clicar em nd
  tem nada haver não, só verifica lá nos input, coloca uma string e depois um número
  se fica vermelho e verde  
  
  ae nn me deixar clicar em nd
  ae nn me deixar clicar em nd
  ae nn me deixar clicar em nd
  ae nn me deixar clicar em nd

  nem sei o que vc colocou ali em baixo, du nada começou a escreve sem falar nada, vou tentar terminar ali
  e vc verifica

  é pq no console ta dizendo que nn tinha sido definido
  
  testaspanErrorLeft.style.color = 'red'
        aporteErrorLeft.style.color = 'red' a


        testa a porra do código agora
        continua carrega
  */

        

    let n = 2;
    let newvalue = Number(realLeft);
    while( n > 1 ){
      let spanErrorLeft = document.querySelector('.errorLeft');
      let aporteErrorLeft = document.querySelector('.aporteLeft');

      if (newvalue != Number) {
        spanErrorLeft.style.color = 'red'
        aporteErrorLeft.style.color = 'red'
      }
      else {
        spanErrorLeft.style.color = 'green'
        aporteErrorLeft.style.color = 'green'
      }
    }



  /*ERROS NOS INPUTS------- */

  


  // if(realLeft != Number){
  //  spanErrorLeft.style.color = 'red'
//  aporteErrorLeft.style.color = 'red'
   // spanErrorLeft.innerHTML = 'Aporte deve ser um número!'
 // }

  


/*FUNÇÃO DE CONVERSÃO DO APORTE MENSAL*/


let realRight = document.getElementById('realRight');

function convertValor (valor) {
	let valorSemCurrency = valor.replace(/r\$\s?/i, '');
	return isNaN(valorSemCurrency) ? 0 : parseFloat(valorSemCurrency);
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
  }else{
    spanErrorRight.style.color = 'red'
    aporteErrorRight.style.color = 'red'
  }
})






  

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
