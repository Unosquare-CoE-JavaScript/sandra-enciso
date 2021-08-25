/******** OBJECTS ***********/

///// ARRAYS

/*
Arrays are data structure, they are commonly used for ordered data like lists.
Arrays are list-like objects whose prototype has methods to perform traversal and mutation operations.
Arrays cannot use strings as element indexes, but must use integers.
Setting or accessing via non-integers using bracket notation (or dot notation) will not set or retrieve an element from the array list itself, 
but will set or access a variable associated with that array's object property collection.
*/

var person = []; //Declares an array
person.name = "Mrs. White"; //this would be a property of the array

var who = person.name; // "Mrs. White"
who; // 'Mrs. White'

typeof person === "array"; //false. because array is an object
