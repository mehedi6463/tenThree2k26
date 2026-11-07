/*
//create a class without constructor
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

/*
//class with constructor
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

//create a class using class expression
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
