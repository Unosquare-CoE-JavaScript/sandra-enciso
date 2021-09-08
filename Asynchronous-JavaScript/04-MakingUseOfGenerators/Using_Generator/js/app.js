/*
The yield keyword is used to pause and resume a generator function (function* or legacy generator function).
you can not use arrow functions as generator function
*/

"use strict";

/*function *genTest() {
    let x = 0;
    console.log('start');
    yield ++x;
    console.log(x);
    x++;
    console.log(x);
    yield x++;
    console.log('end');
    return x;
};

let gen = genTest();*/

const test = function *() {
    yield 10;
    yield 20;
    yield 30;
};

let it = test();
console.log("After Code.");