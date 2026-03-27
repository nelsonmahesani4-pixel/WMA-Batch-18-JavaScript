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
class Students {
    constructor(sname, sage, sclass,sid, srollno){
        this.name = sname;
        this.age = sage;
        this.class = sclass;
        this.id = sid;
        this.rollno = srollno;
    }
    // method
    studentData(){
        console.log(`student name is ${this.name} and age is ${this.age}`);
    }
   
}

const student1 = new Students("john", 20);
student1.studentData();
 
// 1. Abstraction 
// abstraction is a specific way to hide the complex logic of a system in code (class or object) and show only the essential/useable features to the user.
// example -> we have a car, we don't need to know how the engine works to drive the car, we just need to know how to use the steering wheel, accelerator and brake.

function area(length){
    return 5 * length;  //abstraction
}
console.log(area(10)); 

function pi(radius){
    return Math.PI * radius * radius; //abstraction     
}
console.log(pi(5));

// class car{
//     constructor(){
        
//     }
//     details(model, year){
//         // console.log(`car  Model is : ${this.model}, Year: ${this.year}`);
//          this.model = model;
//         this.year = year;
//     }
// }
// const mycar = new car("BMW", 2020);
// console.log(mycar.details());

function counter(){
    
}