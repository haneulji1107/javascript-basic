"use strict";

// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ["π", "π"];
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[fruits.length - 1]); // find last index

// 3. Looping over an array
// print all fruits
// a. for
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// b. for..of
for (let value of fruits) {
  console.log(value);
}

// c. forEach
fruits.forEach((fruit) => console.log(fruit));

// 4. Addition, deletion, copy
// push: add an item to the end
fruits.push("π", "π");
console.log(fruits);

// pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

//unshift: add an item to the beginning
fruits.unshift("π", "π");
console.log(fruits);

// shift: remove an item from the beginning
fruits.shift();
fruits.shift();
console.log(fruits);

// note! shift, unshift are slower than push, pop
// shiftμ unshiftλ μμμλΆν° λ°μ΄ν°λ₯Ό μ§μ΄λ£κΈ° λλ¬Έμ μ μ²΄μ μΌλ‘ λͺ¨λ  dataκ° μμ§μ¬μΌν΄μ λλ¦¬λ€

// splice: remove an item by index position
fruits.push("π₯", "π", "π");
console.log(fruits);
fruits.splice(2, 2, "π");
console.log(fruits);

// combine two arrays
const fruits2 = ["π₯", "π"];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// indexOf: find the index
console.log(fruits.indexOf("π"));
console.log(fruits.indexOf("π«")); // -1

// includes
console.log(fruits.includes("π")); // true

// lastIndexOf
console.log(fruits);
fruits.push("π");
console.log(fruits.indexOf("π"));
console.log(fruits.lastIndexOf("π"));
