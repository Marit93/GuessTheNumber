const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
​
  const getNameFromUser = function(question) {
     readline.question(question, (answer) => {
        console.log("Hallo! ", answer)
        startGame()
    })
  }
  


function game (max){
    return Math.floor(Math.random() * Math.floor(max));
}

console.log(game(25))