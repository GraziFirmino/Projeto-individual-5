const readLine = require('readline');
const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout
});

let list = [];

rl.question('Insira uma propriedade CSS ou digite "SAIR": ', (answer) => {
  if (answer.toUpperCase() === 'SAIR') {
    rl.close();
  } else {
    list.push(answer);
    rl.prompt();
  }
});