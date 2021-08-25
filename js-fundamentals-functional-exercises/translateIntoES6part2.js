/********* HIGHER-ORDER FUNCTIONS AND CALLBACKS ********/

/////PASSING ARGUMENTS

/*
Spread syntax (...) allows an iterable such as an array expression or string 
to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, 
or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.
*/

//How do we pass arguments?
const ifElse = (condition, isTrue, isFalse, p) => {
  return condition ? isTrue(p) : isFalse(p); // conditional ternary operator
};
//ifElse(true, fn1, fn2, 'HI');

///////HOW WAS THIS DONE PRE-ES6?
const ifElse2 = (condition, isTrue, isFalse, ...args) => {
  console.log(args) //['HI', 'BYE', 'HOLA']
  return condition ? isTrue(...args) : isFalse(...args); //Here uses conditional ternary operator and returns the args using spread
  isTrue('HI', 'BYE', 'HOLA')/// this is the same -> isTrue(...args) 
};
//  ifElse(true, fn1, fn2, 'HI', 'BYE', 'HOLA');
 
