import { runGame } from "../index.js";

const gameDescription = "What is the result of the expression?";

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

const getGameData = () => {
  const operators = ["+", "-", "*"];
  // eslint-disable-next-line
  const randomOperator =
    operators[Math.floor(Math.random() * operators.length)];
  // eslint-disable-next-line
  const num1 = Math.floor(Math.random() * 100) + 1;
  // eslint-disable-next-line
  const num2 = Math.floor(Math.random() * 100) + 1;
  const expression = `${num1} ${randomOperator} ${num2}`;
  const correctAnswer = calculateExpression(
    num1,
    num2,
    randomOperator
  ).toString();

  return {
    question: expression,
    correctAnswer,
  };
};

const playCalcGame = () => runGame(gameDescription, getGameData);

export default playCalcGame;
