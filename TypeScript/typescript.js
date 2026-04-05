"use strict";
// primitive data types
// string, number, boolean, null, undefined, symbol
// --explicit type --> defining the data type of a variable
var sname = "Nelson";
console.log("name", sname);
var sage = 12;
var isactive = true;
// implicit type /inference --> typescript will automatically assign the data type based on the value assigned to the variable
// var add = 2 ;
// add = 3;
// var myName = "Nelson";
// myName = 23;
// special type(any)
var myData = "Nelson";
myData = 23;
myData = true;
const bike = {
    bname: "pulsar",
    bmodel: 2022,
    bactive: true,
};
console.log("bike", bike);
const car = {
    cname: "audi",
    cmodel: 2022,
    cactive: true,
};
console.log("car", car);
// union type --> it is a type that can be one of the multiple types
var data;
data = "nelson";
data = 23;
// data = true; // error
// -- functions in typescript--
function myFunct(message) {
    console.log("msg", message);
}
myFunct("This is a function");
