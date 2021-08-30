/*
Encompasses: Scope Lexical, dynamic, function.
*/
/*Scope: Lexical*/
/*
A lexical scope in JavaScript means that a variable defined outside a function can be accessible inside another function defined after the variable declaration. 
But the opposite is not true; the variables defined inside a function will not be accessible outside that function.
*/
var teacher = "Kyle";

function otherClass(){
  var teacher = "Suzy"; //new var teacher, only exist inside the function otherClass()
  function ask(question){//question only exists inside ask function
    console.log(teacher,question);
  }  
  ask("Why?");
}

/*Scope Dynamic*/
/*
In dynamic scoping, you search in the local function first, then you search in the function that called the local function,
then you search in the function that called that function, and so on, up the call-stack.
*/
var teacher = "Kyle";

function ask(question){
  console.log(teacher, question); //teacher is a global variable, it returns 'Kyle'
}

function otherClass(){
  var teacher = "Suzy"; //This only exist inside otherClass function
  ask("Why?");
}

otherClass(); // 'kyle' 'Why?'

/*Function Scoping*/
/*
JavaScript has function scope: Each function creates a new scope.
Variables defined inside a function are not accessible (visible) from outside the function.
Variables declared with var, let and const are quite similar when declared inside a function.
*/

var teacher = "Kyle";

var teacher = "Suzy"; // teacher are inside the global scope, so here is reassigned 
console.log(teacher); // 'Suzy'

console.log(teacher); // 'Suzy'

//*******************************

var teacher = "Kyle";

function anotherTeacher(){ ///Function scoping
  var teacher = "Suzy"; // var teacher where is equal to 'Suzy' only exists here
  console.log(teacher); // 'Suzy'
}

anotherTeacher();
//is the same
(anotherTeacher)();// 'Suzy'

console.log(teacher); // 'Kyle'

//*
