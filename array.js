"use strict";

// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ["🍎", "🍌"];
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
fruits.push("🍉", "🍇");
console.log(fruits);

// pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

//unshift: add an item to the beginning
fruits.unshift("🍉", "🍇");
console.log(fruits);

// shift: remove an item from the beginning
fruits.shift();
fruits.shift();
console.log(fruits);

// note! shift, unshift are slower than push, pop
// shift와 unshift는 앞에서부터 데이터를 집어넣기 때문에 전체적으로 모든 data가 움직여야해서 느리다

// splice: remove an item by index position
fruits.push("🥝", "🍅", "🍇");
console.log(fruits);
fruits.splice(2, 2, "🍓");
console.log(fruits);

// combine two arrays
const fruits2 = ["🥑", "🍑"];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// indexOf: find the index
console.log(fruits.indexOf("🍌"));
console.log(fruits.indexOf("🫐")); // -1

// includes
console.log(fruits.includes("🍇")); // true

// lastIndexOf
console.log(fruits);
fruits.push("🍎");
console.log(fruits.indexOf("🍎"));
console.log(fruits.lastIndexOf("🍎"));
