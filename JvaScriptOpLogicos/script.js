    let numero = document.getElementById("nDigitado").value; 

function nParImpar(){

    let verificar = parseInt(numero)%2;
    if (verificar==0){
        alert ("é n°"+numero+"é Par");
    }
    else {
        alert ("é n°"+numero+"é Ímpar");
    }
}
function realizar() {
    let valor1 = document.getElementById("nValor1").value;
    let valor2 = document.getElementById("nValor2").value;
    let operacao = document.getElementById("pOperacao").value;
  
    let resultado;
  
    switch (operacao) {
      case "+":
        resultado = parseInt(valor1) + parseInt(valor2);
        break;
      case "-":
        resultado = parseInt(valor1) - parseInt(valor2);
        break;
      case "*":
        resultado = parseInt(valor1) * parseInt(valor2);
        break;
      case "/":
        if (valor2 == 0) {
          alert("Não Dividirás por Zero");
        } else {
          resultado = parseFloat(valor1) / parseFloat(valor2);
        }
        break;
      default:
        alert("Escolha uma Operação Válida");
    }
  alert ("resultado = "+ resultado);
    
  }
  
  