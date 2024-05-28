#! usr/bin/env node
// This is atm Machine
import inquirer from "inquirer";
let my_Currentbalance = 6000;
let my_pin = 12345;
console.log("               Wellcome!! This is me MADHU YOUSUF _ATM MACHINE                ");
let pin_ans = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter your pincode:"
    }
]);
if (pin_ans.pin === my_pin) {
    console.log("pin is correct ! login sucessfully..");
    let opertaion_ans = await inquirer.prompt([
        { name: "operation",
            type: "list",
            message: "select an operation",
            choices: ["withdraw", "check balance"]
        }
    ]);
    if (opertaion_ans.operation === "withdraw") {
        let amount_ans = await inquirer.prompt([{
                name: "amount",
                type: "number",
                message: "Enter the amount to withdraw"
            }
        ]);
        if (amount_ans.amount > my_Currentbalance) {
            console.log("insuficient balance");
        }
        else {
            my_Currentbalance -= amount_ans.amount;
            console.log(`${amount_ans.amount} withdraw successfully`);
            console.log(`This is your Remaining balance ${my_Currentbalance}`);
        }
    }
    else if (opertaion_ans.operation === "check balance") {
        console.log(`Your Current balance is ${my_Currentbalance}`);
    }
}
else {
    console.log("Your Pin Code is Incorrect! TRY AGAIN");
}
;
