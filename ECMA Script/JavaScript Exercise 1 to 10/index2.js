// // (Exercise 1) Alert

alert("Hello, World!")
alert("Nelson Rathore Mahesani")
alert(5)

var firstName = "Nelson";
alert(firstName)

var name = "Nelson";
alert("Hello " + name);

// // (Exercise 2) variables for Strings

var  userName = "Nelson";
console.log(userName);
var greetingMsg = "Welcome";
alert(greetingMsg );

var firstName = "Nelson ";
var lastName = "Rathore";
var fullName = firstName + lastName ;
console.log(fullName)

var myFavQuote = "I don’t write code to impress people — I write it to improve myself.";
alert(myFavQuote)
console.log(myFavQuote);

var city = "Welcomr to [Karachi]!";
alert(city);

// // (exercise 3) Variables for numbers
var age = 17;

var num1 = 50;
var num2 = 55;
var sum = num1 + num2 ;
console.log(sum)
var subtract = num2 - num1 ;
console.log (subtract)
var multiPly = num1 * num2 ;
console.log(multiPly)
var age1 = 20;
console.log("You are 20 years old")


// // (exercise 4) Math expressions

var x = 10;
var y = 5;

var totalSum = x + y ;
console.log(totalSum)

var subtract = y - x ;
// alert(subtract);

var multiply = x * y;
console.log(multiply);

var divide = x / y ;
console.log(divide )

var riminder = x % y ;
console.log(riminder);

// // (exercise 5) Prompt

var userAge = prompt("enter your age ")
console.log(userAge);

var userNum = Number(prompt("enter number "))
console.log(userNum + userNum++);

var color = prompt("what is your favorite color")

var blueColor = prompt(color , "Wow! I like blue too!")
console.log(blueColor)

// EXERCISE (6) If and comparison Operators
var age = 29;
if(age < "30"){
    console.log("you're still Young man.")
}

// var prompt = require('prompt-sync')();
var number = (prompt("enter number"));
if(number % 2 == 0) {
console.log("Even Number")
}
else{
    console.log("Odd Number ")
}
// comparison Operators

var X = 5 ;
var  Y = 7 ;
if(Y > X) {
    console.log("7 is greater than 5")
}

var passWord = Number(prompt("enter password")) 
if(passWord == "12345") {
    console.log("Access granted")
}
else{
    console.log("Access denied")
}

// == less equality --> compare 
let value1 = "4" ;
let value2 = 4 ;
console.log("==>", value1 == value2);

// === strict equality ---> check data type (string or number) and  codition

let value3 = "4" ;
let value4 = 4 ;
console.log("==>", value3 === value4);

// less Inequality 
let value5 = "4" ;
let value6 = 5 ;
console.log("==>", value5 != value6);

// strict Inequality --> same but opposite to strict equality
let p = 10;
let q = 10;

console.log(p !== q);












