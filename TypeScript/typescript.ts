// primitive data types
// string, number, boolean, null, undefined, symbol
// --explicit type --> defining the data type of a variable
var sname : string = "Nelson";
console.log("name", sname);

var sage:number = 12;

var isactive:boolean = true;

// implicit type /inference --> typescript will automatically assign the data type based on the value assigned to the variable

// var add = 2 ;
// add = 3;
// var myName = "Nelson";
// myName = 23;

// special type(any)
var myData : any = "Nelson";
myData = 23;
myData = true;

// typescript types
// tuple
// enum
// tuple(where order is compulsory) --> it is an array with fixed number of elements and fixed data types

var arr:[number, string , boolean]= [ 1, "ali", true];
console.log("arr", arr);

var arr: readonly [string,number] = ["nelson", 1];
arr.push("rathore");
 
console.log("arr", arr);

// enum(for objects) --> set specific keys in constants and assign values to them

// const obj = {
//     sname:"nelson",
//     sage: 12,
// }
// console.log("obj", obj);
// enum(numeric)
// enum obj1{
//     sname=100,
//     sage=101,
//     sroll=102,
// }
// console.log("obj", obj1);

// enum(string)
enum obj2{
    sname="name", sage ="age", sroll="roll"
}
console.log("obj", obj2);

// --objects in typescript--
// type aliasing --> creating a new name for a type
type bname = string;
type bmodel = number;
type bactive = boolean;
const bike ={
    bname:"pulsar",
    bmodel: 2022,
    bactive: true,
}

console.log("bike", bike);

// interface --> it is a blueprint of an object which defines the structure of an object
interface CarType{
    cname: string;
    cmodel: number;
    cactive: boolean;
}

const car: CarType = {
    cname:"audi",
    cmodel: 2022,
    cactive: true,
}
console.log("car", car);

// union type --> it is a type that can be one of the multiple types
var data: string | number;
data = "nelson";
data = 23;
// data = true; // error

// -- functions in typescript--

// function myFunct(message){
//     console.log("msg", message);
// 

// // -- functions in typescript--
// function myFunct(message){
//     console.log("msg", message);
// }
// myFunct("This is a function");




 

