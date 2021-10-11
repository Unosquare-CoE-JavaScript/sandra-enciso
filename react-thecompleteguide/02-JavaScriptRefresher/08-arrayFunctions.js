/*  Array functions  */

/*
The most important functions:
map()
find()
findIndex()
filter()
reduce()
concat()
slice()
splice()
*/

const numbers = [1, 2, 3];

const doubleNumArray = numbers.map((num) => { //map executes a callback on each element in the array and returns a new array
  return num * 2;
});

console.log(numbers); //[ 1, 2, 3 ]
console.log(doubleNumArray); //[ 2, 4, 6 ]