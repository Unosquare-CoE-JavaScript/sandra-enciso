/*
In order for JavaScript to achieve asynchronous coding it makes use of callbacks the enviroment performs
an operation like set time out providing a callback function and then moves on to do something else
*/
//Example 4
/* This example shows how to create your own callback, but isn't asynchronous*/

let students = [{name:"Mary",score:90,school:"East"},
{name:"James",score:100,school:"East"},
{name:"Steve",score:40,school:"East"},
{name:"Gabe",score:90,school:"West"},
{name:"Rachel",score:85,school:"East"},
{name:"Rochelle",score:95,school:"West"},
{name:"Lynette",score:75,school:"East"}];

/*Cycles through the array and checks it to see if the school is east*/
let processStudents = function(data, callback) {
    for (let i = 0; i < data.length; i++) {
        if (data[i].school.toLowerCase() === "east") {
            if (typeof callback === "function") {
                callback(data[i]); //invoke the callback
            }
        }
    }
}

/* Arguments: the array of students, callback function*/
processStudents(students, function(obj) { 
    if (obj.score > 60) { //If the score of the school is greather than 60, then print a message
        console.log(obj.name + " passed!");
    }
});

///Determine the total of the scores of students
let determineTotal = function() {
    let total = 0,
        count = 0;

    processStudents(students, function(obj) {
        total = total + obj.score; //Here uses closure
        count++;
    });

    console.log("Total Score: " + total + " - Total Count: " + count);
}

determineTotal();

