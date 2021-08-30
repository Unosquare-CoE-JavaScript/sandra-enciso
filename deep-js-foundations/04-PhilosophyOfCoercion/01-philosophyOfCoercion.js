/*
*/
/*
You have to adopt a coding syle that makes value types plain and obvious.
A quality JS program embraces coercions, making sure the types involved in every operation are clear.
Thus, corner caes are safely managed.
*/
/*
JavaScript's dynamic typing is not a weakness, it's one of its strong qualities. Implicit: Abstracted
*/

//Coercion: implicit can be good (sometimes)

//Implicit isn't bad, is just abstracted. Hiding unnecessary details, re-focusing the reader and increasing clarity

var numStudents = 16;

console.log(
  `There are ${ String(numStudents) } students.`
); //There are 16 students.

//Implicit coercion
var numStudents = 16;
console.log(
  `There are ${ numStudents } students.`
)//There are 16 students.

//**********
var workshopEnrollment1 = 16;
var workshopEnrollment2 = workshop2Elem.value;

if(Number(workshopEnrollment1) < Number(workshopEnrollment2)){
  //..
}

//Implicit coercion
if(workshopEnrollment1 < workshopEnrollment2){
  //..
}
