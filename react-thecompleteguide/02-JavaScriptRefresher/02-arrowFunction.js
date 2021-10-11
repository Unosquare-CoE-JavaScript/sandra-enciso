/* Arrow functions */

/*
Arrow functions are a different way of creating functions in JavaScript. 
Besides a shorter syntax, they offer advantages when it comes to keeping the scope of the this  keyword 
When you use *this* inside an arrow function, it will always keep its context and not change it on runtime
*/

function printMyName(name){
    console.log(name);
  }
  
  printMyName('Max'); //'Max'
  
  // Using function expression and arrow function
  
  const printMyName2 = (name) => {
    console.log(name);
  }
  
  printMyName2('Max'); //'Max'
  
  //Using one argument, you can ommit ()
  const printMyName3 = name => {
    console.log(name);
  }
  
  printMyName3('Max'); //'Max'
  
  //If not use argument
  const printMyName4 = () => {
    console.log('Max');
  }
  
  printMyName4(); //'Max'
  
  //For two or more arguments
  const printMyName5 = (name, age) => {
    console.log(name, age);
  }
  
  printMyName5('Max', 28); //'Max' 28
  
  //you can ommit {} if you only return a value
  const multiply = number => number * 2
  console.log(multiply(2)) //4