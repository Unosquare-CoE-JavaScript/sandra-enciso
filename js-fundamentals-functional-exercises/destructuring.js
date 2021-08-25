/******** OBJECTS ***********/

/////Destructuring

/*
The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, 
or properties from objects, into distinct variables.
*/

var obj = {first: 'Dan', last: 'Coelho'};
var first = obj.first;
var last = obj.last;

//This is destructuration and works as the same as the code above
const {name, weapon, room} = {"name": "Rusty", "room": "kitchen", "weapon":  "candlestick"};

//Omit cerain values
var [, , b] = [1,2,3]
console.log(b);

//Combine with spread/rest operator (accumulates the rest of the values)
var [a, ...b] = [1, 2, 3];
console.log(b);

//Swap variables easily without temp
var a = 1, b = 2;
[b, a] = [a, b];
 
//Advance deep arrays
var [a, [b, [c,d]]] = [1, [2 [[[3,4], 5], 6]]];

// === Objects
var {user: x} = {user: 5};
console.log(x);
