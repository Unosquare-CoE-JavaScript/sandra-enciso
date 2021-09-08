/*
Promise.all
The Promise.all() method takes an iterable of promises as an input, and returns a single Promise that resolves to an array of the results of the input promises. 
This returned promise will resolve when all of the input's promises have resolved, or if the input iterable contains no promises. 
It rejects immediately upon any of the input promises rejecting or non-promises throwing an error, and will reject with this first rejection message / error.
*/
/*
When to use promise all? When you are waiting for retrieving data from several promises, use Promise.all([array of promises]).
To know if all the promises we need are resolved or rejected
*/

"use strict";


let p1 = new Promise(function(resolve, reject) { //takes 4s to resolve the promise
    setTimeout(function() {
        resolve("Done");
    }, 4000);
});

/*p1.then(function(val) {
    console.log(val);
}, function(val) {
    console.log("rejected: " + val);
});*/



console.log("see this is asynch code");