/*
The purpose of the event loop is to make sure that all the code is handled so javascript is a single threaded environment, so we can only
execute one piece of code at a time. But the event loop makes it possible to achieve a synchronicity because we're able to set code aside
such as a callback that was created by set time out
*/
/*
The call stack. Keeps track of the function executing at that time, and the functions that are going to be executed after that.
Each function is placed on top of the previous function. The first function added, is going to be executed last (First in, last out).
The web API.  provides various methods 
*/

/*
What would it take to make it asynchronous using setTimeout? Try a few things and see how they work.
*/
let students = [{name:"Mary",score:90,school:"East"},
{name:"James",score:100,school:"East"},
{name:"Steve",score:40,school:"East"},
{name:"Gabe",score:90,school:"West"},
{name:"Rachel",score:85,school:"East"},
{name:"Rochelle",score:95,school:"West"},
{name:"Lynette",score:75,school:"East"}];

let processStudents = function(data, callback) {
    for (let i = 0; i < data.length; i++) {
        if (data[i].school.toLowerCase() === "east") {
            if (typeof callback === "function") {
                callback(data[i]);
                //setTimeout(callback(data[i]),0); //This is not correctly because here we are invoking a function
                //setTimeout(callback, 0, data[i]);  //This is te rigth way - args -> callback, miliseconds, arguments to the callback function
            }
        }
    }
}

console.log("Before determineTotal");

let determineTotal = function() {
    let total = 0,
        count = 0;

    processStudents(students, function(obj) {
        total = total + obj.score;
        count++;
    });

    console.log("Total Score: " + total + " - Total Count: " + count);
}

setTimeout(determineTotal,0);

console.log("End of code.")
