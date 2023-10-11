// Função para gerar um número inteiro aleatório entre min e max (inclusive) usando Date.now() como semente
function getRandomInt(min, max) {
    const seed = Date.now();
    const range = max - min + 1;
    const randomNumber = (seed/0.4 % range) + min;
    return randomNumber;
  }

  // Exemplo de uso
console.log(getRandomInt(1, 99));
