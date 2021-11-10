// Function
// - fundamental building block in the program
// - subprogram can be used miltiple times
// - performs a task or calculates a value

// 1. Function declaration
// function name(parm1, parm2...) {body... return;}
// one function === one thing
// naming: doSomething, comman, verb
// e.g. createCardAndPoint => createCard, createPoint
// function is object in JS
function printHello() {
  console.log("Hello!");
}
printHello();

function printBye(message) {
  console.log(message);
}

printBye("Bye!");
printBye(123); // 숫자를 전달해줘도 값이 출력된다. 나중에 TypeScript를 배워야하는 이유!

// 2. Parameters
// premitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj) {
  obj.name = "Coder";
}
const myName = { name: "Haneul" };
changeName(myName);
console.log(myName); // {name: "Coder"}

// 3. Default parameters (added in ES6)
function showMessage(message, from = "unknown") {
  console.log(`${message} by ${from}`);
}

showMessage("Hello!"); // Hello! by unknown

// 4. Rest parameters (added in ES6)
function printAll(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }

  for (const arg of args) {
    console.log(arg);
  }

  args.forEach((arg) => console.log(arg));
}

printAll("Dream", "Coding", "Haneul");

// 5. Local Scope
let globalMessage = "global"; // global variable
function printMessage() {
  let message = "hello";
  console.log(message); // local variable
  console.log(globalMessage); // global 출력
  function printAnohter() {
    console.log(message); // hello 출력
    let childMessage = "child message";
  }
  // console.log(childMessage); // error
}

printMessage();

// 6. Return a value
// 모든 함수들은 끝에 return undefined; 생략되어있음
function sum(a, b) {
  return a + b;
}

const result = sum(2, 4);
console.log(result); // 6

// 7. Early return, early exit
// bad
function upgradeUser(user) {
  if (user.point > 10) {
    // long upgrade logic...
  }
}

// good
function upgradeUser(user) {
  if (user.point < 10) {
    return;
  }
  // long upgrade logic...
}

// First-class function
// functions are treated like any other value
// can be assigned as a value to variable
// can be passed as a argument to other functions.
// can be returned by other function

// 1. Function expression
// function declaration : 정의 내리기 전에 호출이 가능하다. (hoisting)
// function expression : 할당된 다음에 호출이 가능하다.
// print(); => error
const print = function () {
  // anonymous function
  console.log("print");
};
print();
const printAgain = print;
printAgain();

// 2. Callback function using function expression : 조건이 맞으면 function을 불러라!
function randomQuiz(answer, printYes, printNo) {
  if (answer === "love you") {
    printYes();
  } else {
    printNo();
  }
}

// anonymous function
const printYes = function () {
  console.log("Yes!");
};

// named function
// better dubugging in debuggers's stack traces
// recursions 반복계산
const printNo = function print() {
  console.log("No!");
};

randomQuiz("love you", printYes, printNo);
randomQuiz("hate you", printYes, printNo);

// Arrow function
// always anonymous function
// const simplePrint = function () {
//   console.log("simple print");
// };

const simplePrint = () => console.log("simple print");
const add = (a, b) => a + b;
const simpleMinus = (a, b) => {
  // do something more...
  return a - b;
};

// IIFE : Immediately Invoked Function Expression
(function hello() {
  console.log("IIFE");
})();

// Quiz!
// function calculate(command, a, b)
// command: (add, substract, divide, multiply, remainder)

const calculator = (command, a, b) => {
  switch (command) {
    case "add":
      return a + b;
    case "substract":
      return a - b;
    case "divide":
      return a / b;
    case "multiply":
      return a * b;
    case "remainder":
      return a ** b;
    default:
      throw Error("unknown command");
  }
};

console.log(calculator("substract", 2, 5));
