"use strict";
// Function Data type in TypeScript
function add(num1, num2 = 10) {
    return num1 + num2;
}
const result = add(4, 9);
const addArrow = (num1, num2) => num1 + num2;
const result2 = addArrow(7, 3);
const poorUser = {
    name: "Robin",
    balance: 0,
    addBalance(balance) {
        const newBalance = this.balance + balance;
        return `New balance is: ${newBalance}`;
    },
};
console.log(poorUser.addBalance(300));
