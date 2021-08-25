/********* HIGHER-ORDER FUNCTIONS AND CALLBACKS ********/

/////TRANSLATE INTO ES6
/*
doMathSoIDontHaveTo is a higher order function, is assigned to a variable, use curry and returns a function
In this example, the code is modified to ES6
*/

var increment = function(n){ return n + 1; };

var square = function(n){ return n*n; };

var doMathSoIDontHaveTo = function(n, func){ return func(n); };

doMathSoIDontHaveTo(5, square); //This send a function as parameter and returns a function

doMathSoIDontHaveTo(4, increment);

///////////////// ES6 BELOW

/* This works as the same as the code above, but this is ES6 syntax*/

const increment2 = n => n+1;
const square2 = n => n*n;

const doMathSoIDontHaveTo2 = (n, func) => func(n);

doMathSoIDontHaveTo2(5, square);

doMathSoIDontHaveTo2(4, increment);
