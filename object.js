/*
//object literal helper
let person = {
    name: 'John',
    age: 30,
    greet: function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
};

person.greet();
*/
/*
//By creating instance of Object
let description = document.getElementById('description');
let person2 = new Object();
person2.name = 'Mehedi';
person2.age = 30;
person2.greet = function() {
    description.textContent = `Hello, my name is ${this.name} and I am ${this.age} years old.`;
};
person2.greet();
console.log(person2.name); // Output: Mehedi 
*/

//By using an Object constructor
/*
function person() {
    this.name = "mehedi";
    this.age = 30;
    this.greet = function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    };
}

let personInstance = new person();
console.log(personInstance.name); // Output: mehedi
*/

//By using an Object.constructor method with arrow functionand dynamic values
function person(name, age, greet) {
    this.name = name;
    this.age = age;
    this.greet = ()=>{
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    };

}

let personInstance = new person("mehedi", 30);
// personInstance.greet();
console.log(personInstance.name); // Output: mehedi