const readLine = require('readline');
const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout
});

let list = [];

const fala = () => {
rl.question('Insira uma propriedade CSS ou digite "SAIR": ', (answer) => {
  if (answer.toUpperCase() === 'SAIR') {
    rl.close();
  } else {
    list.push(answer);
   fala ();
  }
});
};

fala ();

rl.on('close', () => {
    console.log(list.sort((a, b) => a.localeCompare(b, undefined, {locale: 'en'})).join('\n'));
  });