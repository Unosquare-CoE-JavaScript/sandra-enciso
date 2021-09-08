/*
.then() method takes up to two arguments; the first argument is a callback function for the resolved case of the promise, 
and the second argument is a callback function for the rejected case. Each .then() returns a newly generated promise object, which can optionally be used for chaining;
*/
/*
.catch()
Appends a rejection handler callback to the promise, and returns a new promise resolving to the return value of the callback if it is called, 
or to its original fulfillment value if the promise is instead fulfilled.
*/
/*
.finally()
Appends a handler to the promise, and returns a new promise that is resolved when the original promise is resolved. 
The handler is called when the promise is settled, whether fulfilled or rejected.
*/

"use strict";

asyncFunction2()
.then(msg => console.log(msg))
.catch(err => console.log(err))
.finally(() => console.log("Cleaning up tasks."));
/*
Where to use finally?
If a Promise is resolved or rejected, eg to close a db conection
*/