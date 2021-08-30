/*
JavaScript Hoisting refers to the process whereby the compiler allocates memory for variable and function declarations prior to execution of the code. 
Declarations that are made using var are initialized with a default value of undefined. Declarations made using let and const are not initialized as part of hoisting.
*/
/*
Hoisting is not actually a real thing
*/
//Example: If you have this code
student;
teacher;
var student = "you";
var teacher = "kyle";

// JavaScript rearrange the code like this
var student;
var teacher;

student;
teacher;
student = "you";
teacher = "kyle";

//*******************************
//JavaScript doesn't hoist the function expressions
teacher(); // 'Kyle'
otherTeacher(); // TypeError: otherTeacher is not a function

function teacher(){
  return "Kyle";
}

var otherTeacher = function(){
  return "Suzy";
};

//Hoisting
function teacher(){
  return "Kyle";
}

var otherTeacher;

teacher(); // 'Kyle'
otherTeacher(); // TypeError: otherTeacher is not a function

otherTeacher = function(){
  return "Suzy";
};