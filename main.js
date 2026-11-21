console.log('Hello World!');

console.log('Hello World!');

console.clear();

// 1. Smart Profile & Birth Year Calculator
/*
var userName = "Ali";
var currentAge = 20;
var currentYear = 2026;
var birthYear = currentYear - currentAge;
console.log("Hello " + userName + ", your birth year is " + birthYear + "!");
*/

// 2. Smart Supermarket Bill Splitter
/*
var item1 = 500;
var item2 = 300;
var item3 = 200;
var totalBill = item1 + item2 + item3;
var familyMembers = 4;
var perPersonShare = totalBill / familyMembers;
console.log("Total Bill: " + totalBill);
console.log("Per-Person Share: " + perPersonShare);
*/

// 3. Interactive CLI Calculator
/*
var num1 = 50;
var num2 = 10;
var operator = "+";
var result;

if (operator === "+") {
    result = num1 + num2;
    console.log("Result: " + num1 + " + " + num2 + " = " + result);
} else if (operator === "-") {
    result = num1 - num2;
    console.log("Result: " + num1 + " - " + num2 + " = " + result);
} else if (operator === "*") {
    result = num1 * num2;
    console.log("Result: " + num1 + " * " + num2 + " = " + result);
} else if (operator === "/") {
    if (num2 !== 0) {
        result = num1 / num2;
        console.log("Result: " + num1 + " / " + num2 + " = " + result);
    } else {
        console.log("Error: Division by zero is not allowed!");
    }
} else {
    console.log("Invalid operator selected!");
}
*/

// 4. Movie Ticket Discount & VIP Pass System
/*
var age = 10;
var isStudent = true;
var promoCode = "VIP2026";
var ticketPrice = 500;

if (age < 12) {
    ticketPrice = 0;
    console.log("Ticket is Free for kids!");
} else if (isStudent) {
    ticketPrice = ticketPrice - (ticketPrice * 0.20);
    console.log("Student ticket price with 20% discount: " + ticketPrice);
}

if (promoCode === "VIP2026") {
    console.log("Congratulations! You got a VIP backstage pass.");
}
*/

// 5. Time-Based Greeting & Schedule Checker
/*
var currentHour = 14;

if (currentHour >= 5 && currentHour < 12) {
    console.log("Good Morning!");
} else if (currentHour >= 12 && currentHour < 17) {
    console.log("Good Afternoon!");
} else if ((currentHour >= 17 && currentHour <= 23) || (currentHour >= 0 && currentHour < 5)) {
    console.log("Good Evening / Good Night!");
} else {
    console.log("Invalid hour entered!");
}
*/
    