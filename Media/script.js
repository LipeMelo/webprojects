function calcularMedia() {
    const notasInput = document.getElementById("notas");
    const notasArray = notasInput.value.split(',').map(Number);
  
    const aluno = new Aluno(notasArray);
    aluno.fazMedia(notasArray);
  }
  
  class Aluno {
    constructor(nota) {
      this.nota = nota;
    }
  
    fazMedia(arr) {
      let notaFinal = 0;
  
      for (let i = 0; i < arr.length; i++) {
        notaFinal += arr[i];
      }
  
      const media = notaFinal / arr.length;
      const mediaFixada = media.toFixed();
  
      const resultadoElement = document.getElementById("resultado");
      if (mediaFixada < 6) {
        resultadoElement.textContent = `Reprovado! Média: ${mediaFixada}`;
      } else {
        resultadoElement.textContent = `Aprovado! Média: ${mediaFixada}`;
      }
    }
  }
  