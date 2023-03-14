//ex1
let numbers = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 17) {
    console.log(numbers[i]);
  }
}

//ex2
let person = {
  name: "John",
  age: 25,
  grades: [90, 85, 95, 75, 80],
};

let sum = 0;
for (let i = 0; i < person.grades.length; i++) {
  sum += person.grades[i];
}

console.log("Sum of grades: " + sum);
console.log("First grade: " + person.grades[0]);
console.log("Last grade: " + person.grades[person.grades.length - 1]);
