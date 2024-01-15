function Converter() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorNumerico = parseFloat(valor);
    var valorReal = valorNumerico * 5;
    var valorRealFix = valorReal.toFixed(2);
  
    var elementoConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O resultado em real é R$:" + valorRealFix;
  
    elementoConvertido.innerHTML = valorConvertido;
  
    var valorElementoEuro = document.getElementById("valorEuro");
    var valorEuro = valorElementoEuro.value;
    var valorNumericoEuro = parseFloat(valorEuro);
    var valorRealEuro = valorNumericoEuro * 5.30;
    var valorRealEuroFix = valorRealEuro.toFixed(2);
  
    var elementoConvertidoEuro = document.getElementById("valorConvertidoEuro");
    var valorConvertidoEuro = "O resultado em Real é R$:" + valorRealEuroFix;
  
    elementoConvertidoEuro.innerHTML = valorConvertidoEuro;
  }
  