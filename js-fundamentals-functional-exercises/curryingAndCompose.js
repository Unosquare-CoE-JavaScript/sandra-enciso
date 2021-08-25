/********* Advanced Scope: CLosure ********/

/////Currying

/*
Currying is a transformation of functions that translates a function from callable as f(a, b, c) into callable as f(a)(b)(c)
*/
//This function returns a result of execute a function (fn parameter)
const curry = (fn) => {
  return (arg) => {
    return(arg2) => {
      return fn(arg, arg2)
    }
  }
}

//abc retuns an array which contains the parameters received
var abc = function(a,b){
  return [a,b];
};

//This is how curry works, here we store the curry function sending the parameter abc (function expression)
var curried = curry(abc);

curried(1)(2); //[1,2] Here this execute the curried function and sends the other remaining parameters

/*** Composing **/

const compone = (arg, arg2) => {
  return (arg) => {
    const result = fn2(arg);
    return fn(result);
  }
}
