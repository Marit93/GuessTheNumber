const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const getNameFromUser = function(question) {
    readline.question(question, (answer) => {
       console.log("Hallo! ", answer)
       startGame()
   })
 }

 const startGame = function(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
console.log(startGame(25))  
