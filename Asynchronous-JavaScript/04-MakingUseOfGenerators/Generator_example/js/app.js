/*
The yield keyword is used to pause and resume a generator function (function* or legacy generator function).
you can not use arrow functions as generator function
*/
/*
This example find fibonacci numbers and uses yield to go throught the numbers
*/
"use strict";

const fibonacci = function *(len, nums = [0,1]) { // * is to specify we will use yield
    let num1 = nums[0],
        num2 = nums[1],
        next,
        cnt = 2;

    while (cnt < len) {
        next = num1 + num2;
        num1 = num2;
        num2 = next;
        nums.push(next);
        cnt++;
        yield nums;
    }

    return nums;
};

var fib = fibonacci(1000); //1000 numbers to find