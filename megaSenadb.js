const jsonfile = require("jsonfile");
const databaseFile = "megasena_db.json";

function readDatabase() {
  try {
    return jsonfile.readFileSync(databaseFile);
  } catch (err) {
    // Se o arquivo não existir ou ocorrer um erro, retornar um objeto vazio
    return { megasenaNumbers: [] };
  }
}

function writeDatabase(data) {
  jsonfile.writeFileSync(databaseFile, data, { spaces: 2 });
}

// Função para verificar se um grupo de seis números já existe no banco de dados
function groupExists(database, newGroup) {
  return database.megasenaNumbers.some(
    (group) => JSON.stringify(group) === JSON.stringify(newGroup)
  );
}

// Função para adicionar números da Mega-Sena ao banco de dados em grupos de seis, evitando duplicatas
function addMegaSenaNumbers(newNumbers) {
  const database = readDatabase();

  // Dividir os novos números em grupos de seis
  for (let i = 0; i < newNumbers.length; i += 6) {
    const group = newNumbers.slice(i, i + 6);

    // Verificar se o grupo já existe no banco de dados antes de adicionar
    if (!groupExists(database, group)) {
      database.megasenaNumbers.push(group);
    } else{
      console.log('Grupo de numeros ja existente! gere mais uma vez');
      break
    }
  }

  writeDatabase(database);
}

// Função para gerar um número inteiro aleatório entre min e max (inclusive)
function getRandomInt(min, max) {

  const a = 1664525;
  const c = 1013904223;
  const m = 2 ** 32; // Módulo
  const seed = Date.now();
  let x = seed;

  x = (a * x + c) % m;
  const randomNumber = min + (x % (max - min + 1));
  return Math.floor(randomNumber);
 
}

// Função para gerar um conjunto de seis números aleatórios exclusivos
function generateMegaSenaNumbers() {
  const numbers = [];
  while (numbers.length < 6) {
    const randomNumber = getRandomInt(1, 60);
    if (!numbers.includes(randomNumber)) {
      numbers.push(randomNumber);
    }
  }
  return numbers;
}

// Gere os números da Mega-Sena
const megaSenaNumbers = generateMegaSenaNumbers();

// Adicione os números gerados ao banco de dados JSON
addMegaSenaNumbers(megaSenaNumbers);

// Exiba os números gerados no console
console.log("Números da Mega-Sena:");
console.log(megaSenaNumbers.join(" - "));
