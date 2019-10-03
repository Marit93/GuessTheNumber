const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? ', (answer) => {
  console.log(`Welkom ${answer}`);
  
  rl.question('Guess a number between 0 and 25 ', (answer2) =>{
      console.log(`Welkom ${answer2}`);
  })

  rl.close();
});
