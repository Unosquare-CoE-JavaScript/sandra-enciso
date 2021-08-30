/*
An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.
Contains two major parts:

The first is the anonymous function with lexical scope enclosed within the Grouping Operator (). 
This prevents accessing variables within the IIFE idiom as well as polluting the global scope.
The second part creates the immediately invoked function expression () through which the JavaScript engine will directly interpret the function.

*/
var teacher = "kyle"; //Global Scope

(function anotherTeacher(){
  var teacher = "Suzy"; //Function scope (IIFE)
  console.log(teacher); // 'Suzy'
})(); //<- Here executes the function

console.log(teacher); // 'Kyle'

//*************************

var teacher = "Kyle";

//this IIFE is anonymous
(function(teacher){
  console.log(teacher);
})("Suzy"); // <- Here executes the function 

console.log(teacher); // 'Kyle'

//************************
/*Try Catch Statement*/
var teacher;
try{
  teacher = fetchTeacher(1);
}catch(err){ //If the instructions above cannot be executed, then executes this
  teacher = "Kyle";  // now the 'teacher' variable stores "Kyle"
}

//************************

var teacher = (function getTeacher(){
  try {
    return fetchTeacher(1);
  }catch(err){
    return "Kyle";
  }
})(); // <- Here is executed

teacher; //"Kyle"