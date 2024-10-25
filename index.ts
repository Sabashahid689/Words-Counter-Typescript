


// #! /usr/bin/env node

import inquirer from "inquirer";

async function main() {
  const answers: {
    Sentence: string;
  } = await inquirer.prompt([
    {
      name: "Sentence",
      type: "input",
      message: "Enter Your Sentence To Count the Words",
    },
  ]);


  const words = answers.Sentence.trim().split(" ");

  console.log(words);
  console.log(`Your Sentence Word Count Is ${words.length}`);
}

main();
