/******** PROPERTY ACCES ***********/

/*Bracket Notation*/

var person = [];

person.name = "Mrs. White";

var who = person.name;

person[0] = "I was not in the Billiards room";

//person[plea] = "I would never!"; //ReferenceError: plea is not defined

var plea = "wouldShe";
person[plea] = "I would never!"; //The access is using a String. This is a prop of array

//console.log(person) //[ 'I was not in the Billiards room', name: 'Mrs. White', wouldShe: 'I would never!' ]
