const readlineSync = require("readline-sync");
const chalk = require('chalk');

function welcome(){
console.log(chalk.cyanBright("How well do you know me?"));
console.log(chalk.cyanBright("A CLI app - by Souvik Das"))
console.log();
var userName = readlineSync.question("What's your name? ");

console.log(chalk.cyanBright(("Welcome "+userName + "!")));
//console.log();
}

var highScores = [
  {
    name: "Souvik",
    score: 5,
  },

  {
    name: "Sandeep",
    score: 4,
  },
]


var score = 0;

function play(question,answer){
  console.log();
  var userAnswer = readlineSync.question(question);
  userAnswer = userAnswer.toLowerCase();
  
    if(userAnswer==answer){
      console.log(chalk.greenBright(("Yayy You are correct!")));
      score = score + 1;
    }
    else{
      console.log(chalk.redBright(("Oops You are wrong.")));
      //score = score - 1;
    }
    console.log("Current Score : "+score);
    console.log("************************");
}


var questions = [{
  question: "Am I older than 20? ",
  answer : "yes"
},{
  question: "What is my fav color? ",
  answer : "black"
},{
  question: "Do I like 'beaches' or 'mountains'? ",
  answer: "beaches"
},
{
  question: "Am I a 'morning' or 'night' person? ",
  answer: "night"
},
{
  question: "Which is my fav ipl team 'CSK' or 'KKR'? ",
  answer : "kkr"
}
]
function game(){
for(var i=0;i<questions.length;i++){
  play(questions[i].question,questions[i].answer);
}
}
function showScores() {
  console.log();
  console.log(chalk.cyanBright(("YAY! You SCORED: " + score)));

  console.log();
  console.log("Check out the high scores, if you should be there ping me and I'll update it");

  for(let i=0;i<highScores.length;i++){
    console.log(highScores[i].name, " : ", highScores[i].score);

  }
  //highScores.map(score => console.log(score.name, " : ", score.score))
}

welcome();
game();
showScores();