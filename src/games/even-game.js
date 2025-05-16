import { runGame, generateRandomNumber } from '../index.js'

const gameDescription
  = 'Answer "yes" if the number is even, otherwise answer "no".'

const isEven = (number) => {
  return number % 2 === 0
}

const getGameData = () => {
  const randomNumber = generateRandomNumber()
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no'

  return {
    question: randomNumber.toString(),
    correctAnswer,
  }
}

const playEvenGame = () => runGame(gameDescription, getGameData)

export default playEvenGame
