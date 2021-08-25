/********* Advanced Scope: CLosure ********/

/////Closure Advanced Scope

/*
Closure gives you access to an outer function’s scope from an inner function.
In JavaScript, closures are created every time a function is created, at function creation time.
*/

//This function expression demonstrates the closure
const myAlert = () => {
  const x = "Help! I think I found a clue!";
  const alerter = () => {//this is a function expression created inside a function expression, but this uses a variable declared outside the function
    console.log(x); //this is closure
  };
  setTimeout(alerter, 1000);
  console.log('what happens first? this log or the aler?'); //This log is executed before the alerter()
};

myAlert();

////////////
