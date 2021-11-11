// 1. Object to JSON
// stringify(obj)

let json = true;
console.log(JSON.stringify(true));

json = JSON.stringify(["banana", "apple"]);
console.log(json);

const rabbit = {
  name: "robi",
  color: "white",
  size: null,
  birthDate: new Date(),
  jump: () => {
    // 함수는 object 안에있는 data가 아니기때문에 출력 안됨
    console.log(`${name} can jump!`);
  },
};

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ["name", "color"]);
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === "name" ? "Haneul" : value;
});
console.log(json);

// 2. JSON to object
// parse(json)

json = JSON.stringify(rabbit);
console.log(json);
const obj = JSON.parse(json, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === "birthDate" ? new Date(value) : value;
});

console.log(obj);
rabbit.jump();
// obj.jump(); // error! 함수는 못 전달해주기 때문이다

console.log(obj.birthDate.getDate());
