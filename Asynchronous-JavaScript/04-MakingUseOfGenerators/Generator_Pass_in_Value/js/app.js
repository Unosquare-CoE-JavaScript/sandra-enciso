"use strict";
/* this function uses yield to pass a value entered into the console */
function *yieldConsole() {
    let val = yield 'Enter a Value:';
    console.log(val); //Pass the value on
};

let it = yieldConsole();
let prompt = it.next().value; //pass the value in
console.log(prompt);