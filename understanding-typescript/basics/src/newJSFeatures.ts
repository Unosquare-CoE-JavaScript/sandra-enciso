//const add = (a: number, b: number = 1) => a + b;

// const printOutput: (a: number | string) => void = (output) =>
//   console.log(output);

// const button = document.querySelector("button");

// if (button) {
//   button.addEventListener("click", (event) => console.log(event));
// }

// printOutput(add(5));

const hobbies = ["Sports", "Cooking"];
const activeHobbies = ["Hiking", ...hobbies];

activeHobbies.push(...hobbies);

const person = {
  firstName: "Max",
  age: 30,
};

const copiedPerson = { ...person };

// rest parameters
const add = (...numbers: number[]) => {
  //merge the parameters into an array
  return numbers.reduce((curResult, curValue) => curResult + curValue, 0);
};

const addedNumbers = add(5, 10, 2, 3.5);

console.log(addedNumbers);

// destructuring
const [hobby1, hobby2, ...remainingHobbies] = hobbies;

console.log(hobbies, hobby1, hobby2);

const { firstName: userName, age } = person;
