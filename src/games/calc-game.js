import readlineSync from "readline-sync";
import greetUser from "../cli.js";
import { generalLogic } from "../index.js";

const calculateExpression = (num1, num2, operator) => {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    default:
      break;
  }
};

const calcGame = () => {
  const userName = greetUser();
  console.log("What is the result of the expression?");

  let correctAnswers = 0;

  //   while (correctAnswers < 3) {
  //     const randomOperator = () => {
  //       const operators = ["+", "-", "*"];
  //       return operators[Math.floor(Math.random() * operators.length)];
  //     };
  //     const randomNumber = Math.floor(Math.random() * 100) + 1;
  //     const num1 = randomNumber();
  //     const num2 = randomNumber();
  //     const operator = randomOperator();

  //     const expression = `${num1} ${operator} ${num2}`;
  //     console.log(`Question: ${expression}`);

  //     const userAnswer = readlineSync.question("Your answer: ");
  //     const correctAnswer = calculateExpression(num1, num2, operator).toString();

  //     const continueGame = generalLogic(userAnswer, correctAnswer, userName);

  //     if (!continueGame) {
  //       return;
  //     }

  //     correctAnswers += 1;
  //   }
  while (correctAnswers < 3) {
    const randomOperator = () => {
      const operators = ["+", "-", "*"];
      return operators[Math.floor(Math.random() * operators.length)];
    };

    const num1 = Math.floor(Math.random() * 100) + 1;
    const num2 = Math.floor(Math.random() * 100) + 1;
    const operator = randomOperator();

    const expression = `${num1} ${operator} ${num2}`;
    console.log(`Question: ${expression}`);

    const userAnswer = readlineSync.question("Your answer: ");
    const correctAnswer = calculateExpression(num1, num2, operator).toString();

    const continueGame = generalLogic(userAnswer, correctAnswer, userName);

    if (!continueGame) {
      return;
    }

    correctAnswers += 1;
  }
  console.log(`Congratulations, ${userName}!`);
};

export default calcGame;
