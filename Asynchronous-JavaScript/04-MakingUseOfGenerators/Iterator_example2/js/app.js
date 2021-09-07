/*
The well-known Symbol.iterator symbol specifies the default iterator for an object. Used by for...of.
Whenever an object needs to be iterated (such as at the beginning of a for..of loop), 
its @@iterator method is called with no arguments, and the returned iterator is used to obtain the values to be iterated.
*/
"use strict";

let arr = ['a', 'b', 'c', 'd'];

let it = arr[Symbol.iterator](); // new iterator of arr array

let domDiv = document.querySelectorAll('div');

let str = "string";

let obj = {
    1: 'one',
    2: 'two',
    3: 'three'
};

/*Using [Symbol.iterator] we can iterate an object */
obj[Symbol.iterator] = function*() { //makes obj iterable
    for (let i = 1; i < 4; i++) {
        yield this[i];
    }
};

for (let v of obj) {
    console.log(v);
}

let it2 = obj[Symbol.iterator]();
