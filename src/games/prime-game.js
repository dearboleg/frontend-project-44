import readlineSync from "readline-sync";
import greetUser from "../cli.js";
import { generalLogic } from "../index.js"; // Обеспечьте, чтобы эта функция принимала и возвращала ожидаемые значения

const isPrime = (num) => {
  if (num <= 1) return false;
  if (num <= 3) return true;

  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
};

const playPrimeGame = () => {
  const userName = greetUser();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  let correctAnswers = 0;

  while (correctAnswers < 3) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    console.log(`Question: ${randomNumber}`);

    const userAnswer = readlineSync.question("Your answer: ");
    const correctAnswer = isPrime(randomNumber) ? "yes" : "no";

    const continueGame = generalLogic(userAnswer, correctAnswer, userName);

    if (!continueGame) {
      return;
    }

    correctAnswers += 1;
  }
  console.log(`Congratulations, ${userName}!`);
};

export default playPrimeGame;
