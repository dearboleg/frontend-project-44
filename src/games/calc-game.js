import { runGame, generateRandomNumber } from '../index.js'

const gameDescription = 'What is the result of the expression?'

const calculateExpression = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2
    case '-':
      return num1 - num2
    case '*':
      return num1 * num2
    default:
      break
  }
}

const getGameData = () => {
  const operators = ['+', '-', '*']
  const randomOperator
    // eslint-disable-next-line
    = operators[Math.floor(Math.random() * operators.length)];

  const num1 = generateRandomNumber()

  const num2 = generateRandomNumber()
  const expression = `${num1} ${randomOperator} ${num2}`
  const correctAnswer = calculateExpression(
    num1,
    num2,
    randomOperator,
  ).toString()

  return {
    question: expression,
    correctAnswer,
  }
}

const playCalcGame = () => runGame(gameDescription, getGameData)

export default playCalcGame
