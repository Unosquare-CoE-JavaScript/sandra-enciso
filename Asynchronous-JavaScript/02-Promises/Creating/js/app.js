/*
The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
*/
"use strict";

/*
Creating a new Promise
*/

let a = new Promise(function(resolve, reject) { //In the process to create a Promise, you need to pass a callback function and the arguments are the functions it will run if resolve or reject
    setTimeout(function() {
        resolve("Done");
    }, 4000)
});

a.then(function(val) { //this function here, is passed by resolve.
    console.log(val);
}, function(val) { //if rejected, execute this
    console.log("rejected: " + val);
});


console.log("see this is asynch code");
