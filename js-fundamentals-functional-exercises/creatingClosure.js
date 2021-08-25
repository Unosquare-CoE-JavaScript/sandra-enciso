/********* Advanced Scope: CLosure ********/

/////Closure Advanced Scope

/*
Closure gives you access to an outer function’s scope from an inner function.
In JavaScript, closures are created every time a function is created, at function creation time.
*/

/*
The example below demonstrates the closure.
The function alerter inside myAlert, modifies 'count' variable increment by 1 its value
and then, log the result to concat x variable to count variable
*/
const myAlert = () => {
    const x = "Help! I think I found a clue!";
    let count = 0;
    const alerter = () => {
      console.log(`${x} ${++count}`);
    };
    return alerter; 
  };
  
  const funcAlert = myAlert(); 
  const funcAlert2 = myAlert(); 
  funcAlert(); //Help! I think I found a clue! 1 ... How ++count, ++ is before the variable, this returns the new value of the variable
  funcAlert(); //Help! I think I found a clue! 2
  funcAlert2(); //Help! I think I found a clue! 1
  
