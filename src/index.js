// import readlineSync from "readline-sync";

// export const greetUser = () => {
//   console.log("Welcome to the Brain Games!");
//   const userName = readlineSync.question("May I have your name? ");
//   console.log(`Hello, ${userName}!`);
//   return userName;
// };

// // export default greetUser

// export const generalLogic = (userAnswer, correctAnswer, userName) => {
//   if (userAnswer === correctAnswer) {
//     console.log("Correct!");
//     return true;
//   } else {
//     console.log(
//       `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`
//     );
//     console.log(`Let's try again, ${userName}!`);
//     return false;
//   }
// };
import readlineSync from 'readline-sync'

export const greetUser = () => {
  console.log('Welcome to the Brain Games!')
  const userName = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${userName}!`)
  return userName
}

export const generalLogic = (userAnswer, correctAnswer, userName) => {
  if (userAnswer === correctAnswer) {
    console.log('Correct!')
    return true
  }
  else {
    console.log(
      `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
    )
    console.log(`Let's try again, ${userName}!`)
    return false
  }
}

export const runGame = (gameDescription, getGameData) => {
  const userName = greetUser()

  console.log(gameDescription)

  let correctAnswers = 0
  const maxRounds = 3

  while (correctAnswers < maxRounds) {
    const { question, correctAnswer } = getGameData()

    console.log(`Question: ${question}`)
    const userAnswer = readlineSync.question('Your answer: ')

    const isCorrect = generalLogic(userAnswer, correctAnswer, userName)

    if (!isCorrect) {
      return
    }

    correctAnswers += 1
  }

  console.log(`Congratulations, ${userName}!`)
}
