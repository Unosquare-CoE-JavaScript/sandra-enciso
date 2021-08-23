/********* HIGHER-ORDER FUNCTIONS AND CALLBACKS ********/

/****** PASSING ARGUMENTS ******/

//How do we pass arguments?
const ifElse = (condition, isTrue, isFalse, p) => {
  return condition ? isTrue(p) : isFalse(p);
};
//ifElse(true, fn1, fn2, 'HI');

///////HOW WAS THIS DONE PRE-ES6?
const ifElse2 = (condition, isTrue, isFalse, ...args) => {
  console.log(args) //['HI', 'BYE', 'HOLA']
  return condition ? isTrue(...args) : isFalse(...args);
  isTrue('HI', 'BYE', 'HOLA')/// this is the same -> isTrue(...args) 
};
//  ifElse(true, fn1, fn2, 'HI', 'BYE', 'HOLA');
 