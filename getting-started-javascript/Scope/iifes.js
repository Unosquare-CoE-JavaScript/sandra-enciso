/*

Undefined is a variable which is declared but don't have any value
undeclared a variable which is not declared

Function expressions 
Is a function which is assigned as a value somewhere


*/
//Named Function expression
var clickHandler = function(){
  
};

//Arrow functions


/*
//IIFF
Inmediately Invoked Function Expression
*/

var teacher = "Kyle";
(
  function anotherTeacher(){
    var teacher = "Susy";
    console.log(teacher); //Susy
  }
)();

console.log(teacher); //Kyle