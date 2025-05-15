import { runGame } from '../index.js';

const gameDescription
  = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num <= 1) return false;
  if (num <= 3) return true;

  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
};

const getGameData = () => {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';

  return {
    question: randomNumber.toString(),
    correctAnswer,
  };
};

const playPrimeGame = () => runGame(gameDescription, getGameData);

export default playPrimeGame;
