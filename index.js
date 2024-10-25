"use strict";
// #! /usr/bin/env node
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
async function main() {
    const answers = await inquirer_1.default.prompt([
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
