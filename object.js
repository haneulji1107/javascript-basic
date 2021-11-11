// Objects
// one of the JavaScript data types
// a collection of related data and/or functionality
// Nearly all objects in JavaScript are instance of Object

// 1. Literals and properies
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const haneul = { name: "Haneul", age: 27 };
print(haneul);

// with JavaScript magic (dynamically typed language)
// can add propertied later
haneul.hasJob = true;
console.log(haneul.hasJob); // true

// can delete properties later
delete haneul.hasJob;
console.log(haneul.hasJob); // undefined

// 2. Computed properties
// key should be always string
console.log(haneul.name);
console.log(haneul["name"]);
haneul["hasJob"] = true;
console.log(haneul.hasJob);

// 데이터를 실시간으로 받아올 때 사용, 어떤 key를 사용해야할지 모를때, 런타임에서 결정될 때
function printValue(obj, key) {
  console.log(obj.key); // undefined obj.key는 존재하지않기때문
  console.log(obj[key]); // Haneul
}

printValue(haneul, "name");

// 3. Property value shorthand
const person1 = { name: "Haneul", age: 2 };
const person2 = { name: "Ellie", age: 4 };
const person3 = person("Damien", 43);
console.log(person3);

// Class 나오기전에는 이렇게 사용
// key와 value가 동일하다면 생략해서 사용 가능
function person(name, age) {
  return {
    name,
    age,
  };
}

// 4. Constructor function
function Person(name, age) {
  // Person 대문자
  // this = {}
  this.name = name;
  this.age = age;
  // return this;
}

const person4 = new Person("Declan", 42); // new 키워드 사용
console.log(person4);

// 5. in operator: property existence check (key in obj)
console.log("name" in haneul); // true
console.log("tall" in haneul); // false

// 6. for..in vs for..of
// for (key in obj)
for (key in haneul) {
  console.log(key);
}

// for (value of iterable)
const array = [1, 3, 2, 3, 5];
for (value of array) {
  console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: "Haneul", age: 30 };
const user1 = user;
user1.name = "Declan";
console.log(user); // user.name = "Declan"으로 변경됨. user와 user1 둘 다 같은 ref를 가리키고 있기 때문

// old way
const user2 = {};
for (key in user) {
  user2[key] = user[key];
}
console.log(user2);
user2.name = "blake";
console.log(user2);
console.log(user); // user.name = "Declan"으로 변경되지 않는다. 단순 복사를 했기 때문이다

// new way
const user3 = Object.assign({}, user);
console.log(user3);

// another example
const box1 = { color: "red" };
const box2 = { color: "blue", size: "big" };
const box3 = Object.assign({}, box1, box2);
console.log(box3); // color: "blue" key가 중복된다면 마지막에 작성한 obj의 value를 출력한다
