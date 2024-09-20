#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greetUser from './cli.js';

console.log('Welcome to the Brain Games!');

const userName = greetUser();

console.log('Answer "yes" if the number is even, otherwise answer "no".');

const isEven = (num) => num % 2 === 0;

const evenGame = () => {
  let correctAnswersCount = 0;
  while (correctAnswersCount < 3) {
    const randomNumber = Math.floor(Math.random() * 100);
    console.log(`Question: ${randomNumber}`);
    const usersAnswer = readlineSync.question('Your answer: ').toLowerCase();
    const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';

    if (usersAnswer === correctAnswer) {
      console.log('Correct!');
      correctAnswersCount += 1;
    } else {
      console.log(
        `'${usersAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
      );
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

export default evenGame;
