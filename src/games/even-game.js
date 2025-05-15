import { runGame } from '../index.js'

const gameDescription
  = 'Answer "yes" if the number is even, otherwise answer "no".'

const isEven = (number) => {
  return number % 2 === 0
}

const getGameData = () => {
  // eslint-disable-next-line
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no'

  return {
    question: randomNumber.toString(),
    correctAnswer,
  }
}

const playEvenGame = () => runGame(gameDescription, getGameData)

export default playEvenGame
