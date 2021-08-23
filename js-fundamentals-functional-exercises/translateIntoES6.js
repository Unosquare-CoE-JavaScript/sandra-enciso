/********* HIGHER-ORDER FUNCTIONS AND CALLBACKS ********/

/****** TRANSLATE INTO ES6 ******/

var increment = function(n){ return n + 1; };

var square = function(n){ return n*n; };

var doMathSoIDontHaveTo = function(n, func){ return func(n); };

doMathSoIDontHaveTo(5, square);

doMathSoIDontHaveTo(4, increment);

///////////////// ES6 BELOW

const increment2 = n => n+1;
const square2 = n => n*n;

const doMathSoIDontHaveTo2 = (n, func) => func(n);

doMathSoIDontHaveTo2(5, square);

doMathSoIDontHaveTo2(4, increment);
