import readlineSync from "readline-sync";
import greetUser from "./cli.js";

// export const greet = () => {
//   console.log("Welcome to the Brain Games!");
// };

// export const generalLogic = () => {
//   if (userAnswer === correctAnswer) {
//     console.log("Correct!");
//     correctAnswers += 1;
//   } else {
//     console.log(
//       `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`
//     );
//     console.log(`Let's try again, ${userName}`);
//     return;
//   }
// };

export const generalLogic = (userAnswer, correctAnswer, userName) => {
  if (userAnswer === correctAnswer) {
    console.log("Correct!");
    return true; // Продолжить игру
  } else {
    console.log(
      `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`
    );
    console.log(`Let's try again, ${userName}!`);
    return false; // Закончить игру
  }
};
