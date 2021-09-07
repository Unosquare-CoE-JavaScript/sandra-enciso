/*
Callbacks is the only way to achieve asynchronous coding in JavaScript, today we have additional patterns
in promises and async await, but they all relives in callbacks
*/
//Example 1
/*let logCall = function() {
    console.log("locCall was called back.");
};*/
//Example 2
setTimeout(function() {
    console.log("The function was called back.");
}, 3000);

//Example 3
//This example is asynchronous because executes other processes while is waiting for the click event
let btn = document.querySelector("#item1");

btn.addEventListener("click", function(e) {
    console.log("The button was clicked.");
});

//Example 4
//This example isn't asynchronous
/*
This code not use the event loop by placing a message in the message queue with the associated callback.
SetTimeout use the event loop
*/
let students = [{name:"Mary",score:90,school:"East"},
{name:"James",score:100,school:"East"},
{name:"Steve",score:40,school:"East"},
{name:"Gabe",score:90,school:"West"},
{name:"Rachel",score:85,school:"East"},
{name:"Rochelle",score:95,school:"West"},
{name:"Lynette",score:75,school:"East"}];

let processStudents = function(data, callback) { //We put a callback here but it did not make it asynchronous, must use setTimeout or a listener to be asynchronous.
    for (let i = 0; i < data.length; i++) {
        if (data[i].school.toLowerCase() === "east") {
            if (typeof callback === "function") {
                callback(data[i]);
            }
        }
    }
}
// go through the students array and evaluates if the student score is greater than 60
processStudents(students, function(obj) {
    if (obj.score > 60) {
        console.log(obj.name + " passed!");
    }
});

console.log("End of processStudents");

let determineTotal = function() {
    let total = 0,
        count = 0;

    processStudents(students, function(obj) {
        total = total + obj.score;
        count++;
    });

    console.log("Total Score: " + total + " - Total Count: " + count);  //Logs the total score of the school
}

determineTotal();

