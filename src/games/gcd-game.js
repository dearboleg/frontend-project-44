import readlineSync from "readline-sync";
import greetUser from "../cli.js";
import { generalLogic } from "../index.js";

const findGCD = (a, b) => {
  while (b > 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

const playGCDGame = () => {
  const userName = greetUser();
  console.log("Find the greatest common divisor of given numbers.");

  let correctAnswers = 0;

  while (correctAnswers < 3) {
    const num1 = Math.floor(Math.random() * 100) + 1;
    const num2 = Math.floor(Math.random() * 100) + 1;

    console.log(`Question: ${num1} ${num2}`);

    const userAnswer = readlineSync.question("Your answer: ");
    const correctAnswer = findGCD(num1, num2).toString();

    const continueGame = generalLogic(userAnswer, correctAnswer, userName);

    if (!continueGame) {
      return;
    }

    correctAnswers += 1;
  }
  console.log(`Congratulations, ${userName}!`);
};

export default playGCDGame;
