#! /usr/bin/env node
console.log("Welcome to Our Game.");
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 5 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: "Guess a number between 1-5",
    },
]);
// Conditional Statement
if (answer.userGuessNumber === randomNumber) {
    console.log("Congratulation! You guess the right number.");
}
else {
    console.log("Try Again! You guess the wrong number.");
}
;
console.log("Thanks For Playing!");
