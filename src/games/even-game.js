// import readlineSync from "readline-sync";
// import greetUser from "../cli.js";
// import { generalLogic } from "../index.js";

// const isEven = (number) => {
//   if (number % 2 === 0) {
//     return true;
//   }
//   return false;
// };

// const playEvenGame = () => {
//   const userName = greetUser();

//   console.log('Answer "yes" if the number is even, otherwise answer "no".');

//   let correctAnswers = 0;

//   while (correctAnswers < 3) {
//     const randomNumber = Math.floor(Math.random() * 100) + 1;

//     const correctAnswer = isEven(randomNumber) ? "yes" : "no";
//     console.log(`Question: ${randomNumber}`);

//     const userAnswer = readlineSync.question("Your answer: ");

//     const logic = generalLogic();

//     // if (userAnswer === correctAnswer) {
//     //   console.log("Correct!");
//     //   correctAnswers += 1;
//     // } else {
//     //   console.log(
//     //     `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`
//     //   );
//     //   console.log(`Let's try again, ${userName}`);
//     //   return;
//     // }
//   }
//   console.log(`Congratulations, ${userName}!`);
// };

// export default playEvenGame;

import readlineSync from "readline-sync";
import greetUser from "../cli.js";
import { generalLogic } from "../index.js";

const isEven = (number) => {
  return number % 2 === 0;
};

const playEvenGame = () => {
  const userName = greetUser();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let correctAnswers = 0;

  while (correctAnswers < 3) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    const correctAnswer = isEven(randomNumber) ? "yes" : "no";
    console.log(`Question: ${randomNumber}`);

    const userAnswer = readlineSync.question("Your answer: ");

    // Передаем параметры в generalLogic
    const continueGame = generalLogic(userAnswer, correctAnswer, userName);

    if (!continueGame) {
      return;
    }

    correctAnswers += 1;
  }
  console.log(`Congratulations, ${userName}!`);
};

export default playEvenGame;
