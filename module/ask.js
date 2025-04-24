const colAnswers = require("./lib/colAnswers");

const questions = [
  "What is your name? ",
  "Where do you live? ",
  "What are your hobbies? "
];

colAnswers(questions, (answers) => {
  console.log("Thank you for your answers!");
  console.log(answers);
  process.exit();
});
