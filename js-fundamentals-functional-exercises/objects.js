/******** PROPERTY ACCES ***********/

/*Assignments with dots*/
var person = {};
person.name = "Mrs. White";

/*var person = {
    "name": "Mrs. White"
};*/

var who = person.name; // "Mrs. White"
who; //

person.name = "Mr. White";
who; // Mrs. White. This is referenced by value, not by pointer

who.story; //undefined
