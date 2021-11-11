// Q1. make a string out of an array
{
  const fruits = ["apple", "banana", "orange"];
  console.log(fruits.join());
}

// Q2. make an array out of a string
{
  const fruits = "🍎, 🥝, 🍌, 🍒";
  console.log(fruits.split(",", 2));
  console.log(fruits);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  console.log(array.reverse());
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  const result = array.slice(2, 5);
  console.log(result);
  console.log(array); // 기존 배열을 수정x, 기존 배열 수정하고싶다면 splice 사용
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student("A", 29, true, 45),
  new Student("B", 28, false, 80),
  new Student("C", 30, true, 90),
  new Student("D", 40, false, 66),
  new Student("E", 18, true, 88),
];

// Q5. find a student with the score 90
{
  const result = students.find((student) => student.score === 90); // find : 첫번째로 true를 리턴하는 값을 찾으면 거기서 stop!
  console.log(result);
}

// Q6. make an array of enrolled students
{
  const user = students.filter((student) => student.enrolled);
  console.log(user);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  const score = students.map((student) => student.score);
  console.log(score);
}

// Q8. check if there is a student with the score lower than 50
{
  const check = students.some((student) => student.score < 50); // 하나라도 만족한다면 some
  console.log(check);

  const check2 = students.every((student) => student.score < 50); // 모든 조건 만족해야한다면 every
  console.log(check2); // false
}

// Q9. compute students' average score
{
  const result = students.reduce((prev, curr) => prev + curr.score, 0);
  console.log(result / students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  const result = students
    .map((student) => student.score)
    .filter((score) => score >= 50)
    .join(", ");
  console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  const result = students
    .map((student) => student.score)
    .sort((a, b) => a - b)
    .join(", ");
  console.log(result);
}
