/*
The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
*/
"use strict";
 //asyncFunction returns a Promise that takes 4s to resolve
let asyncFunction = function() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve("asyncFunction has resolved.");
        }, 4000);
    });
};

 //asyncFunction2 returns a Promise that takes 3s to resolve
let asyncFunction2 = function() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve("asyncFunction2 is done.");
        }, 3000);
    });
};

/// "asyncFunction2 is done."
/// "asyncFunction has resolved.""asyncFunction has resolved."
