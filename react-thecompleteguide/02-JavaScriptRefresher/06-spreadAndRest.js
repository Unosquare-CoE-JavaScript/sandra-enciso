/*  Spread And Rest Operators  */
/*
Spread operator (...)
Used to split up array elements or objects properties

Rest operator (...)
Used to merge a list of function arguments into an array
*/
//Spread operator
const numbers = [1, 2, 3];
let newNumbers = [...numbers, 4];

console.log(newNumbers); //[ 1, 2, 3, 4 ]

//Is not the same ...
newNumbers = [numbers, 4];

console.log(newNumbers); //[ [ 1, 2, 3 ], 4 ]

const person = {
  name: 'Max'
};

const newPerson = {
  ...person,
  age: 28
}

console.log(newPerson); //{ name: 'Max', age: 28 }

/// Rest operator

const filter = (...args) => { //merges the arguments into an array
  return args.filter(el => el === 1);
}

console.log(filter(1,2,3)); //[ 1 ]