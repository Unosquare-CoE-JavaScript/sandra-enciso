/* 
Encompasses: Scope, compilation, strict mode, nested scope, closure
*/
/*
JavaScript organizes scopes with functions and blocks.
Scope determines the accessibility (visibility) of variables.

JavaScript has 3 types os scope:
*Block scope
*Function scope
*Global scope

*/

var teacher = "Kyle";

function otherClass() { //This function creates a new variable 'teacher' totally different from the 'teacher' variable outiside
  //The new var teacher only exists here in the function scope
  var teacher = "Suzy";
  console.log("Welcome!");
}

function ask() {
  //The var question only exists here in the function scope
  var question = "Why?";
  console.log(question);
}

otherClass(); // Welcome!
ask(); //Why?

//**********************************************
/*How works the scope? Using this example:
First, the global scope search for the declarations. The global scope contains the var teacher and the otherClass function.
Then, creates a new scope for the otherClass function. Inside otherClass, we can access to the global scope, for example, reassigning the 'teacher' variable.
But, otherClass contains another variable 'topic' and that variable never was declared... So, otherClass() search at the global scope but doesn't exists...
Then, the global scope creates the new global variable 'topic'
*/

var teacher = "Kyle"; //Global variable

function otherClass(){
  teacher = "Suzy"; //Here the value of teacher changes to Suzy
  topic = "React";  //Creates a global scope varibale 'topic'
  console.log("Welcome!")
}

otherClass(); //Welcome!

teacher; // Suzy
topic; // React

//******************
/*
JavaScript's strict mode, introduced in ECMAScript 5, is a way to opt in to a restricted variant of JavaScript, 
thereby implicitly opting-out of "sloppy mode". Strict mode isn't just a subset: it intentionally has different semantics 
from normal code. Browsers not supporting strict mode will run strict mode code with different behavior from browsers that do, 
so don't rely on strict mode without feature-testing for support for the relevant aspects of strict mode. 
Strict mode code and non-strict mode code can coexist, so scripts can opt into strict mode incrementally.
*/
/*
Strict mode makes several changes to normal JavaScript semantics:

Eliminates some JavaScript silent errors by changing them to throw errors.
Fixes mistakes that make it difficult for JavaScript engines to perform optimizations: 
strict mode code can sometimes be made to run faster than identical code that's not strict mode.
Prohibits some syntax likely to be defined in future versions of ECMAScript.
*/
// use strict syntax
"use strict"
var teacher = "Kyle";

function otherClass(){
  teacher = "Suzy";
  topic = "React"; //Reference Error
  console.log("Welcome");
}

otherClass();

//******************
/*
Nested Scope - Closure
When you have nested functions the inner functions have access to the parents declared variables.
Inner functions contain the scope of parent functions even if the parent function has returned.
"even if the parent function has returned" - is called closure
*/
var teacher = "Kyle";

function otherClass(){
  var teacher = "Suzy";
  
  function ask(question) { //Nested scope
    console.log(teacher, question);
  }
  ask("Why"); //ask() exists in the function scope
}

otherClass(); // Suzy Why?
ask("???"); // ReferenceError

//ask() Doesn't exist in the global scope.
