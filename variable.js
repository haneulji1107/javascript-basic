// 1. use strict
// 성능 개선, for Vanilla JS

"use strict";

// 2. Variable
// let (added in ES6)
// Mutable data type

let globalName = "Global Name";

{
  let name = "Haneul";
  console.log(name); // Haneul
  name = "Sky";
  console.log(name); // Sky
  console.log(globalName); // Global Name
}

console.log(name); // empty
console.log(globalName); // Global Name

// var
// var hoisting : 선언 위치에 상관없이 제일 상단으로 끌어올리는 것
// has no blcok scope

{
  console.log(age); // undefined
  age = 5;
  console.log(age); // 5
  var age;
}

console.log(age); // 5, block scope를 무시할 수 있기때문에 값이 출력된다.

// constant
// Mutable data type
// thread safety, security, reduce human mistakes 등 여러가지 이유로 constant 사용 권장

// constant로 선언된 data type 중에서..
// Immutable data types : primitive types, forzen objects (i.e. object.freeze())
// Mutable data types : all objects by defalut are mutable in JS

const daysInWeek = 7;

// 3. Variable types
// primitive : single item, string, number, boolean, null, undefined, symbol
// object : box container
// function : first-class function

const count = 17; // integer
const height = 180.8; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${height}, type: ${typeof height}`);

// number - special numeric values : infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = "not a number" / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt
const bitInt = 12312312312421412412412412412412412412132241241241241241241242n; // over (-2**53) ~ 2**53
console.log(`value: ${bitInt}, type: ${typeof bitInt}`);

// string
const bob = "bob";
const helloBob = `Hello ${bob}`; // template literals(string)

// boolean
// false : 0, null, undefiend, NaN, ""
// true : any other value
const test = 3 < 1; // false

// null
const noting = null;

// undefined
let x;

// symbol : create unique identifiers for objects
const symbol1 = Symbol("id");
const symbol2 = Symbol("id");
console.log(symbol1 === symbol2); // false
const gSymbol1 = Symbol.for("id");
const gSymbol2 = Symbol.for("id");
console.log(gSymbol1 === gSymbol2); // true
console.log(symbol1.description); // description 이용하여 string으로 변환

// object : real-life object, data structure
const haneul = { name: "Haneul", age: 27 };
console.log(haneul.name); // Haneul

// 4. Dynamic typing : dynamically typed language
// JS는 런타임 환경에서 타입이 결정되어지기 때문에 error가 발생할 수도 있다 => TypeScript 등장!
let text = "hello";
console.log(text.charAt(0)); // h
text = 1;
text = "6" + 5; // 65 string, 하지만 * - / 연산식에서는 숫자로 인식해서 값 출력
text = "8" / "2"; // 4
console.log(text.charAt(0)); // error
