/*
JavaScript is synchronous. This means that it will execute your code block by order after hoisting.
Before the code executes, var and function declarations are “hoisted” to the top of their scope.
Synchronous code is what is written by default
Is one piece of code executes and finish before the next piece of code can start
*/

/* This example executes first  "Now I get attention." and then test()
test function has a timer, so wait 10 miliseconds to run
*/

"use strict";

const test = function() {
    setTimeout(function() {
        console.log("Start of code");

        alert("Notice Me!");

        console.log("End of code");
    }, 10);
};

const test2 = function() {
    console.log("Now I get attention.");
};

test();
test2();

/*
Synchronous Code
-Advantage: Easy to write and to reason about.
-Disadvantage: May create blocking code.
    Less performant

Asynchronus code
-Advantage: Very performant
    Eliminates code blocking
-Disadvantage: It can be difficult to reason about.
    Harder to write
*/