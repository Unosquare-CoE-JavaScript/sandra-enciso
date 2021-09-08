/*
In order for JavaScript to achieve asynchronous coding it makes use of callbacks the enviroment performs
an operation like set time out providing a callback function and then moves on to do something else
*/
//Example 1
/*let logCall = function() {
    console.log("locCall was called back.");
};*/
//Example 2
/*setTimeout(function() {
    console.log("The function was called back.");
}, 3000);*/
//Example 3
/*
Example that log a message when click a button
This example uses an event listener which is asynchronous because wait for an event to run the callback
*/
let btn = document.querySelector("#item1");

btn.addEventListener("click", function(e) {
    console.log("The button was clicked.");
});
