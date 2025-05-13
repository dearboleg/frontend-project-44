import readlineSync from 'readline-sync'
import greetUser from '../cli.js'
import { generalLogic } from '../index.js'

const playProggressionGame = () => {
  const generateProgression = (length, start, step) => {
    const progression = []
    for (let i = 0; i < length; i += 1) {
      progression.push(start + i * step)
    }
    return progression
  }

  const hideElement = (progression, hiddenIndex) => {
    const hiddenElement = progression[hiddenIndex]
    const progressionWithPlaceholder = progression.slice()
    progressionWithPlaceholder[hiddenIndex] = '..'
    return { progressionWithPlaceholder, hiddenElement }
  }
  const userName = greetUser()
  console.log('What number is missing in the progression?')

  let correctAnswers = 0

  while (correctAnswers < 3) {
    const length = 10
    // eslint-disable-next-line
    const start = Math.floor(Math.random() * 10) + 1;
    // eslint-disable-next-line
    const step = Math.floor(Math.random() * 10) + 1;
    // eslint-disable-next-line
    const hiddenIndex = Math.floor(Math.random() * length);

    const progression = generateProgression(length, start, step)
    const { progressionWithPlaceholder, hiddenElement } = hideElement(
      progression,
      hiddenIndex,
    )

    console.log(`Question: ${progressionWithPlaceholder.join(' ')}`)

    const userAnswer = readlineSync.question('Your answer: ')
    const correctAnswer = hiddenElement.toString()

    const continueGame = generalLogic(userAnswer, correctAnswer, userName)

    if (!continueGame) {
      return
    }

    correctAnswers += 1
  }
  console.log(`Congratulations, ${userName}!`)
}

export default playProggressionGame
