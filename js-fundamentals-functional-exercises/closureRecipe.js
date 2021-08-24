/********* Advanced Scope: CLosure ********/

/////Closure Advanced Scope

/*
This example uses the closure to access to a variable which is declared outside 
*/

const findSomeone = () => {

  const speak = () => {
    console.log(who);
  };

  let who = 'Why hello there, Prof Plum!';

  return speak; //this executes the function expression speak, which returns a log of a variable declared outside the function (closure)
};

const someoneSpeak = findSomeone()

someoneSpeak(); //Calling the function expression
///////////

/*
Here the function expression contains two functions inside.
the function creates an interval and contains two functions inside
stopwatch: returns the time elapsed since the call of the function
increase: increments the variable elapsed
*/
const makeTimer = () => {
  let elapsed = 0;

  const stopwatch = () => { return elapsed; };

  const increase = () => elapsed++;

  setInterval(increase, 1000);

  return stopwatch;

};

let timer = makeTimer();

timer();
