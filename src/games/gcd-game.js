import { runGame } from '../index.js'

const gameDescription = 'Find the greatest common divisor of given numbers.'

const findGCD = (a, b) => {
  while (b > 0) {
    const temp = b
    b = a % b
    a = temp
  }
  return a
}

const getGameData = () => {
  // eslint-disable-next-line
  const num1 = Math.floor(Math.random() * 100) + 1;
  // eslint-disable-next-line
  const num2 = Math.floor(Math.random() * 100) + 1;
  const correctAnswer = findGCD(num1, num2).toString()

  return {
    question: `${num1} ${num2}`,
    correctAnswer,
  }
}

const playGCDGame = () => runGame(gameDescription, getGameData)

export default playGCDGame
