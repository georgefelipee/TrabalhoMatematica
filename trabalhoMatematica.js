// Função para gerar um número inteiro aleatório entre min e max (inclusive)
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Função para gerar um conjunto de seis números aleatórios exclusivos
  function generateMegaSenaNumbers() {
    const numbers = [];
    while (numbers.length < 6) {
      const randomNumber = getRandomInt(1, 99);
      if (!numbers.includes(randomNumber)) {
        numbers.push(randomNumber);
      }
    }
    return numbers;
  }
  
  // Gere os números da Mega-Sena
  const megaSenaNumbers = generateMegaSenaNumbers();
  
  // Exiba os números gerados no console
  console.log("Números da Mega-Sena:");
  console.log(megaSenaNumbers.sort((a, b) => a - b).join(" - "));