/*
The Promise.all() method takes an iterable of promises as an input, and returns a single Promise that resolves to an array of the results of the input promises. 
This returned promise will resolve when all of the input's promises have resolved, or if the input iterable contains no promises. 
It rejects immediately upon any of the input promises rejecting or non-promises throwing an error, and will reject with this first rejection message / error.
*/
"use strict";

let firstName = function() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve("Steven");
        }, 1000);
    });
};

let lastName = function() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve("Hancock");
        }, 3000);
    });
};

let middleName = function() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve("W.");
        }, 4000);
    });
};

(async function() { //IIFE function
    let names = await Promise.all([firstName(), lastName(), middleName()]); //wait for the response of all the promises
    console.log(names[0] + " " + names[2] + " " + names[1]); //log the response of the promises
})();

/*Promise.all([firstName(), lastName(), middleName()])
    .then(function(msg) {
        console.log(msg[0] + " " + msg[2] + " " + msg[1]);
    })
    .catch(function(msg) {
        console.log(msg);
    });*/

console.log("Remaining Code");