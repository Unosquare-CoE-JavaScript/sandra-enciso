/*  Destructuring  */
/*
Easily extract array elements or object properties and store them in variables
*/

const numbers = [1, 2, 3];
[num1, ,num3] = numbers;
console.log(num1, num3); //1 3

var {name} = {name: 'Max', age: 28}
console.log(name) //'Max'
console.log(age) //undefined