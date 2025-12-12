const item = {
    "huury" : true,
    "Buitiful": false,
    "lovish" : undefined,
    "rohan" : 123, 
}
console.log(item["huury"])

// string cases
// var month = prompt("enter month")
// var charsInMonth = month.length;
// if(charsInMonth > 3) {
//     var result = month.slice(0,3);
//     console.log("result ==>", result);
//     alert(typeof result)

// }

// var cityName = prompt("enter city name")
// var  cityNames = cityName.length;
// for (i = 0; i < cityNames; i++) {
//    if(cityName.slice(i,i+2) === " "){
//     console.log("Hey,double  space not allowed")
//    }else{
//     console.log("there  is no space ")
//    }
// }

// var cityName = "The world war II story of the past"
// var  cityNames = cityName.length;
// for (i = 0; i < cityNames; i++) {
//    if(cityName.slice(i,i+12) === "world war II "){
//     cityName = 
//     cityName.slice(0,i) + "The second War " + cityName.slice(i + 12);
//     console.log("cityName ==>", cityName)
//    }
// }

//  index tell us  about how many character back
// var name = "This is Beautifull Pakistan in Asia";
// var check = name.indexOf("world");
// if(check !== -1){
//     var result = name.slice(0,check) + "thailand " + name.slice(check + 8)
// }
// console.log(result)


// var sentence = "This is Beautifull Pakistan in Asia Again Pakistan";
// var result = sentence.replaceAll("pakistan","thialand");
// console.log(result)

// var names = "sbr"
// if( names =="s") {
//     var upper = names.toUpperCase();
//     console.log(upper,"found");
// }


// var num = 4;
// if(num % 2 == 0){
//     console.log("Even")
// }

// var stndMarks = 80;
// var stndMarks2 = 70;
// var stndMarks3 = 60;
// var stndMarks4 = 50;
// var stndMarks5 = 40;

// if(stndMarks > 80 ){
//     console.log("A+")
// }
// if(stndMarks2 <= 70){
//         console.log("A")
//     }

//     if(stndMarks3 == 60) {
//         console.log("B")
//     }
//  if(stndMarks4 > 50) {
//     console.log("C")
//  }else{
//     console.log("Fail")
//  }

//  var number = 15;
//  if(number % 3 == 0 && number % 5 == 0) {
//     console.log("number")
//  }


// var arr = [1,2,3,4,5] 
// console.log(arr,arr)


// let fruits =  ["Zaitoon,Apple,Grapes,"];
// let removedFruit = fruits.shift();
// console.log("==>",fruits);
// console.log(removedFruit);

// let fruits = ["apple", "banana", "orange"];
// let removedFruit = fruits.pop();
// console.log(fruits);       // Output: ["apple", "banana"]
// console.log(removedFruit); // Output: "orange"
//  const fruitsNme = ['apple', 'banana', 'orange', 'grape'];
//     const citrus = fruitsNme.splice(1, 4); // Extracts 'banana' and 'orange'
//     console.log(citrus); // Output: ['banana', 'orange']
//     console.log(fruitsNme); // Output: ['apple', 'banana', 'orange', 'grape'] (original array unchanged)

// var arr = ["dog,cat,bird"];
// var result = arr.pop("0");
// console.log("==>",arr);
// console.log(result);

// var number = 1.345;
// var fixedNumber = number.toFixed(2);
// console.log(fixedNumber)
// console.log(typeof number);

// function is like a object//
// New --> keyword denote object 
// var date =new Date();
// console.log(date.getMonth())
// console.log(date.getDate())
// console.log(date.getHours())
// console.log(date.getMilliseconds())
// console.log("Time :",date.getTime())
// assignment create an array of month and access the current month of that 
// use of milliseconds 
// 1.OTP 
// 2. passwords 
// 

// function

// Date() //method // uncontrolled
// myFunction() // function  --keyword  // controlled by user

// pure function
// impure function

function myFunction(){ // blueprint  // address reference 
    console.log("function called"   )
}
myFunction()
myFunction()
//when we called this function the function will destroyed only function is excute
// myFunction --> invoke krna or called krna function ko

