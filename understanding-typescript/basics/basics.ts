// add function takes two numbers and adds them, if showResult parameter is true, then prints the phrase that is passed as an argument and the result of the addition.
function add(n1: number, n2: number, showResult: boolean, phrase: string) { // This is how types are declared
  const result = n1 + n2;
  if (showResult) {
    console.log(
      phrase + result
    ); /* TS has a feature that is type inference, this means that TS does its best to understand which type you have in a certain variable or constant */
  } else {
    return n1 + n2;
  }
}

/* In JS and TS all the numbers are floats by default */
const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = "Result is: ";

/* if you dont initialize a variable, then is a good practice to tell typescript which value will eventually be stored in there*/
let n: number;

add(number1, number2, printResult, resultPhrase);
