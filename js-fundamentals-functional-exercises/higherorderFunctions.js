/********* HIGHER-ORDER FUNCTIONS AND CALLBACKS ********/

/****** ARROW FUNCTION ******/

///1. takes a function as an input (argument)

element.addEventListener("change",() => {

  console.log("Our evidence is updated");

});

//2. Returns a function as the output

const newClue = (name) => {
  const length = name.length;

  return (weapon) => {
    let clue = length + weapon.length;
    return !!(clue % 1);
  };

};

/****** CALLBACKS ******/
const ifElse = (condition, isTrue, isFalse) => {
  return condition ? isTrue() : isFalse();
};

ifElse(true,
 () => { console.log(true);},
 () => { console.log(false);}
);

////////////////
const ifElse = (condition, isTrue, isFalse) => {
  return condition ? isTrue() : isFalse();
};


const logTrue = () => {console.log(true);};
const logFalse = () => {console.log(false);};

ifElse(true, logTrue, logFalse);

////////PASSING ARGUMENTS

var increment = function(n){ return n + 1; };

var square = function(n){ return n * n; };

var doMathSoIDontHaveTo = function(n, func){ return func(n); };

doMathSoIDontHaveTo(5, square); //25

doMathSoIDontHaveTo(4, increment); 