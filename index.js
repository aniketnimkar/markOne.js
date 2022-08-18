var readlineSync = require('readline-sync');
var score = 0;
var userName = readlineSync.question("May i know your name? ");
console.log("hello " + userName + " welcome to HOW WELL DO YOU KNOW Aniket?");

function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("YEAHH!! YOU'RE RIGHT!!");
    score = score + 1;
    console.log("---------------------");
  } else {
    console.log("UMMM!! YOU'RE WRONG!!");
    score = score - 1;
     console.log("---------------------");
  }
  console.log("you're score is:", score);
}

play("Where do i live? ", "chandrapur");
play("How old i'am? ", '24');
play("which car do i drive? ", "nexon");
play("Where did i travelled last?", "pune");
play("which phone do i have? ", "s20 fe");