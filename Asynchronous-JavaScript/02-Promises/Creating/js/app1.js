/*
This example converts callbacks to promisses using setTimeout
*/

"use strict";


let asyncFunction = function() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve("asyncFunction has resolved.");
        }, 4000);
    });
};

let asyncFunction2 = function() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve("asyncFunction2 is done.");
        }, 3000);
    });
};

//Converting callbacks to promisses
let setTimeoutP = function(time) {
    return new Promise(function(res, rej) { //res -> the callback to resolve. rej -> the callback if rejected
        if (isNaN(time)) {
            rej("A number is required.");
        }
        setTimeout(res, time);
    });
};

setTimeoutP(2000) // 2s to resolve
    .then(function() {
        console.log("Done");
    })
    .catch(function(err) {
        console.log(err);
    });




