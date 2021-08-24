/******** OBJECTS ***********/

///////1. PROPERTY ACCESS

/*
Objects are data structures that contain related properties of an entity.
Properties can be assigned and accessed using dot notation
*/

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

/*
Primitive values get pass by value. While non-primitive values get pass by reference. So we have these pointers in memory for objects.
And that means, if you pass something, or reference a primitive value, it gets its own spot in memory every single time.
While with functions and objects, you're often sharing the same place in memory. 
And so if you're changing that, it can affect things in unusual ways if you aren't planning for that.
*/
