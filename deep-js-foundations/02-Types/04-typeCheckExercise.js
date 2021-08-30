/*** Check Exercise ***/

/* In this exercise, we re-assign Object.is() with a new function that compares some values to determinate 
if these values are the same value or not (===) */

if ( !Object.is || true) {
    Object.is = function ObjectIs(x,y){  //Here determines if the numbers are negative zero
      var xNegZero = isItNegZero(x);
      var yNegZero = isItNegZero(x);
      
      if(xNegZero || yNegZero){
        return xNegZero && yNegZero;
      }else if (isItNan(x) && isItNaN(y)) {
        return true;
      }else{
        return x === y;
      }
      
      // *******************
      
      function isItNegZero(v){ //Function to define if a number is negative zero
        return v == 0 && (1/v) == -Infinity; // if you divide a number by (+/-)zero, it will be (+/-)infinity
      }
      
      function isItNaN(v){
        return v !== v;
      }
      
    };
  }
  
  
  console.log(Object.is(42,42) === true);
  console.log(Object.is("foo","foo") === true);
  console.log(Object.is(false,false) === true);
  console.log(Object.is(null,null) === true);
  console.log(Object.is(undefined,undefined) === true);
  console.log(Object.is(NaN,NaN) === true);
  console.log(Object.is(-0,-0) === true);
  console.log(Object.is(0,0) === true);
  
  console.log(Object.is(-0,0) === false);
  console.log(Object.is(0,-0) === false);
  console.log(Object.is(0,NaN) === false);
  console.log(Object.is(NaN,0) === false);
  console.log(Object.is(42,"42") === false);
  console.log(Object.is("42",42) === false);
  console.log(Object.is("foo","bar") === false);
  console.log(Object.is(false,true) === false);
  console.log(Object.is(null,undefined) === false);
  console.log(Object.is(undefined,null) === false);
  