#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
console.log(chalk.bold.blue("\tWelcome to Our Number Guessing Game.\t"));
const randomNumber = Math.floor(Math.random() * 6 + 1); //create a random number b/w 1-6
const answer = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: "Guess a number between 1-6",
    },
]);
// Conditional Statement
if (answer.userGuessNumber === randomNumber) {
    console.log(chalk.bold.green("Congratulation! You guess the right number."));
}
else {
    console.log(chalk.bold.red("Try Again! You guess the wrong number."));
}
;
console.log("Thanks For Playing!");
