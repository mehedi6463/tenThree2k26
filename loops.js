/* //basic for loop
for (let i = 0; i <= 5; i++) {
    console.log(`Iteration ${i}`);
};*/

/* //for in loop (its use for key or index of object and array)**
const fruits = ['apple', 'banana', 'orange'];
for(let index in fruits){
    console.log(index);
};*/

/* //for of loop (its use for value of object and array)**
const fruits = ['apple', 'banana', 'orange'];
for(let fruit of fruits){
    console.log(fruit);
};*/


/* //for loop with break statement
for (let i = 0; i <= 5; i++) {
    if (i === 3) {
        break;
    }
    console.log(`Iteration ${i}`);
}
*/

//for loop with continue statement
/*for (let j = 0; j < 5; j++) {
    if (j !== 3) {
        continue;
    }
    console.log(`Iteration ${j}`);
}*/

/* //loop break and continue with label
for (let i = 0; i < 5; i++) {
    if (i===3){
        break;
    }
    console.log(`Iteration ${i}`);
};

//continue statement skip the value of i=2 and continue the loop
for (let i = 0; i < 5; i++) {
    if (i===2){
        continue;
    }
    console.log(`Iteration2 ${i}`);
};*/

/*//while loop
let i = 0;
while(i < 10){
    console.log(`Iteration ${i}`);
    i++;
};
*/

/* //do while loop
let i = 1;
do {
  console.log(`loop ${i}`);
  i++;
} while (i <= 5);

//example of do while loop with prompt
let number;
do {
  number = prompt("Enter a number greater than 0:");
} while (number <= 0){
    if (number > 0 && number !== null) {
        window.alert(`You entered: ${number}`);
    };
};
*/