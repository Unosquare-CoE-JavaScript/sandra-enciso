/*
It is possible to write async functions that are not performing at all.
Remember, the await keyword causes the engine to wait.
Waiting is not performance. So make sure your waiting is not blocking code that could be running asynchronously.
A good rule is to keep your async functions small do smaller tasks
*/
"use strict";

async function num1() {
    setTimeout(() => console.log(1), 0);
    return 1
};

async function num2() {
    console.log(2);
    return 2;
};

async function main() {
    console.log("Start Main");
    num1();
    num2();
    console.log("End Main");
    return "main";
};

main()
.then(val => console.log(val));

console.log("Last Line");
