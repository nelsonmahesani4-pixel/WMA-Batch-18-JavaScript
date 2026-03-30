// before oop
// code is not organized, no clear structure
// code is not reusable, duplication of code
// code is hard to read and understand, no clear separation of concerns
// code hard to maintain and reuse

// es5 (classes - blueprints for creating objects)
// object
// student1(age,id)
 
// classes + object = OOp
// javascript -> multi paradigm, imperative(;), event- driven
// paradigm -> programming style, way of writing code
// oop -> object oriented programming
// 4 pillars 
// 1. Abstraction -> hiding complexity, showing only essential features
// 2. Encapsulation -> bundling data and methods that operate on the data within one unit (class)
// 3. Inheritance -> mechanism to create new class from existing class, reusing code
// 4. Polymorphism -> ability of different classes to be treated as instances of the same class through inheritance

// class base
// class Students {
//     constructor(sname, sage, sclass,sid, srollno){
//         this.name = sname;
//         this.age = sage;
//         this.class = sclass;
//         this.id = sid;
//         this.rollno = srollno;
//     }
//     // method
//     studentData(){
//         console.log(`student name is ${this.name} and age is ${this.age}`);
//     }
   
// }

// const student1 = new Students("john", 20);
// student1.studentData();
 
// // 1. Abstraction 
// // abstraction is a specific way to hide the complex logic of a system in code (class or object) and show only the essential/useable features to the user.
// // example -> we have a car, we don't need to know how the engine works to drive the car, we just need to know how to use the steering wheel, accelerator and brake.

// function area(length){
//     return 5 * length;  //abstraction
// }
// console.log(area(10)); 

// function pi(radius){
//     return Math.PI * radius * radius; //abstraction     
// }
// console.log(pi(5));

// // class car{
// //     constructor(){
        
// //     }
// //     details(model, year){
// //         // console.log(`car  Model is : ${this.model}, Year: ${this.year}`);
// //          this.model = model;
// //         this.year = year;
// //     }
// // }
// // const mycar = new car("BMW", 2020);
// // console.log(mycar.details());

// function counter(){
    
// }

// 2. Inheritance
// inheritance is a mechanism to create new class from existing class, reusing code. The new class is called child class (subclass) and the existing class is called parent class (superclass). The child class inherits the properties and methods of the parent class and can also have its own properties and methods.
// parent class --> superclass or base class
// child class --> subclass or derived class


// function
function studentData(name){
    this.name = name;
}
studentData.prototype.details = function(){
    console.log(`student name is ${this.name}`);
}   
const studentName = new studentData("john");
studentName.details();

// class
class ParentClass {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    details(){
        console.log(`Parent name is ${this.name} and age is ${this.age}`);
    } }

class Childclass extends ParentClass {
    constructor(name,age){
        super(name,age); // call the parent class constructor
    }
}
const child = new Childclass("Ali", 25);
child.details();

// factory function
// factory function is a function that returns an object. It is a simple way to create objects without using classes. It is also a way to create objects with private properties and methods.
function createStudent(name, age){
    return {
        name: name,
        age: age, 
        details: function(){
            console.log(`student name is ${this.name} and age is ${this.age}`);
        }  
     }}
const student1 = createStudent("john", 30);
student1.details();

// 3. Encapsulation
// used for data hiding and data protection(security purpose)
// encapsulation is the bundling of data and methods that operate on the data within one unit (class). It is a way to hide the internal state of an object and only allow access to it through public methods. This helps to protect the data from unauthorized access and modification.

// use private variables -> for security
// 1. using closure
function createCounter(){
    let count = 0;  
    return {
        increment: function(){
            count++;
            console.log(count);
        }   }
}
const counter1 = createCounter();
counter1.increment();
counter1.increment();
// console.log(counter1.count); // undefined
// 2. using class fields (private fields)
class MoneyChecker{
    #money; // private field
    constructor(cardNum, cardMoney){
         this.cardNum = cardNum;
        this.#money = cardMoney;  
    }  
    sendMoney(cardMoney){
        this.#money += cardMoney;
     }
     showMoney(){
        console.log(`Available money is ${this.#money}`);
     }
}
const myCard = new MoneyChecker("1234-5678-9012-3456", 1000);
myCard.sendMoney(500);
myCard.showMoney();
// console.log(myCard.#money); // syntax error

// 4. Polymorphism
// polymorphism is the ability of different classes to be treated as instances of the same class through inheritance. It allows us to use a single interface to represent different types of objects. This is achieved through method overriding, where a child class provides a specific implementation of a method that is already defined in its parent class.
class Mainclass{
    details(){
        console.log("This is the main class");
    } }
class Subclass extends Mainclass{
    details(){
        console.log("This is the subclass ");
    }}
    const obj1 = new Mainclass();
    const obj2 = new Subclass();
    obj1.details();
    obj2.details();
    // 2. overloading -> same method name with different parameters (not supported in javascript)
    class sum{
        add(num1, num2){
            if (num2 === undefined){
                return num1 + num1;
            }
            return num1 + num2;
        }
    }
    const addition = new sum();
    console.log(addition.add(5)); // 15