import { stdin as input, stdout as output } from "node:process";
import * as readline from "node:readline/promises";

const guessNumber = async (target: number) => {
  const rl = readline.createInterface({ input, output });
  const answer = await rl.question("Guess the number: ");
  rl.close();
  return checkGuess(target, Number(answer));
};

const checkGuess = (target: number, guess: number) => {
  const diff = target - Number(guess);
  if (diff === 0) {
    console.log("You win!");
  } else if (diff < 0) {
    console.log("Too high!");
    guessNumber(target);
  } else {
    console.log("Too low!");
    guessNumber(target);
  }
};

const main = async () => {
  const number = Math.round(Math.random() * 100);

  return guessNumber(number);
};

main();
