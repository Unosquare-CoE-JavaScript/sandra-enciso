/********* Advanced Scope: CLosure ********/

/****** Currying******/

const curry = (fn) => {
  return (arg) => {
    return(arg2) => {
      return fn(arg, arg2)
    }
  }
}

var abc = function(a,b){
  return [a,b];
};

var curried = curry(abc);

curried(1)(2); //[1,2]

/*** Composing **/

const compone = (arg, arg2) => {
  return (arg) => {
    const result = fn2(arg);
    return fn(result);
  }
}