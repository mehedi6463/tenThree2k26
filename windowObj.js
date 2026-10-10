/* //Window properties and methods
// console.log(innerHeight);
// console.log(window.innerWidth);
// console.log(window.outerWidth);
// console.log(window.outerHeight);
// console.log(window.scrollX);
// console.log(window.scrollY);
*/
/*
const widthText = document.getElementById("width");

// Property read
widthText.textContent = window.innerWidth;

// Method call
topBtn.addEventListener("click", () => {
  document.getElementById(`height`).textContent = window.innerHeight;
});
*/

//Window methods
/*let myAlert = alert("Welcome to the website!");

let myName = prompt("Please enter your name: ");
let myAge = prompt("Please enter your age: ");

if (myName === null && myAge === null || myName === "" && myAge === "") {
    alert("Reload page and enter your name & age First.!");
}else{
    window.confirm(`Hello ${myName}, you are ${myAge} years old. Is this correct?`);
};
*/
/*//alert, prompt, confirm
alert("Welcome to the website!");

let myName = prompt("Please enter your name:");
let myAge = prompt("Please enter your age:");

// 1. First check: Is input null?
if (myName === null || myAge === null) {
    alert("You cancelled the input. Please reload the page.");
}

// 2. Second check: Is age a valid number?
else if (myAge.trim() === "" || isNaN(Number(myAge))) {
    alert("Please enter a valid age!");
}

// 3. Check empty name
else if (myName.trim() === "") {
    alert("Please enter your name!");
}

// 4. Confirm information
else {
    let isCorrect = confirm(
        `Hello ${myName}, you are ${myAge} years old. Is this correct?`
    );

    if (isCorrect) {
        alert("Your information is confirmed!");
        console.log("Name:", myName);
        console.log("Age:", Number(myAge));
    } else {
        alert("Please reload and enter your information again.");
    }
};*/

//more robust validation with loops
alert("Welcome to the website!");

let myName;
let myAge;
let result;

// 1. Name validation
while (true) {
    myName = prompt("Please enter your name:");

    if (myName === null || myName.trim() === "") {
        alert("Please enter your name!");
    } else {
        break;
    }
}

// 2. Age validation
while (true) {
    myAge = prompt("Please enter your age:");

    if (myAge === null) {
        alert("Please enter your age!");
    } else if (myAge.trim() === "" || isNaN(Number(myAge))) {
        alert("Please enter a valid age!");
    } else if (Number(myAge) < 0) {
        alert("Age cannot be negative!");
    } else {
        myAge = Number(myAge);
        break;
    }
}

// 3. Confirmation
let isCorrect = confirm(
    `Hello ${myName}, you are ${myAge} years old. Is this correct?`
);

if (isCorrect) {
    alert("Your information is confirmed!");
    console.log("Name:", myName);
    console.log("Age:", myAge);
}else {
    alert("Please reload and enter your information again.");
}
