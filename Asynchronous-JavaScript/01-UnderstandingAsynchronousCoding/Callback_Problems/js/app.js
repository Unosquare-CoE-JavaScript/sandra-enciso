/*
Problems with Callbacks
- Callback Hell
A bunch of nested callbacks that becomes very difficult to work with callbacks
-Difficult to reason about
-Inversion of control
You use asynchronous code por example to acces to a db or API using callbacks and you don't have control of that one.
So turning control over you of your code over to something else that, is somethig that occurs in callbacks
*/
 
"use strict";
//For this sample code click on the title 'Problems with JavaScript Callbacks'
let item1 = document.getElementById("b1");

if (item1) { //We are never sure what can happen here
    item1.addEventListener("click", function(e) {
        let a = 0,
            b = 10;

        setTimeout(function() { /* Callback hell. We have nested callbacks */
            a++;
            setTimeout(function() {
                a++;
                console.log("1 Attempt: " + a);
            }, 0);
        }, 0); //SetTime to Zero meaning I want to take advantage of asynchronous coding but i don't want to delay it

        setTimeout(function() {
            console.log("2 Attempt: " + a);
        }, 0);
        a = b;
    });
}
