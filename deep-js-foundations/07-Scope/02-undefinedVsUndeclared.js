/*
Encompasses: Undeclared, Undefined
*/
/*
Undeclared − It occurs when a variable which hasn’t been declared using var, let or const is being tried to access.
Undefined − It occurs when a variable has been declared using var, let or const but isn’t given a value.
*/

function teacher () { /*..*/}

var myTeacher = function anotherTeacher () {
  console.log(anotherTeacher);
};

console.log(teacher); //ƒ teacher()
console.log(myTeacher); //ƒ anotherTeacher()
console.log(anotherTeacher); //ReferenceError: anotherTeacher is not defined