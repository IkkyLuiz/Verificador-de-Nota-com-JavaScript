const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função para verificar a situação do aluno com base na média
function verificarSituacao(media) {
    if (media < 5) {
        console.log("Você está reprovado");
    } else if (media >= 5 && media < 7) {
        console.log("Você está de recuperação");
    } else {
        console.log("Parabéns, você está aprovado!");
    }
}

// Recebendo a média do aluno como entrada do usuário
rl.question('Digite a média do aluno: ', (input) => {
  const mediaAluno = parseFloat(input);

  // Verificar se o valor inserido é um número válido
  if (isNaN(mediaAluno)) {
      console.log("Por favor, insira um valor numérico válido.");
  } else {
      // Chamando a função para verificar a situação do aluno
      verificarSituacao(mediaAluno);
  }

  rl.close();
});


