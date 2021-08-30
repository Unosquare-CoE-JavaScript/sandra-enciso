/*
Encompasses: Cases of coercion using string, number and boolean types, join(), .pop(), Boolean(), Number()
*/
/*
Coercion. Type conversion. The ECMAScript language implicitly performs automatic type conversion as needed.
To clarify the semantics of certain constructs it is useful to define a set of conversion abstract operations.
The conversion abstract operatios are polymorphic, they can accept a value of any ECMAScript language type.
But no other specification types are used with these operations.
*/

//Using coercion `${}`
var numStudents = 16;
console.log(
  `There are ${ numStudents } students.`
); //'There are 16 students.'

//String concatenation (number to string) is coercion
var msg1 = "There are ";
var numStudents = 16;
var msg2 = " students.";
console.log(msg1 + numStudents + msg2); //'There are 16 students.'

//String concatenation (number to string) is coercion
/*
The Addition Operator (+) performs string concatenation or numeric addition 
*/
var numStudents = 16;
console.log(
  `There are ${ numStudents+"" } students.`
); //'There are 16 students.'


/*
The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), 
separated by a specified separator string. If the array has only one item, then that item will be returned without using the separator.
*/
var numStudents = 16;
console.log(
  `There are ${ [numStudents].join("") } students.`
); //'There are 16 students.'


/*
The toString() method returns a string representing the specified object.
*/
var numStudents = 16;
console.log(
 `There are ${ numStudents.toString() } students.`
); //'There are 16 students.'

var numStudents = 16;
console.log(
 `There are ${ String(numStudents) } students.`
); //'There are 16 students.'

//****************
/*When trying to add a string to a number, the result is string*/
var studentsInputElem = {};
studentsInputElem.value = '16';

function addAStudent(numStudents){
  return numStudents + 1;
}
addAStudent(studentsInputElem.value); // '161'

//****************
/*
Number(value) converts a string or other value to the Number type. If the value can't be converted, it returns NaN
*/
///Using (+) before the string value, changes the type to Number
addAStudent(
  +studentsInputElem.value
); //17

addAStudent(
  Number(studentsInputElem.value)
); //17

//****************

function kickStudentOut(numStudents){
  return numStudents - 1;
}

kickStudentOut(
  studentsInputElem.value
); // 15

/* Recall Falsy vs Truthy ? */

if (studentsInputElem.value) { 
  numStudents =
    Number(studentsInputElem.value);
}

/*
The pop() method removes the last element from an array and returns that element. This method changes the length of the array
*/
while (newStudents.length) { //While the length of newStudents is greater than 0 (because 0 = false), it runs
  enrollStudent(newStudents.pop()); //.pop() modifies the length of the array
}

/*Double Negation:
!!true = ?
!true = false
!false = true
!!true = true
*/
if (!!studentsInputElem.value) {
  numStudents = Number(studentsInputElem.value);
}

while ( newStudents.length > 0 ) { //While the length of newStudents is greater than 0 (because 0 = false), it runs
  enrollStudent(newStudents.pop());
}

if (studentNameElem.value) {
  student.name = studentNameElem.value;
}

//******
/*
The Boolean() constructor is used to create Boolean objects.
*/
Boolean(""); //false 
Boolean(" \t\n"); //true

////

var workshop = getRegistration(student);

if(workshop) { //If contains any value (except 0, '0', '', [], false) it runs
  console.log(
    `Welcome ${student.name} to ${workshop.name}.`
  );
}

//*****

Boolean(undefined); //false
Boolean(null); //false
Boolean({}); //true