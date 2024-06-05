const arr = [1, 2, 3, 4, 5, 6, 10, 45, 78];
let val;

// get array length
val = arr.length;

// check if it is array or not
val = Array.isArray[arr];
// val = arr[2];

// replace array to array of element
// val = arr[3] = 100;

// find the indexof
val = arr.indexOf(11111); //there is no element of array is return -1
// console.log(val);

// Imutable we con't chnage the array

//Muteting array changle array

// push add of the firts element to the array
arr.push(1000);
console.log(arr);
// unshift add of the last element to the array
arr.unshift(5555);
console.log(arr);

// Remove in the array of last and fisrt elemnt

// Remove in the array of last  elemnt ------------->pop
arr.pop(1000);
console.log(arr);

// Remove in the array of last  elemnt-------------->shift
arr.shift(5555);
console.log(arr);

// splice to use add and remove
const fruits = ["Dragen", "kivi", "avakado", "Gova", "pomo"];

// console.log(fruits);

// to remove statement
// const valfriuts = fruits.splice(3, 2);
// console.log(valfriuts);

// console.log(fruits);

//to add statement and replace
const valfriuts = fruits.splice(2, 0, "Grape"); //to add indexof 2 value
const valfriuts1 = fruits.splice(2, 1, "Grape"); //to replace indexOf 2value
console.log(valfriuts);
console.log(fruits);
