"use strict";

/* this function takes (time)ms to resolve */
const asyncFunction = function(time) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve("!");
        }, time);
    });
};
