"use strict";
/*
An object which contains an async wait function in its properties
*/
var userObj = {
    firstName: 'Steven',
    lastName: 'Hancock',
    async printFullName() {
        let punct = await asyncFunction(1000);
        console.log(`${this.firstName} ${this.lastName}${punct}`);
    }
};

userObj.printFullName();  //acces to the async await function

//---------------------------------

/* This class uses an async await method to log a greeting but run another async await function which returns data to log */
class Greetings {
    constructor(greet) {
        this.greet = greet;
    }
    async greeting(name) {
        let punct = await asyncFunction(2000); // Nested async function 
        console.log(`${this.greet} ${name}${punct}`);
    }
};

var mornGreet = new Greetings("Good Morning");

mornGreet.greeting('Steven');
