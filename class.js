/* //create a class without constructor
class Person {
    firstName = "John";
    lastName = "Doe";
    age = 30;
    isbangladesh = true;
    getFullName() {
        return this.firstName + " " + this.lastName;
    }
}

let person1 = new Person();
let result = document.getElementById("desc").innerHTML = person1.getFullName() + " is " + person1.age + " years old and he is from Bangladesh: " + person1.isbangladesh;
*/

/* //class with constructor
class Person {
    constructor(firstName, lastName, age, isbangladesh) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.isbangladesh = isbangladesh;
    }
}
let person1 = new Person("John", "Doe", 30, true);
let result = document.getElementById("desc").innerHTML = person1.firstName + " " + person1.lastName + " is " + person1.age + " years old and he is from Bangladesh: " + person1.isbangladesh;
*/

/* //create a class using class expression
const Person = class {
    constructor(firstName, lastName, age, isbangladesh) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.isbangladesh = isbangladesh;
    }
};
let person1 = new Person("John", "Doe", 30, true);
let result = document.getElementById("desc").innerHTML =`<b>${person1.firstName} ${person1.lastName}</b> is <b>${person1.age}</b> years old and he is from Bangladesh: <b>${person1.isbangladesh}</b>`;
*/

/* //student data using class most used in real life
class Student {

    constructor(name, age, department) {
        this.name = name;
        this.age = age;
        this.department = department;
    }

    showInfo() {
        return `
            Name: ${this.name} <br>
            Age: ${this.age} <br>
            Department: ${this.department}
        `;
    }

}
const student1 = new Student("Rahim", 22, "CSE");
// console.log(student1.showInfo());
document.getElementById("desc").innerHTML = student1.showInfo();
*/

/* //class also can calculate data initially decleard and then can be changed by constructor
class Calculator {
    num1 = 20;
    num2 = 5;

    constructor(a, b) {
        this.num1 = a;
        this.num2 = b;
    }

    add() {
        return this.num1 + this.num2;
    }
    subtract() {
        return this.num1 - this.num2;
    }
    multiply() {
        return this.num1 * this.num2;
    }
    divide() {
        return this.num1 / this.num2;
    }
}
let calc = new Calculator(10, 10);
console.log("Addition: " + calc.add());
console.log("Subtraction: " + calc.subtract());
console.log("Multiplication: " + calc.multiply());
console.log("Division: " + Math.floor(calc.divide()));
*/

/*
//getters and setters in class
class Product {
    set productName(name) {
        this.name = name;
    }
    get getName() {
        return this.name;
    }
}

let product1 = new Product();
product1.productName = "Laptop";
console.log(product1.getName);
*/

/*//sttic method in class (when use static method then we can use this property, creating any object instance for class is not necessary) its use for utility function like validation, calculation etc.
class MathUtils {
    static add(a, b) {
        return a + b;
    }
    divide(a, b) {
        return a / b;
    }
}

console.log(MathUtils.add(5, 10));
*/


/*
//inheritance in class
class Parent {
    asset = ['house', 'car', 'land', 'Factory'];
    name = "Hasan";

    num1 = 100;
    num2 = 2;

    division() {
        return this.num1 / this.num2;
    }
}

class Child extends Parent {} //child class can access all the properties and methods of parent class

let child1 = new Child();
// child1.division();
console.log(child1.asset[2]);
// console.log(child1.name);
console.log(child1.division());
*/

/*
// Inheritance Constructor with satic properties
class Parson {
    constructor(fName, lName, age) {
        this.fName = fName;
        this.lName = lName;
        this.age = age;
    }

    static getFullname() {
        return `${this.fName} ${this.lName}`;
    }
}

// let person1 = new Parson("John", "Doe", 30);
// console.log(Parson.getFullname());

class Student extends Parson {   
    constructor(m, s, g, e){
        super()
        this.classRoll = e;
        console.log(`My name is ${m} ${s} and I am ${g} years old and my class roll is ${e}`);
    }
}
let student1 = new Student("Rahim", "Uddin", 22, 1);

class Teacher extends Parson {   
    constructor(m, s, g, e){
        super()
        console.log(`My name is ${m} ${s} and I am ${g} years old and I am ${e} Teacher`);
    }
}
let teacher1 = new Teacher("Abul", "Sir", 52, "Math");
*/

/*
//Inheritance Static Properties
class Person {
    static fName = "John";
    static lName = "Doe";
    static age = 30;

    static getFullname() {
        return `${this.fName} ${this.lName} and age is ${this.age}`;
    }
}
let person1 = new Person();
console.log(Person.getFullname());
*/
/*
//inheritance Overriding parent & child class both have same method name but different implementation
class Father{
    addnumber(){
        let a = 10;
        let b = 20;
        console.log ("Ans: Comes from Father = " + (a + b));
    }
}

let father1 = new Father();
father1.addnumber();

class Son extends Father{
    addnumber(){
        let a = 10;
        let b = 20;
        let c = 5;
        console.log ("Ans: Comes from Son = " + ((a + b) / c));
    }
}

let son1 = new Son();
son1.addnumber();
*/
/*
//Encapsulation Using Closures
function createCounter() {
    let count = 0; // private variable
    return {
        increment: function () {
            count++;
        },
        decrement: function () {
            count--;
        },
        getCount: function () {
            return count;
        }
    }
}

let counter = createCounter();
counter.increment();
counter.increment();
counter.increment();
counter.decrement();
counter.decrement();
console.log("Count: " + counter.getCount()); // 2
*/
/*
//Encapsulation Using Constructor Functions
function createCounter() {
    let count = 0; // private variable

    return {
        increment: () => {
            count++;
        },
        decrement: () => {
            count--;
        },
        getCount: () => {
            return "Count: " +count;
        }
    };
}

let counter = new createCounter();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.decrement();
counter.decrement();

console.log(counter.getCount()); // 2
*/
/*
//Encapsulation Using ES6 Classes
class BankAccount {
    #balance = 0; // private field
    
    deposit() {
        this.#balance += 1000;
    }
    withdraw() {
        if (this.#balance >= 500) {
            this.#balance -= 500;
        } else {
            console.log("Insufficient balance");
        }   
    }
    mainBalance() {
        return this.#balance;
    }
}

let BankAccount1 = new BankAccount();
BankAccount1.deposit();
BankAccount1.deposit();
BankAccount1.withdraw();
BankAccount1.withdraw();
BankAccount1.deposit();
BankAccount1.deposit();
console.log("Current Balance: " + BankAccount1.mainBalance());
*/
class Employee {

    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    showInfo() {
        console.log(`Name: ${this.name}`);
        console.log(`Salary: ${this.salary}`);
    }

}

class Manager extends Employee {

    constructor(name, salary, department) {
        super(name, salary);
        this.department = department;
    }

    showInfo() {

        super.showInfo();

        console.log(`Department: ${this.department}`);

    }

}
const manager1 = new Manager("Rahim", 50000, "IT");
const employee1 = new Employee("Karim", 40000);

manager1.showInfo();
employee1.showInfo();
