// BOM   --> Browser object model
// Read only(OK)

// DOM  -->

// Alert
// window.alert("Hi")
// alert("")

// variables  -->  greek word     vary-(change) and ables(able)

 var name = "Nelson";   // --> assign (Nelson)  
 const myName = "Nelson";

 console.log(myName,name)

 // null is the value 
 // undefined  data type

//  var var = "NM"  // reserved
// variable name conventions

//1. pascal case
//2. camel case
//3. snake case
//4.train case
// console.log(firstName)  // temporal dead zone  (don't use (console.log) before decalaration/initialization a variable)
// let firstName = "Rthore";
// chapter
 
// Data types in JS
// Primitive data types
// 1. string
// 2. number
// 3. boolean   
// 4. null
// 5. undefined
// 6. symbol
// 7. BigInt
// Non-primitive data types
// 1. Object    
// 2. Array
// 3. Function
// 4. Date
// 5. RegExp
// 6. Error 
// 7. Map
// 8. Set
// 9. WeakMap
// 10. WeakSet
// 11. Promise
// 12. etc
// typeof operator

// post and  pre increments
 var a = 1;
 var b = 1;

//  var total = ++b + ++b + ++a + ++a;
 var total = a++ + ++b + ++a + b++ + a + b
            //1 +   2  +  3  + 2   + 3 + 3;
 console.log(total)

//concatenate twostrings together by using template literls
//template literls  is the modern way to work with strings in Js    
//  var name = "Nelson";
//  var lastName = prompt("enter your last name");
//  console.log(`Hi ${name} ${lastName}`)

//  // assignment  

// var x = prompt("where does the pope  live");
// if(x == "vatican") {
//     alert("correct!");
// }
// if(x !== "Vatican") {
//     alert("wrong!");
// }

// console.log(symbol)
// console.log(x); // ReferenceError: x is not defined
// let value = prompt("Kuch likho");

// if (value === null) {
//   console.log("null");   // exam / simple answer
// } else {
//   console.log(value);
// }
var arr = []

arr[200] = "ali"
arr[150] = "asad"
arr[139] = "don't touch"
console.log(arr[arr.length-51])
alert(arr[arr.length-62])
// console.log([150])
