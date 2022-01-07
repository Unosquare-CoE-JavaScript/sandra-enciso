function add(n1: number, n2: number): number {
  // Adding : number after parameters, we said that the function will return a number
  return n1 + n2;
}

function printResult(num: number): void {
  // void means that this function doesn't have a return statement, you must to use void instead of undefined
  console.log("Result" + num);
}

/*function printResult(num: number): undefined{ // this is like the function above 
    console.log('Result: ' + num);
    result;
}*/

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  // we can recieve a callback
  // callback functions can return something, even if the argument on which they're passed does NOT expect a returned value. For example in this function the callback expect void
  const result = n1 + n2;
  cb(result);
}

printResult(add(5, 12));

//let combineValues: Function; // type function
let combineValues: (a: number, b: number) => number; //can store a function that recieves two number parameters and returns a number

combineValues = add;

console.log(combineValues(8, 8));

addAndHandle(10, 20, (result) => {
  console.log(result);
});
