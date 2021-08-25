/********* Advanced Scope: CLosure ********/

/////Closure Advanced Scope

/*
Closure gives you access to an outer function’s scope from an inner function.
In JavaScript, closures are created every time a function is created, at function creation time.
*/
//This function expression demonstrates the closure
const newClue = (name) => {
  const length = name.length;

  return (weapon) => { //this is a function expression created inside a function expression, but this uses a variable declared outside the function
    let clue = length + weapon.length; //this is closure
    return !!(clue % 2);
  };

};

////////////// ----------------

function countClues() { //this function returns an object and can be used as properties
  var n = 0;
  return {
    count: function() { return ++n; },
    reset: function() { return n = 0; }
  };
};

//// ES6 Equivalent
const countClues2 = () => { //Function expression using arrow functions
  let n = 0;

  return {
    count: () => n++,
    reset: () => n = 0
  };
};
