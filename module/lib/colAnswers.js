const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

module.exports = (questions, done) => {
  const answers = [];
  const [firstQue] = questions;

  const queAnswered = (answer) => {
    answers.push(answer.trim());
    if (answers.length < questions.length) {
      rl.question(
        questions[answers.length],
        quesAnswered
      );
    } else {
      return done(answers);
    }
  };

  rl.question(firstQuestion, questionAnswered);
};
