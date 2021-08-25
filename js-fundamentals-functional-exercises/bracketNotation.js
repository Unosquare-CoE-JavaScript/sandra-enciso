/******** OBJECTS ***********/

///// Bracket Notation

/*
Bracket notation can also be used to create properties. Functionally, bracket notation is the same as dot notation.
However, the syntax looks entirely different. Both notations are interchangeable.
*/

var person = [];

person.name = "Mrs. White";

var who = person.name;

person[0] = "I was not in the Billiards room";

person[plea] = "I would never!"; //ReferenceError: plea is not defined

//New Property "wouldShe"
var plea = "wouldShe";
person[plea] = "I would never!"; //The access is using a String. This is a prop of array

console.log(person) //[ 'I was not in the Billiards room', name: 'Mrs. White', wouldShe: 'I would never!' ]
