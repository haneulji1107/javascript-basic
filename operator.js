// 1. String concatenation
console.log("my" + " cat");
console.log("1" + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);

// 2. Numeric operators
console.log(1 + 1);
console.log(1 - 1);
console.log(1 / 1);
console.log(1 * 1);
console.log(1 ** 1);

// 3. Increment and Decrement operators
let counter = 2;

const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter
// counter = 3, preIncrement = 3

const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
// counter = 4, postIncrement = 3;

// 4. Assignmnet operators
let x = 3;
let y = 4;
x += y; // x = x + y;
x -= y;
x *= y;
x /= y;

// 5. Comparison operators
console.log(1 < 2);
console.log(1 <= 3);
console.log(1 > 3);
console.log(1 >= 3);

// 6. Logical operator : || (or), && (and), ! (not)
// 무거운 함수나 표현식은 제일 뒤로
const value1 = false;
const value2 = 4 < 2;

// || (or) : finds the first truthy value
console.log(`or: ${value1 || value2 || check()} `); // 다 true 나와야 true

// && (and) : finds the first falsy value
console.log(`and: ${value1 && value2 && check()} `); // 하나라도 false 나오면 false
// often used to compress long if-statement
// nullableObject && nullableObject.something

function check() {
  for (let i = 0; i < 10; i++) {
    // Wasting time
    console.log("Yo!");
  }

  return true;
}

// ! (not)
console.log(!value1); // true

// 7. Equality
const stringFive = "5";
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive); // true
console.log(stringFive != numberFive); // false

// === strict equality, no type conversion
console.log(stringFive === numberFive); // false
console.log(stringFive !== numberFive); // true

// object equality by reference
const sky1 = { name: "Sky" };
const sky2 = { name: "Sky" };
const sky3 = sky1;
console.log(sky1 == sky2); // false
console.log(sky1 === sky2); // false
console.log(sky3 === sky2); // true

// equality - Quiz
console.log(0 == false); // true
console.log(0 === false); // false
console.log("" == false); // true
console.log("" === false); // false
console.log(null == undefined); // true
console.log(null === undefined); // false

// 8. Conditional operators: if
// if, else if, else
const name = "haneul";
if (name === "haneul") {
  console.log("Welcome, Haneul");
} else if (name === "Ellie") {
  console.log("Welcome, Ellie");
} else {
  console.log("unknown");
}

// 9. Ternary operator ? :
// condition ? value1 : value2;
console.log(name === "haneul" ? "yes" : "no");

// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = "Chrome";
switch (browser) {
  case "IE":
    console.log("go away!");
    break;
  case "Chrome":
  case "Firefox":
    console.log("Welcome!");
    break;
  default:
    console.log("love you!");
    break;
}

// 11. Loops
// while loop : while the condition is trutly, body code is executed
let i = 3;
while (i > 0) {
  console.log(`while: ${i}`);
  i--;
} // 3 2 1 까지 출력하고 스탑!

// do while : body code is excuted first, then check the condition
do {
  console.log(`do while: ${i}`);
  i--;
} while (i > 0);

// for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
  console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i--) {
  // inline variable declaration
  console.log(`inline variable for: ${i}`);
}

// nested loops 되도록이면 피하자!
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(`i: ${i}, j: ${j}`);
  }
}

// break, continue
// Q1, iterate from 0 to 10 and print only even numbers (use continue)
for (let i = 0; i < 11; i++) {
  if (i % 2 !== 0) {
    continue;
  }
  console.log(i);
}

for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// Q2, iterate form 0 to 10 and print numbers until reaching 8 (use break)
for (let i = 0; i < 11; i++) {
  if (i > 8) {
    break;
  }
  console.log(i);
}
