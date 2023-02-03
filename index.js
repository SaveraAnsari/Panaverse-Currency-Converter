#! /usr/bin/env node
import inquirer from "inquirer";
let convert ={

    "pakrupee":{
    "usdollar":265.82,
    "saudiriyal":70.82,
    "pakrupee":1,

    },
"usdollar":{
    "saudiriyal":3.75,
    "pakrupee":265.80,
    "usdollar":1,
},
    

"saudiriyal":{
    "pakrupee":70.82,
    "usdollar":0.27,
    "saudiriyal":1,
},
};
let answers = await inquirer.prompt([{
        type: "list",
        name: "from",
        choices: ["pakrupee", "usdollar", "saudiriyal"],
        message: "you want to convert your currency from: "
    },
    {
        type: "list",
        name: "to",
        choices: ["pakrupee", "usdollar", "saudiriyal"],
        message: "you want to convert your currency to: "
    },
    {
        type: "number",
        name: "amount",
        message: "plz enter your amount: "
    }
]);
const { from, to, amount } = answers;
let answer = answers.amount = Math.floor(2);
// let result= answers.from, answers.to,answers
if (answers.from && answers.to && answers.amount) {
    let convertedAmount = convert[from][to] * amount;
    console.log(`your's converted amount is ${from} to ${to} is ${convertedAmount}`);
}
else {
    "insufficent amount";
}
