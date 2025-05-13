import readlineSync from 'readline-sync'
import greetUser from '../cli.js'
import { generalLogic } from '../index.js'

const isEven = (number) => {
  return number % 2 === 0
}

const playEvenGame = () => {
  const userName = greetUser()
  console.log('Answer "yes" if the number is even, otherwise answer "no".')

  let correctAnswers = 0

  while (correctAnswers < 3) {
    // eslint-disable-next-line
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    const correctAnswer = isEven(randomNumber) ? 'yes' : 'no'
    console.log(`Question: ${randomNumber}`)

    const userAnswer = readlineSync.question('Your answer: ')

    const continueGame = generalLogic(userAnswer, correctAnswer, userName)

    if (!continueGame) {
      return
    }

    correctAnswers += 1
  }
  console.log(`Congratulations, ${userName}!`)
}

export default playEvenGame
