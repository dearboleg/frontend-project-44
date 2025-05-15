import { runGame } from '../index.js'

const gameDescription = 'What number is missing in the progression?'

const generateProgression = (length, start, step) => {
  const progression = []
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step)
  }
  return progression
}

const hideElement = (progression, hiddenIndex) => {
  const progressionWithPlaceholder = progression.slice()
  progressionWithPlaceholder[hiddenIndex] = '..'
  return {
    question: progressionWithPlaceholder.join(' '),
    correctAnswer: progression[hiddenIndex].toString(),
  }
}

const getGameData = () => {
  const length = 10
  // eslint-disable-next-line
  const start = Math.floor(Math.random() * 10) + 1;
  // eslint-disable-next-line
  const step = Math.floor(Math.random() * 10) + 1;
  // eslint-disable-next-line
  const hiddenIndex = Math.floor(Math.random() * length);

  const progression = generateProgression(length, start, step)
  return hideElement(progression, hiddenIndex)
}

const playProgressionGame = () => runGame(gameDescription, getGameData)

export default playProgressionGame
