#! /usr/bin/env node
import inquirer from "inquirer"
const currencyRates:any =
  {
        USD: 1,
        PKR: 277.73,
        AFN: 71.225,
        INR: 83.273,
        CNY: 7.233,
        GBP: 0.79,
        JPY:141.56,
        SGD: 1.35 ,
        MXN: 17.37,
        TRY: 23.67
  };
let Answer = await inquirer.prompt
(
    [
        {
          name:"firstQuestion",
          message:"Select from currency",
          type:"list",
          choices: ["USD", "PKR", "AFN", "INR", "CNY","GBP","JPY","SGD","MXN","TRY"],

        },
          
        {
            name: "secondquestion",
            type: "list",
            message: "Select from Converting Currency",
            choices: ["USD", "PKR", "AFN", "INR", "CNY","GBP","JPY","SGD","MXN","TRY"],

         },
          
         {
            name: "thirdquestion",
            message: "Enter Your Amount",
            type: "number",
         }
        
    ]
)
let firstAmount = currencyRates[Answer.firstQuestion]
let secondAmount = currencyRates[Answer.secondquestion]
let third = Answer.thirdquestion
let BassAmount = third / firstAmount
let Exchange = BassAmount * secondAmount
console.log(`${Answer.secondquestion} = ${Exchange}`);