/*
The Promise.race() method returns a promise that fulfills or rejects as soon as one of the promises in an iterable fulfills or rejects, with the value or reason from that promise.
*/
"use strict";

/*
This example uses Promise.race() to run an array of promises, and then log the first Promise that get resolved or rejected
*/
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
        }, 7000);
    });
};

Promise.race([firstName(), lastName(), middleName()]) //.race returns the response of the first promise that get resolved or rejected
    .then(function(msg) {
        console.log(msg);
        //console.log(msg[0] + " " + msg[2] + " " + msg[1]);
    })
    .catch(function(msg) {
        console.log(msg);
    });







