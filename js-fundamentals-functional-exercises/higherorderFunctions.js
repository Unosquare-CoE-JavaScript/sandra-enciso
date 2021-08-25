/********* HIGHER-ORDER FUNCTIONS AND CALLBACKS ********/

/////ARROW FUNCTION

///1. takes a function as an input (argument)

//This example is to add an eventListener to an HTML element
element.addEventListener("change",() => { //Arrow function with no parameters ()

  console.log("Our evidence is updated");

});

//2. Returns a function as the output

/*
This is a high order function
newClue recives a parameter and the returns execute a function which recive other parameter
*/
const newClue = (name) => {
  const length = name.length;

  return (weapon) => {
    let clue = length + weapon.length;
    return !!(clue % 1);
  };
};

/****** CALLBACKS ******/
const ifElse = (condition, isTrue, isFalse) => { //Depending the condition value, executes the callback function recived as parameter
  return condition ? isTrue() : isFalse();
};

ifElse(true,
 () => { console.log(true);},
 () => { console.log(false);}
);

////////////////Is the same as above
const ifElse = (condition, isTrue, isFalse) => {
  return condition ? isTrue() : isFalse();
};


const logTrue = () => {console.log(true);};
const logFalse = () => {console.log(false);};

ifElse(true, logTrue, logFalse);

////////PASSING ARGUMENTS **HIGH ORDER FUNCTION

var increment = function(n){ return n + 1; };

var square = function(n){ return n * n; };

var doMathSoIDontHaveTo = function(n, func){ return func(n); }; //Here executes a function an return the result of another function

doMathSoIDontHaveTo(5, square); //25 here it passes a function as an argument

doMathSoIDontHaveTo(4, increment); 
