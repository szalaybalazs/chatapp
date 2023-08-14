import { stdin as input, stdout as output } from "node:process";
import * as readline from "node:readline/promises";

const dragon = "dragon";
const blacklist = ["ny", "ty", "zs", "sz", "dz", "ly", "cs"];

const check = (word: string): boolean => {
  if (blacklist.some((letter) => word.startsWith(letter))) return false;
  if (dragon.split("").some((letter) => word.startsWith(letter))) return true;
  return false;
};

const guess = async () => {
  const rl = readline.createInterface({ input, output });
  const answer = await rl.question("Mit viszünk magunkal: ");
  rl.close();

  const result = check(answer.trim().toLowerCase());
  if (result) return console.log("Magunkkal visszük!");
  console.log("Nem visszük magunkkal!");
};

const main = async () => {
  while (true) {
    await guess();
  }
};

main();
