/*
We can use async-await instead of promises. The main purpose of async await is to simplify our promise code.
The code will look like regular synchronous code but it will include the asynchronous functionality and
making the code look synchronous it is much easier to reason about basically async await extends promises and make them more powerful

Await Keyword
-It can only be used inside an async function.
-It waits for a promise.
-It causes the async function to pause.
*/
"use strict";

const asyncFun = async function() {
    let p1 = await asyncFunction();
    console.log(p1);
    console.log(`${p1}-more info`);
};

asyncFun();
