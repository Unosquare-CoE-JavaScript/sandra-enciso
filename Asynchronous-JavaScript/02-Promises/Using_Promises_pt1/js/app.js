/*
Promises are the solutions of the problems with callbacks. They provide an asynchronous patter that has become very popular since htere were first made
a part of JavaScript
Many APIs make use of promises.
What is a JavaScript Promise?
An object with Properties and Methods
Represents the Eventual Completion (or Failure) of an Asynchronous Operation
Provides a resulting value when the completion occurs

In promises we can use the method then
*/
"use strict";

/*let wordnikWords = "http://api.wordnik.com/v4/words.json/",
    wordnikWord = "http://api.wordnik.com/v4/word.json/",
    apiKey = "?api_key=2efe06dd56a60633b30010e4d970da03b55279db9896d7127",
    wordObj;*/


/*
Chained Promises
The methods promise.then(), promise.catch(), and promise.finally() are used to associate further action with a promise that becomes settled.
The .then() method takes up to two arguments; the first argument is a callback function for the resolved case of the promise, 
and the second argument is a callback function for the rejected case.
*/

asyncFunction()
.then(function(val) {
    console.log("Yeah!! " + val);
    return asyncFunction2();
})
.then(function(val) {
    console.log("Second promise: " + val);
});

