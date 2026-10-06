/*
//array concatenation method 
// 1st argument: কোন data থেকে Array বানাবো
// 2nd argument: Array বানানোর সময় প্রতিটি value নিয়ে কী কাজ করবো

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [7, 8, 9];
const array4 = [10, 11, 12];
const concatArray = array1.concat(array2, array3, array4);
console.log(concatArray); // Output: [1, 2, 3, 4, 5, 6]
*/

//array from method : for ittarable string and make array from it
// const arrayFromString = Array.from('Hello');
// console.log(arrayFromString); // Output: ['H', 'e', 'l', 'l', 'o']


/*//array with two parameter: 1st parameter: কোন data থেকে Array বানাবো, 2nd parameter: Array বানানোর সময় প্রতিটি value নিয়ে কী কাজ করবো
const array5 = [1, 2, 3, 4, 5,  6];
let result = Array.from(array5, function(value) {
    return value * 2;
});

console.log(result);
*/

/* //array filter method: condition check and return condition true value
const array6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filteredArray = array6.filter(function(value) {
    return value % 2 != 0; // condition check for even number
});
console.log(`odd numbers: ${filteredArray}`);*/

/* //odd even number check without array filter method
const array7 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const oddNumbers = [];
const evenNumbers = [];

array7.forEach(function(value) {
    if (value % 2 != 0) {
        oddNumbers.push(value);
    } else {
        evenNumbers.push(value);
    }
});

console.log(`odd numbers: ${oddNumbers}`);
console.log(`even numbers: ${evenNumbers}`);
*/

//includes method: check value is present in array or not
let students = ["Rahim", "Karim", "Hasan", "Sakib"];

let search = "Hasan";

if (students.includes(search)) {
    document.write(`Student found! <br/>${search} is present in the array.`);
} else {
    document.write("Student not found!");
}