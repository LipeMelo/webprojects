var numeroSecreto = parseInt(Math.random() * 11);
var tentativa = 0;

console.log(numeroSecreto);

function Chutar() {
  var resultado = document.getElementById("resultado");
  var chute = document.getElementById("valor").value;
  if (chute < 0 || chute > 10) {
    resultado.innerHTML = "Digite números apenas entre 0 e 10";
  } else {
    tentativa++;
    if (chute == numeroSecreto) {
      resultado.innerHTML =
        "Parabéns, você acertou na tentativa " +
        tentativa +
        "</br>O número correto era " +
        numeroSecreto +
        "</br>Seu número secreto foi resetado, tente de novo";
      reset();
      console.log(numeroSecreto);
    } else {
      if (chute > numeroSecreto) {
        resultado.innerHTML =
          "Tentativa " +
          tentativa +
          "</br> O número correto é menor que " +
          chute;
      } else {
        resultado.innerHTML =
          "Tentativa " +
          tentativa +
          "</br> O número correto é maior que " +
          chute;
      }
    }
  }
}

function reset() {
  numeroSecreto = parseInt(Math.random() * 11);
  tentativa = 0;
}
