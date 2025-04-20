const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function collectAnswers(questions, done) {
  const answers = [];
  const [firstQue] = questions;

  const queAnswered = (answer) => {
    answers.push(answer.trim());
    if (answers.length < questions.length) {
      rl.question(
        questions[answers.length],
        queAnswered
      );
    } else {
      return done(answers);
    }
  };
  rl.question(firstQue, queAnswered);
}

const questions = [
  "What is your name? ",
  "Where do you live? ",
  "What is your hobbies? "
];

collectAnswers(questions, (answers) => {
  console.log("Thank you for your answers!");
  console.log(answers);
  process.exit();
});
